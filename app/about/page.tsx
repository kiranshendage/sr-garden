import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Us" />
      <About />
      <WhyChooseUs />
    </>
  );
}