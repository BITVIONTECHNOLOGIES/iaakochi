import { images } from "./site";

export type CourseSlug =
  | "clinical-cosmetology"
  | "spmu"
  | "microblading"
  | "lip-micropigmentation"
  | "lash-lift";

export type Course = {
  slug: CourseSlug;
  category: string;
  title: string;
  subtitle?: string;
  description: string;
  duration: string;
  theory?: string;
  practical?: string;
  eligibility?: string;
  curriculum: string[];
  overview: string;
  structure: string;
  practicalNote: string;
  career: string;
  cta: string;
  whatsapp: CourseSlug;
  image: string;
  imageAlt: string;
};

export const flagshipCourses: Course[] = [
  {
    slug: "clinical-cosmetology",
    category: "Flagship Career Program",
    title: "Clinical Cosmetology Assistant",
    description:
      "A career-focused program for nursing and allied-health graduates entering professional aesthetics and clinical cosmetology.",
    duration: "2 Months",
    theory: "7 Weeks Online",
    practical: "1 Week Offline",
    eligibility: "+2 / Any Degree",
    curriculum: [
      "Skin & Facial Anatomy",
      "Clinical Skin Treatments",
      "Professional Skin Care",
      "Aesthetic Procedures",
      "Hygiene & Safety",
      "Client Consultation",
      "Clinic Operations",
      "Practical Training",
    ],
    overview:
      "Build a clinic-ready foundation in skin science, consultation and aesthetic procedures — designed for learners who want a professional pathway rather than a short beauty workshop.",
    structure:
      "Seven weeks of structured online theory followed by one week of intensive offline practical training at the IAA campus in Perumbavoor.",
    practicalNote:
      "Practical training is supervised in a clinical environment, with emphasis on hygiene, consultation flow and treatment confidence.",
    career:
      "Prepared for roles supporting clinical skin care, aesthetic procedures and day-to-day clinic operations.",
    cta: "Explore Course",
    whatsapp: "clinical-cosmetology",
    image: images.cosmetology,
    imageAlt: "Professional aesthetic facial treatment in a calm clinical setting",
  },
  {
    slug: "spmu",
    category: "Premium Specialist Program",
    title: "Mastery in Semi-Permanent Makeup",
    description:
      "Specialist training in semi-permanent makeup through structured theory, practical application and professional guidance.",
    duration: "2 Months",
    theory: "7 Weeks Online",
    practical: "1 Week Offline",
    eligibility: "+2 / Any Degree",
    curriculum: [
      "Brow Mapping",
      "Semi-Permanent Makeup",
      "Microblading",
      "Lip Micropigmentation",
      "Colour Theory",
      "Client Consultation",
      "Hygiene & Safety",
      "Practical Application",
    ],
    overview:
      "Develop mapping, pigment and application skills across core SPMU treatments, with clinical hygiene standards and faculty mentorship throughout.",
    structure:
      "Seven weeks of structured online theory followed by one week of intensive offline practical training.",
    practicalNote:
      "Practical application covers brow mapping, pigment work and supervised technique under faculty guidance.",
    career:
      "A specialist pathway for professionals building a semi-permanent makeup offering within clinic-based aesthetics.",
    cta: "Explore SPMU",
    whatsapp: "spmu",
    image: images.spmu,
    imageAlt: "Professional makeup artist preparing for a clinical beauty treatment",
  },
];

export const specialistCourses: Course[] = [
  {
    slug: "microblading",
    category: "3-Day Specialist Course",
    title: "Eyebrow Microblading",
    description:
      "Create natural, hair-like brow strokes that fill sparse brows with lasting definition for 1–3 years.",
    duration: "3 Days",
    curriculum: [
      "Brow mapping and design",
      "Hair-stroke technique",
      "Pigment selection",
      "Hygiene and aftercare",
    ],
    overview:
      "A focused specialist program covering brow design, hair-stroke technique, pigment choice and safe aftercare protocol.",
    structure:
      "A concentrated three-day specialist program focused on mapping, technique and safe practice.",
    practicalNote:
      "Hands-on application of hair-stroke technique with hygiene and aftercare protocol.",
    career:
      "A high-demand skill for clinic and specialist aesthetics practice — often taken alongside broader career programs.",
    cta: "Explore Microblading",
    whatsapp: "microblading",
    image: images.microblading,
    imageAlt: "Close professional view of brow artistry tools and makeup",
  },
  {
    slug: "lip-micropigmentation",
    category: "3-Day Specialist Course",
    title: "Lip Micropigmentation",
    subtitle: "Lip Blushing",
    description:
      "Enhance natural lip colour and shape with a subtle tinted flush and defined border.",
    duration: "3 Days",
    curriculum: [
      "Lip anatomy and mapping",
      "Colour theory for lips",
      "Blushing technique",
      "Aftercare protocol",
    ],
    overview:
      "Learn lip mapping, colour theory and blushing technique for soft, natural enhancement that suits clinic clientele.",
    structure: "A three-day specialist course covering mapping, colour and technique.",
    practicalNote: "Supervised practice of blushing technique with aftercare protocol.",
    career:
      "A specialist treatment skill for professionals expanding a semi-permanent makeup menu.",
    cta: "Explore Lip Micropigmentation",
    whatsapp: "lip-micropigmentation",
    image: images.lip,
    imageAlt: "Soft natural lip colour and shape in a clinical beauty context",
  },
  {
    slug: "lash-lift",
    category: "3-Day Specialist Course",
    title: "Lash Lift",
    description:
      "Curl natural lashes upward for a lifted, wide-eye look — longer-looking lashes without extensions.",
    duration: "3 Days",
    curriculum: [
      "Lash anatomy",
      "Lift and set technique",
      "Tinting essentials",
      "Client safety",
    ],
    overview:
      "Master lift, set and safety essentials so you can deliver a polished lash treatment with professional confidence.",
    structure: "A three-day specialist course in lift, set and client safety.",
    practicalNote: "Practical lift and set technique with emphasis on client safety.",
    career:
      "A high-demand clinic treatment that complements broader aesthetics training.",
    cta: "Explore Lash Lift",
    whatsapp: "lash-lift",
    image: images.lash,
    imageAlt: "Professional lash and beauty tools arranged in a clinical workspace",
  },
];

export const allCourses = [...flagshipCourses, ...specialistCourses];

export function getCourse(slug: string) {
  return allCourses.find((course) => course.slug === slug);
}
