import Link from "next/link";
import styles from "./CareerRoute.module.scss";
import { careerRoute } from "@/content/site";
import { icons, techLogos, techIcons, type IconName } from "@/components/icons";
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

export function CareerRouteTimeline() {
  return (
    <section id="career-timeline" className={styles.timelineSection}>
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
                {/* {station.role && <span> · Role: {station.role}</span>}
                {station.team && <span> · Team: {station.team}</span>} */}
              </div>

              <p className={styles.description}>{station.description}</p>

              {(station.learned.length > 0 || station.contributions.length > 0) && (
                <div className={styles.columns}>
                  {/* {station.learned.length > 0 && (
                    <div>
                      <span className={styles.columnLabel}>What I learned</span>
                      <ul className={styles.bullets}>
                        {station.learned.map((line) => (
                          <li key={line}>{highlightNumbers(line)}</li>
                        ))}
                      </ul>
                    </div>
                  )} */}
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
                <div className={styles.tech}>
                  <span className={styles.techLabel}>Tech:</span>
                  <div className={styles.techList}>
                    {station.tech.map((tech) => {
                      const logoSrc = techLogos[tech.toLowerCase()];
                      const iconName = techIcons[tech.toLowerCase()];
                      return (
                        <span key={tech} className={styles.techChip}>
                          {logoSrc ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={logoSrc} alt="" className={styles.techLogo} />
                          ) : (
                            iconName && (
                              <span className={styles.techLogo}>{icons[iconName]}</span>
                            )
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
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
    </section>
  );
}
