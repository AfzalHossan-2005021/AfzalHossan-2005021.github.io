import { Activity, BookMarked, ExternalLink, GitBranch, Users } from "lucide-react";
import Link from "next/link";

import { portfolioData } from "@/data/portfolio";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const stats = [
  {
    label: "Public Repositories",
    value: portfolioData.githubActivity.repositories,
    icon: BookMarked
  },
  {
    label: "Original Repositories",
    value: portfolioData.githubActivity.nonForkRepositories,
    icon: GitBranch
  },
  {
    label: "Followers / Following",
    value: `${portfolioData.githubActivity.followers} / ${portfolioData.githubActivity.following}`,
    icon: Users
  }
];

export function GitHubSection() {
  return (
    <section id="github" className="section-shell pt-10">
      <Reveal>
        <SectionHeading
          eyebrow="GitHub Activity"
          title="Public code footprint and repository momentum"
          description="This summary uses only public profile data and repository metadata."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal className="glass-card rounded-3xl p-6 sm:p-8" delay={0.04}>
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold">
            <Activity className="h-4 w-4 text-primary" />
            Profile Summary
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-background/45 p-4"
              >
                <stat.icon className="h-4 w-4 text-primary" />
                <p className="mt-3 text-xl font-semibold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </article>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-muted-foreground">
            {portfolioData.githubActivity.activityNote}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={portfolioData.githubActivity.profileUrl}
              target="_blank"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
            >
              View Profile
              <ExternalLink className="h-4 w-4" />
            </Link>
            <Link
              href={portfolioData.githubActivity.repoUrl}
              target="_blank"
              className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold transition hover:border-primary/50 hover:text-primary"
            >
              Explore Repositories
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <Reveal className="glass-card rounded-3xl p-6 sm:p-8" delay={0.1}>
          <p className="mb-4 text-sm font-semibold">Recent Repository Highlights</p>
          <ul className="space-y-3">
            {portfolioData.githubActivity.recentHighlights.map((repo) => (
              <li
                key={repo}
                className="rounded-xl border border-white/10 bg-background/45 px-4 py-3 text-sm text-foreground/90"
              >
                {repo}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs leading-6 text-muted-foreground">
            Contribution graphs and private contribution counts are intentionally not used here to
            keep the section fully public-data compatible.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
