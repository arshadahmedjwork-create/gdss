import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gdssLogo from "@/assets/gdss-logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Corporate Investigations", path: "/services/corporate" },
      { label: "Background Verification", path: "/services/background-verification" },
      { label: "Insurance Investigation", path: "/services/insurance" },
      { label: "Private Investigation", path: "/services/private" },
    ],
  },
  { label: "Industries", path: "/industries" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Insights", path: "/insights" },
  { label: "Consultation", path: "/consultation" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress calculation
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Scrolled state for navbar background change
      setScrolled(scrollTop > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      {/* 1. Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* 2. Sticky Navbar with Blur Background */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: scrolled ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.08)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={gdssLogo} alt="GDSS Investigations" className="h-10" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="group relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  {/* 3. Nav Link with hover underline animation */}
                  <Link
                    to={link.path}
                    className={`nav-link-hover font-body text-sm tracking-wide transition-colors hover:text-[#cc0000] ${
                      location.pathname.startsWith("/services") ? "text-[#cc0000]" : "text-[#1a1a1a]"
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
                        className="absolute left-0 top-full mt-2 w-64 border border-border bg-background p-2 shadow-lg"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2.5 text-sm text-foreground/70 transition-colors hover:bg-subtle hover:text-primary"
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
                  className={`nav-link-hover font-body text-sm tracking-wide transition-colors hover:text-[#cc0000] ${
                    location.pathname === link.path ? "text-[#cc0000]" : "text-[#1a1a1a]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:+919999999999" className="flex items-center gap-2 text-sm text-[#1a1a1a] hover:text-[#cc0000] transition-colors">
              <Phone className="h-4 w-4" />
            </a>
            <Link
              to="/inquiry"
              className={`navbar-cta-btn px-5 py-2.5 text-sm font-medium ${location.pathname === "/inquiry" ? "active" : ""}`}
            >
              Confidential Inquiry
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
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
              className="border-t border-white/10 bg-black/95 lg:hidden overflow-hidden"
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
                  Confidential Inquiry
                </Link>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
