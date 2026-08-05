import Link from "next/link";
import styles from "./Services.module.scss";
import { services } from "@/content/site";
import { icons, type IconName } from "@/components/icons";

export function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.badge}>{services.badge}</span>
        <h2 className={styles.heading}>{services.heading}</h2>
        <p className={styles.subheading}>{services.subheading}</p>
      </div>

      <div className={styles.grid}>
        {services.items.map((item) => (
          <div
            key={item.title}
            className={item.highlight ? `${styles.card} ${styles.highlight}` : styles.card}
          >
            <span className={styles.icon}>{icons[item.icon as IconName]}</span>
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
            <Link href={item.href} className={styles.link}>
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
