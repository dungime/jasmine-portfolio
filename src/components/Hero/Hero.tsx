import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.scss';
import { hero } from '@/content/site';

export function Hero() {
  return (
    <section id='top' className={styles.section}>
      <div>
        <span className={styles.badge}>{hero.badge}</span>

        <div>
          <h1 className={styles.heading}>{hero.heading}</h1>
        </div>

        <h2 className={styles.subtitle}>{hero.subtitle}</h2>
        <p className={styles.subheading}>{hero.subheading}</p>

        {/* <div className={styles.stats}>
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div> */}

        <div className={styles.ctaRow}>
          <Link href={hero.primaryCta.href} className={styles.primaryCta}>
            {hero.primaryCta.label}
          </Link>
          <Link href={hero.secondaryCta.href} className={styles.secondaryCta}>
            {hero.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.photo}>
          <Image
            src='/assets/images/profile-banner.jpg'
            alt={'profile'}
            fill
            sizes='(max-width: 900px) 100vw, 380px'
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>

      {/* <Link href="#about" className={styles.scrollBadge} aria-label="Scroll to learn more">
        <svg viewBox="0 0 100 100" className={styles.scrollRing}>
          <defs>
            <path id="scrollCirclePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text className={styles.scrollText}>
            <textPath href="#scrollCirclePath">
              {hero.scrollLabel} • {hero.scrollLabel} • {hero.scrollLabel} • {hero.scrollLabel} •{" "}
            </textPath>
          </text>
        </svg>
        <span className={styles.scrollArrow}>↓</span>
      </Link> */}
    </section>
  );
}
