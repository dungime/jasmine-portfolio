import styles from "./Mission.module.scss";
import { mission } from "@/content/site";

export function Mission() {
  return (
    <section id="about" className={styles.section}>
      {/* <span className={styles.badge}>{mission.badge}</span> */}
      {/* <h2 className={styles.heading}>{mission.badge}</h2> */}
      <p className={styles.body}>“{mission.body}”</p>

      <div className={styles.whatIDo}>
        <h3 className={styles.whatIDoHeading}>{mission.whatIDo.heading}</h3>
        <div className={styles.whatIDoList}>
          {mission.whatIDo.items.map((item) => (
            <div key={item.title}>
              <h4 className={styles.whatIDoItemTitle}>{item.title}</h4>
              <p className={styles.whatIDoItemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
