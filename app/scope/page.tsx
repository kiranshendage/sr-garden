import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScopeOfWork from "@/components/ScopeOfWork";

export const metadata: Metadata = {
  title: "Scope of Work",
};

export default function ScopePage() {
  return (
    <>
      <PageHero title="Scope of Work" />
      <ScopeOfWork />
    </>
  );
}