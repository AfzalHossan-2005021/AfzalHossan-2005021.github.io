import { BriefcaseBusiness, GraduationCap, Info } from "lucide-react";

import { portfolioData } from "@/data/portfolio";

import { cn } from "@/lib/utils";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const iconByType = {
  education: GraduationCap,
  experience: BriefcaseBusiness,
  placeholder: Info
};

export function TimelineSection() {
  return (
    <section id="timeline" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Experience & Education"
          title="Academic track, project depth, and transparent placeholders"
          description="No jobs, degrees, or certifications are invented. Unknown details remain clearly marked."
        />
      </Reveal>

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-[18px] top-3 h-[calc(100%-24px)] w-px bg-white/15 sm:left-1/2" />
        <div className="space-y-6">
          {portfolioData.timeline.map((item, index) => {
            const Icon = iconByType[item.type];
            const isPlaceholder = item.type === "placeholder";

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article
                  className={cn(
                    "relative ml-10 rounded-2xl border bg-background/45 p-5 sm:ml-0 sm:w-[calc(50%-24px)]",
                    index % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto",
                    isPlaceholder
                      ? "border-dashed border-amber-300/35"
                      : "border-white/10"
                  )}
                >
                  <span
                    className={cn(
                      "absolute -left-[30px] top-6 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs shadow-sm sm:left-auto",
                      index % 2 === 0 ? "sm:-right-[36px]" : "sm:-left-[36px]",
                      isPlaceholder
                        ? "border-amber-300/35 bg-amber-200/10 text-amber-300"
                        : "border-primary/35 bg-primary/15 text-primary"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>

                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm font-medium text-foreground/85">{item.organization}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
