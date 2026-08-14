import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.scss";
import { projects } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/icons";
import { withBasePath } from "@/lib/base-path";

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className={styles.badge}>{projects.badge}</span>
          <div>
            <h2 className={styles.heading}>{projects.heading}</h2>
          </div>
        </div>
        <p className={styles.subheading}>{projects.subheading}</p>
      </div>

      <div className={styles.grid}>
        {projects.items.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`} className={styles.card}>
            <div className={styles.thumb}>
              {project.thumbnail && (
                <Image
                  src={withBasePath(project.thumbnail)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              )}
            </div>
            <div className={styles.body}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{project.title}</h3>
                <span className={styles.arrow}>
                  <ArrowUpRightIcon />
                </span>
              </div>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
