import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import StatsBar from "@/components/landing/StatsBar";
import WhyUsSection from "@/components/landing/WhyUsSection";
import CoursesSection from "@/components/landing/CoursesSection";
import PlacementsSection from "@/components/landing/PlacementsSection";
import InfrastructureSection from "@/components/landing/InfrastructureSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import FloatingCTA from "@/components/landing/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <CoursesSection />
      <PlacementsSection />
      <WhyUsSection />
      <InfrastructureSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
