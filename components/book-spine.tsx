"use client"

import { motion } from "framer-motion"
import type { Project } from "@/lib/projects"
import { Award } from "lucide-react"

interface BookSpineProps {
  project: Project
  onClick: () => void
  index: number
}

const SPINE_HEIGHTS: Record<string, number> = {
  "about-me": 280,
  "block-pay": 260,
  "campaign-kit": 270,
  "athena-nexus": 245,
  "tutor-app": 255,
  "kids-hub": 240,
  "teachers-manage": 250,
}

export function BookSpine({ project, onClick, index }: BookSpineProps) {
  const spineHeight = SPINE_HEIGHTS[project.id] ?? 250
  const spineWidth = 58

  return (
    <motion.button
      layout
      layoutId={`book-${project.id}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -14, transition: { duration: 0.3 } }}
      className="group relative flex-shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      style={{ width: spineWidth, height: spineHeight }}
      aria-label={`Open ${project.bookTitle}`}
    >
      {/* Spine body - aged parchment */}
      <div
        className={`relative flex h-full w-full flex-col items-center justify-between rounded-sm py-4 transition-shadow duration-300 ${
          project.isAwardWinner
            ? "border-2 border-gold shadow-[0_4px_20px_-2px_rgba(212,175,55,0.35)]"
            : "border border-parchment/30 shadow-[4px_6px_16px_-2px_rgba(0,0,0,0.6),_1px_2px_4px_-1px_rgba(0,0,0,0.4)]"
        } group-hover:shadow-[4px_6px_24px_-2px_rgba(0,0,0,0.7),_0_0_20px_-4px_hsl(var(--cyan-glow)/0.3)]`}
        style={{
          background:
            "linear-gradient(180deg, hsl(39 45% 72%) 0%, hsl(39 42% 62%) 100%)",
        }}
      >
        {/* Paper-grain noise texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-sm opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
          aria-hidden="true"
        />

        {/* Gold seal for award winners */}
        {project.isAwardWinner && (
          <div className="relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.5)]">
            <Award className="h-3.5 w-3.5 text-charcoal" />
          </div>
        )}

        {/* Title - vertical, dark ink on parchment */}
        <div
          className="relative z-10 flex flex-1 items-center justify-center"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="font-serif text-xs font-bold tracking-wider text-charcoal group-hover:text-charcoal/80 transition-colors duration-300">
            {project.spineTitle}
          </span>
        </div>

        {/* Edition year at bottom - dark ink */}
        <span className="relative z-10 font-mono text-[9px] text-charcoal/60 tracking-widest">
          {project.edition}
        </span>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute -inset-1 -z-10 rounded-md bg-cyan-glow/0 transition-all duration-300 group-hover:bg-cyan-glow/5 group-hover:blur-md" />
    </motion.button>
  )
}
