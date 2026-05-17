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
    role: "Full-Stack Developer & 2nd-year Software Engineering student at AAU — I debug stories, not just code",
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
    bio: "I build things for the web with the same care a bookbinder gives to a first edition. Every pixel, every interaction, every line of code is a deliberate choice in the story I'm telling.Behind each book is a messy first draft - I debug that mess until the story holds.",
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
      "Athena Nexus solves the consistency gap faced by students by shifting from individual effort to team‑based collaboration with hard deadlines and milestone‑driven projects. The platform enforces role‑based access: admins define weekly challenges and long‑term milestones, registered users submit their work for review, and guests can browse challenges, milestones, and the public gallery but cannot submit. This structure turns abstract 'practice more' into accountable, team‑level progress - directly addressing the core problem of waning consistency through clear expectations, visible deadlines, and a submission workflow that separates viewers from active participants.",
    liveLink: "https://athena-nexus.vercel.app/",
    sourceLink: "https://github.com/Messibre/Athena-Nexus",
    isAwardWinner: false,
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
      "Campaign‑Kit was built for a v0 Hackathon (where it took top prize) to solve a core marketing friction: creating cohesive landing pages, email sequences, and social posts from a single campaign brief normally requires three different tools and hours of manual alignment. Using Google Gemini for content generation, Next.js for the full‑stack orchestration, and Tailwind CSS for rapid UI iteration, I built an AI‑powered suite that ingests one brief and outputs three fully coherent asset types - maintaining consistent tone, key messaging, and call‑to‑action across formats. The hardest technical challenge was ensuring the AI didn't produce contradictory or repetitive copy between email and social outputs; I solved this by chaining prompts with cross‑format memory, where the generated landing page summary informs the email sequence, and that sequence in turn guides the social posts - creating a logical flow rather than three isolated generations.",
    liveLink: "https://campaign-kit-silk.vercel.app",
    sourceLink: "https://github.com/Messibre/campaignKit.git",
    isAwardWinner: true,
    awardLabel: "v0 Hackathon Winner",
  },
  {
    id: "personaai",
    spineTitle: "PersonaAI",
    bookTitle: "PersonaAI",
    subtitle: "The personal brand AI engine",
    edition: "2026",
    role: "frontend Developer",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "Google Gemini 2.5 Flash",
      "Vercel AI SDK",
      "pdf-parse",
    ],
    narrative:
      "Many people struggle to build a portfolio because they don't know design or don't want to host a website. I built PersonaAI to solve this. It generates a complete portfolio website from just a GitHub username, a PDF resume, or a public Notion page. The AI uses Google Gemini 2.5 Flash to write all the content and pick the right layout. I built this for the Zero to Agent hackathon, where it won first place. The hardest technical part was pulling data from three different sources (GitHub, resume PDF, Notion) and merging them into one clean prompt for the AI without losing important details. I solved this by creating separate API routes for each source, then combining the extracted text into a structured JSON object before sending it to Gemini. The app also streams the generated HTML in real time so users see the portfolio appear piece by piece.",
    liveLink: "https://personaai-build.vercel.app/",
    sourceLink: "https://github.com/Messibre/v0-personaai-build",
    isAwardWinner: true,
    awardLabel: "Zero to Agent Hackathon Winner",
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
      "Freelancers often struggle to get paid across borders due to bank fees, delays, or limited access. Block Pay solves this by letting freelancers accept Cardano (ADA) directly, without needing a bank. I built the smart contract using Aiken on the Cardano blockchain, wrote REST APIs to connect the blockchain to a React frontend, and used Node.js to handle user requests. The hardest part was making sure payments are final and cannot be double-spent. I solved this by writing a smart contract that checks each transaction against the blockchain ledger before marking it as complete. Now freelancers can receive crypto payments instantly, with full control over their money.",
    liveLink: "https://block-pay-six.vercel.app/",
    sourceLink: "https://github.com/Messibre/BlockPay.git",
    isAwardWinner: true,
    awardLabel: "1st Place \u2014 Ethiopian DirectEd-Hackathon",
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
      "Real-time chat apps need to feel instant, even when many users are talking at once. WorldGram is a messaging app with private chats, groups, channels, stories, and live controls like slow mode and livestream permissions. As the backend developer, I used Node.js, Express, and MongoDB for data storage, and Socket.IO to send messages live without refreshing the page. The biggest challenge was keeping messages in the right order when hundreds of users send them at the same time. I solved this by giving every message a timestamp and a sequence number on the server, so the app always shows the correct order even under heavy load. The result is a smooth, real‑time experience similar to Telegram.",
    liveLink: "#",
    sourceLink: "https://github.com/Mulu-Girmay/worldGram",
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
      "Resort managers often struggle to guess how many guests will come, how many staff to schedule, or what revenue to expect. ResortAI solves this by using a forecasting model that learns from past data. We trained the model by feeding it two years of resort records — for each week, we gave it both the actual numbers and our earlier predictions so the model could learn from mistakes. The backend uses FastAPI to serve predictions, Next.js for the dashboard, and Supabase for storage. The biggest challenge was making the model accurate enough for real planning. We solved this by letting the model compare its own forecast against what actually happened, then adjust its internal math over many cycles. Now ResortAI can predict guest arrivals, staff needs, and revenue with useful accuracy, helping resorts plan better.",
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
      "A company with over 30 years of experience needs a website that looks solid and easy to navigate. HH Consulting is a modern portfolio site I built as a frontend developer for an Ethiopian architecture and engineering firm. I used Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion. One challenge was showing many different projects and services without making the site feel cluttered or slow. I solved this by building reusable cards that load only when needed, keeping the page clean and fast. Another challenge was making sure the contact form sends valid data without errors. I used React Hook Form with Zod to validate user input before it ever reaches the server.",
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
      "I wanted a place where, years from now, I can look back at my thoughts and writing without depending on other platforms. So I built Blog - a simple, notebook-style app just for myself. I used Next.js and MongoDB to store posts, and kept everything minimal. There is no login for readers, no extra features, just a clean page that shows my articles in reverse order.  For keeping the writing and reading experience clean without adding things I don't need yet. I started small - plain text, no rich formatting - and only adding features when I actually miss them.",
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
      "Kids learn best when they're playing, but most educational apps separate drawing, music, and quizzes into different places. Kids-Hub brings them together in one interactive playground. As the lead developer, I used React with the Canvas API for drawing tools, Web Audio for the virtual piano, and Tailwind CSS for a colorful layout. The hardest part was making sure the painting tool stayed smooth and didn't lag, even on slower devices. I solved this by limiting how often the canvas saves each stroke and clearing only the parts that changed. I also built the app to work on mobile using Capacitor, so it can run on Android devices too. The result is a responsive, creative space where children can draw, play music, and take quizzes without switching apps.",
    liveLink: "https://kids-hub-snowy.vercel.app/",
    sourceLink: "https://github.com/Messibre/kids-hub.git",
    isAwardWinner: false,
  },
];
