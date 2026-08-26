import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import styles from "./page.module.scss";
import { withBasePath } from "@/lib/base-path";
import { icons, techLogos, techIcons } from "@/components/icons";

export function generateStaticParams() {
  return projects.items.map((project) => ({ id: project.id }));
}

function getProject(id: string) {
  return projects.items.find((project) => project.id === id);
}

const BOLD_PATTERN = /\*\*(.+?)\*\*/g;

function renderBold(text: string) {
  return text
    .split(BOLD_PATTERN)
    .map((part, index) => (index % 2 === 1 ? <strong key={index}>{part}</strong> : part));
}

function renderBulletList(items: string[]) {
  return (
    <ul className={styles.bullets}>
      {items.map((line) => (
        <li key={line}>
          <span className={styles.checkIcon}>{icons.check}</span>
          <span>{renderBold(line)}</span>
        </li>
      ))}
    </ul>
  );
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

  const screenshots = project.screenshots ?? [];
  const hasGallery = screenshots.length > 0;
  const [firstScreenshot, ...restScreenshots] = screenshots;

  return (
    <main className={styles.main}>
      <div className={hasGallery ? styles.containerWide : styles.container}>
        <Link href="/#projects" className={styles.back}>
          ← Back to projects
        </Link>

        <div className={hasGallery ? styles.layout : undefined}>
          <div className={styles.content}>
            {!hasGallery && (
              <div className={styles.thumb}>
                {project.thumbnail && (
                  <Image
                    src={withBasePath(project.thumbnail)}
                    alt={project.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 760px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                )}
              </div>
            )}

            <h1 className={styles.title}>{project.title}</h1>

            {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}

            <p className={styles.description}>{project.description}</p>

            {project.role && (
              <section className={styles.section}>
                <h2 className={styles.sectionHeading}>My Role</h2>
                <p className={styles.paragraph}>{project.role}</p>
              </section>
            )}

            {project.built && project.built.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionHeading}>What I Built</h2>
                {renderBulletList(project.built)}
              </section>
            )}

            {project.contributions && project.contributions.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionHeading}>My Contribution</h2>
                {renderBulletList(project.contributions)}
              </section>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <section className={styles.section}>
                <h2 className={styles.sectionHeading}>Technical Highlights</h2>
                {project.highlights.map((highlight) => (
                  <div key={highlight.description} className={styles.highlight}>
                    {highlight.title && (
                      <h3 className={styles.highlightTitle}>{highlight.title}</h3>
                    )}
                    <p className={styles.paragraph}>{renderBold(highlight.description)}</p>
                  </div>
                ))}
              </section>
            )}

            <section className={styles.section}>
              <h2 className={styles.sectionHeading}>Tech Stack</h2>
              <div className={styles.techGrid}>
                {project.tags.map((tag) => {
                  const logoSrc = techLogos[tag.toLowerCase()];
                  const iconName = techIcons[tag.toLowerCase()];
                  return (
                    <span key={tag} className={styles.techChip}>
                      {logoSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={logoSrc} alt={tag} className={styles.techLogo} />
                      ) : iconName ? (
                        <span className={styles.techLogo}>{icons[iconName]}</span>
                      ) : (
                        <span className={styles.techAvatar}>{tag.slice(0, 2)}</span>
                      )}
                      {tag}
                    </span>
                  );
                })}
              </div>
            </section>

          </div>

          {hasGallery && (
            <div className={styles.gallery}>
              <div className={styles.screenshotCard}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={withBasePath(firstScreenshot)} alt={project.title} />
              </div>

              {restScreenshots.length > 0 && (
                <div className={styles.screenshotsRow}>
                  {restScreenshots.map((src) => (
                    <div key={src} className={styles.screenshotCard}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={withBasePath(src)} alt={project.title} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
