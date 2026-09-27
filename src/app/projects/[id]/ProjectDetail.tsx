"use client";

import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useContent } from "@/content";
import styles from "./page.module.scss";
import { withBasePath } from "@/lib/base-path";
import { icons, techLogos, techIcons } from "@/components/icons";
import { BackLink } from "@/components/BackLink/BackLink";

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
  const project = useContent().projects.items.find((item) => item.id === id);

  if (!project) return null;

  const [heroScreenshot, ...inlineScreenshots] = project.screenshots ?? [];

  const renderScreenshot = (src: string) => (
    <figure key={src} className={styles.screenshotCard}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={withBasePath(src)} alt={project.title} />
    </figure>
  );

  // Content blocks in reading order; screenshots after the first are
  // interleaved one per block, and any left over land before Tech Stack.
  const blocks: { key: string; node: ReactNode }[] = [
    {
      key: "intro",
      node: (
        <>
          <h1 className={styles.title}>{project.title}</h1>
          {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
          <p className={styles.description}>{project.description}</p>
        </>
      ),
    },
  ];

  if (project.role) {
    blocks.push({
      key: "role",
      node: (
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{t("myRole")}</h2>
          <p className={styles.paragraph}>{project.role}</p>
        </section>
      ),
    });
  }

  if (project.built && project.built.length > 0) {
    blocks.push({
      key: "built",
      node: (
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{t("whatIBuilt")}</h2>
          {renderBulletList(project.built)}
        </section>
      ),
    });
  }

  if (project.contributions && project.contributions.length > 0) {
    blocks.push({
      key: "contributions",
      node: (
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{t("myContribution")}</h2>
          {renderBulletList(project.contributions)}
        </section>
      ),
    });
  }

  const leftoverScreenshots = inlineScreenshots.slice(blocks.length);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BackLink href="/#projects" className={styles.back}>
          {t("backToProjects")}
        </BackLink>

        {heroScreenshot ? (
          <div className={styles.heroScreenshot}>{renderScreenshot(heroScreenshot)}</div>
        ) : (
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

        {blocks.map((block, index) => (
          <Fragment key={block.key}>
            {block.node}
            {inlineScreenshots[index] && renderScreenshot(inlineScreenshots[index])}
          </Fragment>
        ))}

        {leftoverScreenshots.map(renderScreenshot)}

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
      </div>
    </main>
  );
}
