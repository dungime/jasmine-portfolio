import styles from "./Education.module.scss";
import { education } from "@/content/site";

export function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>{education.badge}</span>
        <h2 className={styles.heading}>
          <span className={styles.highlight}>{education.heading}</span>
        </h2>
      </div>

      <div className={styles.list}>
        {education.items.map((item) => (
          <div key={item.school} className={styles.item}>
            <span className={styles.period}>{item.period}</span>
            <div>
              <span className={styles.school}>{item.school}</span>
              <span className={styles.degree}>{item.degree}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
