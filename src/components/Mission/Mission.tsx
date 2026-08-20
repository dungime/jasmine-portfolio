import styles from "./Mission.module.scss";
import { mission } from "@/content/site";

const BOLD_PATTERN = /\*\*(.+?)\*\*/g;

function renderBold(text: string) {
  return text
    .split(BOLD_PATTERN)
    .map((part, index) => (index % 2 === 1 ? <strong key={index}>{part}</strong> : part));
}

export function Mission() {
  return (
    <section id="about" className={styles.section}>
      {/* <span className={styles.badge}>{mission.badge}</span> */}
      {/* <h2 className={styles.heading}>{mission.badge}</h2> */}
      <p className={styles.body}>“{renderBold(mission.body)}”</p>
    </section>
  );
}
