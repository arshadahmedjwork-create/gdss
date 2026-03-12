import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import BackgroundCheckDemo from "@/components/home/BackgroundCheckDemo";
import CorporateClientSection from "@/components/home/CorporateClientSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import InsightsSection from "@/components/home/InsightsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <BackgroundCheckDemo />
        <CorporateClientSection />
        <HowItWorksSection />
        <CaseStudiesSection />
        <InsightsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
