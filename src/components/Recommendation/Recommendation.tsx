"use client";

import styles from "./Recommendation.module.scss";
import { useContent } from "@/content";
import { ArrowUpRightIcon, icons } from "@/components/icons";
import { withBasePath } from "@/lib/base-path";

export function Recommendation() {
  const { recommendation } = useContent();

  return (
    <section id="recommendation" className={styles.section}>
      <figure className={styles.card}>
        <span className={styles.quoteMark} aria-hidden="true">
          {icons.quote}
        </span>
        <h2 className={styles.heading}>{recommendation.heading}</h2>

        <blockquote className={styles.quote}>
          <p>“{recommendation.quote}”</p>
        </blockquote>
        <figcaption className={styles.author}>
          {recommendation.author} · {recommendation.authorTitle}
        </figcaption>

        {/* Plain <a> (not next/link) so the PDF opens as a file with the base path applied. */}
        <a
          href={withBasePath(recommendation.letter.href)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.letter}
        >
          <span className={styles.letterText}>
            <span className={styles.letterLabel}>
              <span className={styles.letterIcon} aria-hidden="true">
                {icons.fileText}
              </span>
              {recommendation.letter.label}
            </span>
            <span className={styles.letterDescription}>{recommendation.letter.description}</span>
          </span>
          <span className={styles.arrow} aria-hidden="true">
            <ArrowUpRightIcon />
          </span>
        </a>
      </figure>
    </section>
  );
}
