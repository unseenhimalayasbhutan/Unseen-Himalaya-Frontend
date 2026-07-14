import { siteConfig } from "../../siteConfig";
import { cleanText, summarizeConversation } from "./text";
import type { ChatMessage, LeadDraft, TourRecommendation, TravelerProfile } from "./types";

export function buildLeadDraft(
  messages: ChatMessage[],
  profile: TravelerProfile,
  recommendations: TourRecommendation[]
): LeadDraft {
  const text = cleanText(messages.map((message) => message.content).join(" "));

  return {
    name: extractName(text),
    email: text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0],
    phone: text.match(/(?:\+?\d[\d\s-]{7,}\d)/)?.[0]?.replace(/\s+/g, " "),
    country: profile.country,
    nationality: profile.nationality,
    adults: profile.adults || profile.travelers || null,
    children: profile.children || [],
    arrivalDate: undefined,
    departureDate: undefined,
    durationDays: profile.durationDays || null,
    entryPoint: profile.entryPoint,
    interests: profile.interests,
    hotelCategory: profile.hotelCategory,
    budget: profile.budget,
    specialRequests: profile.specialRequirements,
    conversationSummary: summarizeConversation(messages),
    recommendedTours: recommendations.map((tour) => tour.title),
    leadStatus: "draft",
    createdAt: new Date().toISOString(),
  };
}

export function hasContactDetail(lead: LeadDraft) {
  return Boolean(lead.email || lead.phone);
}

export function buildHandoffSummary(lead: LeadDraft, reason: string) {
  const lines = [
    `Reason: ${reason}`,
    lead.name ? `Name: ${lead.name}` : "",
    lead.email ? `Email: ${lead.email}` : "",
    lead.phone ? `Phone/WhatsApp: ${lead.phone}` : "",
    lead.durationDays ? `Duration: ${lead.durationDays} days` : "",
    lead.adults ? `Travellers: ${lead.adults}` : "",
    lead.entryPoint ? `Entry point: ${lead.entryPoint}` : "",
    lead.interests.length ? `Interests: ${lead.interests.join(", ")}` : "",
    lead.hotelCategory ? `Hotel category: ${lead.hotelCategory}` : "",
    lead.budget ? `Budget: ${lead.budget}` : "",
    lead.recommendedTours.length ? `Suggested tours: ${lead.recommendedTours.join(", ")}` : "",
  ].filter(Boolean);

  return lines.join("\n");
}

export function buildWhatsAppLeadHref(summary: string) {
  return `${siteConfig.contact.whatsappHref}?text=${encodeURIComponent(
    `Hello Unseen Himalayas Bhutan, I would like help with this Bhutan inquiry:\n\n${summary}`
  )}`;
}

export function validatePublicLead(value: unknown) {
  if (!value || typeof value !== "object") return { ok: false as const, error: "Invalid lead." };
  const lead = value as Partial<LeadDraft>;
  const email = lead.email ? cleanText(lead.email) : "";
  const phone = lead.phone ? cleanText(lead.phone) : "";

  if (!email && !phone) {
    return { ok: false as const, error: "Please include an email or WhatsApp number." };
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false as const, error: "Please enter a valid email address." };
  }

  return {
    ok: true as const,
    lead: {
      ...lead,
      name: lead.name ? cleanText(lead.name).slice(0, 120) : undefined,
      email,
      phone,
      children: lead.children || [],
      interests: lead.interests || [],
      recommendedTours: lead.recommendedTours || [],
      specialRequests: lead.specialRequests ? cleanText(lead.specialRequests).slice(0, 1000) : undefined,
      conversationSummary: lead.conversationSummary
        ? cleanText(lead.conversationSummary).slice(0, 1500)
        : "",
      leadStatus: "new" as const,
      createdAt: new Date().toISOString(),
    },
  };
}

function extractName(text: string) {
  const match = text.match(/(?:my name is|i am|i'm)\s+([a-z][a-z\s]{1,60})/i);
  return match ? cleanText(match[1]) : undefined;
}
