import { createFileRoute } from "@tanstack/react-router";
import { sendContactEmail, validateContactPayload, type ContactEnv } from "@/lib/contact-email";

type ServerContext = {
  cloudflare?: {
    env?: ContactEnv;
  };
};

function jsonResponse(body: unknown, init?: ResponseInit) {
  return Response.json(body, {
    ...init,
    headers: {
      "Cache-Control": "no-store",
      ...init?.headers,
    },
  });
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request, context }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return jsonResponse({ error: "JSON invalido." }, { status: 400 });
        }

        const validation = validateContactPayload(payload);
        if (!validation.ok) {
          return jsonResponse({ error: validation.error }, { status: validation.status });
        }

        const env = (context as unknown as ServerContext).cloudflare?.env ?? {};
        const result = await sendContactEmail(env, validation.data);
        if (!result.ok) {
          return jsonResponse({ error: result.error }, { status: result.status });
        }

        return jsonResponse({ ok: true });
      },
      ANY: () =>
        jsonResponse(
          { error: "Metodo nao permitido." },
          {
            status: 405,
            headers: {
              Allow: "POST",
            },
          },
        ),
    },
  },
});
