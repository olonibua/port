"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiMoon,
  FiSun,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiArrowRight,
} from "react-icons/fi";
import { useTheme } from "@/lib/contexts/theme-context";
import { projects } from "@/lib/projects";

/* ------------------------------------------------------------------ data */

const experience = [
  {
    company: "No More Waste Technologies",
    role: "Software Developer — Front-End",
    period: "Sep 2025 — Present",
    location: "United Kingdom · Remote",
    summary:
      "Building and maintaining customer-facing web and mobile apps for a sustainability platform with React, TypeScript and Node.js — reusable, accessible UI and reliable delivery in an agile team.",
    tech: ["React", "TypeScript", "Node.js", "Agile"],
  },
  {
    company: "MTN",
    role: "Full-Stack Developer — Contract",
    period: "Apr 2025 — Jul 2025",
    location: "Remote",
    summary:
      "Delivered full-stack features for one of Africa's largest telecoms — React on the front end, NestJS/Node APIs and payment integrations at scale.",
    tech: ["React", "NestJS", "Node.js", "APIs"],
  },
  {
    company: "Crypto University",
    role: "Front-End Engineer",
    period: "Apr 2024 — Apr 2025",
    location: "Dubai · Remote",
    summary:
      "Built responsive, SEO-optimised platforms with Next.js and React Query — cutting API latency ~30% and reducing front-end bugs through a code-review process I helped introduce.",
    tech: ["Next.js", "React Query", "TypeScript", "SEO"],
  },
  {
    company: "Lilab",
    role: "Front-End Engineer",
    period: "Mar 2023 — Oct 2024",
    location: "Remote",
    summary:
      "Led a React redesign and built reusable components (calendars, data tables) plus a Storybook design system, applying SOLID principles to refactor legacy code.",
    tech: ["React", "TypeScript", "Storybook", "SOLID"],
  },
];

const skillGroups = [
  {
    label: "Core",
    items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)"],
  },
  {
    label: "Interface",
    items: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Storybook",
      "Design systems",
      "Accessibility",
      "Responsive design",
    ],
  },
  {
    label: "Back-end & data",
    items: ["Node.js", "NestJS", "REST APIs", "WebSockets", "PostgreSQL", "Firebase"],
  },
  {
    label: "Ways of working",
    items: ["Git", "Agile / Scrum", "Code review", "SOLID", "Testing", "Performance"],
  },
];

const socials = [
  { icon: FiGithub, href: "https://github.com/olonibua", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com/in/olonibua-tolulope", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:tolulopeolonibua@gmail.com", label: "Email" },
];

const navItems = ["work", "about", "experience", "contact"];

/* ------------------------------------------------------------- primitives */

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
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-default pb-4">
      <span className="kicker">{index}</span>
      <span className="kicker">{title}</span>
    </div>
  );
}

/* -------------------------------------------------------------------- page */

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("work");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const y = window.scrollY + 140;
      let current = navItems[0];
      for (const id of navItems) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative">
      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 theme-transition ${
          scrolled
            ? "border-b border-default bg-background-primary/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="group flex items-center gap-2">
            <span className="font-display text-lg font-medium tracking-tight">
              Tolulope Olonibua
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`text-sm capitalize transition-colors ${
                  active === item
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:tolulopeolonibua@gmail.com"
              className="hidden rounded-full border border-default px-4 py-1.5 text-sm transition-colors hover:border-hover hover:bg-background-secondary sm:inline-block"
            >
              Get in touch
            </a>
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

      {/* HERO */}
      <section id="top" className="mx-auto max-w-6xl px-5 pt-36 sm:px-8 sm:pt-44">
        <motion.p
          className="kicker mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Front-End Engineer · Manchester, UK
        </motion.p>

        <motion.h1
          className="font-display text-[2.6rem] font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-[5rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          I build fast, accessible
          <br className="hidden sm:block" /> web apps with{" "}
          <span className="italic text-accent">React</span>,{" "}
          <span className="italic">TypeScript</span> &amp; Next.js.
        </motion.h1>

        <motion.div
          className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          4+ years turning complex requirements into clean, maintainable
          interfaces — from design systems and component libraries to full
          products. Based in the UK with full right to work.
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <a
            href="#work"
            className="focus-ring group inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-medium text-[var(--background-primary)] transition-transform hover:-translate-y-0.5"
          >
            View selected work
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/Tolulope-Olonibua-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-default px-6 py-3 text-sm font-medium transition-colors hover:border-hover hover:bg-background-secondary"
          >
            Download CV
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to new roles
          </span>
        </motion.div>

        <div className="mt-20 border-t border-default sm:mt-28" />
      </section>

      {/* WORK */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionLabel index="01" title="Selected Work" />
        </Reveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <Link href={`/work/${p.slug}`} className="group block">
                <div className="frame relative aspect-[16/10] rounded-xl">
                  <img
                    src={p.hero}
                    alt={`${p.name} — screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-[var(--background-primary)]/90 text-text-primary opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                    <FiArrowUpRight size={16} />
                  </span>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium tracking-tight">
                    {p.name}
                  </h3>
                  <span className="shrink-0 text-sm text-text-muted">{p.year}</span>
                </div>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-text-secondary">
                  {p.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-default px-3 py-1 text-xs text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-y border-default bg-background-secondary theme-transition"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal>
            <SectionLabel index="02" title="About" />
          </Reveal>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr] md:items-center">
            <Reveal>
              <div className="space-y-6 font-display text-2xl font-light leading-snug tracking-tight sm:text-[1.9rem]">
                <p>
                  I&apos;m a front-end engineer who cares about the details that
                  make an interface feel right — performance, accessibility,
                  clean state and design systems that let a team move quickly
                  without breaking things.
                </p>
                <p className="text-text-secondary">
                  Over the past four years I&apos;ve shipped production apps in
                  React, TypeScript and Next.js across fintech, marketplaces and
                  e-commerce — as an engineer on a team and end-to-end on my own
                  products.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                {[
                  ["4+", "years building for the web"],
                  ["9", "shipped products & sites"],
                  ["UK", "full right to work"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl">{n}</div>
                    <div className="mt-1 text-sm text-text-muted">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="frame overflow-hidden rounded-xl">
                <img
                  src="/WhatsApp Image 2025-08-07 at 08.54.12.jpeg"
                  alt="Tolulope Olonibua working"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <SectionLabel index="03" title="Experience" />
        </Reveal>
        <div className="divide-y divide-[var(--border-color)]">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <div className="group grid grid-cols-1 gap-2 py-8 md:grid-cols-[0.8fr_1.6fr_0.9fr] md:gap-8">
                <div className="text-sm text-text-muted">{job.period}</div>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    {job.role}
                  </h3>
                  <div className="mt-0.5 text-text-secondary">{job.company}</div>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-text-secondary">
                    {job.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-default px-3 py-1 text-xs text-text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-sm text-text-muted md:text-right">
                  {job.location}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* SKILLS */}
        <Reveal className="mt-8">
          <div className="grid grid-cols-1 gap-8 rounded-xl border border-default p-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g) => (
              <div key={g.label}>
                <div className="kicker mb-4">{g.label}</div>
                <ul className="space-y-2">
                  {g.items.map((s) => (
                    <li key={s} className="text-[15px] text-text-secondary">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-default bg-background-secondary theme-transition"
      >
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <Reveal>
            <p className="kicker mb-6">04 — Contact</p>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">
              Let&apos;s build something
              <br /> worth shipping.
            </h2>
            <p className="mt-6 max-w-lg text-lg text-text-secondary">
              I&apos;m open to front-end and full-stack roles in the UK — hybrid
              or remote. If you&apos;re hiring, I&apos;d love to talk.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:tolulopeolonibua@gmail.com"
                className="focus-ring group inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 text-sm font-medium text-[var(--background-primary)] transition-transform hover:-translate-y-0.5"
              >
                tolulopeolonibua@gmail.com
                <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <div className="flex items-center gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-default text-text-secondary transition-colors hover:border-hover hover:text-text-primary"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-default pt-8 text-sm text-text-muted sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Tolulope Olonibua</span>
          <span>Designed &amp; built with Next.js, TypeScript &amp; Tailwind</span>
        </div>
      </footer>
    </main>
  );
}
