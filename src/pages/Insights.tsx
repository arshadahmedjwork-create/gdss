import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, BookOpen, Tag, X } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface Article {
  category: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string[];
  keyPoints: string[];
}

const articles: Article[] = [
  {
    category: "Corporate Verification",
    tag: "Background Verification",
    title: "The Evolving Landscape of Employee Background Verification in India",
    excerpt: "An in-depth analysis of CV fraud trends, verification methodologies, and legal compliance structures for modern HR departments.",
    date: "June 2026",
    readTime: "9 min",
    content: [
      "In the fast-paced Indian corporate ecosystem, employee background verification (BGV) has transitioned from a routine HR check to a critical risk mitigation function. Recent industry reports indicate a staggering 35-40% inflation rate in candidate resumes, ranging from minor date discrepancies to completely fabricated academic degrees and employment histories. For organizations handling sensitive client data, financial transactions, or intellectual property, hiring an unverified candidate can lead to disastrous operational and reputational outcomes.",
      "A modern, robust BGV process must move beyond simple digital document scans, which are increasingly easy to forge using advanced editing tools. Instead, it relies on dual-pathway verification: validating digital credentials through official Government registries and conducting direct, physical inquiries. For academic verifications, this involves direct outreach to registrar offices at universities rather than trusting candidate-provided PDF copies. For professional histories, it involves contacting HR departments through verified company switchboards, bypassing candidate-provided referee mobile numbers which are often collusive contacts.",
      "Legal compliance under the Digital Personal Data Protection (DPDP) Act of India is another crucial factor. HR teams must obtain explicit, clear consent from candidates before initiating background checks. The data collected must be minimized to what is strictly necessary for assessing suitability, and final reports must be stored securely with access controls to prevent data leaks. Partnering with a professional background check agency ensures that all checks are carried out legally, ethically, and thoroughly."
    ],
    keyPoints: [
      "Establish a structured BGV policy based on role sensitivity (e.g., C-suite roles require deeper financial and reputation checks).",
      "Incorporate direct university registrar validation to defeat fake degree certificates.",
      "Verify previous employers via corporate records and official contact lines to avoid collusive reference fraud.",
      "Implement strict compliance with India's DPDP Act, ensuring explicit candidate consent for all inquiries.",
      "Perform physical address visits to verify permanent residency and community background.",
      "Utilize secure, encrypted channels for delivering final background dossiers to protect candidate privacy."
    ]
  },
  {
    category: "Claims Risk",
    tag: "Insurance Fraud",
    title: "Mitigating Claims Leakage: Red Flags in Health and Life Insurance Fraud",
    excerpt: "How claims investigation teams can identify, verify, and resolve fraudulent claims through field coordination and database analysis.",
    date: "May 2026",
    readTime: "8 min",
    content: [
      "Insurance fraud in India costs the industry over ₹45,000 crores annually, translating to higher premium costs for genuine policyholders. While digital automated claims processing has speeded up disbursements, it has also opened loopholes for organized fraud rings. Common typologies include staged accidents, pre-existing health conditions concealed during policy enrollment, inflated medical bills from collusive hospitals, and even completely fabricated deaths involving forged certificates.",
      "Detecting fraud at scale requires claims teams to establish a robust trigger system based on historical fraud patterns. Key red flags include high-value claims submitted shortly after policy inception (front-loading), claims from geographical clusters known for fraud activity, and medical bills containing uniform, non-itemized billing figures. When these indicators are triggered, desktop reviews are insufficient. A swift physical field investigation is required to corroborate ground facts.",
      "Field investigators visit the claimant's residential address, interview local neighbors, inspect the accident spot, and audit the treating hospital's admission logs. Crucially, digital forensics plays an important role: examining the EXIF metadata of submitted medical bills and photographs can reveal if dates and locations have been manipulated. A defensible investigation report separates verified facts from suspicious patterns, protecting insurers in legal tribunals."
    ],
    keyPoints: [
      "Establish real-time red flag triggers for pre-policy and post-claim files.",
      "Audit hospital records directly, including admission registers, indoor case sheets, and doctor notes.",
      "Verify death certificates with the municipal registrar database to detect forged documents.",
      "Investigate claims within 24 to 48 hours of trigger to prevent evidence tempering and local collusion.",
      "Conduct discrete local neighborhood inquiries to confirm claimant profile, lifestyle, and timeline of illness.",
      "Examine digital image metadata (EXIF) to identify forged dates and location stamps on claim documents."
    ]
  },
  {
    category: "Personal Security",
    tag: "Prematrimonial Investigation",
    title: "Ensuring Matrimonial Safety: A Professional Guide to Family Verification",
    excerpt: "Why discreet pre-marriage checks are essential in preventing alliance fraud, and how professional investigators operate under strict confidentiality.",
    date: "April 2026",
    readTime: "7 min",
    content: [
      "Pre-matrimonial investigations have become a standard safety measure for modern families in India. With the rise of online matrimonial portals, it has become remarkably easy for individuals to fabricate their professional success, financial status, relationship histories, and even their core identity. A pre-marriage background check is not about distrust; it is about building a foundation of transparency and safety before making a lifetime commitment.",
      "A professional matrimonial inquiry focuses on verifying specific claims made by the prospective partner. This includes confirming active employment standing, checking for previous or existing marriages through legal registries, verifying educational degrees, and assessing the family's local reputation. For NRI alliances, verification extends to verifying overseas employment, visa status, and residential living conditions through international liaison desks.",
      "The paramount rule of matrimonial verification is absolute confidentiality. Under no circumstances should the subject or their family be alerted to the inquiry. Operatives utilize open-source intelligence (OSINT), public databases, and discreet neighborhood field inquiries to compile facts. The resulting report provides families with verified evidence—such as address records, corporate director listings, and neighborhood testimonies—allowing them to make informed decisions without community embarrassment."
    ],
    keyPoints: [
      "Verify core identity, age, and legal marital status through national registry and court searches.",
      "Confirm active employment, designation, and salary directly with corporate registries and field checks.",
      "Perform discrete neighborhood checks to understand the subject's local reputation, habits, and family standing.",
      "Exercise extreme caution with NRI alliances: verify overseas visas, employment history, and foreign address stability.",
      "Conduct deep-dive social media audits to identify lifestyle or relationship indicators that contradict declared facts.",
      "Maintain complete operational secrecy to protect the family relationships and avoid preemptive confrontation."
    ]
  },
  {
    category: "Supply Chain Risk",
    tag: "Vendor Due Diligence",
    title: "Vendor Due Diligence: Securing the Procurement Ecosystem",
    excerpt: "A structured methodology for verifying vendor identity, financial health, and operational capacity to prevent procurement fraud.",
    date: "March 2026",
    readTime: "7 min",
    content: [
      "Procurement and supply chain fraud represent some of the most expensive leaks in Indian enterprise systems. Common fraud patterns include ghost vendors who receive payments for non-existent services, bid-rigging and cartels among suppliers, kickback agreements with internal employees, and delivery of sub-standard materials. Implementing a systematic vendor due diligence protocol is the first line of defense against these procurement threats.",
      "A standard vendor screening process must check three dimensions: legal existence, financial viability, and operational capacity. Legal checks involve verifying Ministry of Corporate Affairs (MCA) records, GST registrations, and court litigation databases. Financial checks review recent balance sheets and tax filing consistency. Crucially, operational checks must involve a physical visit to the vendor's declared offices or manufacturing facilities to confirm that they have the actual capacity to deliver, and are not simply operating as paper shells.",
      "Database-assisted screening also allows companies to screen vendor names and directors against global sanctions lists, domestic PEP (Politically Exposed Persons) databases, and blacklists maintained by industry associations. Ongoing risk monitoring—rather than a one-time onboarding check—ensures that any developing litigation, tax defaults, or management changes are flagged before they affect the client's operations."
    ],
    keyPoints: [
      "Conduct physical site visits to vendor factories and warehouses to confirm operational existence and capacity.",
      "Query the MCA registry and GST portals to verify corporate filings, active status, and director roles.",
      "Audit litigation databases, debt recovery tribunals, and insolvency registries for pending financial cases.",
      "Implement segregation of duties: separate vendor onboarding, payment approvals, and performance audits.",
      "Establish a confidential whistleblowing system to report supplier corruption or internal collusion.",
      "Perform annual review of critical vendors to monitor legal disputes and credit risks."
    ]
  },
  {
    category: "Corporate Governance",
    tag: "Corporate Risk",
    title: "Managing Corporate Risk: Internal Fraud and Whistleblower Investigations",
    excerpt: "How organizations can design, execute, and document internal investigations into asset misappropriation, conflict of interest, and data leaks.",
    date: "February 2026",
    readTime: "10 min",
    content: [
      "Corporate risk is no longer limited to external threats; insider threats, internal fraud, and conflicts of interest represent a significant portion of business losses. Asset misappropriation, kickbacks, intellectual property theft, and employee absconding with company assets can disrupt business continuity and damage client trust. When a whistleblower report surfaces or financial anomalies are discovered, a professional internal investigation is critical to uncover the truth.",
      "An internal investigation must follow strict protocols to protect the integrity of the evidence. The first step is scoping the investigation and securing digital footprints before any interviews are conducted. This includes securing the employee's work laptop, email logs, and access records. Any delay can result in the deletion of emails, file wiping, or document shredding, which renders the evidence inadmissible in legal or disciplinary proceedings.",
      "During the investigation, interviews must be handled by experienced investigators who can ask structured questions and spot inconsistencies without creating a hostile work environment. The final investigation report must be objective, factual, and backed by a clean chain of custody for all digital and physical evidence. This ensures that the report stands up in court, disciplinary hearings, or insurance recovery claims."
    ],
    keyPoints: [
      "Secure all digital evidence (email logs, file transfers, chat history) immediately to prevent tampering.",
      "Maintain a documented chain of custody for all physical assets and digital storage drives.",
      "Conduct structured, non-coercive interviews with key witnesses and suspects led by trained investigators.",
      "Audit internal access logs, expense accounts, and procurement records for unauthorized transactions.",
      "Ensure compliance with labor laws and company policies during disciplinary investigation stages.",
      "Develop an incident response playbook outlining roles for legal, HR, security, and external investigators."
    ]
  },
  {
    category: "Forensic Technology",
    tag: "Digital Forensics",
    title: "Digital Forensics: Admissibility of Electronic Evidence in India",
    excerpt: "Understanding the legal framework, metadata verification, and chain of custody rules for digital evidence in investigation reports.",
    date: "January 2026",
    readTime: "8 min",
    content: [
      "As business operations and personal communications shift online, the primary source of evidence in modern investigations is digital. Email exchanges, WhatsApp messages, digital transaction history, and geo-tagged images are frequently submitted to prove fraud, misconduct, or breach of NDA. However, digital evidence is highly volatile and easy to alter, making its legal admissibility a complex challenge under Indian law.",
      "Under the Indian Evidence Act, digital evidence must meet strict criteria to be admissible in a court of law. This includes securing the electronic record in its original form (or a certified copy) and providing a certificate under Section 65B of the Indian Evidence Act (now Section 63 of the Bharatiya Sakshya Adhiniyam, BSA). This certificate verifies that the computer system or device was functioning properly at the time of recording and that the contents have not been modified.",
      "Professional investigators use specialized write-blocker hardware and forensic software to create exact bit-stream copies (images) of hard drives and mobile phones without changing the metadata. EXIF metadata analysis is crucial to verify the original timestamp, camera model, and GPS coordinates of key photos. Keeping a strict log of who accessed the evidence, when, and how (the chain of custody) ensures the evidence is accepted by courts and regulators."
    ],
    keyPoints: [
      "Acquire electronic evidence using forensic write-blockers to prevent any modification of metadata.",
      "Compute cryptographic hash values (MD5 or SHA-256) of files immediately upon acquisition to prove integrity.",
      "Provide BSA Section 63 / Section 65B certificates for all electronic records submitted in legal filings.",
      "Analyze EXIF metadata to authenticate the location, time, and camera device of submitted digital photographs.",
      "Document every transfer of evidence in a chain-of-custody register with signatures and timestamps.",
      "Partner with certified digital forensic examiners to ensure legal compliance and professional testifying capacity."
    ]
  }
];

const InsightsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(articles.map(a => a.category)))];
  const filtered = activeCategory === "All" ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Knowledge Hub</span>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">Investigation Insights</h1>
            <p className="mt-4 text-muted-foreground">
              Educational articles and professional guides on corporate investigation, background verification, fraud detection, and AI-assisted intelligence.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider border transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <article
                  className="group flex h-full flex-col bg-background p-8 transition-all cursor-pointer hover:bg-subtle/30"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                      <Tag className="h-3 w-3" />{article.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="font-heading text-base font-bold leading-snug text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="flex-1 text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />{article.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-primary">
                      Read more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-background border border-border shadow-2xl"
            >
              <div className="sticky top-0 bg-background border-b border-border px-8 py-4 flex items-center justify-between z-10">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  <BookOpen className="h-3.5 w-3.5" />{selectedArticle.tag}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-8 py-6">
                <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                  <span>{selectedArticle.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{selectedArticle.readTime} read</span>
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">{selectedArticle.title}</h2>

                <div className="space-y-4 mb-8">
                  {selectedArticle.content.map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted-foreground">{para}</p>
                  ))}
                </div>

                <div className="border border-border bg-subtle/30 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Key Takeaways</p>
                  <div className="space-y-2">
                    {selectedArticle.keyPoints.map((point, i) => (
                      <div key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href="/inquiry"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Discuss a Related Case <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="px-6 py-3 text-sm font-semibold border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default InsightsPage;
