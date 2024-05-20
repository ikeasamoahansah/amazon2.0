import NextAuth from "next-auth";
import { handleAuth } from "@auth0/nextjs-auth0";
import GoogleProvider from "next-auth/providers/google";

export default handleAuth(NextAuth, {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
