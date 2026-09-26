export const site = {
  name: "Institute of Advanced Aesthetics",
  shortName: "IAA Kochi",
  tagline: "Bound to Educate",
  url: "https://iaakochi.com",
  title: "IAA Kochi | Professional Aesthetics Education",
  description:
    "IAA Kochi provides professional aesthetics education for nursing and allied-health graduates through structured theory, practical training, mentorship and career guidance.",
  phoneDisplay: "+91 95674 29928",
  phoneHref: "tel:+919567429928",
  email: "iaakochi2024@gmail.com",
  instagram: "https://www.instagram.com/iaa_kochi/",
  instagramHandle: "@iaa_kochi",
  whatsappNumber: "919567429928",
  addressLines: [
    "IAA, St. George Centenary Arcade,",
    "Arackappady, Vengola P.O,",
    "Perumbavoor, Ernakulam,",
    "Kerala — 683556",
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/why-iaa", label: "Why IAA" },
  { href: "/masterclass", label: "Masterclass" },
  { href: "/campus", label: "Campus" },
  { href: "/contact", label: "Contact" },
];

export const whatsappMessages = {
  general:
    "Hello IAA Kochi, I am interested in your aesthetics courses. Please share the course details.",
  "clinical-cosmetology":
    "Hello IAA Kochi, I am interested in the Clinical Cosmetology Assistant program. Please share the course details.",
  spmu: "Hello IAA Kochi, I am interested in the SPMU program. Please share the course details.",
  microblading:
    "Hello IAA Kochi, I am interested in the Eyebrow Microblading course. Please share the course details.",
  "lip-micropigmentation":
    "Hello IAA Kochi, I am interested in the Lip Micropigmentation course. Please share the course details.",
  "lash-lift":
    "Hello IAA Kochi, I am interested in the Lash Lift course. Please share the course details.",
  masterclass:
    "Hello IAA Kochi, I would like to be notified when the next free masterclass is announced.",
  counselling:
    "Hello IAA Kochi, I would like to book a free counselling session about your aesthetics courses.",
} as const;

export type WhatsAppKey = keyof typeof whatsappMessages;

export const aboutCopy =
  "IAA is built to produce confident, clinic-ready aesthetics professionals — not simply certificate holders. Our programs combine structured theoretical learning, practical exposure, professional mentorship and career guidance to help students transition from clinical education into the rapidly evolving aesthetics industry.";

export const aboutFeatures = [
  "Experienced Faculty",
  "Practical Training",
  "Career Mentorship",
  "Clinical Setup Guidance",
  "Placement Assistance",
  "Professional Certification",
];

export const whyIaa = [
  {
    title: "COCTRASI Affiliation",
    copy: "Recognised affiliation that adds credibility to your certification and is acknowledged by clinics and employers.",
  },
  {
    title: "Renowned Faculty",
    copy: "Learn from experienced practitioners actively working in the aesthetics field — not just classroom instructors.",
  },
  {
    title: "Career Mentorship",
    copy: "Guidance that continues beyond classroom training — helping you navigate the industry and grow your career.",
  },
  {
    title: "Clinical Setup Support",
    copy: "Understand the fundamentals of building and operating a professional practice from day one.",
  },
  {
    title: "Armamentarium Support",
    copy: "Guidance on tools, devices and professional products so you start your career fully equipped.",
  },
  {
    title: "Placement Assistance",
    copy: "Support connecting students with clinics, spas and salons actively seeking trained aesthetics professionals.",
  },
];

export const pathway = [
  {
    from: "GNM Nursing",
    to: "Aesthetics Professional",
    copy: "Students, graduates and working nurses seeking aesthetics-focused career opportunities.",
  },
  {
    from: "ANM",
    to: "Clinic-Based Career",
    copy: "Students and professionals interested in clinic-based aesthetics and wellness.",
  },
  {
    from: "MLT / DMLT",
    to: "Aesthetic Procedures",
    copy: "Healthcare professionals interested in patient-facing aesthetic procedures.",
  },
  {
    from: "BSc Allied Health",
    to: "Aesthetic Industry",
    copy: "Imaging, OT, Dialysis, Optometry, Emergency Care and other allied-health backgrounds.",
  },
];

export const learningStages = [
  {
    num: "01",
    kicker: "Learn",
    title: "Structured online theory",
    copy: "7 weeks of structured online theory covering anatomy, procedures, safety and clinical knowledge.",
  },
  {
    num: "02",
    kicker: "Practice",
    title: "Hands-on practical training",
    copy: "1 week of intensive offline practical training in a real clinical environment with expert supervision.",
  },
  {
    num: "03",
    kicker: "Master",
    title: "Develop professional confidence",
    copy: "Refine your technique, build professional confidence and receive personalised mentorship from faculty.",
  },
  {
    num: "04",
    kicker: "Launch",
    title: "Career and placement guidance",
    copy: "Career guidance, placement assistance and ongoing support as you step into the aesthetics industry.",
  },
];

export const masterclass = {
  dateNote:
    "Our free 3-hour live online masterclass was held on Friday, 10 July 2026 and covered clinical cosmetology, SPMU and specialist courses. The session helped nursing and allied-health graduates understand how to build a clinic-ready aesthetics career.",
  followUp:
    "Interested in our next session? WhatsApp IAA to be notified when the next free masterclass is announced. The joining link will be shared through WhatsApp after registration.",
};

export const campusGallery = [
  {
    src: "/images/clinic-premium.jpg",
    caption: "Training room",
    alt: "Bright modern clinical training room with premium treatment chair",
  },
  {
    src: "/images/guided-practice-hq.jpg",
    caption: "Guided practice",
    alt: "IAA mentor providing guided practice guidance from the campus clinic desk",
    objectPosition: "object-cover object-center",
    softOverlay: true,
  },
  {
    src: "/images/campus-aesthetic-setup.jpg",
    caption: "Clinical tools",
    alt: "Advanced aesthetic treatment device used in clinical training",
  },
  {
    src: "/images/campus-instruments-tray2.jpg",
    caption: "Clinical environment",
    alt: "Modern clinical treatment room prepared for practical training",
  },
];

export const campusWideShot = {
  src: "/images/campus-facial.jpg",
  caption: "Clinical environment",
  alt: "Premium aesthetic facial treatment in a supervised clinical setting",
};

export const images = {
  hero: "/images/hero.jpg",
  heroDetail: "/images/hero-detail.jpg",
  heroAlt:
    "Professional aesthetic facial treatment in a calm, high-end clinical setting",
  cosmetology: "/images/cosmetology.jpg",
  spmu: "/images/spmu.jpg",
  microblading: "/images/microblading.jpg",
  lip: "/images/lip.jpg",
  lash: "/images/lash.jpg",
  practice: "/images/practice.jpg",
  campusWide: "/images/campus-facial.jpg",
  clinicPremium: "/images/clinic-premium.jpg",
};
