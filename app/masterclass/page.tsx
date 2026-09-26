import type { Metadata } from "next";
import { FinalCTA } from "@/components/FinalCTA";
import { Masterclass } from "@/components/Masterclass";

export const metadata: Metadata = {
  title: "Masterclass",
  description:
    "Learn about IAA Kochi’s free aesthetics masterclass and get notified about the next session.",
  alternates: { canonical: "/masterclass" },
};

export default function MasterclassPage() {
  return (
    <>
      <Masterclass />
      <FinalCTA />
    </>
  );
}
