import { Hero } from "@/components/sections/home/Hero";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { Differentials } from "@/components/sections/home/Differentials";
import { HowItWorks } from "@/components/sections/home/HowItWorks";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { Faq } from "@/components/sections/home/Faq";
import { MidCta } from "@/components/sections/home/MidCta";
import { BottomCta } from "@/components/layout/BottomCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Differentials />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <MidCta />
      <BottomCta />
    </>
  );
}
