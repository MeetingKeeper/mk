import './globals.css'
import { Inter } from 'next/font/google'
import appConfig from "../../app.config";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: appConfig.name,
  description: appConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-white dark:bg-black`}>{children}</body>
    </html>
  )
}
