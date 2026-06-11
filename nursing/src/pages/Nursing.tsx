import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Hero from '../components/Hero'
import WhyChoose from '../components/WhyChoose'
import LearnBeyond from '../components/LearnBeyond'
import ProgramOverview from '../components/ProgramOverview'
import FAQ from '../components/FAQ'
import CareerPaths from '../components/CareerPaths'
import AdmissionJourney from '../components/AdmissionJourney'
const Nursing = () => {
  return ( 
    <div> 
      <Header/> 
      <Hero/>
      <WhyChoose/>
      <LearnBeyond/>
      <ProgramOverview/>
      <CareerPaths/>
      <AdmissionJourney/>
      <FAQ/>
      <Footer/>
      <ScrollToTop />
    </div>
  );
};

export default Nursing;
