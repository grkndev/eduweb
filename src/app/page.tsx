import FAQ from "@/components/FAQ";
import ForMore from "@/components/ForMore";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center sm:max-w-[60%] max-w-[92%]">
      <Hero />
      <Slider />
      <Portfolio />
      <FAQ />
      <ForMore />
      
    </main>
  );
}
