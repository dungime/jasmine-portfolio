"use client";

import { useEffect, useState, type MouseEvent } from "react";
import styles from "./Navbar.module.scss";
import { site } from "@/content/site";
import { withBasePath } from "@/lib/base-path";

const NAV_OFFSET = 110;

function handleSectionLinkClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;

  const target = document.getElementById(href.slice(1));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
}

function useActiveSection() {
  const [activeHref, setActiveHref] = useState<string>("");

  useEffect(() => {
    const elements = site.nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: `-${NAV_OFFSET}px 0px -70% 0px`, threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return activeHref;
}

export function Navbar() {
  const activeHref = useActiveSection();

  return (
    <header className={styles.wrap}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} onClick={(e) => handleSectionLinkClick(e, "#top")}>
          <span className={styles.logoMark}>{site.logo}</span>
          {site.name}
        </a>

        <nav className={styles.links}>
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.link} ${item.href === activeHref ? styles.active : ""}`}
              onClick={(e) => handleSectionLinkClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href={withBasePath(site.contactCta.href)} download className={styles.cta}>
          {site.contactCta.label}
        </a>
      </div>
    </header>
  );
}
