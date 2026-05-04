import Link from "next/link";

import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>(c) {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link
            href={portfolioData.profile.socialLinks.website}
            target="_blank"
            className="focus-ring rounded-md px-2 py-1 transition hover:text-foreground"
          >
            Website
          </Link>
          <Link
            href={portfolioData.profile.socialLinks.github}
            target="_blank"
            className="focus-ring rounded-md px-2 py-1 transition hover:text-foreground"
          >
            GitHub
          </Link>
          <Link
            href={portfolioData.profile.socialLinks.linkedin}
            target="_blank"
            className="focus-ring rounded-md px-2 py-1 transition hover:text-foreground"
          >
            LinkedIn
          </Link>
          <Link
            href={portfolioData.profile.socialLinks.email}
            className="focus-ring rounded-md px-2 py-1 transition hover:text-foreground"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
