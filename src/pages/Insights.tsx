import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const articles = [
  { category: "HR & Compliance", title: "How HR Teams Should Conduct Background Verification", excerpt: "A comprehensive guide to implementing a robust background verification process for new hires.", date: "Feb 2026", readTime: "8 min" },
  { category: "Insurance", title: "Signs of Insurance Fraud Every Claims Team Should Know", excerpt: "Insurance fraud costs the industry thousands of crores annually. Learn the red flags.", date: "Jan 2026", readTime: "6 min" },
  { category: "Corporate Risk", title: "Corporate Risk Investigation Strategies for 2026", excerpt: "Modern approaches to managing corporate risk through intelligence-driven investigation.", date: "Dec 2025", readTime: "10 min" },
  { category: "Personal", title: "Prematrimonial Investigation: A Complete Guide", excerpt: "Why prematrimonial verification is essential and how professionals ensure accuracy.", date: "Nov 2025", readTime: "7 min" },
  { category: "Corporate", title: "Vendor Due Diligence: Protecting Your Supply Chain", excerpt: "How thorough vendor verification can prevent fraud and ensure compliance.", date: "Oct 2025", readTime: "5 min" },
  { category: "Insurance", title: "Digital Forensics in Insurance Claim Investigation", excerpt: "The role of digital intelligence in modern insurance fraud investigation.", date: "Sep 2025", readTime: "9 min" },
];

const InsightsPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll(".service-card-trigger");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Knowledge</span>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">Investigation Insights</h1>
            <p className="mt-4 text-muted-foreground">Educational articles and guides on corporate investigation, background verification, and fraud detection.</p>
          </motion.div>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <div
                key={article.title}
                className="service-card-trigger"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <article className="group flex h-full flex-col bg-background p-10 transition-all service-card cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-primary">{article.category}</span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold leading-snug text-foreground transition-transform duration-300 group-hover:scale-105 origin-left">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    <div className="flex items-center gap-1 text-xs font-medium text-primary">
                      Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsightsPage;
