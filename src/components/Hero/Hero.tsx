'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.scss';
import { useContent } from '@/content';
import { withBasePath } from '@/lib/base-path';
import { ScrollRing } from '@/components/graphics/ScrollRing';

const BOLD_PATTERN = /\*\*(.+?)\*\*/g;

// Wrap a phrase in **double asterisks** in the content file to bold it.
function renderBold(text: string) {
  return text
    .split(BOLD_PATTERN)
    .map((part, index) => (index % 2 === 1 ? <strong key={index}>{part}</strong> : part));
}

export function Hero() {
  const { hero } = useContent();

  return (
    <section id='top' className={styles.section}>
      <div>
        {/* <span className={styles.badge}>{hero.badge}</span> */}

        <p className={styles.greeting}>{hero.greeting}</p>
        <h1 className={styles.heading}>
          <span className={styles.headingHighlight}>{hero.role}</span>
        </h1>
        {/* <p className={styles.tagline}>{hero.tagline}</p> */}
        <p className={styles.description}>{renderBold(hero.description1)}</p>
        <p className={styles.description}>{renderBold(hero.description2)}</p>

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
            src={withBasePath('/assets/images/profile-3.jpg')}
            alt={'profile'}
            fill
            sizes='(max-width: 900px) 100vw, 380px'
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className={styles.overlay} />
      </div>

      {/* Scroll badge remains disabled. */}
      {false && <Link href="#about" className={styles.scrollBadge} aria-label="Scroll to learn more">
        <ScrollRing label={hero.scrollLabel} className={styles.scrollRing} textClassName={styles.scrollText} />
        <span className={styles.scrollArrow}>↓</span>
      </Link>}
    </section>
  );
}
