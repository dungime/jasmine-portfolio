import styles from "./Mission.module.scss";
import { mission } from "@/content/site";

export function Mission() {
  return (
    <section id="about" className={styles.section}>
      {/* <span className={styles.badge}>{mission.badge}</span> */}
      {/* <h2 className={styles.heading}>{mission.badge}</h2> */}
      <p className={styles.body}>“{mission.body}”</p>
    </section>
  );
}
