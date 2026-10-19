"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./CareerRoute.module.scss";
import { useContent } from "@/content";
import { ArrowUpRightIcon, ChevronDownIcon, icons, techLogos, techIcons, type IconName } from "@/components/icons";
import { Reveal } from "@/components/Reveal/Reveal";

const NUMBER_PATTERN = /(?<![A-Za-z])(\d+(?:[–-]\d+)?\+?)(?![A-Za-z])/g;

function highlightNumbers(text: string) {
  return text
    .split(NUMBER_PATTERN)
    .map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index} className={styles.highlightNumber}>
          {part}
        </strong>
      ) : (
        part
      )
    );
}

export function CareerRouteTimeline() {
  const { careerRoute } = useContent();
  const t = useTranslations("ui");
  // Contributions start collapsed so each card stays short; ids of the
  // stations the visitor has expanded.
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());

  function toggle(id: string) {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section id="career-timeline" className={styles.timelineSection}>
      <div className={styles.timeline}>
        {careerRoute.stations.map((station, index) => {
          const isOpen = expanded.has(station.id);
          const panelId = `career-contributions-${station.id}`;

          return (
            <Reveal
              key={station.number}
              id={`career-row-${station.id}`}
              className={styles.row}
              delay={index * 0.08}
            >
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  {/* Stations without a site (e.g. a personal product) show the name as plain text. */}
                  {station.website ? (
                    <Link
                      href={station.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.company}
                    >
                      {station.company}
                      <span className={styles.companyIcon} aria-hidden="true">
                        <ArrowUpRightIcon />
                      </span>
                    </Link>
                  ) : (
                    <span className={styles.company}>{station.company}</span>
                  )}
                  <span className={styles.category}>{station.category}</span>
                </div>

                <div className={styles.meta}>
                  {station.period}
                  {/* {station.role && <span> · Role: {station.role}</span>}
                  {station.team && <span> · Team: {station.team}</span>} */}
                </div>

                <p className={styles.description}>{station.description}</p>

                {(station.learned.length > 0 || station.contributions.length > 0) && (
                  <div className={styles.columns}>
                    {/* {station.learned.length > 0 && (
                      <div>
                        <span className={styles.columnLabel}>{t("whatILearned")}</span>
                        <ul className={styles.bullets}>
                          {station.learned.map((line) => (
                            <li key={line}>{highlightNumbers(line)}</li>
                          ))}
                        </ul>
                      </div>
                    )} */}
                    {station.contributions.length > 0 && (
                      <div>
                        <button
                          type="button"
                          className={styles.toggle}
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => toggle(station.id)}
                        >
                          <span className={styles.columnLabel}>{t("myContributions")}</span>
                          <span className={`${styles.toggleIcon} ${isOpen ? styles.toggleIconOpen : ""}`}>
                            <ChevronDownIcon />
                          </span>
                        </button>
                        {/* Grid-row trick so the panel animates to its natural
                            height; inert keeps the hidden bullets out of tab
                            order and the accessibility tree. */}
                        <div
                          id={panelId}
                          className={`${styles.collapsible} ${isOpen ? styles.collapsibleOpen : ""}`}
                          inert={!isOpen}
                        >
                          <div className={styles.collapsibleInner}>
                            <ul className={styles.bullets}>
                              {station.contributions.map((line) => (
                                <li key={line}>{highlightNumbers(line)}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {station.tech.length > 0 && (
                  <div className={styles.tech}>
                    <span className={styles.techLabel}>{t("techLabel")}</span>
                    <div className={styles.techList}>
                      {station.tech.map((tech) => {
                        const logoSrc = techLogos[tech.toLowerCase()];
                        const iconName = techIcons[tech.toLowerCase()];
                        return (
                          <span key={tech} className={styles.techChip}>
                            {logoSrc ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={logoSrc} alt="" className={styles.techLogo} />
                            ) : (
                              iconName && (
                                <span className={styles.techLogo}>{icons[iconName]}</span>
                              )
                            )}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Curved segment from this node down to the next one. The SVG
                  stretches to the row's height, so the stroke opts out of the
                  scaling to stay a consistent width. */}
              {index < careerRoute.stations.length - 1 && (
                <svg
                  className={styles.connector}
                  viewBox="0 0 40 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M20 0 C 38 30, 2 70, 20 100" vectorEffect="non-scaling-stroke" />
                </svg>
              )}

              <div className={styles.node}>
                <span className={styles.nodeIcon}>{icons[station.icon as IconName]}</span>
                <span className={styles.nodeNumber}>{station.number}</span>
              </div>
            </Reveal>
          );
        })}
      </div>

      <p className={styles.quote}>
        “{careerRoute.quote[0]}
        <br />
        {careerRoute.quote[1]}”
      </p>
    </section>
  );
}
