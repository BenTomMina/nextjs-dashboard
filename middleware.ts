// import NextAuth from "next-auth";
// import { authConfig } from "./auth.config";

// export default NextAuth(authConfig).auth;

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
//   runtime: "nodejs",
// };


// temporary for debug only
import { NextResponse } from 'next/server';
export default function middleware() {
  return NextResponse.next();
}
export const config = { matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"] };