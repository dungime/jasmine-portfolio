import Link from "next/link";
import styles from "./Navbar.module.scss";
import { site } from "@/content/site";

export function Navbar() {
  return (
    <header className={styles.wrap}>
      <div className={styles.inner}>
        <Link href="#top" className={styles.logo}>
          <span className={styles.logoMark}>{site.logo}</span>
          {site.name}
        </Link>

        <nav className={styles.links}>
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href={site.contactCta.href} download className={styles.cta}>
          {site.contactCta.label}
        </Link>
      </div>
    </header>
  );
}
