"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FiMoon, FiSun, FiArrowUpRight, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useTheme } from "@/lib/contexts/theme-context";
import type { Project } from "@/lib/projects";

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function CaseStudy({
  project,
  next,
}: {
  project: Project;
  next: { slug: string; name: string };
}) {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="relative">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-default bg-background-primary/85 backdrop-blur-md theme-transition">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="font-display text-lg font-medium tracking-tight">
            Tolulope Olonibua
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/#work"
              className="hidden items-center gap-2 text-sm text-text-muted transition-colors hover:text-text-primary sm:inline-flex"
            >
              <FiArrowLeft size={15} /> All work
            </Link>
            <button
              onClick={toggleTheme}
              aria-label="Toggle colour theme"
              className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-default text-text-secondary transition-colors hover:border-hover hover:text-text-primary"
            >
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </div>
        </nav>
      </header>

      {/* HEADER */}
      <section className="mx-auto max-w-5xl px-5 pt-32 sm:px-8 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="kicker mb-5">
            {project.discipline} · {project.year}
          </p>
          <h1 className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            {project.tagline}
          </p>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-medium text-[var(--background-primary)] transition-transform hover:-translate-y-0.5"
          >
            Visit live site
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          className="frame mt-12 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={project.hero}
            alt={`${project.name} — hero screenshot`}
            className="w-full object-cover"
          />
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="space-y-6">
              <p className="kicker">Overview</p>
              <p className="font-display text-xl font-light leading-relaxed tracking-tight sm:text-2xl">
                {project.description}
              </p>
              <ul className="space-y-3 pt-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[15px] text-text-secondary">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8 rounded-xl border border-default p-6">
              <div>
                <div className="kicker mb-3">Discipline</div>
                <div className="text-[15px] text-text-secondary">
                  {project.discipline}
                </div>
              </div>
              <div>
                <div className="kicker mb-3">Built with</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-default px-3 py-1 text-xs text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="kicker mb-3">Live</div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1 text-[15px] text-text-primary"
                >
                  {project.liveUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  <FiArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      {project.gallery.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 pb-8 sm:px-8">
          <div className="space-y-6">
            {project.gallery.map((src, i) => (
              <Reveal key={src} delay={(i % 2) * 0.05}>
                <div className="frame rounded-2xl">
                  <img
                    src={src}
                    alt={`${project.name} — detail ${i + 1}`}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* NEXT */}
      <section className="border-t border-default">
        <Link
          href={`/work/${next.slug}`}
          className="group mx-auto flex max-w-5xl items-center justify-between px-5 py-12 sm:px-8 sm:py-16"
        >
          <div>
            <div className="kicker mb-2">Next project</div>
            <div className="font-display text-3xl font-light tracking-tight sm:text-5xl">
              {next.name}
            </div>
          </div>
          <FiArrowRight
            size={28}
            className="shrink-0 text-text-muted transition-all group-hover:translate-x-2 group-hover:text-text-primary"
          />
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-default pt-8 text-sm text-text-muted sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Tolulope Olonibua</span>
          <Link href="/#contact" className="link-underline text-text-primary">
            Get in touch
          </Link>
        </div>
      </footer>
    </main>
  );
}
