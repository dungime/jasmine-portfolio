"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import styles from "./Navbar.module.scss";
import { site } from "@/content/site";
import { withBasePath } from "@/lib/base-path";

function handleSectionLinkClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;

  const target = document.getElementById(href.slice(1));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
}

// Extra breathing room below the navbar, on top of its own measured height.
const SCROLL_GAP = 20;

// Measure the navbar's real rendered height and feed it into the scroll
// container as scroll-padding-top, so scrollIntoView() (native browser
// smooth-scroll, which keeps tracking the live target position even if the
// layout shifts mid-scroll) clears the sticky navbar on its own.
function useNavHeight(ref: React.RefObject<HTMLElement | null>) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const nav = ref.current;
    if (!nav) return;

    const updateHeight = () => {
      const navHeight = nav.offsetHeight + SCROLL_GAP;
      document.documentElement.style.scrollPaddingTop = `${navHeight}px`;
      setHeight(navHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [ref]);

  return height;
}

function useActiveSection(navHeight: number) {
  const [activeHref, setActiveHref] = useState<string>("#");

  useEffect(() => {
    if (navHeight === 0) return;

    // "About" points at "#" (no real id) — its actual section is the Hero
    // at the top of the page, so track "top" for it explicitly. Without
    // this, scrolling back up past the first real section never re-activates
    // "About" since nothing was ever observed for it.
    const trackedSections = site.nav.map((item) => ({
      href: item.href,
      id: item.href === "#" ? "top" : item.href.slice(1),
    }));

    const hrefByElement = new Map<Element, string>();
    trackedSections.forEach(({ href, id }) => {
      const el = document.getElementById(id);
      if (el) hrefByElement.set(el, href);
    });

    if (hrefByElement.size === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const href = hrefByElement.get(entry.target);
            if (href) setActiveHref(href);
          }
        });
      },
      { rootMargin: `-${navHeight}px 0px -50% 0px`, threshold: 0 }
    );

    hrefByElement.forEach((_href, el) => observer.observe(el));

    return () => observer.disconnect();
  }, [navHeight]);

  return activeHref;
}

export function Navbar() {
  const wrapRef = useRef<HTMLElement | null>(null);
  const navHeight = useNavHeight(wrapRef);
  const activeHref = useActiveSection(navHeight);

  return (
    <header ref={wrapRef} className={styles.wrap}>
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
