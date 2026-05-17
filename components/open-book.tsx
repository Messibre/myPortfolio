"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  BookOpen,
  X,
} from "lucide-react";

/* ── Types ─────────────────────────────────────────────────── */

interface OpenBookProps {
  project: Project;
  currentIndex: number;
  totalProjects: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

type FlipDir = "next" | "prev" | null;

/* ── Helpers ───────────────────────────────────────────────── */

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

function toRoman(n: number) {
  return ROMAN[n] ?? String(n + 1);
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function SocialIcon({ icon }: { icon: "github" | "linkedin" | "email" | "x" }) {
  switch (icon) {
    case "github":
      return <Github className="h-4 w-4" />;
    case "linkedin":
      return <Linkedin className="h-4 w-4" />;
    case "email":
      return <Mail className="h-4 w-4" />;
    case "x":
      return <XIcon className="h-4 w-4" />;
  }
}

/* Noise texture inline SVG for paper-grain feel */
const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

/* Deckle edge SVG clipPath */
function DeckleClipDef() {
  return (
    <svg className="absolute h-0 w-0" aria-hidden="true">
      <defs>
        <clipPath id="deckle-edge" clipPathUnits="objectBoundingBox">
          <path
            d={[
              "M 0.003,0.006",
              "C 0.02,0.003 0.05,0.008 0.08,0.004",
              "C 0.12,0.001 0.16,0.007 0.20,0.003",
              "C 0.25,0.000 0.30,0.006 0.35,0.003",
              "C 0.40,0.001 0.45,0.005 0.50,0.002",
              "C 0.55,0.000 0.60,0.006 0.65,0.003",
              "C 0.70,0.001 0.75,0.005 0.80,0.002",
              "C 0.85,0.000 0.90,0.007 0.95,0.004",
              "C 0.97,0.002 0.99,0.005 0.997,0.006",
              "C 0.999,0.03 0.995,0.06 0.998,0.10",
              "C 1.000,0.15 0.996,0.20 0.999,0.25",
              "C 1.001,0.30 0.997,0.35 0.999,0.40",
              "C 1.001,0.45 0.996,0.50 0.999,0.55",
              "C 1.001,0.60 0.997,0.65 0.999,0.70",
              "C 1.001,0.75 0.996,0.80 0.998,0.85",
              "C 1.000,0.90 0.997,0.95 0.998,0.994",
              "C 0.97,0.997 0.95,0.993 0.92,0.996",
              "C 0.88,0.999 0.84,0.994 0.80,0.997",
              "C 0.75,1.000 0.70,0.994 0.65,0.997",
              "C 0.60,0.999 0.55,0.995 0.50,0.998",
              "C 0.45,1.000 0.40,0.994 0.35,0.997",
              "C 0.30,0.999 0.25,0.995 0.20,0.997",
              "C 0.15,1.000 0.10,0.994 0.05,0.997",
              "C 0.03,0.999 0.01,0.995 0.003,0.994",
              "C 0.001,0.95 0.005,0.90 0.002,0.85",
              "C 0.000,0.80 0.004,0.75 0.001,0.70",
              "C -0.001,0.65 0.003,0.60 0.001,0.55",
              "C -0.001,0.50 0.004,0.45 0.001,0.40",
              "C -0.001,0.35 0.003,0.30 0.001,0.25",
              "C -0.001,0.20 0.004,0.15 0.002,0.10",
              "C 0.000,0.06 0.004,0.03 0.003,0.006",
              "Z",
            ].join(" ")}
          />
        </clipPath>
      </defs>
    </svg>
  );
}

/* ── Page curl corner (top-right) ──────────────────────────── */

function PageCurlCorner({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="pointer-events-none absolute right-0 top-0 z-30"
      initial={false}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" aria-hidden="true">
        {/* Shadow under the curl */}
        <path
          d="M 60 0 L 60 20 Q 55 22 48 18 Q 40 12 38 0 Z"
          fill="rgba(0,0,0,0.15)"
        />
        {/* Curled paper - lighter underside */}
        <path
          d="M 60 0 L 60 16 Q 56 18 50 14 Q 44 10 42 0 Z"
          fill="hsl(39 50% 78%)"
          stroke="hsl(39 35% 58%)"
          strokeWidth="0.5"
        />
        {/* Highlight on the fold */}
        <path
          d="M 60 0 L 60 8 Q 58 10 54 8 Q 50 5 48 0 Z"
          fill="hsl(39 55% 84%)"
          opacity="0.7"
        />
      </svg>
    </motion.div>
  );
}

/* ── Page curl corner (top-left - mirrored) ────────────────── */

function PageCurlCornerLeft({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="pointer-events-none absolute left-0 top-0 z-30"
      initial={false}
      animate={visible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        aria-hidden="true"
        style={{ transform: "scaleX(-1)" }}
      >
        <path
          d="M 60 0 L 60 20 Q 55 22 48 18 Q 40 12 38 0 Z"
          fill="rgba(0,0,0,0.15)"
        />
        <path
          d="M 60 0 L 60 16 Q 56 18 50 14 Q 44 10 42 0 Z"
          fill="hsl(39 50% 78%)"
          stroke="hsl(39 35% 58%)"
          strokeWidth="0.5"
        />
        <path
          d="M 60 0 L 60 8 Q 58 10 54 8 Q 50 5 48 0 Z"
          fill="hsl(39 55% 84%)"
          opacity="0.7"
        />
      </svg>
    </motion.div>
  );
}

/* ── Flip zone tooltip ─────────────────────────────────────── */

function FlipTooltip({
  label,
  side,
  mouseY,
}: {
  label: string;
  side: "left" | "right";
  mouseY: number;
}) {
  return (
    <div
      className="pointer-events-none absolute z-40 whitespace-nowrap rounded bg-charcoal/80 px-2.5 py-1 font-serif text-[11px] italic text-parchment-light shadow-lg backdrop-blur-sm"
      style={{
        top: mouseY,
        [side === "right" ? "right" : "left"]: "18%",
        transform: "translateY(-50%)",
      }}
    >
      {label}
    </div>
  );
}

/* ── "Finis" end page ──────────────────────────────────────── */

function FinisContent({ onReturnToShelf }: { onReturnToShelf: () => void }) {
  return (
    <div className="flex h-full flex-col items-center justify-center p-8 text-center md:col-span-2">
      {/* Ornamental top */}
      <div className="mb-6 flex items-center gap-4">
        <div className="h-px w-12 bg-charcoal/20" />
        <span className="font-serif text-xl text-charcoal/30">{"\u2767"}</span>
        <div className="h-px w-12 bg-charcoal/20" />
      </div>

      <h2 className="mb-3 font-serif text-5xl font-bold italic tracking-tight text-charcoal md:text-6xl">
        Finished
      </h2>

      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.35em] text-charcoal/40">
        You have reached the end of this collection
      </p>

      <p className="mx-auto mb-10 max-w-sm font-serif text-sm leading-relaxed text-charcoal/60">
        Every book returns to the shelf, and every shelf awaits a new reader.
        Thank you for browsing these volumes.
      </p>

      {/* Ornamental bottom */}
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px w-16 bg-charcoal/15" />
        <span className="font-serif text-sm text-charcoal/25">{"\u273D"}</span>
        <div className="h-px w-16 bg-charcoal/15" />
      </div>

      <button
        onClick={onReturnToShelf}
        className="group cursor-pointer rounded-md border border-charcoal/15 bg-charcoal/5 px-6 py-2.5 transition-all hover:border-charcoal/30 hover:bg-charcoal/10"
      >
        <span className="font-serif text-sm italic text-charcoal/70 group-hover:text-charcoal">
          Return to the Shelf
        </span>
      </button>
    </div>
  );
}

/* ── Page flip animation variants ──────────────────────────── */

const pageVariants = {
  enterFromRight: {
    rotateY: 90,
    opacity: 0,
    transformOrigin: "left center",
  },
  enterFromLeft: {
    rotateY: -90,
    opacity: 0,
    transformOrigin: "right center",
  },
  center: {
    rotateY: 0,
    opacity: 1,
    transformOrigin: "center center",
  },
  exitToLeft: {
    rotateY: -90,
    opacity: 0,
    transformOrigin: "right center",
  },
  exitToRight: {
    rotateY: 90,
    opacity: 0,
    transformOrigin: "left center",
  },
};

const pageTransition = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as const,
};

/* ── Main OpenBook component ───────────────────────────────── */

export function OpenBook({
  project,
  currentIndex,
  totalProjects,
  onClose,
  onNavigate,
}: OpenBookProps) {
  const [hoverRight, setHoverRight] = useState(false);
  const [hoverLeft, setHoverLeft] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const [flipDir, setFlipDir] = useState<FlipDir>(null);
  const [showFinis, setShowFinis] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);
  const isFlipping = useRef(false);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalProjects - 1;

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!bookRef.current) return;
    const rect = bookRef.current.getBoundingClientRect();
    setMouseY(e.clientY - rect.top);
  }, []);

  const handleFlipNext = useCallback(() => {
    if (isFlipping.current) return;
    if (showFinis) return;
    if (isLast) {
      // Show "Finis" end page
      isFlipping.current = true;
      setFlipDir("next");
      setShowFinis(true);
      setTimeout(() => {
        isFlipping.current = false;
      }, 550);
      return;
    }
    isFlipping.current = true;
    setFlipDir("next");
    setTimeout(() => {
      onNavigate(currentIndex + 1);
      isFlipping.current = false;
    }, 100);
  }, [currentIndex, isLast, onNavigate, showFinis]);

  const handleFlipPrev = useCallback(() => {
    if (isFlipping.current) return;
    if (showFinis) {
      // Return from Finis to last project
      isFlipping.current = true;
      setFlipDir("prev");
      setShowFinis(false);
      setTimeout(() => {
        isFlipping.current = false;
      }, 550);
      return;
    }
    if (isFirst) return;
    isFlipping.current = true;
    setFlipDir("prev");
    setTimeout(() => {
      onNavigate(currentIndex - 1);
      isFlipping.current = false;
    }, 100);
  }, [currentIndex, isFirst, onNavigate, showFinis]);

  /* Arrow key navigation */
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") handleFlipNext();
      if (e.key === "ArrowLeft") handleFlipPrev();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleFlipNext, handleFlipPrev]);

  /* Volume label */
  const volumeLabel = showFinis
    ? `Finis \u00B7 Vol. ${toRoman(totalProjects - 1)} / ${toRoman(totalProjects - 1)}`
    : `Vol. ${toRoman(currentIndex)} / ${toRoman(totalProjects - 1)}`;

  /* Can navigate? */
  const canGoNext = !showFinis || false;
  const canGoPrev = !isFirst || showFinis;

  return (
    <>
      <DeckleClipDef />

      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-background/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Book spread */}
      <motion.div
        ref={bookRef}
        layoutId={`book-${project.id}`}
        className="fixed inset-4 z-50 m-auto flex max-h-[90vh] max-w-[920px] flex-col overflow-hidden md:max-h-[620px] md:flex-row"
        style={{
          background:
            "linear-gradient(135deg, hsl(39 45% 74%) 0%, hsl(39 40% 66%) 50%, hsl(39 38% 62%) 100%)",
          boxShadow:
            "0 25px 60px -12px rgba(0,0,0,0.7), 0 12px 30px -8px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
          clipPath: "url(#deckle-edge)",
          perspective: "1200px",
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onMouseMove={handleMouseMove}
      >
        {/* Paper-grain noise overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.05]"
          style={{
            backgroundImage: NOISE_BG,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
          aria-hidden="true"
        />

        {/* Binding fold shadow */}
        <div
          className="pointer-events-none absolute inset-y-0 left-1/2 z-[2] hidden w-10 -translate-x-1/2 md:block"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.06) 20%, rgba(0,0,0,0.14) 40%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.14) 60%, rgba(0,0,0,0.06) 80%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-30 flex cursor-pointer items-center gap-2 rounded-md border border-charcoal/15 bg-charcoal/8 px-3 py-1.5 transition-all hover:bg-charcoal/15"
          aria-label="Close book and return to shelf"
        >
          <X className="h-3.5 w-3.5 text-charcoal/70" />
          <span className="font-serif text-xs italic text-charcoal/70">
            Return to Shelf
          </span>
        </button>

        {/* Award badge */}
        {project.isAwardWinner && project.awardLabel && !showFinis && (
          <div className="absolute left-4 top-4 z-30">
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-gold bg-gold/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-charcoal shadow-[0_0_10px_rgba(212,175,55,0.3)]">
              <BookOpen className="h-3 w-3" />
              {project.awardLabel}
            </span>
          </div>
        )}

        {/* ── Page content with flip animation ────────────── */}
        <AnimatePresence mode="wait" initial={false}>
          {showFinis ? (
            <motion.div
              key="finis"
              className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto"
              variants={pageVariants}
              initial="enterFromRight"
              animate="center"
              exit="exitToRight"
              transition={pageTransition}
              style={{ perspective: "1200px" }}
            >
              <FinisContent onReturnToShelf={onClose} />
            </motion.div>
          ) : (
            <motion.div
              key={project.id}
              className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto md:flex-row md:overflow-hidden"
              variants={pageVariants}
              initial={
                flipDir === "next"
                  ? "enterFromRight"
                  : flipDir === "prev"
                    ? "enterFromLeft"
                    : "center"
              }
              animate="center"
              exit={flipDir === "next" ? "exitToLeft" : "exitToRight"}
              transition={pageTransition}
              style={{ perspective: "1200px" }}
            >
              {/* Left page - Front Matter */}
              <div className="flex flex-1 flex-col justify-between p-8 pt-16 md:p-10 md:pt-10">
                {project.isAbout ? (
                  <div className="flex flex-col gap-6">
                    <div>
                      <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.35em] text-charcoal/50">
                        {"Author\u2019s Preface"}
                      </p>
                      <h2 className="mb-2 font-serif text-3xl font-bold tracking-tight text-charcoal md:text-4xl">
                        {project.bookTitle}
                      </h2>
                      <p className="font-serif text-sm italic text-charcoal/60">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 bg-charcoal/15" />
                      <span className="font-serif text-sm text-charcoal/30">
                        {"\u2767"}
                      </span>
                      <div className="h-px flex-1 bg-charcoal/15" />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div>
                        <p className="mb-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-charcoal/40">
                          First Published
                        </p>
                        <p className="font-mono text-sm text-charcoal/80">
                          {project.edition}
                        </p>
                      </div>
                      <div>
                        <p className="mb-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-charcoal/40">
                          Vocation
                        </p>
                        <p className="font-mono text-sm text-charcoal/80">
                          {project.role}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-charcoal/40">
                          {"Languages & Tools"}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-block rounded border border-charcoal/15 bg-charcoal/5 px-2 py-0.5 font-mono text-[10px] text-charcoal/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.35em] text-charcoal/50">
                      {project.subtitle}
                    </p>
                    <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-charcoal md:text-4xl">
                      {project.bookTitle}
                    </h2>
                    <div className="mb-6 h-px w-16 bg-charcoal/20" />
                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="mb-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-charcoal/40">
                          Edition
                        </p>
                        <p className="font-mono text-sm text-charcoal/80">
                          {project.edition}
                        </p>
                      </div>
                      <div>
                        <p className="mb-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-charcoal/40">
                          Role
                        </p>
                        <p className="font-mono text-sm text-charcoal/80">
                          {project.role}
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.25em] text-charcoal/40">
                          {"The Ink \u2014 Tech Stack"}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="inline-block rounded border border-charcoal/15 bg-charcoal/5 px-2 py-0.5 font-mono text-[10px] text-charcoal/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Center spine crease */}
              <div className="hidden w-px bg-charcoal/15 md:block" />
              <div className="mx-6 h-px bg-charcoal/15 md:hidden" />

              {/* Right page - The Body */}
              <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
                <div>
                  {project.isAbout && project.bio ? (
                    <>
                      <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.35em] text-charcoal/50">
                        The Story
                      </p>
                      <p className="mb-8 font-serif text-base leading-relaxed text-charcoal/85 md:text-lg">
                        {project.bio}
                      </p>
                      {project.socials && (
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center gap-3">
                            <div className="h-px flex-1 bg-charcoal/15" />
                            <span className="font-serif text-sm text-charcoal/30">
                              {"\u2767"}
                            </span>
                            <div className="h-px flex-1 bg-charcoal/15" />
                          </div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.35em] text-charcoal/50">
                            Contact the Publisher
                          </p>
                          <div className="flex flex-col gap-2">
                            {project.socials.map((social, i) => (
                              <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link flex items-center gap-3 rounded border border-charcoal/10 bg-charcoal/5 px-4 py-2.5 transition-all hover:border-charcoal/25 hover:bg-charcoal/10"
                              >
                                <span className="font-mono text-[10px] text-charcoal/40">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <SocialIcon icon={social.icon} />
                                <span className="font-mono text-xs text-charcoal/75 group-hover/link:text-charcoal">
                                  {social.label}
                                </span>
                                <ExternalLink className="ml-auto h-3 w-3 text-charcoal/30 transition-colors group-hover/link:text-charcoal/60" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.35em] text-charcoal/50">
                        The Narrative
                      </p>
                      <p className="mb-8 font-serif text-sm leading-relaxed text-charcoal/85 md:text-base">
                        {project.narrative}
                      </p>
                    </>
                  )}
                </div>

                {!project.isAbout && (
                  <div className="flex gap-3 pt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 rounded border border-charcoal/15 bg-charcoal/5 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-charcoal/70 transition-all hover:border-charcoal/30 hover:bg-charcoal/10 hover:text-charcoal"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Read Online
                    </a>
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 rounded border border-charcoal/15 bg-charcoal/5 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-charcoal/70 transition-all hover:border-charcoal/30 hover:bg-charcoal/10 hover:text-charcoal"
                    >
                      <Code2 className="h-3.5 w-3.5" />
                      Source Code
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Flip hotspots (invisible, over entire book) ─── */}

        {/* Left flip zone - previous project */}
        {canGoPrev && (
          <div
            className="absolute bottom-10 left-0 top-0 z-20 hidden md:block"
            style={{ width: "15%", cursor: "w-resize" }}
            onMouseEnter={() => setHoverLeft(true)}
            onMouseLeave={() => setHoverLeft(false)}
            onClick={handleFlipPrev}
            role="button"
            tabIndex={0}
            aria-label="Previous project"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleFlipPrev();
            }}
          >
            <PageCurlCornerLeft visible={hoverLeft} />
            {hoverLeft && (
              <FlipTooltip
                label={showFinis ? "Back to Last Volume" : "Previous Volume"}
                side="left"
                mouseY={mouseY}
              />
            )}
          </div>
        )}

        {/* Right flip zone - next project */}
        {(canGoNext || !showFinis) && (
          <div
            className="absolute bottom-10 right-0 top-0 z-20 hidden md:block"
            style={{ width: "15%", cursor: "e-resize" }}
            onMouseEnter={() => setHoverRight(true)}
            onMouseLeave={() => setHoverRight(false)}
            onClick={handleFlipNext}
            role="button"
            tabIndex={0}
            aria-label="Next project"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleFlipNext();
            }}
          >
            <PageCurlCorner visible={hoverRight} />
            {hoverRight && (
              <FlipTooltip
                label={isLast && !showFinis ? "Finis" : "Next Volume"}
                side="right"
                mouseY={mouseY}
              />
            )}
          </div>
        )}

        {/* ── Mobile navigation arrows ─────────────────────── */}
        <div className="flex items-center justify-between border-t border-charcoal/10 px-6 py-3 md:hidden">
          <button
            onClick={handleFlipPrev}
            disabled={isFirst && !showFinis}
            className="font-serif text-xs italic text-charcoal/50 disabled:opacity-25"
          >
            {"< Prev"}
          </button>
          <span className="font-mono text-[10px] tracking-[0.2em] text-charcoal/40">
            {volumeLabel}
          </span>
          <button
            onClick={handleFlipNext}
            disabled={showFinis}
            className="font-serif text-xs italic text-charcoal/50 disabled:opacity-25"
          >
            {"Next >"}
          </button>
        </div>

        {/* ── Page number footer (desktop) ─────────────────── */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 hidden items-center justify-center pb-3 md:flex">
          <span className="font-mono text-[10px] tracking-[0.25em] text-charcoal/35">
            {volumeLabel}
          </span>
        </div>
      </motion.div>
    </>
  );
}
