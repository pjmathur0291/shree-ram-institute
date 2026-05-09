import CareerPath from "../components/CareerPath";
import FAQ from "../components/FAQ";
import HeartOfDehradun from "../components/HeartOfDehradun";
import HeroBanner from "../components/HeroBanner";
import OurStudent from "../components/OurStudent";
import Placement from "../components/Placement";
import RequestForm from "../components/RequestForm";
import WhyDHM from "../components/WhyDHM";
import EarnWhileYouLearn from "../components/EarnWhileYouLearn";
import OurProgram from "../components/OurProgram";
const DHM = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <EarnWhileYouLearn />
      <WhyDHM />
      <OurProgram />
      <RequestForm />
      <Placement />
      <HeartOfDehradun />
      <CareerPath />
      <OurStudent />
      <FAQ />
      <section>
        <div className="flex items-center justify-center bg-[#000000] py-4 ">
          <div className="justify-center text-white text-sm md:text-base font-medium outfit-font ">
            Design and Developed By Mediagarh
          </div>
        </div>
      </section>
    </div>
  );
};

export default DHM;
