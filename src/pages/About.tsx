import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import gdssLogo from "@/assets/gdss-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">About GDSS</span>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl text-foreground">
              India's Trusted Investigation & Corporate Intelligence Firm
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in 1993 by Dr. N. Madhu, a retired Indian Air Force Officer, GDSS Investigations
              is a division of Gautam Diligent Security Solutions & IFM Services Pvt Ltd. With over
              30 years of experience, we provide professional investigation and intelligence services
              to corporations, insurance companies, and individuals across India.
            </p>
          </motion.div>

          {/* Large credibility block */}
          <div className="mb-16 border-l-4 border-primary pl-8 py-4">
            <p className="font-heading text-6xl font-bold text-foreground leading-none">30+</p>
            <p className="font-heading text-xl font-semibold text-foreground mt-1">YEARS</p>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-1">of Investigation Experience</p>
          </div>

          <div className="grid gap-px bg-border grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { label: "30+", desc: "Years of Experience" },
              { label: "1993", desc: "Year Founded" },
              { label: "500+", desc: "Cases Annually" },
              { label: "Pan-India", desc: "Coverage" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-6 text-center"
              >
                <p className="font-heading text-2xl font-bold text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Founder</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Dr. N. Madhu, a retired Indian Air Force Officer, brought military discipline, strategic thinking,
                and an unwavering commitment to integrity to the investigation industry.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Under his leadership, GDSS Investigations has grown from a small consultancy to one of India's
                most respected investigation and corporate intelligence firms, serving Fortune 500 companies,
                leading insurance providers, and discerning individual clients.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center border border-border p-12"
            >
              <img src={gdssLogo} alt="GDSS Investigations" className="max-h-20" />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
