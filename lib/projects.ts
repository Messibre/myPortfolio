export interface Project {
  id: string;
  spineTitle: string;
  bookTitle: string;
  subtitle: string;
  edition: string;
  role: string;
  techStack: string[];
  narrative: string;
  liveLink: string;
  sourceLink: string;
  isAwardWinner: boolean;
  awardLabel?: string;
  isAbout?: boolean;
  bio?: string;
  socials?: {
    label: string;
    href: string;
    icon: "github" | "linkedin" | "email" | "x";
  }[];
}
export const projects: Project[] = [
  {
    id: "about-me",
    spineTitle: "The Author",
    bookTitle: "About Me",
    subtitle: "The Autobiography",
    edition: "2026",
    role: "Full-Stack Developer",
    techStack: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST API's",
      "MongoDB",
    ],
    narrative:
      "A developer who writes code like prose and builds interfaces like architecture. Passionate about crafting digital experiences that feel tactile, intentional, and alive.",
    liveLink: "#",
    sourceLink: "#",
    isAwardWinner: false,
    isAbout: true,
    bio: "I build things for the web with the same care a bookbinder gives to a first edition. Every pixel, every interaction, every line of code is a deliberate choice in the story I'm telling.",
    socials: [
      { label: "GitHub", href: "https://github.com/Messibre", icon: "github" },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/meseret-birhanu-nigus",
        icon: "linkedin",
      },
      { label: "Email", href: "messibre21@example.com", icon: "email" },
      { label: "X", href: "https://x.com/MessiBre21", icon: "x" },
    ],
  },
  {
    id: "block-pay",
    spineTitle: "Block Pay",
    bookTitle: "Block Pay",
    subtitle: "The Manifesto",
    edition: "2025",
    role: "Lead Developer",
    techStack: [
      "Cardano Blockchain Network",
      "Aiken Smart Contract",
      "REST API's",
      "React",
      "Node.js",
    ],
    narrative:
      "A revolutionary Cardano (ADA) payment system designed for freelancers. Block Pay bridges the gap between blockchain technology and everyday transactions, enabling seamless crypto payments for independent workers worldwide.",
    liveLink: "https://block-pay-six.vercel.app/",
    sourceLink: "https://github.com/Messibre/BlockPay.git",
    isAwardWinner: true,
    awardLabel: "1st Place \u2014 Ethiopian DirectEd-Hackathon",
  },
  {
    id: "campaign-kit",
    spineTitle: "Campaign-Kit",
    bookTitle: "Campaign-Kit",
    subtitle: "The Strategy Guide",
    edition: "2026",
    role: "solo Developer",
    techStack: ["AI/ML", "Next.js", "Gemini", "Tailwind CSS", "Vercel"],
    narrative:
      "An AI-powered marketing suite that generates complete campaign assets \u2014 landing pages, email sequences, and social media posts \u2014 all from a single brief. Built during the v0 Hackathon and took the top prize.",
    liveLink: "https://campaign-kit-silk.vercel.app",
    sourceLink: "https://github.com/Messibre/campaignKit.git",
    isAwardWinner: true,
    awardLabel: "v0 Hackathon Winner",
  },
  {
    id: "athena-nexus",
    spineTitle: "Athena Nexus",
    bookTitle: "Athena Nexus",
    subtitle: "The Challenge Atlas",
    edition: "2025",
    role: "Full-Stack Developer",
    techStack: [
      "React 18",
      "React Router v6",
      "Redux Toolkit",
      "Axios",
      "Framer Motion",
      "Node.js",
      "Express",
      "Mongoose",
      "Helmet",
      "CORS Allowlist",
      "Rate Limiting",
      "httpOnly Cookie Auth",
      "Vercel",
    ],
    narrative:
      "A MERN platform for weekly and milestone coding challenges with role-based access, submission workflow, and a public gallery. It helps learners practice consistently, track progress, and share finished work.",
    liveLink: "#",
    sourceLink: "#",
    isAwardWinner: false,
  },
  {
    id: "worldgram",
    spineTitle: "WorldGram",
    bookTitle: "WorldGram",
    subtitle: "The Real-Time Chronicle",
    edition: "2026",
    role: "Backend Developer",
    techStack: [
      "React",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Mongoose",
      "Socket.IO",
      "MongoDB",
    ],
    narrative:
      "A Telegram-style real-time messaging app with private chats, groups, channels, stories, and profile tools. It includes admin controls, permissions, slow mode, livestream controls, reactions, and socket-based live updates.",
    liveLink: "#",
    sourceLink: "https://github.com/Mulu-Girmay/worldGram",
    isAwardWinner: false,
  },
  {
    id: "fullstack-camp-lessons-bot",
    spineTitle: "FSC Lessons Bot",
    bookTitle: "FullStack Camp Lessons Bot",
    subtitle: "The Automation Notes",
    edition: "2026",
    role: "Python Developer",
    techStack: ["Python 3.10+", "Telegram Bot API", "Web Scraping"],
    narrative:
      "A lightweight Telegram bot and lesson scraper for FullStack Camp MERN lessons. Built for local use with quick setup, so lessons can be fetched and shared fast.",
    liveLink: "https://t.me/FullstackCamp_assistant_bot",
    sourceLink: "https://github.com/Messibre/fullstackBot",
    isAwardWinner: false,
  },
  {
    id: "resort-ai",
    spineTitle: "Resort AI",
    bookTitle: "Resort AI",
    subtitle: "The Operations Forecast",
    edition: "2026",
    role: "Backend and AI Developer",
    techStack: [
      "Next.js",
      "FastAPI",
      "Supabase",
      "Forecasting Model using Prophet",
      "Prediction API",
    ],
    narrative:
      "Built for the ALX Hospitality Hackathon 2026, Resort AI is a dashboard for resort operations. It combines forecasting, staff planning, scheduling, promotions, guest feedback, revenue analysis, notifications, audit logs, and an AI assistant, powered by a FastAPI prediction backend.",
    liveLink: "https://kuriftu-resort-delta.vercel.app/",
    sourceLink: "https://github.com/Messibre/kuriftu-resort",
    isAwardWinner: false,
  },
  {
    id: "hh-consulting-architects-engineers",
    spineTitle: "HH Consulting",
    bookTitle: "HH Consulting Architects & Engineers",
    subtitle: "The Design Portfolio",
    edition: "2026",
    role: "Frontend Developer",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Radix UI",
      "Framer Motion",
      "Lucide React",
      "next-themes",
      "React Hook Form",
      "Zod",
    ],
    narrative:
      "A modern portfolio website built for internship purpose for HH Consulting Architects & Engineers PLC, an Ethiopian architecture and engineering firm with over 30 years of experience. The site highlights company work, services, and credibility in a clean and professional format.",
    liveLink: "https://hh-consulting-fawn.vercel.app/",
    sourceLink: "https://github.com/Messibre/HH-Consulting",
    isAwardWinner: false,
  },
  {
    id: "personal-blog",
    spineTitle: "Personal Blog",
    bookTitle: "Blog",
    subtitle: "The Notebook Edition",
    edition: "2026",
    role: "Full-Stack Developer",
    techStack: ["Next.js", "MongoDB"],
    narrative:
      "A minimal, notebook-style personal blog for writing and publishing my thoughts. Built with Next.js and MongoDB to keep the reading and writing experience simple and focused.",
    liveLink: "https://meseret-birhanu.vercel.app/",
    sourceLink: "https://github.com/Messibre/blog",
    isAwardWinner: false,
  },

  {
    id: "kids-hub",
    spineTitle: "Kids-Hub",
    bookTitle: "Kids-Hub",
    subtitle: "The Illustrated Fable",
    edition: "2025",
    role: "Lead Developer",
    techStack: [
      "React",
      "Javascript",
      "Canvas API",
      "Web Audio",
      "Tailwind CSS",
    ],
    narrative:
      "An interactive playground for children featuring painting tools, educational quizzes, animated stories, and a virtual piano. Designed to spark creativity and curiosity in young minds.",
    liveLink: "https://kids-hub-snowy.vercel.app/",
    sourceLink: "https://github.com/Messibre/kids-hub.git",
    isAwardWinner: false,
  },
  {
    id: "teachers-manage",
    spineTitle: "TeachersManage",
    bookTitle: "TeachersManage",
    subtitle: "The Ledger",
    edition: "2026",
    role: "Prompt Engineer",
    techStack: ["java", "mySQL", "javaFx"],
    narrative:
      "A robust school management system built for faculty and administration. Handles scheduling, grading, attendance, and communication in one unified platform.",
    liveLink: "#",
    sourceLink: "https://github.com/Messibre/TeachersManage.git",
    isAwardWinner: false,
  },
];
