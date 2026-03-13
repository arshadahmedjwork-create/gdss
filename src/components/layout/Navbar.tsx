import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
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
                <Link
                  to={link.path}
                  className={`font-body text-sm tracking-wide transition-colors hover:text-primary ${
                    location.pathname.startsWith("/services") ? "text-primary" : "text-foreground/70"
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
                className={`font-body text-sm tracking-wide transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+919999999999" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
          </a>
          <Link
            to="/inquiry"
            className="bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
          >
            Confidential Inquiry
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground"
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
            className="border-t border-border bg-background lg:hidden overflow-hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm text-foreground/70 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 pl-4 text-sm text-muted-foreground hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                to="/inquiry"
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
              >
                Confidential Inquiry
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
