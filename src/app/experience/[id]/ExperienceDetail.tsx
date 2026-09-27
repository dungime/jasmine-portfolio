"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useContent } from "@/content";
import { ArrowUpRightIcon, icons, techLogos, techIcons } from "@/components/icons";
import { BackLink } from "@/components/BackLink/BackLink";
import styles from "./page.module.scss";

// Client Component so the copy re-renders in place when the language changes;
// page.tsx has already checked that `id` exists.
export function ExperienceDetail({ id }: { id: string }) {
  const t = useTranslations("ui");
  const { experience, careerRoute } = useContent();
  const item = experience.items.find((entry) => entry.id === id);

  if (!item) return null;

  const station = careerRoute.stations.find((entry) => entry.id === id);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <BackLink href="/#experience" className={styles.back}>
          {t("backToExperience")}
        </BackLink>

        {station && <span className={styles.category}>{station.category}</span>}

        <h1 className={styles.title}>{item.title}</h1>

        <div className={styles.meta}>
          {item.period}
          {item.note && <span className={styles.note}> · {item.note}</span>}
        </div>

        <p className={styles.description}>{item.description}</p>

        {station && (station.learned.length > 0 || station.contributions.length > 0) && (
          <div className={styles.columns}>
            {station.learned.length > 0 && (
              <div>
                <span className={styles.columnLabel}>{t("whatILearned")}</span>
                <ul className={styles.bullets}>
                  {station.learned.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            )}
            {station.contributions.length > 0 && (
              <div>
                <span className={styles.columnLabel}>{t("myContributions")}</span>
                <ul className={styles.bullets}>
                  {station.contributions.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {station && station.tech.length > 0 && (
          <div className={styles.techSection}>
            <h2 className={styles.sectionHeading}>{t("techStack")}</h2>
            <div className={styles.techGrid}>
              {station.tech.map((tech) => {
                const logoSrc = techLogos[tech.toLowerCase()];
                const iconName = techIcons[tech.toLowerCase()];
                return (
                  <span key={tech} className={styles.techChip}>
                    {logoSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={logoSrc} alt={tech} className={styles.techLogo} />
                    ) : iconName ? (
                      <span className={styles.techLogo}>{icons[iconName]}</span>
                    ) : (
                      <span className={styles.techAvatar}>{tech.slice(0, 2)}</span>
                    )}
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        <Link href={item.href} className={styles.companyLink}>
          {t("visitCompanySite")}
          <ArrowUpRightIcon />
        </Link>
      </div>
    </main>
  );
}
