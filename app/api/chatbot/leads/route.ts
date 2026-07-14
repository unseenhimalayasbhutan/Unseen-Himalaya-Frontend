import { siteConfig } from "../../../siteConfig";
import { buildHandoffSummary, buildWhatsAppLeadHref, validatePublicLead } from "../../../lib/chatbot/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const leadBuckets = new Map<string, { count: number; resetAt: number }>();

export async function POST(request: Request) {
  const clientId =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "local";
  const limit = checkLeadRateLimit(clientId);

  if (!limit.allowed) {
    return Response.json({ error: "Too many lead submissions. Please try again later." }, { status: 429 });
  }

  try {
    const body = (await request.json()) as { lead?: unknown; consent?: unknown };
    if (body.consent !== true) {
      return Response.json(
        {
          error:
            "Please confirm that these details may be sent to Unseen Himalayas Bhutan to prepare a customised itinerary or quotation.",
        },
        { status: 400 }
      );
    }

    const validated = validatePublicLead(body.lead);
    if (!validated.ok) {
      return Response.json({ error: validated.error }, { status: 400 });
    }

    const summary = buildHandoffSummary(validated.lead, "website chatbot inquiry");

    return Response.json({
      ok: true,
      message:
        "Your inquiry summary is ready. Please send it through WhatsApp or email so the travel team can confirm details and prepare a quotation.",
      lead: validated.lead,
      delivery: {
        mode: "manual_handoff",
        whatsappHref: buildWhatsAppLeadHref(summary),
        emailHref: siteConfig.contact.emailHref,
        summary,
      },
    });
  } catch {
    return Response.json({ error: "Could not process this inquiry." }, { status: 500 });
  }
}

function checkLeadRateLimit(clientId: string) {
  const now = Date.now();
  const bucket = leadBuckets.get(clientId);

  if (!bucket || bucket.resetAt < now) {
    leadBuckets.set(clientId, { count: 1, resetAt: now + 10 * 60_000 });
    return { allowed: true };
  }

  bucket.count += 1;
  return { allowed: bucket.count <= 5 };
}
