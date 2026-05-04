"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { portfolioData } from "@/data/portfolio";

const HEADLINE_INTERVAL_MS = 2800;

export function HeroSection() {
  const headlines = useMemo(() => portfolioData.heroHeadlines, []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % headlines.length);
    }, HEADLINE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [headlines.length]);

  const hasResume = Boolean(portfolioData.profile.resumeUrl);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-32 sm:pt-36"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 grid-overlay opacity-40" />
      <div className="pointer-events-none absolute -left-20 top-16 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-24 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="section-shell pb-20 pt-10 sm:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Open to collaboration
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {portfolioData.profile.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-foreground/90 sm:text-xl">
              {portfolioData.profile.title}
            </p>
            <div className="mt-6 h-14 overflow-hidden sm:h-12">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="text-pretty text-base text-muted-foreground sm:text-lg"
              >
                {headlines[activeIndex]}
              </motion.p>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {portfolioData.profile.valueProposition}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="focus-ring inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:translate-y-[-1px]"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href={portfolioData.profile.socialLinks.github}
                target="_blank"
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              {hasResume ? (
                <Link
                  href={portfolioData.profile.resumeUrl}
                  target="_blank"
                  className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </Link>
              ) : (
                <button
                  type="button"
                  disabled
                  title="Resume link placeholder: add your resume URL in data/portfolio.ts"
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-dashed border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-muted-foreground"
                >
                  <FileText className="h-4 w-4" />
                  Resume (placeholder)
                </button>
              )}
              <a
                href="#contact"
                className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>
          </div>

          <div className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8">
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Quick Snapshot</p>
            <dl className="mt-5 grid gap-4">
              {portfolioData.quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-background/35 p-4 backdrop-blur"
                >
                  <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-xl font-semibold">{stat.value}</dd>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.detail}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
