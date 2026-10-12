import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "Our Team",
};

export default function TeamPage() {
  return (
    <>
      <PageHero title="Our Team" />
      <Team />
    </>
  );
}