import styles from "./Footer.module.scss";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.wrap}>
      <div className={styles.bottom}>
        <span className={styles.copyright}>
          © {year} {site.name}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
