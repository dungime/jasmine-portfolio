import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent } from "@/content";
import { defaultLocale } from "@/i18n/config";
import { ExperienceDetail } from "./ExperienceDetail";

// Ids are shared across locales, so the default locale's content is enough
// for the static routes and metadata.
const { experience } = getContent(defaultLocale);

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return experience.items.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = experience.items.find((entry) => entry.id === id);

  return {
    title: item ? `${item.title} — Jasmine` : "Experience not found",
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { id } = await params;

  if (!experience.items.some((entry) => entry.id === id)) {
    notFound();
  }

  return <ExperienceDetail id={id} />;
}
