import NextAuth from "next-auth";
import { authConfig } from "../../../../auth.config"; // adjust path if needed

const authHandler = NextAuth(authConfig) as any;

export const GET = authHandler.GET;
export const POST = authHandler.POST;
