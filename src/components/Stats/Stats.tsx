import styles from "./Stats.module.scss";
import { stats } from "@/content/site";
import { StatValue } from "./StatValue";

export function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.items.map((item) => (
          <div key={item.label} className={styles.card}>
            <StatValue value={item.value} className={styles.value} />
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
