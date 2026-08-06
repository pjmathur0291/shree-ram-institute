import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import LearnBeyond from '../components/LearnBeyond';
import ProgramOverview from '../components/ProgramOverview';
import FAQ from '../components/FAQ';
import CareerPaths from '../components/CareerPaths';
import AdmissionJourney from '../components/AdmissionJourney';

const Nursing = () => {
  useEffect(() => {
    // Set meta title
    document.title = 'Best BSc Nursing College in Dehradun | Shri Ram Institute';

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Looking for a BSc Nursing college in Dehradun? Join Shri Ram Institute for expert faculty, clinical training, INC-approved education, and admissions open.',
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        'Looking for a BSc Nursing college in Dehradun? Join Shri Ram Institute for expert faculty, clinical training, INC-approved education, and admissions open.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <WhyChoose />
      <LearnBeyond />
      <ProgramOverview />
      <CareerPaths />
      <AdmissionJourney />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Nursing;
