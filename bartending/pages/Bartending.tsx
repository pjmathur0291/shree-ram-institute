import BartendingNavbar from "../components/bartending/BartendingNavbar";
import BartendingHero from "../components/bartending/BartendingHero";
import BartendingStats from "../components/bartending/BartendingStats";
import WhyBartending from "../components/bartending/WhyBartending";
import BartendingCourses from "../components/bartending/BartendingCourses";
import CareerProspects from "../components/bartending/CareerProspects";
import BartendingPlacements from "../components/bartending/BartendingPlacements";
import BartendingLeadForm from "../components/bartending/BartendingLeadForm";
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
      <section aria-label="Bartending enquiry form" className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl glass-card p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2 text-center">Request a FREE Callback</h3>
            <p className="text-muted-foreground text-sm mb-6 text-center">Our counselor will contact you within 30 minutes</p>
            <BartendingLeadForm formLocation="after-courses" />
          </div>
        </div>
      </section>
      <CareerProspects />
      <BartendingPlacements />
      <section aria-label="Bartending enquiry form" className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl glass-card p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2 text-center">Request a FREE Callback</h3>
            <p className="text-muted-foreground text-sm mb-6 text-center">Our counselor will contact you within 30 minutes</p>
            <BartendingLeadForm formLocation="after-placements" />
          </div>
        </div>
      </section>
      <BartendingGallery />
      <BartendingVideos />
      <BartendingContact />
      <BartendingFooter />
      <FloatingCTA />
    </div>
  );
};

export default Bartending;
