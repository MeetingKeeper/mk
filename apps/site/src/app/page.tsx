import Intro from "@/component/intro";
import ComingSoon from "@/component/ComingSoon";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]/route"
import { redirect } from 'next/navigation';

export default async function  Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    return redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-full w-full">
      <Header />
      <Intro />
      <ComingSoon />
      <Footer />
    </main>
  )
}
