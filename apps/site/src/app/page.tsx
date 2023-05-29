import Image from 'next/image'
import Intro from "@/component/intro";
import ComingSoon from "@/component/ComingSoon";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-full w-full">
      <Intro />
      <ComingSoon />
      <Footer />
    </main>
  )
}
