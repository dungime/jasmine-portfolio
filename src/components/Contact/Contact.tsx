import Link from "next/link";
import styles from "./Contact.module.scss";
import { contact } from "@/content/site";
import { CopyEmailButton } from "./CopyEmailButton";
import { ArrowUpRightIcon, PhoneIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <span className={styles.badge}>{contact.badge}</span>
      <h2 className={styles.heading}>
        <span className={styles.highlight}>{contact.heading}</span>
      </h2>
      <p className={styles.subheading}>{contact.subheading}</p>

      {/* <a href={contact.resumeCta.href} download className={styles.resumeCta}>
        {contact.resumeCta.label}
      </a> */}

      <div className={styles.grid}>
        {contact.links.map((link) =>
          link.href.startsWith("mailto:") ? (
            <CopyEmailButton key={link.label} label={link.label} email={link.href.replace("mailto:", "")} />
          ) : (
            <Link key={link.label} href={link.href} className={styles.card}>
              {link.label}
              <span className={styles.arrow}>
                {link.href.startsWith("tel:") ? <PhoneIcon /> : <ArrowUpRightIcon />}
              </span>
            </Link>
          )
        )}
      </div>
    </section>
  );
}
