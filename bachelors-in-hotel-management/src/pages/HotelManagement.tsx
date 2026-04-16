import BHMNavbar from "../components/bhm/BHMNavbar";
import BHMHero from "../components/bhm/BHMHero";
import BHMStats from "../components/bhm/BHMStats";
import WhyBHM from "../components/bhm/WhyBHM";
import BHMCurriculum from "../components/bhm/BHMCurriculum";
import BHMLeadForm from "../components/bhm/BHMLeadForm";
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
      <section aria-label="BHM enquiry form" className="section-padding bg-gradient-hero text-cream">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl rounded-2xl border border-cream/15 bg-cream/5 p-8">
            <h3 className="font-display text-2xl font-bold mb-2 text-center">Request a FREE Callback</h3>
            <p className="text-cream/70 text-sm mb-6 text-center">Our counselor will contact you within 30 minutes</p>
            <BHMLeadForm formLocation="after-curriculum" />
          </div>
        </div>
      </section>
      <BHMCareers />
      <BHMPlacements />
      <section aria-label="BHM enquiry form" className="section-padding bg-gradient-hero text-cream">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl rounded-2xl border border-cream/15 bg-cream/5 p-8">
            <h3 className="font-display text-2xl font-bold mb-2 text-center">Request a FREE Callback</h3>
            <p className="text-cream/70 text-sm mb-6 text-center">Our counselor will contact you within 30 minutes</p>
            <BHMLeadForm formLocation="after-placements" />
          </div>
        </div>
      </section>
      <BHMGallery />
      <BHMVideos />
      <BHMContact />
      <BHMFooter />
      <FloatingCTA />
    </div>
  );
};

export default HotelManagement;
