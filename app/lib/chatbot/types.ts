export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export type ChatIntent =
  | "general_bhutan"
  | "tour_recommendation"
  | "itinerary_question"
  | "tour_price"
  | "visa"
  | "sdf"
  | "hotel"
  | "festival"
  | "best_time"
  | "entry_paro"
  | "entry_phuentsholing"
  | "group_travel"
  | "family_travel"
  | "luxury_travel"
  | "photography"
  | "birdwatching"
  | "cycling"
  | "motorcycle"
  | "cultural"
  | "nature"
  | "honeymoon"
  | "b2b"
  | "booking"
  | "existing_booking"
  | "urgent"
  | "human_agent"
  | "unrelated";

export type KnowledgeRecord = {
  id: string;
  title: string;
  content: string;
  summary: string;
  sourceUrl: string;
  contentType: string;
  tourCode?: string;
  startingRate?: number;
  tourCategory?: string;
  durationDays?: number | null;
  durationNights?: number | null;
  destinations?: string[];
  entryPoint?: string;
  exitPoint?: string;
  hotelCategory?: string;
  interests?: string[];
  travelSeason?: string[];
  festivalName?: string;
  validFrom?: string;
  validUntil?: string;
  lastUpdated: string;
  requiresVerification: boolean;
};

export type KnowledgeChunk = {
  id: string;
  recordId: string;
  title: string;
  content: string;
  summary: string;
  sourceUrl: string;
  contentType: string;
  metadata: Omit<KnowledgeRecord, "content" | "summary">;
  contentHash: string;
  embedding: number[];
};

export type RetrievalResult = {
  chunk: KnowledgeChunk;
  score: number;
  keywordScore: number;
  vectorScore: number;
};

export type TravelerProfile = {
  durationDays?: number;
  travelers?: number;
  adults?: number;
  children?: string[];
  country?: string;
  nationality?: string;
  travelDates?: string;
  interests: string[];
  pace?: string;
  hotelCategory?: string;
  budget?: string;
  entryPoint?: string;
  exitPoint?: string;
  destinations: string[];
  groupType?: string;
  specialRequirements?: string;
};

export type TourRecommendation = {
  title: string;
  duration: string;
  tourCode?: string;
  mainDestinations: string[];
  keyExperiences: string[];
  whyItMatches: string;
  sourceUrl: string;
  startingRate?: number;
  requiresVerification: boolean;
};

export type LeadDraft = {
  name?: string;
  email?: string;
  phone?: string;
  country?: string;
  nationality?: string;
  adults?: number | null;
  children: string[];
  arrivalDate?: string;
  departureDate?: string;
  durationDays?: number | null;
  entryPoint?: string;
  interests: string[];
  hotelCategory?: string;
  budget?: string;
  specialRequests?: string;
  conversationSummary: string;
  recommendedTours: string[];
  leadStatus: "draft" | "new";
  createdAt: string;
};

export type ChatbotResponse = {
  reply: string;
  fallback: boolean;
  intent: ChatIntent;
  sources: Array<{
    title: string;
    url: string;
    contentType: string;
  }>;
  suggestions: string[];
  handoff?: {
    required: boolean;
    reason: string;
    whatsappHref: string;
    emailHref: string;
    summary: string;
  };
  lead?: LeadDraft;
};
