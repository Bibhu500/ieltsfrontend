
import Navbar from './Navbar';

import HeroSection from './HeroSection';
import HowItWorksSection from './HowItWorksSection';
import LearningPlanSection from './LearningPlanSection';

import TrustSection from './TrustSection';
import TestimonialsCarousel from './testimonialsData';
import FAQSection from './FAQSection';
import FreeTrialSection from './FreeTrialSection';
import HelpCenter from './HelpCenter';
import PerformanceTrack from './PerformanceTrack';
import WritingSection from './WritingSection';
import SpeakingSection from './SpeakingSection';



const Landingpage = () => {
  return (
   
      <div>
      <Navbar />
      <HeroSection/>
      <HowItWorksSection/>
      <PerformanceTrack/>
      <LearningPlanSection/>
      <SpeakingSection/>
      <WritingSection/>
     
      <TrustSection/>
      <TestimonialsCarousel/>
      <FAQSection/>
      <FreeTrialSection/>
      
      <HelpCenter/>
      

      </div>
    
  );
};

export default Landingpage;

