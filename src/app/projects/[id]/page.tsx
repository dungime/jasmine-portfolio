import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import styles from "./page.module.scss";

export function generateStaticParams() {
  return projects.items.map((project) => ({ id: project.id }));
}

function getProject(id: string) {
  return projects.items.find((project) => project.id === id);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);

  return {
    title: project ? `${project.title} — Jasmine` : "Project not found",
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/#projects" className={styles.back}>
          ← Back to projects
        </Link>

        <div className={styles.thumb}>
          {project.thumbnail && (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 760px) 100vw, 760px"
              style={{ objectFit: "cover" }}
              priority
            />
          )}
        </div>

        <h1 className={styles.title}>{project.title}</h1>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <p className={styles.description}>{project.description}</p>
      </div>
    </main>
  );
}
