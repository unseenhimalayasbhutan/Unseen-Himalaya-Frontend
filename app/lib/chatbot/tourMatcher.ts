import { searchKnowledge } from "./vectorStore";
import { cleanText, formatRate, keywordOverlapScore } from "./text";
import type { TourRecommendation, TravelerProfile } from "./types";

export function recommendTours(profile: TravelerProfile, question: string): TourRecommendation[] {
  const queryParts = [
    question,
    profile.durationDays ? `${profile.durationDays} days` : "",
    profile.entryPoint || "",
    ...profile.interests,
    ...profile.destinations,
    profile.hotelCategory || "",
    profile.groupType || "",
  ].filter(Boolean);

  const results = searchKnowledge(queryParts.join(" "), {
    limit: 12,
    durationDays: profile.durationDays,
    entryPoint: profile.entryPoint,
  }).filter((result) =>
    ["regular-tour", "land-entry-tour", "festival-tour", "cycling-tour"].includes(
      result.chunk.contentType
    )
  );

  return results
    .map((result) => {
      const metadata = result.chunk.metadata;
      const interests = metadata.interests || [];
      const interestScore = profile.interests.length
        ? profile.interests.filter((interest) =>
            interests.map((item) => item.toLowerCase()).includes(interest.toLowerCase())
          ).length / profile.interests.length
        : 0;
      const routeScore = profile.destinations.length
        ? keywordOverlapScore(profile.destinations.join(" "), (metadata.destinations || []).join(" "))
        : 0;
      const score =
        result.score +
        interestScore * 0.4 +
        routeScore * 0.25 +
        (profile.durationDays && metadata.durationDays === profile.durationDays ? 0.35 : 0) +
        (profile.entryPoint &&
        metadata.entryPoint?.toLowerCase().includes(profile.entryPoint.toLowerCase())
          ? 0.25
          : 0);

      return {
        score,
        recommendation: {
          title: result.chunk.title,
          duration: `${metadata.durationDays || "Custom"} Days${
            metadata.durationNights ? ` / ${metadata.durationNights} Nights` : ""
          }`,
          tourCode: metadata.tourCode,
          mainDestinations: metadata.destinations || [],
          keyExperiences: (metadata.interests || []).slice(0, 5),
          whyItMatches: buildMatchReason(profile, metadata),
          sourceUrl: result.chunk.sourceUrl,
          startingRate: metadata.startingRate,
          requiresVerification: metadata.requiresVerification,
        } satisfies TourRecommendation,
      };
    })
    .sort((left, right) => right.score - left.score)
    .filter(
      (item, index, all) =>
        all.findIndex((candidate) => candidate.recommendation.title === item.recommendation.title) ===
        index
    )
    .slice(0, 3)
    .map((item) => item.recommendation);
}

export function formatRecommendations(recommendations: TourRecommendation[]) {
  if (recommendations.length === 0) return "";

  return recommendations
    .map((tour, index) => {
      const code = tour.tourCode ? `${tour.tourCode} - ` : "";
      const rate = formatRate(tour.startingRate);
      return `${index + 1}. ${code}${cleanText(tour.title)} (${tour.duration}) - ${tour.whyItMatches}. ${rate}.`;
    })
    .join("\n");
}

function buildMatchReason(
  profile: TravelerProfile,
  metadata: {
    durationDays?: number | null;
    entryPoint?: string;
    interests?: string[];
    contentType?: string;
  }
) {
  const reasons: string[] = [];

  if (profile.durationDays && metadata.durationDays === profile.durationDays) {
    reasons.push(`${profile.durationDays}-day match`);
  }

  if (profile.entryPoint && metadata.entryPoint?.toLowerCase().includes(profile.entryPoint.toLowerCase())) {
    reasons.push(`${profile.entryPoint} entry`);
  }

  const matchingInterests = profile.interests.filter((interest) =>
    (metadata.interests || []).map((item) => item.toLowerCase()).includes(interest.toLowerCase())
  );

  if (matchingInterests.length > 0) {
    reasons.push(`${matchingInterests.join(", ")} focus`);
  }

  if (metadata.contentType === "festival-tour") {
    reasons.push("festival date to reconfirm");
  }

  return reasons.length > 0 ? reasons.join("; ") : "closest website match";
}
