export const portfolioData = {
  profile: {
    name: "Afzal Hossan",
    username: "AfzalHossan-2005021",
    title: "Undergraduate CSE Student at BUET",
    location: "Dhaka, Bangladesh",
    bio: "I am a dedicated and motivated undergraduate student pursuing my passion for knowledge and personal growth.",
    valueProposition:
      "I build practical software systems across computer security, AI, and full-stack web development, with a strong focus on learning deeply and shipping real projects.",
    avatarUrl: "https://avatars.githubusercontent.com/u/125758804?v=4",
    socialLinks: {
      github: "https://github.com/AfzalHossan-2005021",
      linkedin: "https://www.linkedin.com/in/afzal-hossan",
      website: "https://afzal-hossan.me",
      email: "mailto:afzalhossan2005021@gmail.com",
      facebook: "https://www.facebook.com/afzal.tanvir.54",
      orcid: "https://orcid.org/0009-0008-1604-8822"
    },
    resumeUrl: "",
    publicCodingSince: "February 2023"
  },
  heroHeadlines: [
    "Building secure and scalable software systems.",
    "Turning research ideas into production-grade code.",
    "Crafting full-stack products with clean architecture."
  ],
  quickStats: [
    {
      label: "Public Repositories",
      value: "74",
      detail: "GitHub profile repositories"
    },
    {
      label: "Original Projects",
      value: "59",
      detail: "Non-fork repositories"
    },
    {
      label: "Primary Stack",
      value: "Python | C++ | Java",
      detail: "Based on public repository language usage"
    },
    {
      label: "Coding in Public",
      value: "3+ years",
      detail: "Since February 2023"
    }
  ],
  aboutHighlights: [
    "Strong systems foundation from BUET coursework and implementation-heavy repositories.",
    "Consistent project depth in security, compilers, operating systems, and AI problem-solving.",
    "Research-oriented mindset with active exploration in spatial transcriptomics alignment and ML workflows.",
    "Learning-first builder who iterates quickly and documents technical work clearly."
  ],
  skillGroups: [
    {
      title: "Languages",
      icon: "code",
      summary: "Primary languages surfaced from repository history and project readmes.",
      skills: ["Python", "C++", "C", "Java", "TypeScript", "JavaScript", "SQL", "Bash"]
    },
    {
      title: "Frontend",
      icon: "layout",
      summary: "UI technologies used in web and desktop-facing projects.",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaFX", "Bootstrap"]
    },
    {
      title: "Backend",
      icon: "server",
      summary: "Server-side and systems-oriented tools present across projects.",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Socket Programming",
        "FastAPI",
        "Bison/Flex",
        "JWT Auth"
      ]
    },
    {
      title: "Databases",
      icon: "database",
      summary: "Data layers used across full-stack and security labs.",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "File-based storage", "Mongoose"]
    },
    {
      title: "Tools",
      icon: "wrench",
      summary: "Build, testing, and engineering workflow tools.",
      skills: ["Git", "GitHub Actions", "Docker Compose", "Gradle", "Makefile", "Linux CLI", "Postman"]
    },
    {
      title: "Cloud & DevOps",
      icon: "cloud",
      summary: "Deployment and infra tooling used in active repositories.",
      skills: ["Vercel", "Docker", "CI workflows", "Environment-based config", "Monitoring-ready architecture"]
    }
  ],
  featuredProjects: [
    {
      name: "Computer-Security",
      subtitle: "Applied security labs and exploit demonstrations",
      description:
        "A comprehensive academic security repository covering cryptography, behavioral authentication, memory exploitation, SQL injection, and packet-level network analysis.",
      repositoryUrl: "https://github.com/AfzalHossan-2005021/Computer-Security",
      liveUrl: "",
      updatedAt: "May 2026",
      tech: ["Python", "C", "JavaScript", "Docker", "PHP", "MySQL"],
      keyFeatures: [
        "AES and ECC implementation modules with secure message exchange simulation",
        "Behavioral authentication pipeline with data collection and model training",
        "Buffer overflow exploitation workflows with debugger-assisted analysis",
        "Dockerized network sandbox for packet sniffing and MITM demonstrations"
      ]
    },
    {
      name: "INCENT",
      subtitle: "Spatial transcriptomics alignment research framework",
      description:
        "Research-focused alignment toolkit for single-cell spatial transcriptomics that combines gene expression, cell-type cues, and neighborhood structure using optimal transport.",
      repositoryUrl: "https://github.com/AfzalHossan-2005021/INCENT",
      liveUrl: "",
      updatedAt: "April 2026",
      tech: ["Python", "Jupyter Notebook", "PyTorch", "Optimal Transport", "CI"],
      keyFeatures: [
        "Fused Gromov-Wasserstein alignment across two spatial slices",
        "Rotation-invariant multiscale neighborhood descriptors",
        "Unbalanced matching support with per-type mass budgeting",
        "Hierarchical coarse-to-fine alignment for larger tissue datasets"
      ]
    },
    {
      name: "stock_express",
      subtitle: "Real-time stock analytics web product",
      description:
        "A modern full-stack stock tracking platform with interactive charts, personalized watchlists, and AI-assisted market insights.",
      repositoryUrl: "https://github.com/AfzalHossan-2005021/stock_express",
      liveUrl: "https://stock-express-se.vercel.app",
      updatedAt: "December 2025",
      tech: ["Next.js", "React", "TypeScript", "MongoDB", "Tailwind CSS", "Finnhub API"],
      keyFeatures: [
        "Real-time stock search and TradingView-powered charting",
        "Personalized watchlists and onboarding-driven experience",
        "AI-assisted recommendation and news digest workflow",
        "Responsive UX with command palette and dark mode support"
      ]
    },
    {
      name: "Compiler",
      subtitle: "Mini C compiler suite",
      description:
        "An educational compiler project demonstrating core compiler phases from lexical analysis to intermediate code generation with optimization.",
      repositoryUrl: "https://github.com/AfzalHossan-2005021/Compiler",
      liveUrl: "",
      updatedAt: "January 2026",
      tech: ["C++", "Flex", "Bison", "Makefile"],
      keyFeatures: [
        "Lexical analysis and parsing pipeline for a C-like language subset",
        "Semantic validation with scoped symbol table design",
        "AST construction and parse-tree generation",
        "Intermediate code emission with basic optimization outputs"
      ]
    },
    {
      name: "Client-Server",
      subtitle: "JavaFX socket-based movie management system",
      description:
        "A client-server project built in Java where a JavaFX client communicates with a socket server for movie operations and reporting.",
      repositoryUrl: "https://github.com/AfzalHossan-2005021/Client-Server",
      liveUrl: "",
      updatedAt: "December 2025",
      tech: ["Java", "JavaFX", "Socket Programming", "Gradle"],
      keyFeatures: [
        "Dedicated socket server for centralized movie data",
        "GUI client for login, movie management, and analytical reports",
        "End-to-end networking workflow between client and server modules",
        "Structured project setup with Gradle and modular source folders"
      ]
    },
    {
      name: "routine-scheduler",
      subtitle: "Academic scheduling automation platform",
      description:
        "A full-stack web application for institutions to manage and automate class routines with conflict checks and resource allocation.",
      repositoryUrl: "https://github.com/AfzalHossan-2005021/routine-scheduler",
      liveUrl: "",
      updatedAt: "August 2025",
      tech: ["React", "Node.js", "Express.js", "PostgreSQL", "Docker", "JWT"],
      keyFeatures: [
        "Automated schedule creation with conflict detection flow",
        "Teacher preferences and room allocation support",
        "Role-aware authentication and dashboard experience",
        "Dockerized local setup for full-stack deployment"
      ]
    }
  ],
  githubActivity: {
    repositories: 74,
    nonForkRepositories: 59,
    followers: 6,
    following: 11,
    profileUrl: "https://github.com/AfzalHossan-2005021",
    repoUrl: "https://github.com/AfzalHossan-2005021?tab=repositories",
    recentHighlights: [
      "Computer-Security",
      "Visium-Image-Preprocessor",
      "INCENT",
      "Machine-Learning",
      "Simulation-and-Modeling"
    ],
    activityNote:
      "Public activity is heavily project-based and coursework-driven, with recent emphasis on security engineering and computational biology research tooling."
  },
  timeline: [
    {
      title: "Undergraduate Student, CSE",
      organization: "Bangladesh University of Engineering and Technology (BUET)",
      period: "Date not publicly specified",
      description:
        "Actively building course and research projects across algorithms, systems, security, AI, and software engineering.",
      type: "education"
    },
    {
      title: "Project-Based Research and Engineering",
      organization: "Open-source repositories on GitHub",
      period: "Ongoing",
      description:
        "Maintaining repositories spanning spatial transcriptomics alignment, machine learning experimentation, and production-style web applications.",
      type: "experience"
    },
    {
      title: "Professional Experience Placeholder",
      organization: "Add internships, freelance, or full-time roles here",
      period: "Placeholder",
      description:
        "No public employment records were found in the provided profile data. Replace this card with verified experience details when available.",
      type: "placeholder"
    }
  ],
  testimonials: {
    hasRealTestimonials: false,
    placeholderMessage:
      "No verified testimonials are publicly available yet. This section is intentionally a placeholder and can be removed or replaced with real recommendations."
  },
  contact: {
    closingMessage:
      "If you are hiring, collaborating, or building something technically ambitious, I would love to connect.",
    location: "Dhaka, Bangladesh",
    email: "afzalhossan2005021@gmail.com",
    github: "https://github.com/AfzalHossan-2005021",
    linkedin: "https://www.linkedin.com/in/afzal-hossan",
    website: "https://afzal-hossan.me/",
    resumeUrl: ""
  }
} as const;

export type PortfolioData = typeof portfolioData;
