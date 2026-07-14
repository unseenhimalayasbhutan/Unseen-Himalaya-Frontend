import type { NextRequest } from "next/server";
import { refreshKnowledgeIndex, searchKnowledge, summarizeIndex } from "../../../lib/chatbot/vectorStore";
import { cleanText } from "../../../lib/chatbot/text";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const auth = authorize(request);
  if (!auth.ok) return auth.response;

  const query = cleanText(request.nextUrl.searchParams.get("q") || "");
  const status = summarizeIndex();

  return Response.json({
    status,
    preview: query
      ? searchKnowledge(query, { limit: 5 }).map((result) => ({
          title: result.chunk.title,
          score: Number(result.score.toFixed(3)),
          url: result.chunk.sourceUrl,
          contentType: result.chunk.contentType,
          excerpt: result.chunk.content.slice(0, 280),
        }))
      : [],
  });
}

export async function POST(request: NextRequest) {
  const auth = authorize(request);
  if (!auth.ok) return auth.response;

  const index = refreshKnowledgeIndex();
  return Response.json({
    message:
      "Chatbot knowledge index rebuilt in memory. Run npm run chatbot:index during deployment to persist a JSON snapshot.",
    status: summarizeIndex(index),
  });
}

function authorize(request: NextRequest):
  | { ok: true }
  | { ok: false; response: Response } {
  const configuredSecret = process.env.CHATBOT_ADMIN_SECRET;
  if (!configuredSecret) {
    return {
      ok: false,
      response: Response.json(
        { error: "CHATBOT_ADMIN_SECRET is required before using maintenance endpoints." },
        { status: 503 }
      ),
    };
  }

  const suppliedSecret = request.headers.get("x-chatbot-admin-secret");

  if (suppliedSecret !== configuredSecret) {
    return {
      ok: false,
      response: Response.json({ error: "Unauthorized." }, { status: 401 }),
    };
  }

  return { ok: true };
}
