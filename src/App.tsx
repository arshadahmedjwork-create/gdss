import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ConfidentialInquiry from "./pages/ConfidentialInquiry";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";
import HowItWorks from "./pages/HowItWorks";
import Industries from "./pages/Industries";
import Gallery from "./pages/Gallery";
import Consultation from "./pages/Consultation";
import Admin from "./pages/Admin/Admin";
import NotFound from "./pages/NotFound";

import CorporateBGV from "./pages/services/CorporateBGV";
import InsuranceFraud from "./pages/services/InsuranceFraud";
import DueDiligence from "./pages/services/DueDiligence";
import MatrimonialVerification from "./pages/services/MatrimonialVerification";
import NRIVerification from "./pages/services/NRIVerification";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import ConfidentialityPolicy from "./pages/legal/ConfidentialityPolicy";
import EthicalInvestigationPractices from "./pages/legal/EthicalInvestigationPractices";
import DataProtectionPolicy from "./pages/legal/DataProtectionPolicy";
import Disclaimer from "./pages/legal/Disclaimer";
import KnowledgeCenter from "./pages/KnowledgeCenter";
import StickyWhatsApp from "./components/layout/StickyWhatsApp";
import MobileStickyCTA from "./components/layout/MobileStickyCTA";
import ExitIntentPopup from "./components/forms/ExitIntentPopup";
import LocalServiceTemplate from "./pages/services/LocalServiceTemplate";

import BackgroundVerificationChennai from "./pages/services/BackgroundVerificationChennai";
import PreMatrimonialIndia from "./pages/services/PreMatrimonialIndia";
import InsuranceClaimInvestigation from "./pages/services/InsuranceClaimInvestigation";
import EmployeeVerificationAgency from "./pages/services/EmployeeVerificationAgency";
import DetectiveAgencyNRIs from "./pages/services/DetectiveAgencyNRIs";
import TenantVerificationServices from "./pages/services/TenantVerificationServices";
import CorporateDueDiligenceIndia from "./pages/services/CorporateDueDiligenceIndia";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <LanguageProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <StickyWhatsApp />
          <MobileStickyCTA />
          <ExitIntentPopup />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/corporate-bgv" element={<CorporateBGV />} />
            <Route path="/services/insurance" element={<InsuranceFraud />} />
            <Route path="/services/insurance-fraud" element={<InsuranceFraud />} />
            <Route path="/services/due-diligence" element={<DueDiligence />} />
            <Route path="/services/matrimonial" element={<MatrimonialVerification />} />
            <Route path="/services/nri" element={<NRIVerification />} />
            <Route path="/services/nri-verification" element={<NRIVerification />} />
            <Route path="/services/:city/:service" element={<LocalServiceTemplate />} />
            
            <Route path="/services/background-verification-chennai" element={<BackgroundVerificationChennai />} />
            <Route path="/services/pre-matrimonial-investigation-india" element={<PreMatrimonialIndia />} />
            <Route path="/services/insurance-claim-investigation" element={<InsuranceClaimInvestigation />} />
            <Route path="/services/employee-verification-agency" element={<EmployeeVerificationAgency />} />
            <Route path="/services/detective-agency-nris" element={<DetectiveAgencyNRIs />} />
            <Route path="/services/tenant-verification-services" element={<TenantVerificationServices />} />
            <Route path="/services/corporate-due-diligence-india" element={<CorporateDueDiligenceIndia />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            <Route path="/legal/privacy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inquiry" element={<ConfidentialInquiry />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/knowledge-center" element={<KnowledgeCenter />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms-of-service" element={<TermsOfService />} />
            <Route path="/legal/confidentiality-policy" element={<ConfidentialityPolicy />} />
            <Route path="/legal/ethical-investigation-practices" element={<EthicalInvestigationPractices />} />
            <Route path="/legal/data-protection-policy" element={<DataProtectionPolicy />} />
            <Route path="/legal/disclaimer" element={<Disclaimer />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </LanguageProvider>
);

export default App;
