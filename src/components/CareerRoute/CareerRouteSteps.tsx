"use client";

import type { MouseEvent } from "react";
import styles from "./CareerRoute.module.scss";
import { careerRoute } from "@/content/site";

function handleStepClick(event: MouseEvent<HTMLAnchorElement>, targetId: string) {
  event.preventDefault();
  document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
}

export function CareerRouteSteps() {
  return (
    <section id="career-route" className={styles.stepsSection}>
      <div className={styles.header}>
        <span className={styles.badge}>{careerRoute.badge}</span>
        <h2 className={styles.heading}>
          <span className={styles.headingHighlight}>{careerRoute.heading}</span>
        </h2>
        <p className={styles.subheading}>{careerRoute.subheading}</p>
      </div>

      <div className={styles.stepper}>
        {careerRoute.stations.map((station) => {
          const targetId = `career-row-${station.id}`;
          return (
            <a
              key={station.number}
              href={`#${targetId}`}
              className={styles.step}
              onClick={(event) => handleStepClick(event, targetId)}
            >
              <span className={styles.stepNumber}>{station.number}</span>
              <span className={styles.stepStage}>{station.stage}</span>
              <span className={styles.stepPeriod}>{station.period}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
