import Link from "next/link";
import styles from "./CareerRoute.module.scss";
import { careerRoute } from "@/content/site";
import { icons, type IconName } from "@/components/icons";
import { Reveal } from "@/components/Reveal/Reveal";

const NUMBER_PATTERN = /(?<![A-Za-z])(\d+(?:[–-]\d+)?\+?)(?![A-Za-z])/g;

function highlightNumbers(text: string) {
  return text
    .split(NUMBER_PATTERN)
    .map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index} className={styles.highlightNumber}>
          {part}
        </strong>
      ) : (
        part
      )
    );
}

export function CareerRoute() {
  return (
    <section id="career-route" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>{careerRoute.badge}</span>
        <h2 className={styles.heading}>{careerRoute.heading}</h2>
        <p className={styles.subheading}>{careerRoute.subheading}</p>
      </div>

      <div className={styles.stepper}>
        {careerRoute.stations.map((station) => (
          <Link
            key={station.number}
            href={`#career-row-${station.id}`}
            className={styles.step}
          >
            <span className={styles.stepNumber}>{station.number}</span>
            <span className={styles.stepStage}>{station.stage}</span>
            <span className={styles.stepPeriod}>{station.period}</span>
          </Link>
        ))}
      </div>

      <div className={styles.timeline}>
        {careerRoute.stations.map((station, index) => (
          <Reveal
            key={station.number}
            id={`career-row-${station.id}`}
            className={styles.row}
            delay={index * 0.08}
          >
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Link
                  href={station.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.company}
                >
                  {station.company}
                </Link>
                <span className={styles.category}>{station.category}</span>
              </div>

              <div className={styles.meta}>
                {station.period}
                {station.role && <span> · Role: {station.role}</span>}
                {station.team && <span> · Team: {station.team}</span>}
              </div>

              <p className={styles.description}>{station.description}</p>

              {(station.learned.length > 0 || station.contributions.length > 0) && (
                <div className={styles.columns}>
                  {station.learned.length > 0 && (
                    <div>
                      <span className={styles.columnLabel}>What I learned</span>
                      <ul className={styles.bullets}>
                        {station.learned.map((line) => (
                          <li key={line}>{highlightNumbers(line)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {station.contributions.length > 0 && (
                    <div>
                      <span className={styles.columnLabel}>My contributions</span>
                      <ul className={styles.bullets}>
                        {station.contributions.map((line) => (
                          <li key={line}>{highlightNumbers(line)}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {station.tech.length > 0 && (
                <p className={styles.tech}>
                  <span className={styles.techLabel}>Tech:</span> {station.tech.join(" · ")}
                </p>
              )}
            </div>

            <div className={styles.node}>
              <span className={styles.nodeIcon}>{icons[station.icon as IconName]}</span>
              <span className={styles.nodeNumber}>{station.number}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <p className={styles.quote}>
        “{careerRoute.quote[0]}
        <br />
        {careerRoute.quote[1]}”
      </p>
      {/* <p className={styles.footnote}>{careerRoute.footnote}</p> */}
    </section>
  );
}
