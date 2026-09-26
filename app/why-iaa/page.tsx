import type { Metadata } from "next";
import { FinalCTA } from "@/components/FinalCTA";
import { WhyIAA } from "@/components/WhyIAA";

export const metadata: Metadata = {
  title: "Why IAA",
  description:
    "Why professionals choose IAA Kochi — affiliation, faculty, mentorship, clinical support and placement assistance.",
  alternates: { canonical: "/why-iaa" },
};

export default function WhyIAAPage() {
  return (
    <>
      <WhyIAA mode="full" />
      <FinalCTA />
    </>
  );
}
