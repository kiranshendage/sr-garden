import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <>
      <PageHero title="Blog" />
      <Blog />
    </>
  );
}