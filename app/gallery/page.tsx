import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" />
      <Gallery />
    </>
  );
}