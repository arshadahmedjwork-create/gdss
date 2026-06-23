import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CorporateClientSection from "@/components/home/CorporateClientSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import IndustriesServed from "@/components/home/IndustriesServed";
import TamilNaduMap from "@/components/home/TamilNaduMap";
import AITechnologySection from "@/components/home/AITechnologySection";
import SampleReportsSection from "@/components/home/SampleReportsSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import CTASection from "@/components/home/CTASection";
import EmergencyHotlineSection from "@/components/home/EmergencyHotlineSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <EmergencyHotlineSection />
        <WhyChooseUs />
        <CorporateClientSection />
        <HowItWorksSection />
        <IndustriesServed />
        <TamilNaduMap />
        <AITechnologySection />
        <SampleReportsSection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
