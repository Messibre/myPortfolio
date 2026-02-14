"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { BookSpine } from "@/components/book-spine"
import { OpenBook } from "@/components/open-book"
import { projects } from "@/lib/projects"

export function Bookshelf() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Keyboard shortcut to close
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedIndex(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Lock body scroll when a book is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedIndex])

  const selectedBook =
    selectedIndex !== null ? projects[selectedIndex] : null

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 md:px-8">
      {/* Radial gradient background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, hsl(222 40% 8%) 0%, hsl(var(--background)) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16 text-center md:mb-20"
      >
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.45em] text-muted-foreground md:text-xs">
          {"The collected works of"}
        </p>
        <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight text-parchment md:text-5xl lg:text-6xl text-balance">
          Meseret Birhanu
        </h1>
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-8 bg-parchment/20" aria-hidden="true" />
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground md:text-xs">
            {"A Portfolio in Volumes"}
          </p>
          <span className="h-px w-8 bg-parchment/20" aria-hidden="true" />
        </div>
      </motion.header>

      {/* Shelf area */}
      <div className="relative w-full max-w-4xl">
        {/* The books */}
        <div className="flex flex-wrap items-end justify-center gap-3 pb-6 md:flex-nowrap md:gap-4">
          {projects.map((project, i) => (
            <BookSpine
              key={project.id}
              project={project}
              onClick={() => setSelectedIndex(i)}
              index={i}
            />
          ))}
        </div>

        {/* The shelf surface */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
          <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />
          <div className="h-8 w-full bg-gradient-to-b from-foreground/[0.02] to-transparent" />
        </motion.div>
      </div>

      {/* Instruction hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-12 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground/50"
      >
        {"Select a volume to read"}
      </motion.p>

      {/* Open book overlay */}
      <AnimatePresence mode="wait">
        {selectedBook && selectedIndex !== null && (
          <OpenBook
            key={selectedBook.id}
            project={selectedBook}
            currentIndex={selectedIndex}
            totalProjects={projects.length}
            onClose={() => setSelectedIndex(null)}
            onNavigate={(index) => setSelectedIndex(index)}
          />
        )}
      </AnimatePresence>
    </main>
  )
}
