import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Garden Setup",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Garden Setup" />
      <Services />
    </>
  );
}