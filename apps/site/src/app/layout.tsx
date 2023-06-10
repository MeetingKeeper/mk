// Perfect Scrollbar
import 'react-perfect-scrollbar/dist/css/styles.css';
import "./globals.css";
import "tippy.js/dist/tippy.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "@/providers";
import appConfig from "../../app.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: appConfig.name,
  description: appConfig.description
};

function RootLayout({
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

export default RootLayout;
