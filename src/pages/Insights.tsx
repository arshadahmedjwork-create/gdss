import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const articles = [
  {
    category: "HR & Compliance",
    title: "How HR Teams Should Conduct Background Verification",
    excerpt: "A comprehensive guide to implementing a robust background verification process for new hires. Learn best practices, legal requirements, and common pitfalls that HR departments should avoid.",
    date: "Feb 2026",
    readTime: "8 min read",
  },
  {
    category: "Insurance",
    title: "Signs of Insurance Fraud Every Claims Team Should Know",
    excerpt: "Insurance fraud costs the industry thousands of crores annually. Learn the red flags that indicate potential fraud and how professional investigation can protect your organization.",
    date: "Jan 2026",
    readTime: "6 min read",
  },
  {
    category: "Corporate Risk",
    title: "Corporate Risk Investigation Strategies for 2026",
    excerpt: "Modern approaches to managing corporate risk through intelligence-driven investigation. From vendor due diligence to employee misconduct detection.",
    date: "Dec 2025",
    readTime: "10 min read",
  },
  {
    category: "Personal",
    title: "Prematrimonial Investigation: A Complete Guide",
    excerpt: "Why prematrimonial verification is essential in today's world and how professional investigators ensure accuracy while maintaining complete confidentiality.",
    date: "Nov 2025",
    readTime: "7 min read",
  },
  {
    category: "Corporate",
    title: "Vendor Due Diligence: Protecting Your Supply Chain",
    excerpt: "How thorough vendor verification can prevent fraud, ensure compliance, and protect your organization from reputational damage.",
    date: "Oct 2025",
    readTime: "5 min read",
  },
  {
    category: "Insurance",
    title: "Digital Forensics in Insurance Claim Investigation",
    excerpt: "The role of digital intelligence and forensic analysis in modern insurance fraud investigation and how it improves claim accuracy.",
    date: "Sep 2025",
    readTime: "9 min read",
  },
];

const InsightsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Knowledge</span>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">Investigation Insights</h1>
            <p className="mt-4 text-muted-foreground">Educational articles and guides on corporate investigation, background verification, and fraud detection.</p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group cursor-pointer rounded-md border border-border/50 bg-card/40 p-7 transition-all hover:border-primary/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-primary">{article.category}</span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold leading-snug group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  <div className="flex items-center gap-1 text-xs font-medium text-primary">
                    Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsightsPage;
