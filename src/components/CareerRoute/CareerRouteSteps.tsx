import Link from "next/link";
import styles from "./CareerRoute.module.scss";
import { careerRoute } from "@/content/site";

export function CareerRouteSteps() {
  return (
    <section id="career-route" className={styles.stepsSection}>
      <div className={styles.header}>
        <span className={styles.badge}>{careerRoute.badge}</span>
        <h2 className={styles.heading}>
          <span className={styles.highlight}>{careerRoute.heading}</span>
        </h2>
        <p className={styles.subheading}>{careerRoute.subheading}</p>
      </div>

      <div className={styles.stepper}>
        {careerRoute.stations.map((station) => (
          <Link key={station.number} href={`#career-row-${station.id}`} className={styles.step}>
            <span className={styles.stepNumber}>{station.number}</span>
            <span className={styles.stepStage}>{station.stage}</span>
            <span className={styles.stepPeriod}>{station.period}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
