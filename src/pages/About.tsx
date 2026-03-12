import { motion } from "framer-motion";
import { Shield, Award, Users, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import gdssLogo from "@/assets/gdss-logo.png";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 max-w-3xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">About GDSS</span>
            <h1 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              India's Trusted Investigation & Corporate Intelligence Firm
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in 1993 by Dr. N. Madhu, a retired Indian Air Force Officer, GDSS Investigations
              is a division of Gautam Diligent Security Solutions & IFM Services Pvt Ltd. With over
              30 years of experience, we provide professional investigation and intelligence services
              to corporations, insurance companies, and individuals across India.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {[
              { icon: Shield, label: "30+", desc: "Years of Experience" },
              { icon: Award, label: "1993", desc: "Year Founded" },
              { icon: Users, label: "500+", desc: "Cases Annually" },
              { icon: Globe, label: "Pan-India", desc: "Coverage" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-md border border-border/50 bg-card/40 p-6 text-center"
              >
                <stat.icon className="mx-auto h-6 w-6 text-primary mb-3" />
                <p className="font-heading text-2xl font-bold">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-2xl font-bold">Our Founder</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Dr. N. Madhu, a retired Indian Air Force Officer, brought military discipline, strategic thinking,
                and an unwavering commitment to integrity to the investigation industry. His vision was to create
                an investigation firm that operates with the highest standards of professionalism and confidentiality.
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
              className="flex items-center justify-center rounded-md border border-border/50 bg-card/40 p-12"
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
