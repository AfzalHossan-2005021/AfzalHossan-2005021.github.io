import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"]
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://afzal-hossan.me"),
  title: {
    default: "Afzal Hossan | Software Developer Portfolio",
    template: "%s | Afzal Hossan"
  },
  description:
    "Premium portfolio of Afzal Hossan, a BUET undergraduate developer focused on security, AI research, and full-stack engineering.",
  keywords: [
    "Afzal Hossan",
    "BUET",
    "portfolio",
    "software developer",
    "computer security",
    "machine learning",
    "full-stack"
  ],
  openGraph: {
    title: "Afzal Hossan | Software Developer Portfolio",
    description:
      "Security, AI, and full-stack projects built by Afzal Hossan.",
    url: "https://afzal-hossan.me",
    siteName: "Afzal Hossan Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Afzal Hossan | Software Developer Portfolio",
    description:
      "Security, AI, and full-stack projects built by Afzal Hossan."
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
    { media: "(prefers-color-scheme: light)", color: "#f5f9ff" }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${manrope.variable} bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#content"
            className="focus-ring sr-only left-4 top-4 z-[100] rounded-md border border-border bg-card px-3 py-2 text-sm font-medium text-foreground focus:not-sr-only focus:absolute"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
