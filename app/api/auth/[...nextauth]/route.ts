// Re-use the initialized NextAuth handler so it has the configured providers (credentials)
// and reads the runtime secrets from the environment.
import { auth } from "../../../../auth";

// Next.js App Router requires exported functions with the shape
// (request: Request | NextRequest) => Response | Promise<Response>.
// The `auth` export from our initializer is callable but has a more specific
// internal type. Cast via `unknown` to the compatible function signature and
// forward the Request. Using `unknown` avoids using `any` and satisfies
// eslint/typecheck rules.
const handler = auth as unknown as (
  request: Request
) => Response | Promise<Response>;

export async function GET(request: Request): Promise<Response> {
  return handler(request);
}

export async function POST(request: Request): Promise<Response> {
  return handler(request);
}
