import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Map as SitemapIcon, Shield, MapPin, Scale, HelpCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Sitemap = () => {
  const mainLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services Index", path: "/services" },
    { label: "Industries Served", path: "/industries" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Knowledge Center", path: "/knowledge-center" },
    { label: "Investigation Insights", path: "/insights" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact Us", path: "/contact" },
    { label: "Free Consultation", path: "/consultation" },
    { label: "Confidential Inquiry Form", path: "/inquiry" },
  ];

  const standardServices = [
    { label: "Corporate Investigations", path: "/services/corporate-bgv" },
    { label: "Insurance Fraud Investigations", path: "/services/insurance-fraud" },
    { label: "Corporate Due Diligence", path: "/services/due-diligence" },
    { label: "Matrimonial Verification", path: "/services/matrimonial" },
    { label: "NRI Verification Support", path: "/services/nri-verification" },
  ];

  const specializedServices = [
    { label: "Background Verification Services in Chennai", path: "/services/background-verification-chennai" },
    { label: "Pre Matrimonial Investigation in India", path: "/services/pre-matrimonial-investigation-india" },
    { label: "Insurance Claim Investigation Services", path: "/services/insurance-claim-investigation" },
    { label: "Employee Verification Agency", path: "/services/employee-verification-agency" },
    { label: "Detective Agency for NRIs", path: "/services/detective-agency-nris" },
    { label: "Tenant Verification Services", path: "/services/tenant-verification-services" },
    { label: "Corporate Due Diligence India", path: "/services/corporate-due-diligence-india" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", path: "/legal/privacy-policy" },
    { label: "Terms of Service", path: "/legal/terms-of-service" },
    { label: "Confidentiality Policy", path: "/legal/confidentiality-policy" },
    { label: "Ethical Investigation Practices", path: "/legal/ethical-investigation-practices" },
    { label: "Data Protection Policy", path: "/legal/data-protection-policy" },
    { label: "Disclaimer", path: "/legal/disclaimer" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary mb-4">
              <SitemapIcon className="h-4 w-4" /> Navigation Directory
            </span>
            <h1 className="font-heading text-4xl font-bold sm:text-5xl text-foreground mb-4">
              GDSS Sitemap
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive index of our investigation pages, local service hubs, legal compliance parameters, and informational articles.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Column 1: Main Pages & Legal */}
            <div className="space-y-8">
              {/* Main Links */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="border border-border bg-card p-6 rounded-lg shadow-sm"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-border pb-2 text-foreground">
                  <Shield className="h-5 w-5 text-primary" /> Core Pages
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {mainLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Legal and Compliance */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="border border-border bg-card p-6 rounded-lg shadow-sm"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-border pb-2 text-foreground">
                  <Scale className="h-5 w-5 text-primary" /> Legal & Compliance
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {legalLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Column 2: Services Index */}
            <div className="space-y-8">
              {/* Core Services */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="border border-border bg-card p-6 rounded-lg shadow-sm"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-border pb-2 text-foreground">
                  <Shield className="h-5 w-5 text-primary" /> Core Services
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {standardServices.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 font-semibold"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Specialized Pages */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="border border-border bg-card p-6 rounded-lg shadow-sm"
              >
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-border pb-2 text-foreground">
                  <MapPin className="h-5 w-5 text-primary" /> Specialized Service & City Pages
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {specializedServices.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
