import NextAuth from "next-auth";
import { authConfig } from "@/auth.config"; // adjust path if needed

const { handlers } = NextAuth(authConfig);

export const { GET, POST } = handlers;
