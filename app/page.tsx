import EmailList from "@/components/LandingPage/EmailList";
import Hero from "@/components/LandingPage/Hero";
import ProductShowCase from "@/components/LandingPage/ProductShowCase";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <div
        className={`bg-[url('/heroWave.svg')] aspect-[350/200] md:aspect-[1920/300] w-full bg-no-repeat bg-center bg-cover`}
      />
      <ProductShowCase/>
      <EmailList/>
    </main>
  );
}
