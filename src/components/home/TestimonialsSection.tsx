import { Quote, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    quote: "GDSS helped us verify a sensitive employment matter with clear documentation and complete discretion.",
    person: "HR Manager",
    role: "IT Company, Chennai",
  },
  {
    quote: "The India-based verification was handled professionally while I coordinated from overseas.",
    person: "NRI Client",
    role: "Singapore",
  },
  {
    quote: "Their insurance field findings gave our claims team the clarity needed before settlement review.",
    person: "Claims Lead",
    role: "Insurance Operations, Mumbai",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-card py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Client Confidence</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">Professional Testimonials</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Representative feedback is anonymized to protect client, subject, and case confidentiality.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.role} className="border border-border bg-background p-6 shadow-sm">
              <Quote className="h-7 w-7 text-primary" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{testimonial.quote}</p>
              <div className="mt-6 border-t border-border pt-5">
                <p className="font-heading text-base font-bold text-foreground">{testimonial.person}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 inline-flex items-center gap-2 border border-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" /> Names withheld under confidentiality policy
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
