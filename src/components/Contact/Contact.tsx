"use client";

import Link from "next/link";
import styles from "./Contact.module.scss";
import { useContent } from "@/content";
import { CopyEmailButton } from "./CopyEmailButton";
import { WavyBorder } from "./WavyBorder";
import { ArrowUpRightIcon, icons, type IconName } from "@/components/icons";

// Lets an e-mail address wrap right after the "@" on narrow screens
// rather than mid-word.
function withEmailBreak(text: string) {
  const at = text.indexOf("@");
  if (at === -1) return text;

  return (
    <>
      {text.slice(0, at + 1)}
      <wbr />
      {text.slice(at + 1)}
    </>
  );
}

export function Contact() {
  const { contact } = useContent();

  return (
    <section id="contact" className={styles.section}>
      {/* Closing call to action — set apart from the other sections by a wavy outline. */}
      <div className={styles.panel}>
        <WavyBorder className={styles.wavyBorder} />
        <span className={styles.badge}>{contact.badge}</span>
        <h2 className={styles.heading}>
          <span className={styles.headingHighlight}>{contact.heading}</span>
        </h2>
        <p className={styles.subheading}>{contact.subheading}</p>

        {/* <a href={contact.resumeCta.href} download className={styles.resumeCta}>
          {contact.resumeCta.label}
        </a> */}

        <div className={styles.grid}>
          {contact.links.map((link) => {
            const label = (
              <span className={styles.cardLabel}>
                <span className={styles.cardIcon}>{icons[link.icon as IconName]}</span>
                <span className={styles.cardText}>{withEmailBreak(link.label)}</span>
              </span>
            );

            if (link.href.startsWith("mailto:")) {
              return (
                <CopyEmailButton key={link.label} email={link.href.replace("mailto:", "")}>
                  {label}
                </CopyEmailButton>
              );
            }

            // No href (e.g. the city) — shown as plain info, not a link.
            if (!link.href) {
              return (
                <div key={link.label} className={`${styles.card} ${styles.static}`}>
                  {label}
                </div>
              );
            }

            return (
              <Link key={link.label} href={link.href} className={styles.card}>
                {label}
                <span className={styles.arrow}>
                  <ArrowUpRightIcon stroke="currentColor" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
