import type { Session } from "next-auth";
import { authOptions } from "./providers";
import { getServerSession as getSessionInner } from "next-auth/next";

export function getServerSession(): Promise<Session | null> {
  return getSessionInner(authOptions);
}
