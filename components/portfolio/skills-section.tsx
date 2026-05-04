import {
  Cloud,
  Code2,
  Database,
  LayoutPanelTop,
  Server,
  Wrench
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const iconMap = {
  code: Code2,
  layout: LayoutPanelTop,
  server: Server,
  database: Database,
  wrench: Wrench,
  cloud: Cloud
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell pt-10">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Technical stack shaped by real repositories"
          description="Grouped from your public project history and documented tooling across major repositories."
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {portfolioData.skillGroups.map((group, index) => {
          const Icon = iconMap[group.icon];

          return (
            <Reveal key={group.title} delay={index * 0.06}>
              <article className="glass-card h-full rounded-2xl p-5 transition hover:-translate-y-1 hover:border-primary/40">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{group.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-background/55 px-3 py-1 text-xs font-medium text-foreground/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
