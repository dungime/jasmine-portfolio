"use client";

import { Fragment } from "react";
import styles from "./Stats.module.scss";
import { useContent } from "@/content";
import { StatValue } from "./StatValue";

export function Stats() {
  const { stats } = useContent();

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.items.map((item) => (
          // Focusable so keyboard users get the same reveal as hover.
          <div key={item.label} className={styles.card} tabIndex={0}>
            <div className={styles.front}>
              <StatValue value={item.value} className={styles.value} />
              <div className={styles.label}>{item.label}</div>
            </div>
            <div className={styles.reveal}>
              <span className={styles.revealValue}>{item.value}</span>
              <p className={styles.detail}>
                {/* Keep each "·"-separated item (e.g. "E-learning") from
                    breaking at its hyphen. */}
                {item.detail.split(" · ").map((part, index) => (
                  <Fragment key={part}>
                    {index > 0 && " · "}
                    <span className={styles.detailItem}>{part}</span>
                  </Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
