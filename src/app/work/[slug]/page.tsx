import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, projectBySlug } from "@/lib/projects";
import CaseStudy from "./CaseStudy";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: "Work — Tolulope Olonibua" };
  const title = `${project.name} — Tolulope Olonibua`;
  return {
    title,
    description: project.tagline,
    openGraph: {
      title,
      description: project.tagline,
      images: [{ url: project.hero, alt: `${project.name} screenshot` }],
    },
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <CaseStudy
      project={project}
      next={{ slug: nextProject.slug, name: nextProject.name }}
    />
  );
}
