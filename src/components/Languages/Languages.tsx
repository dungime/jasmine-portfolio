import styles from "./Languages.module.scss";
import { languages } from "@/content/site";

export function Languages() {
  return (
    <section id="languages" className={styles.section}>
      <div className={styles.header}>
        {/* <span className={styles.badge}>{languages.badge}</span> */}
        <h2 className={styles.heading}>{languages.heading}</h2>
      </div>

      <div className={styles.row}>
        {languages.items.map((item) => (
          <div key={item.name} className={styles.chip}>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.level}>{item.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
