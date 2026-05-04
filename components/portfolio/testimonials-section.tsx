import { Quote } from "lucide-react";

import { portfolioData } from "@/data/portfolio";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function TestimonialsSection() {
  if (portfolioData.testimonials.hasRealTestimonials) {
    return null;
  }

  return (
    <section id="testimonials" className="section-shell pt-10">
      <Reveal>
        <SectionHeading
          eyebrow="Credibility"
          title="Testimonials Placeholder"
          description="This section is shown only as a transparent placeholder since no verified testimonial data is available."
        />
      </Reveal>

      <Reveal className="mx-auto max-w-3xl" delay={0.06}>
        <article className="glass-card rounded-3xl border-dashed p-8 text-center">
          <Quote className="mx-auto h-6 w-6 text-primary" />
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {portfolioData.testimonials.placeholderMessage}
          </p>
        </article>
      </Reveal>
    </section>
  );
}
