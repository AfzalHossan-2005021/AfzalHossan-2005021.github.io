import { ArrowUpRight, BadgeCheck, Github, Globe, Sparkles } from "lucide-react";
import Link from "next/link";

import { portfolioData } from "@/data/portfolio";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work with clear engineering depth"
          description="Project cards are based on your public repositories and README-documented capabilities."
        />
      </Reveal>

      <div className="grid gap-6 xl:grid-cols-2">
        {portfolioData.featuredProjects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.05}>
            <article className="glass-card group h-full overflow-hidden rounded-3xl border-white/10 transition hover:-translate-y-1 hover:border-primary/45">
              <div className="relative border-b border-white/10 bg-background/45 p-6">
                <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/15 blur-3xl transition group-hover:bg-primary/25" />
                <div className="relative">
                  <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                    Updated {project.updatedAt}
                  </p>
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground/90">{project.subtitle}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span key={item} className="chip text-[11px]">
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={project.repositoryUrl}
                    target="_blank"
                    className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                    Repository
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  {project.liveUrl ? (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="focus-ring inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:translate-y-[-1px]"
                    >
                      <Globe className="h-4 w-4" />
                      Live Demo
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-white/15 px-4 py-2 text-sm text-muted-foreground">
                      <Globe className="h-4 w-4" />
                      Live demo not listed
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
