import styles from "./Education.module.scss";
import { education } from "@/content/site";

export function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.header}>
        {/* <span className={styles.badge}>{education.badge}</span> */}
        <h2 className={styles.heading}>{education.heading}</h2>
      </div>

      <div className={styles.list}>
        {education.items.map((item) => (
          <div key={item.title} className={styles.item}>
            <span className={styles.period}>{item.title}</span>
            <div>
              {/* <span className={styles.school}>{item.content}</span> */}
              <span className={styles.degree}>{item.content}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
