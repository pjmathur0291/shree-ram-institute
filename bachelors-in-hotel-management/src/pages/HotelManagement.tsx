import BHMNavbar from "../components/bhm/BHMNavbar";
import BHMHero from "../components/bhm/BHMHero";
import BHMStats from "../components/bhm/BHMStats";
import WhyBHM from "../components/bhm/WhyBHM";
import BHMCurriculum from "../components/bhm/BHMCurriculum";
import BHMCareers from "../components/bhm/BHMCareers";
import BHMPlacements from "../components/bhm/BHMPlacements";
import BHMGallery from "../components/bhm/BHMGallery";
import BHMVideos from "../components/bhm/BHMVideos";
import BHMContact from "../components/bhm/BHMContact";
import BHMFooter from "../components/bhm/BHMFooter";
import FloatingCTA from "@/components/landing/FloatingCTA";

const HotelManagement = () => {
  return (
    <div className="min-h-screen">
      <BHMNavbar />
      <BHMHero />
      <BHMStats />
      <WhyBHM />
      <BHMCurriculum />
      <BHMCareers />
      <BHMPlacements />
      <BHMGallery />
      <BHMVideos />
      <BHMContact />
      <BHMFooter />
      <FloatingCTA />
    </div>
  );
};

export default HotelManagement;
