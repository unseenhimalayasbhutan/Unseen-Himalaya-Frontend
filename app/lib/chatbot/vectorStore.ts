import { buildKnowledgeRecords } from "./knowledge";
import {
  chunkText,
  cleanText,
  cosineSimilarity,
  keywordOverlapScore,
  stableHash,
  tokenize,
  vectorizeText,
} from "./text";
import type { KnowledgeChunk, KnowledgeRecord, RetrievalResult } from "./types";

export type KnowledgeIndex = {
  records: KnowledgeRecord[];
  chunks: KnowledgeChunk[];
  lastIndexedAt: string;
  failures: string[];
};

let cachedIndex: KnowledgeIndex | null = null;

export function getKnowledgeIndex() {
  if (!cachedIndex) {
    cachedIndex = buildKnowledgeIndex();
  }

  return cachedIndex;
}

export function refreshKnowledgeIndex() {
  cachedIndex = buildKnowledgeIndex();
  return cachedIndex;
}

export function buildKnowledgeIndex(records = buildKnowledgeRecords()): KnowledgeIndex {
  const failures: string[] = [];
  const seenHashes = new Set<string>();
  const chunks: KnowledgeChunk[] = [];

  records.forEach((record) => {
    try {
      const metadata = toChunkMetadata(record);

      chunkText(record.id, record.title, record.content).forEach((chunk) => {
        const contentHash = stableHash(`${record.title}\n${chunk.content}`);
        if (seenHashes.has(contentHash)) return;
        seenHashes.add(contentHash);

        chunks.push({
          id: chunk.id,
          recordId: record.id,
          title: record.title,
          content: chunk.content,
          summary: record.summary,
          sourceUrl: record.sourceUrl,
          contentType: record.contentType,
          metadata,
          contentHash,
          embedding: vectorizeText(`${record.title} ${record.summary} ${chunk.content}`),
        });
      });
    } catch (error) {
      failures.push(
        `${record.id}: ${error instanceof Error ? error.message : "Unknown indexing error"}`
      );
    }
  });

  return {
    records,
    chunks,
    lastIndexedAt: new Date().toISOString(),
    failures,
  };
}

function toChunkMetadata(record: KnowledgeRecord): KnowledgeChunk["metadata"] {
  return {
    id: record.id,
    title: record.title,
    sourceUrl: record.sourceUrl,
    contentType: record.contentType,
    tourCode: record.tourCode,
    startingRate: record.startingRate,
    tourCategory: record.tourCategory,
    durationDays: record.durationDays,
    durationNights: record.durationNights,
    destinations: record.destinations,
    entryPoint: record.entryPoint,
    exitPoint: record.exitPoint,
    hotelCategory: record.hotelCategory,
    interests: record.interests,
    travelSeason: record.travelSeason,
    festivalName: record.festivalName,
    validFrom: record.validFrom,
    validUntil: record.validUntil,
    lastUpdated: record.lastUpdated,
    requiresVerification: record.requiresVerification,
  };
}

export function searchKnowledge(
  query: string,
  options: {
    limit?: number;
    contentTypes?: string[];
    interests?: string[];
    entryPoint?: string;
    durationDays?: number;
  } = {}
): RetrievalResult[] {
  const normalizedQuery = cleanText(query);
  const queryVector = vectorizeText(normalizedQuery);
  const queryTokens = new Set(tokenize(normalizedQuery));
  const index = getKnowledgeIndex();
  const limit = options.limit || 6;

  return index.chunks
    .filter((chunk) => {
      if (options.contentTypes && !options.contentTypes.includes(chunk.contentType)) {
        return false;
      }

      if (
        options.entryPoint &&
        chunk.metadata.entryPoint &&
        !chunk.metadata.entryPoint.toLowerCase().includes(options.entryPoint.toLowerCase())
      ) {
        return false;
      }

      if (
        options.durationDays &&
        chunk.metadata.durationDays &&
        chunk.metadata.durationDays !== options.durationDays
      ) {
        return false;
      }

      if (options.interests?.length) {
        const chunkInterests = new Set(
          (chunk.metadata.interests || []).map((interest) => interest.toLowerCase())
        );
        if (!options.interests.some((interest) => chunkInterests.has(interest.toLowerCase()))) {
          return false;
        }
      }

      return true;
    })
    .map((chunk) => {
      const vectorScore = cosineSimilarity(queryVector, chunk.embedding);
      const keywordScore = keywordOverlapScore(normalizedQuery, chunk.content);
      const titleBoost = [...queryTokens].some((token) =>
        chunk.title.toLowerCase().includes(token)
      )
        ? 0.08
        : 0;

      return {
        chunk,
        vectorScore,
        keywordScore,
        score: vectorScore * 0.7 + keywordScore * 0.3 + titleBoost,
      };
    })
    .filter((result) => result.score > 0.02)
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);
}

export function summarizeIndex(index = getKnowledgeIndex()) {
  const contentTypes = index.chunks.reduce<Record<string, number>>((summary, chunk) => {
    summary[chunk.contentType] = (summary[chunk.contentType] || 0) + 1;
    return summary;
  }, {});

  return {
    lastIndexedAt: index.lastIndexedAt,
    records: index.records.length,
    chunks: index.chunks.length,
    contentTypes,
    failures: index.failures,
  };
}
