import {
  ExternalLink,
  FileText,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  SendHorizontal
} from "lucide-react";
import Link from "next/link";

import { portfolioData } from "@/data/portfolio";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  const hasResume = Boolean(portfolioData.contact.resumeUrl);

  return (
    <section id="contact" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful together"
          description="Recruiters, collaborators, and clients are welcome. The contact channels below are based on publicly available profile links."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="glass-card rounded-3xl p-6 sm:p-8" delay={0.04}>
          <p className="text-sm leading-7 text-muted-foreground">{portfolioData.contact.closingMessage}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href={`mailto:${portfolioData.contact.email}`}
              className="focus-ring rounded-xl border border-white/10 bg-background/45 p-4 transition hover:border-primary/50"
            >
              <Mail className="h-4 w-4 text-primary" />
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">Email</p>
              <p className="mt-1 text-sm font-medium">{portfolioData.contact.email}</p>
            </Link>

            <Link
              href={portfolioData.contact.github}
              target="_blank"
              className="focus-ring rounded-xl border border-white/10 bg-background/45 p-4 transition hover:border-primary/50"
            >
              <Github className="h-4 w-4 text-primary" />
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">GitHub</p>
              <p className="mt-1 text-sm font-medium">AfzalHossan-2005021</p>
            </Link>

            <Link
              href={portfolioData.contact.linkedin}
              target="_blank"
              className="focus-ring rounded-xl border border-white/10 bg-background/45 p-4 transition hover:border-primary/50"
            >
              <Linkedin className="h-4 w-4 text-primary" />
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">LinkedIn</p>
              <p className="mt-1 text-sm font-medium">/in/afzal-hossan</p>
            </Link>

            <Link
              href={portfolioData.contact.website}
              target="_blank"
              className="focus-ring rounded-xl border border-white/10 bg-background/45 p-4 transition hover:border-primary/50"
            >
              <Globe className="h-4 w-4 text-primary" />
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">Website</p>
              <p className="mt-1 text-sm font-medium">afzal-hossan.me</p>
            </Link>

            <div className="rounded-xl border border-white/10 bg-background/45 p-4">
              <MapPin className="h-4 w-4 text-primary" />
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">Location</p>
              <p className="mt-1 text-sm font-medium">{portfolioData.contact.location}</p>
            </div>
          </div>
        </Reveal>

        <Reveal className="glass-card rounded-3xl p-6 sm:p-8" delay={0.1}>
          <h3 className="text-lg font-semibold">Quick Connect</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Resume and form backend are intentionally placeholders until public links are provided.
          </p>

          <div className="mt-5 space-y-3">
            {hasResume ? (
              <Link
                href={portfolioData.contact.resumeUrl}
                target="_blank"
                className="focus-ring inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold transition hover:border-primary/50"
              >
                <span className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Download Resume
                </span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            ) : (
              <div className="rounded-xl border border-dashed border-white/20 px-4 py-3 text-sm text-muted-foreground">
                Resume link placeholder: add `contact.resumeUrl` in `data/portfolio.ts`.
              </div>
            )}

            <button
              type="button"
              disabled
              className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-primary/70 px-4 py-3 text-sm font-semibold text-primary-foreground opacity-60"
              title="Contact form backend placeholder"
            >
              <SendHorizontal className="h-4 w-4" />
              Send Message (placeholder)
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
