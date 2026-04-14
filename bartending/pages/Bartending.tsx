import BartendingNavbar from "../components/bartending/BartendingNavbar";
import BartendingHero from "../components/bartending/BartendingHero";
import BartendingStats from "../components/bartending/BartendingStats";
import WhyBartending from "../components/bartending/WhyBartending";
import BartendingCourses from "../components/bartending/BartendingCourses";
import CareerProspects from "../components/bartending/CareerProspects";
import BartendingPlacements from "../components/bartending/BartendingPlacements";
import BartendingGallery from "../components/bartending/BartendingGallery";
import BartendingVideos from "../components/bartending/BartendingVideos";
import BartendingContact from "../components/bartending/BartendingContact";
import BartendingFooter from "../components/bartending/BartendingFooter";
import FloatingCTA from "@/components/landing/FloatingCTA";

const Bartending = () => {
  return (
    <div className="min-h-screen">
      <BartendingNavbar />
      <BartendingHero />
      <BartendingStats />
      <WhyBartending />
      <BartendingCourses />
      <CareerProspects />
      <BartendingPlacements />
      <BartendingGallery />
      <BartendingVideos />
      <BartendingContact />
      <BartendingFooter />
      <FloatingCTA />
    </div>
  );
};

export default Bartending;
