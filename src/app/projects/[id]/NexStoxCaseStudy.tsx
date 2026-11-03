import Image from "next/image";
import type { SiteContent } from "@/content";
import { icons } from "@/components/icons";
import { withBasePath } from "@/lib/base-path";
import shared from "./page.module.scss";
import styles from "./NexStoxCaseStudy.module.scss";

type CaseStudy = NonNullable<SiteContent["projects"]["items"][number]["caseStudy"]>;
type Screenshot = CaseStudy["heroImage"];

function ProjectScreenshot({ image, hero = false }: { image: Screenshot; hero?: boolean }) {
  return (
    <figure className={styles.screenshot}>
      <Image
        src={withBasePath(image.src)}
        alt={image.caption}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 480px, (min-width: 768px) 680px, 100vw"
        loading={hero ? "eager" : "lazy"}
        fetchPriority={hero ? "high" : "auto"}
      />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <header className={styles.sectionHeader}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </header>
  );
}

function EngineeringFacts({ item }: { item: CaseStudy["engineering"]["items"][number] }) {
  return (
    <div className={styles.caseContent}>
      <p className={styles.eyebrow}>{item.eyebrow}</p>
      <h3>{item.title}</h3>
      <dl className={styles.facts}>
        {item.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.body}</dd>
          </div>
        ))}
      </dl>
      {item.note && <p className={styles.caseNote}>{item.note}</p>}
    </div>
  );
}

const contributionIcons = [icons.layout, icons.chart, icons.code, icons.check];

export function NexStoxCaseStudy({ content }: { content: CaseStudy }) {
  const { engineering, ownership, results } = content;
  const { diagram, workflow } = engineering;

  return (
    <article className={styles.article} aria-labelledby="nexstox-title">
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h1 id="nexstox-title">{content.title}</h1>
          <p className={styles.lead}>{content.lead}</p>
          <p className={styles.description}>{content.description}</p>
          <dl className={styles.meta}>
            {content.meta.map((entry) => (
              <div key={entry.label}>
                <dt>{entry.label}</dt>
                <dd>{entry.value}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.team}>
            <strong>{content.team.label}:</strong> {content.team.value}
          </p>
        </div>
        <div className={styles.heroVisual}>
          <ProjectScreenshot image={content.heroImage} hero />
        </div>
      </header>

      <section className={styles.section} aria-labelledby="contributions-title">
        <SectionHeading {...content.contributions} id="contributions-title" />
        <div className={shared.challengeGrid}>
          {content.contributions.items.map((item, index) => (
            <div className={shared.challengeCard} key={item.title}>
              <div className={styles.cardMarker} aria-hidden="true">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {contributionIcons[index]}
              </div>
              <h3 className={shared.itemTitle}>{item.title}</h3>
              <p className={shared.itemBody}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="engineering-title">
        <SectionHeading {...engineering} id="engineering-title" />
        <div className={styles.case}>
          <figure className={styles.diagram}>
            <div className={styles.node}>
              <strong>{diagram.sharedTitle}</strong>
              <span>{diagram.sharedDetail}</span>
            </div>
            <span className={styles.connector} aria-hidden="true">↓</span>
            <div className={styles.node}>
              <strong>{diagram.configTitle}</strong>
              <span>{diagram.configDetail}</span>
            </div>
            <div className={styles.branchConnectors} aria-hidden="true"><span>↙</span><span>↘</span></div>
            <div className={styles.branches}>
              {diagram.platforms.map((platform) => (
                <div className={styles.platform} key={platform}>{platform}</div>
              ))}
            </div>
            <figcaption>{diagram.caption}</figcaption>
          </figure>
          <EngineeringFacts item={engineering.items[0]} />
        </div>
        <div className={`${styles.case} ${styles.caseReverse}`}>
          <div className={styles.workflowVisual}>
            <p className={styles.eyebrow}>{workflow.eyebrow}</p>
            <ProjectScreenshot image={workflow.image} />
          </div>
          <EngineeringFacts item={engineering.items[1]} />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="ownership-title">
        <SectionHeading {...ownership} id="ownership-title" />
        <p className={styles.ownershipLead}>{ownership.lead}</p>
        <p className={styles.ownershipDescription}>{ownership.description}</p>
        <ol className={styles.flow}>
          {ownership.steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              {index < ownership.steps.length - 1 && <span className={styles.flowArrow} aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="outcomes-title">
        <SectionHeading {...results} id="outcomes-title" />
        <ul className={styles.outcomes}>
          {results.items.map((outcome) => (
            <li key={outcome}>
              <span className={shared.checkIcon} aria-hidden="true">{icons.check}</span>
              <p>{outcome}</p>
            </li>
          ))}
        </ul>
        <div className={styles.takeaway}>
          <h3>{results.takeawayTitle}</h3>
          <p>{results.takeaway}</p>
        </div>
      </section>
    </article>
  );
}
