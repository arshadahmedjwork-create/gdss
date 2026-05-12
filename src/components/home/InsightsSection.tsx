import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "HR & Compliance",
    title: "How HR Teams Should Conduct Background Verification",
    excerpt: "A comprehensive guide to implementing a robust background verification process for new hires.",
    date: "Feb 2026",
  },
  {
    category: "Insurance",
    title: "Signs of Insurance Fraud Every Claims Team Should Know",
    excerpt: "Learn the red flags that indicate potential insurance fraud and how investigation can help.",
    date: "Jan 2026",
  },
  {
    category: "Corporate Risk",
    title: "Corporate Risk Investigation Strategies for 2026",
    excerpt: "Modern approaches to managing corporate risk through intelligence-driven investigation.",
    date: "Dec 2025",
  },
  {
    category: "Personal",
    title: "Prematrimonial Investigation: A Complete Guide",
    excerpt: "Why prematrimonial verification is essential and how professional investigators ensure accuracy.",
    date: "Nov 2025",
  },
];

const InsightsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Knowledge</span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">Investigation Insights</h2>
          </div>
          <Link to="/insights" className="hidden text-sm font-medium text-primary hover:underline sm:block">
            View all insights →
          </Link>
        </motion.div>

        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group cursor-pointer bg-primary p-7 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-white/90">{article.category}</span>
                <span className="text-xs text-white/70">{article.date}</span>
              </div>
              <h3 className="mt-3 font-heading text-base font-semibold leading-snug text-white transition-transform duration-300 group-hover:scale-105 origin-left">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-black">{article.excerpt}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-white">
                Read more
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
