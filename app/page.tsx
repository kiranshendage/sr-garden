import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Gallery/>
      <Contact/>
    </>
  );
}
