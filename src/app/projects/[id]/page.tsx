import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { defaultLocale } from "@/i18n/config";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Reveal } from "@/components/Reveal/Reveal";
import { ProjectDetail } from "./ProjectDetail";

// Ids are shared across locales, so the default locale's content is enough
// for the static routes and metadata.
const { projects } = getContent(defaultLocale);

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.items.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.items.find((item) => item.id === id);

  return {
    title: project ? `${project.title} — Jasmine` : "Project not found",
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;

  if (!projects.items.some((item) => item.id === id)) {
    notFound();
  }

  return (
    <>
      <ProjectDetail id={id} />
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
    </>
  );
}
