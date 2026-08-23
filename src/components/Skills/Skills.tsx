import styles from "./Skills.module.scss";
import { skills } from "@/content/site";
import { icons, type IconName } from "@/components/icons";

export function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>{skills.badge}</span>
        <h2 className={styles.heading}>
          <span className={styles.headingHighlight}>{skills.heading}</span>
        </h2>
      </div>

      <div className={styles.list}>
        {skills.items.map((item) => (
          <div key={item.category} className={styles.row}>
            <span className={styles.icon}>{icons[item.icon as IconName]}</span>
            <span className={styles.category}>{item.category}</span>
            <span className={`${styles.technologies} ${item.highlight ? styles.highlight : ""}`}>
              {item.technologies.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
