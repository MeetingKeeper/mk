import Intro from "@/components/intro";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { redirect } from 'next/navigation';
import { getServerSession } from '@pm/auth';

export default async function  Home() {
  const session = await getServerSession()

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
