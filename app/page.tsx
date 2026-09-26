import { AboutSection } from "@/components/AboutSection";
import { AffiliationSection } from "@/components/AffiliationSection";
import { CampusGallery } from "@/components/CampusGallery";
import { CareerPathway } from "@/components/CareerPathway";
import { ContactExperience } from "@/components/ContactExperience";
import { CourseFeature } from "@/components/CourseFeature";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { LearningStory } from "@/components/LearningStory";
import { Masterclass } from "@/components/Masterclass";
import { SpecialistGallery } from "@/components/SpecialistGallery";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { WhyIAA } from "@/components/WhyIAA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="section-perf">
        <AboutSection />
      </div>
      <div className="section-perf">
        <AffiliationSection />
      </div>
      <div className="section-perf">
        <CourseFeature />
      </div>
      <div className="section-perf">
        <SpecialistGallery />
      </div>
      <div className="section-perf">
        <WhyIAA />
      </div>
      <div className="section-perf">
        <CareerPathway />
      </div>
      <div className="section-perf">
        <LearningStory />
      </div>
      <div className="section-perf">
        <Masterclass />
      </div>
      <div className="section-perf">
        <CampusGallery />
      </div>
      <div className="section-perf">
        <TestimonialSlider />
      </div>
      <div className="section-perf">
        <FAQ />
      </div>
      <div className="section-perf">
        <ContactExperience />
      </div>
      <div className="section-perf">
        <FinalCTA />
      </div>
    </>
  );
}
