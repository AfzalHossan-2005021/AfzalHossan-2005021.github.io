import { GraduationCap, MapPin, Sparkles, Target } from "lucide-react";

import { portfolioData } from "@/data/portfolio";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Built on strong fundamentals, focused on real impact"
          description="A quick profile snapshot based on public GitHub data and project history."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="glass-card rounded-3xl p-6 sm:p-8" delay={0.05}>
          <p className="text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
            {portfolioData.profile.bio} I currently focus on developing secure systems, AI-driven
            workflows, and full-stack products while continuing my undergraduate journey at BUET.
            My repositories reflect a hands-on approach to learning: I prefer building complete
            systems, documenting my process, and improving with each iteration.
          </p>

          <ul className="mt-6 grid gap-3">
            {portfolioData.aboutHighlights.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-background/45 px-4 py-3 text-sm text-foreground/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="space-y-4" delay={0.12}>
          <article className="glass-card rounded-2xl p-5">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold">
              <GraduationCap className="h-4 w-4 text-primary" />
              Education Focus
            </p>
            <p className="text-sm text-muted-foreground">
              Undergraduate student in Computer Science and Engineering at BUET, with
              implementation-heavy coursework across systems, security, and AI.
            </p>
          </article>

          <article className="glass-card rounded-2xl p-5">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold">
              <MapPin className="h-4 w-4 text-primary" />
              Location
            </p>
            <p className="text-sm text-muted-foreground">{portfolioData.profile.location}</p>
          </article>

          <article className="glass-card rounded-2xl p-5">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold">
              <Target className="h-4 w-4 text-primary" />
              Current Goal
            </p>
            <p className="text-sm text-muted-foreground">
              Contribute to technically challenging software teams and continue blending research
              rigor with production engineering practices.
            </p>
          </article>

          <article className="glass-card rounded-2xl p-5">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-primary" />
              Public Coding Journey
            </p>
            <p className="text-sm text-muted-foreground">
              Active on GitHub since {portfolioData.profile.publicCodingSince}.
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
