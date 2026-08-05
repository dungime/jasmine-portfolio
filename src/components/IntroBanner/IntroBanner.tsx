import Image from "next/image";
import Link from "next/link";
import styles from "./IntroBanner.module.scss";
import { hero } from "@/content/site";

export function IntroBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.photo}>
        <Image
          src="/assets/images/profile-banner.jpg"
            alt={hero.heading}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>{hero.subtitle}</span>

        <h2 className={styles.name}>{hero.heading}</h2>

        <p className={styles.bio}>{hero.subheading}</p>

        <div className={styles.ctaRow}>
          <Link href={hero.primaryCta.href} className={styles.primaryCta}>
            {hero.primaryCta.label}
          </Link>
          <Link href={hero.secondaryCta.href} className={styles.secondaryCta}>
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
