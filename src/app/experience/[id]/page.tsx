import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { careerRoute, experience } from "@/content/site";
import { ArrowUpRightIcon, icons, techLogos, techIcons } from "@/components/icons";
import styles from "./page.module.scss";

export function generateStaticParams() {
  return experience.items.map((item) => ({ id: item.id }));
}

function getExperience(id: string) {
  return experience.items.find((item) => item.id === id);
}

function getStation(id: string) {
  return careerRoute.stations.find((station) => station.id === id);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const item = getExperience(id);

  return {
    title: item ? `${item.title} — Jasmine` : "Experience not found",
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getExperience(id);

  if (!item) {
    notFound();
  }

  const station = getStation(id);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/#experience" className={styles.back}>
          ← Back to experience
        </Link>

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
                <span className={styles.columnLabel}>What I learned</span>
                <ul className={styles.bullets}>
                  {station.learned.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            )}
            {station.contributions.length > 0 && (
              <div>
                <span className={styles.columnLabel}>My contributions</span>
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
            <h2 className={styles.sectionHeading}>Tech Stack</h2>
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
          Visit company site
          <ArrowUpRightIcon />
        </Link>
      </div>
    </main>
  );
}
