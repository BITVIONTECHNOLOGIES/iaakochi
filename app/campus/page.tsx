import type { Metadata } from "next";
import { CampusGallery } from "@/components/CampusGallery";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Campus",
  description:
    "Visit the IAA Kochi campus in Perumbavoor, Ernakulam — training rooms, guided practice and clinical environment.",
  alternates: { canonical: "/campus" },
};

export default function CampusPage() {
  return (
    <>
      <PageHero
        index="05"
        label="Campus"
        title="Learn. Practice. Build your future."
        description="Practical training is conducted offline at the IAA campus — a professional environment for supervised skill development."
      />
      <CampusGallery showIntro={false} />
      <FinalCTA />
    </>
  );
}
