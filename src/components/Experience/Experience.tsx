import Link from "next/link";
import styles from "./Experience.module.scss";
import { experience } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";

export function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>{experience.badge}</span>
        <h2 className={styles.heading}>
          <span className={styles.headingHighlight}>{experience.heading}</span>
        </h2>
      </div>

      <div className={styles.list}>
        {experience.items.map((item) => (
          <div key={item.title} id={`experience-${item.id}`} className={styles.item}>
            <div className={styles.periodCol}>
              <span className={styles.period}>{item.period}</span>
              {item.note && <span className={styles.note}>{item.note}</span>}
            </div>
            <div>
              <Link href={item.href} className={styles.titleRow}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.arrow}>
                  <ArrowUpRightIcon />
                </span>
              </Link>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
