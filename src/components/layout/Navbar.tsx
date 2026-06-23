import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Languages, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gdssLogo from "@/assets/gdss-logo.png";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.home, path: "/" },
    {
      label: t.services,
      path: "/services",
      children: [
        { label: "Corporate Investigations", path: "/services/corporate-bgv" },
        { label: "Insurance Fraud", path: "/services/insurance" },
        { label: "Due Diligence", path: "/services/due-diligence" },
        { label: "Matrimonial Verification", path: "/services/matrimonial" },
        { label: "NRI Verification", path: "/services/nri" },
      ],
    },
    { label: t.industries, path: "/industries" },
    { label: t.caseStudies, path: "/case-studies" },
    { label: t.howItWorks, path: "/how-it-works" },
    { label: t.knowledgeCenter, path: "/knowledge-center" },
    { label: t.gallery, path: "/gallery" },
    { label: t.about, path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(scrollTop > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: scrolled ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={gdssLogo} alt="GDSS Investigations" className="h-9" />
          </Link>

          {/* Desktop Nav - Compact */}
          <div className="hidden items-center gap-5 xl:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="group relative flex items-center"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`nav-link-hover font-body text-xs font-semibold tracking-wide transition-colors hover:text-primary leading-none ${
                      location.pathname.startsWith("/services") ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-60 border border-border bg-background p-2 shadow-lg"
                      >
                        <div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Core Services</div>
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-3 py-1.5 text-xs text-foreground/70 transition-colors hover:bg-subtle hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`nav-link-hover font-body text-xs font-semibold tracking-wide transition-colors hover:text-primary leading-none ${
                    location.pathname === link.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right side: Language + Phone + CTA */}
          <div className="hidden items-center gap-3 xl:flex">
            {/* Language Selector */}
            <label className="flex items-center gap-1.5 border border-border bg-background/50 px-2.5 py-1.5 text-xs font-bold text-foreground">
              <Languages className="h-3.5 w-3.5 text-primary" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-xs font-bold outline-none cursor-pointer"
                aria-label="Select language"
              >
                <option value="EN">English</option>
                <option value="HI">Hindi</option>
                <option value="TA">Tamil</option>
              </select>
            </label>

            {/* 24/7 Emergency Phone */}
            <div className="flex flex-col items-end border-r border-border pr-3">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{t.emergency247}</span>
              <a href="tel:+919999999999" className="flex items-center gap-1 text-xs font-bold text-destructive hover:text-destructive/80 transition-colors">
                <Phone className="h-3 w-3" />
                +91 99999 99999
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/inquiry"
              className={`bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap ${location.pathname === "/inquiry" ? "ring-2 ring-primary ring-offset-2" : ""}`}
            >
              {t.confidentialInquiry}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-black/95 xl:hidden overflow-hidden"
            >
              <div className="container mx-auto flex flex-col gap-1 px-6 py-4">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-sm text-white/70 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                    {link.children?.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 pl-4 text-sm text-white/50 hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link
                  to="/inquiry"
                  onClick={() => setMobileOpen(false)}
                  className={`navbar-cta-btn mt-4 px-5 py-2.5 text-center text-sm font-medium w-full ${location.pathname === "/inquiry" ? "active" : ""}`}
                >
                  {t.confidentialInquiry}
                </Link>
                <label className="mt-3 flex items-center gap-2 border border-white/10 px-3 py-2 text-xs font-bold text-white/70">
                  <Languages className="h-4 w-4 text-primary" />
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value as Language)}
                    className="w-full bg-transparent outline-none"
                    aria-label="Select language"
                  >
                    <option value="EN">English</option>
                    <option value="HI">Hindi</option>
                    <option value="TA">Tamil</option>
                  </select>
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
