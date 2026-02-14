export interface Project {
  id: string
  spineTitle: string
  bookTitle: string
  subtitle: string
  edition: string
  role: string
  techStack: string[]
  narrative: string
  liveLink: string
  sourceLink: string
  isAwardWinner: boolean
  awardLabel?: string
  isAbout?: boolean
  bio?: string
  socials?: { label: string; href: string; icon: "github" | "linkedin" | "email" | "x" }[]
}
export const projects: Project[] = [
  {
    id: "about-me",
    spineTitle: "The Author",
    bookTitle: "About Me",
    subtitle: "The Autobiography",
    edition: "2026",
    role: "Full-Stack Developer",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    narrative:
      "A developer who writes code like prose and builds interfaces like architecture. Passionate about crafting digital experiences that feel tactile, intentional, and alive.",
    liveLink: "#",
    sourceLink: "#",
    isAwardWinner: false,
    isAbout: true,
    bio: "I build things for the web with the same care a bookbinder gives to a first edition. Every pixel, every interaction, every line of code is a deliberate choice in the story I'm telling.",
    socials: [
      { label: "GitHub", href: "https://github.com/Messibre", icon: "github" },
      { label: "LinkedIn", href: "https://linkedin.com/in/meseret-birhanu-nigus", icon: "linkedin" },
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
    techStack: ["Cardano", "ADA", "React", "Node.js", "Smart Contracts"],
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
    subtitle: "The Sisterhood Codex",
    edition: "2025",
    role: "Full-Stack Developer",
    techStack: ["React", "Nodejs", "javascript", "Tailwind CSS"],
    narrative:
      "A community platform that groups girls in threes for weekly web development challenges. Athena Nexus fosters collaboration, mentorship, and skill-building through structured team-based learning.",
    liveLink: "https://athena-nexus.vercel.app/",
    sourceLink: "https://github.com/Messibre/Athena-Nexus.git",
    isAwardWinner: false,
  },
  {
    id: "tutor-app",
    spineTitle: "Tutor App",
    bookTitle: "Tutor App",
    subtitle: "The Educational Journal",
    edition: "2025",
    role: "Full-Stack Developer",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    narrative:
      "A direct bridge connecting parents with tutors. The platform simplifies the search, vetting, and booking process, making quality education accessible to every household.",
    liveLink: "https://tutor-finder-g1zk.vercel.app/",
    sourceLink: "https://github.com/Messibre/Tutor_app.git",
    isAwardWinner: false,
  },
  {
    id: "kids-hub",
    spineTitle: "Kids-Hub",
    bookTitle: "Kids-Hub",
    subtitle: "The Illustrated Fable",
    edition: "2025",
    role: "Lead Developer",
    techStack: ["React", "Javascript", "Canvas API", "Web Audio", "Tailwind CSS"],
    narrative:
      "An interactive playground for children featuring painting tools, educational quizzes, animated stories, and a virtual piano. Designed to spark creativity and curiosity in young minds.",
    liveLink: "#",
    sourceLink: "https://github.com/Messibre/kids-hub.git",
    isAwardWinner: false,
  },
  {
    id: "teachers-manage",
    spineTitle: "TeachersManage",
    bookTitle: "TeachersManage",
    subtitle: "The Ledger",
    edition: "2026",
    role: "Full-Stack Developer",
    techStack: ["java", "mySQL", "javaFx"],
    narrative:
      "A robust school management system built for faculty and administration. Handles scheduling, grading, attendance, and communication in one unified platform.",
    liveLink: "#",
    sourceLink: "https://github.com/Messibre/TeachersManage.git",
    isAwardWinner: false,
  },
]
