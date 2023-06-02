"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/contexts/theme";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider><ThemeProvider>{children}</ThemeProvider></SessionProvider>;
};
