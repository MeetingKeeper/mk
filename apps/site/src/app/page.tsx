import Image from 'next/image'
import Intro from "@/component/intro";
import ComingSoon from "@/component/ComingSoon";
import Footer from "@/component/Footer";
import Header from "@/component/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-full w-full">
      <Header />
      <Intro />
      <ComingSoon />
      <Footer />
    </main>
  )
}
