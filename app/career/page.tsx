import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Career from "@/components/Career";

export const metadata: Metadata = {
  title: "Careers",
};

export default function CareerPage() {
  return (
    <>
      <PageHero title="Careers" />
      <Career />
    </>
  );
}