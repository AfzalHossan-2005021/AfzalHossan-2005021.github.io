import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        }
      },
      fontFamily: {
        heading: ["Sora", "Manrope", "ui-sans-serif", "system-ui"],
        body: ["Manrope", "Avenir Next", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 60px -15px hsl(var(--primary) / 0.45)"
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.08), transparent 30%), radial-gradient(circle at 80% 0%, rgba(14, 165, 233, 0.12), transparent 25%), radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.08), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
