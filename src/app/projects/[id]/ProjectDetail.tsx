"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useContent } from "@/content";
import styles from "./page.module.scss";
import { withBasePath } from "@/lib/base-path";
import { icons, techLogos, techIcons } from "@/components/icons";
import { BackLink } from "@/components/BackLink/BackLink";

// Only some projects illustrate their approach, so the JSON infers a union per project.
type Solution = { title: string; body: string; images?: { src: string; caption: string }[] };

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

// Client Component so the copy re-renders in place when the language changes;
// page.tsx has already checked that `id` exists.
export function ProjectDetail({ id }: { id: string }) {
  const t = useTranslations("ui");
  const { items } = useContent().projects;
  const project = items.find((item) => item.id === id);

  if (!project) return null;

  const otherProjects = items.filter((item) => item.id !== id);

  const screenshots = project.screenshots ?? [];
  const solutions: Solution[] = project.solutions;
  // Projects that illustrate their approach inline skip the hero image.
  const hasInlineImages = solutions.some((solution) => solution.images?.length);
  const eyebrow = [t("caseStudy"), project.category].filter(Boolean).join(" · ");

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BackLink href="/#projects" className={styles.back}>
          {t("backToProjects")}
        </BackLink>

        <header className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.lead}>{project.description}</p>
        </header>

        <section className={styles.overview} aria-label={t("overview")}>
          <dl className={styles.overviewGrid}>
            {project.overview.map((entry) => (
              <div key={entry.label} className={styles.overviewItem}>
                <dt>{entry.label}</dt>
                <dd>{entry.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {screenshots.length > 0 ? (
          <div className={styles.screenshots}>
            {screenshots.map((src) => (
              <figure key={src} className={styles.screenshotCard}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={withBasePath(src)} alt={project.title} />
              </figure>
            ))}
          </div>
        ) : hasInlineImages ? null : (
          <div className={styles.thumb}>
            {project.thumbnail && (
              <Image
                src={withBasePath(project.thumbnail)}
                alt={project.title}
                fill
                sizes="(max-width: 940px) 100vw, 940px"
                style={{ objectFit: "cover" }}
                priority
              />
            )}
          </div>
        )}

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{t("context")}</h2>
          <p className={styles.paragraph}>{renderBold(project.context)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{t("challenge")}</h2>
          <ol className={styles.challengeGrid}>
            {project.challenges.map((challenge, index) => (
              <li key={challenge.title} className={styles.challengeCard}>
                <span className={styles.challengeIndex}>{String(index + 1).padStart(2, "0")}</span>
                <h3 className={styles.itemTitle}>{challenge.title}</h3>
                <p className={styles.itemBody}>{renderBold(challenge.body)}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{t("approach")}</h2>
          <ol className={styles.solutionList}>
            {solutions.map((solution, index) => (
              <li key={solution.title} className={styles.solutionItem}>
                <span className={styles.solutionIndex}>{index + 1}</span>
                <div className={styles.solutionContent}>
                  <h3 className={styles.itemTitle}>{solution.title}</h3>
                  <p className={styles.itemBody}>{renderBold(solution.body)}</p>
                  {solution.images && solution.images.length > 0 && (
                    <div className={styles.solutionMedia}>
                      {solution.images.map((image) => (
                        <figure key={image.src} className={styles.solutionFigure}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={withBasePath(image.src)} alt={image.caption} loading="lazy" />
                          <figcaption>{image.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{t("impact")}</h2>
          <div className={styles.metricGrid}>
            {project.impact.metrics.map((metric) => (
              <div key={metric.label} className={styles.metricCard}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
          <p className={`${styles.paragraph} ${styles.impactSummary}`}>
            {renderBold(project.impact.summary)}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{t("learnings")}</h2>
          {renderBulletList(project.learnings)}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{t("techStack")}</h2>
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

        {otherProjects.length > 0 && (
          <section className={styles.moreProjects}>
            <h2 className={styles.sectionHeading}>{t("moreProjects")}</h2>
            <div className={styles.moreGrid}>
              {otherProjects.map((other) => (
                <Link key={other.id} href={`/projects/${other.id}`} className={styles.moreCard}>
                  <div className={styles.moreThumb}>
                    {other.thumbnail && (
                      <Image
                        src={withBasePath(other.thumbnail)}
                        alt={other.title}
                        fill
                        sizes="(max-width: 760px) 100vw, 470px"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                  <div className={styles.moreBody}>
                    {other.subtitle && <span className={styles.moreEyebrow}>{other.subtitle}</span>}
                    <h3 className={styles.moreTitle}>{other.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className={styles.homeLinkWrap}>
          <Link href="/" className={styles.homeLink}>
            {t("backToHome")}
          </Link>
        </div>
      </div>
    </main>
  );
}
