// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';
import "./globals.css";
import { Inter } from "next/font/google";
import appConfig from "../../app.config";
import { NextAuthProvider } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: appConfig.name,
  description: appConfig.description
};

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" dir="ltr" suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-white dark:bg-black`}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
