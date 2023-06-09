import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@pm/database"

export const providers = [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  }),
]

export const adapter = PrismaAdapter(prisma);

export const authOptions = {
  providers,
  adapter,
  pages: {
    signIn: '/auth/login',
  }
}
