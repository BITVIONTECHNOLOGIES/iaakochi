import type { Metadata } from "next";
import { ContactExperience } from "@/components/ContactExperience";
import { FinalCTA } from "@/components/FinalCTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin a conversation with IAA Kochi about professional aesthetics education.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="06"
        label="Contact"
        title="Begin a conversation"
        description="Share your background and the program you are considering. A member of the IAA team will respond with course guidance."
      />
      <ContactExperience />
      <FinalCTA />
    </>
  );
}
