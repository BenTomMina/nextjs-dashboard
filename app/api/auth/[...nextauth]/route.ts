import NextAuth from "next-auth";
import { authConfig } from "../../../../auth.config"; // adjust path if needed

const authHandler = NextAuth(authConfig) as unknown as (
  request: Request
) => Response | Promise<Response>;

export const GET = authHandler;
export const POST = authHandler;
