import { motion } from "framer-motion";

const TamilNaduMap = () => {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "hsl(var(--card))",
        borderTop: "1px solid hsl(var(--border))",
        borderBottom: "1px solid hsl(var(--border))",
      }}
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative mx-auto px-6 z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-base font-bold uppercase tracking-[0.25em] text-primary">
            pan india operations
          </span>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm">
            Our intelligence network spans across the entire country — providing highly
            discreet verification and investigation services.
          </p>
        </motion.div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-xl overflow-hidden shadow-2xl border border-border mx-auto max-w-5xl"
          style={{ height: "600px" }}
        >
          <iframe
            title="Tamil Nadu Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4013066.864!2d77.398193!3d10.77520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa95d4620d43a5%3A0xb36a0dc1ddb16b4!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1716999999999!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="mx-auto mt-10 max-w-5xl px-4">
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
            {[
              "Chennai",
              "Bangalore",
              "Hyderabad",
              "Mumbai",
              "Delhi",
              "Pune",
              "Coimbatore",
              "Kochi",
            ].map((city) => (
              <div
                key={city}
                className="rounded-2xl border border-border bg-background px-4 py-4 text-center shadow-sm"
              >
                <p className="text-sm font-semibold text-foreground">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TamilNaduMap;
