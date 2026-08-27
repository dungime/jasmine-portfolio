import { NAV_OFFSET } from "@/lib/nav-offset";

function getTargetTop(target: Element) {
  return target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
}

/**
 * Scroll to a section by id, clearing the sticky navbar.
 *
 * Late-loading images/fonts can still shift the layout after the initial
 * scroll runs (most noticeable right after a fresh page load), leaving the
 * target in the wrong spot. Re-check the position once fonts/assets settle
 * and snap to the corrected spot — but only if it actually drifted and the
 * user hasn't scrolled away on their own in the meantime.
 */
export function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  const target = document.getElementById(id);
  if (!target) return;

  const intendedTop = getTargetTop(target);
  window.scrollTo({ top: intendedTop, behavior });

  const resnap = () => {
    const el = document.getElementById(id);
    if (!el) return;

    const correctedTop = getTargetTop(el);
    const driftedMeaningfully = Math.abs(correctedTop - intendedTop) > 4;
    const userStillNearby = Math.abs(window.scrollY - intendedTop) < 150;

    if (driftedMeaningfully && userStillNearby) {
      window.scrollTo({ top: correctedTop, behavior: "auto" });
    }
  };

  document.fonts?.ready.then(resnap);
  if (document.readyState !== "complete") {
    window.addEventListener("load", resnap, { once: true });
  }
}
