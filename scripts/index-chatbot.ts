import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { buildKnowledgeIndex, summarizeIndex } from "../app/lib/chatbot/vectorStore";

const index = buildKnowledgeIndex();
const outputDirectory = join(process.cwd(), "app", "generated");
const outputPath = join(outputDirectory, "chatbot-index.json");

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(
  outputPath,
  JSON.stringify(
    {
      ...summarizeIndex(index),
      chunks: index.chunks.map((chunk) => ({
        id: chunk.id,
        recordId: chunk.recordId,
        title: chunk.title,
        contentType: chunk.contentType,
        sourceUrl: chunk.sourceUrl,
        contentHash: chunk.contentHash,
        metadata: chunk.metadata,
      })),
    },
    null,
    2
  )
);

console.log(`Indexed ${index.records.length} records and ${index.chunks.length} chunks.`);
console.log(`Wrote ${outputPath}.`);
