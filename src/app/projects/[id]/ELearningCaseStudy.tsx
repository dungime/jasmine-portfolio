import { Fragment } from "react";
import type { SiteContent } from "@/content";
import { icons } from "@/components/icons";
import shared from "./page.module.scss";
// Reuse the reference page's layout without changing its implementation or styles.
import styles from "./NexStoxCaseStudy.module.scss";
import local from "./ELearningCaseStudy.module.scss";

type CaseStudy = NonNullable<SiteContent["projects"]["items"][number]["learningCaseStudy"]>;

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
    </div>
  );
}

function LinearDiagram({
  nodes,
  connectors = ["↓", "↓"],
  detail,
  caption,
  className = "",
}: {
  nodes: string[];
  connectors?: string[];
  detail?: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={`${styles.diagram} ${className}`}>
      {nodes.map((node, index) => (
        <Fragment key={node}>
          {index > 0 && <span className={styles.connector} aria-hidden="true">{connectors[index - 1]}</span>}
          <div className={styles.node}>
            <strong>{node}</strong>
            {index === 1 && detail && <span>{detail}</span>}
          </div>
        </Fragment>
      ))}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

const contributionIcons = [icons.code, icons.graduationCap, icons.people, icons.check];

export function ELearningCaseStudy({ content }: { content: CaseStudy }) {
  const { heroDiagram, engineering, ownership, results, conceptualCaption } = content;

  return (
    <article className={styles.article} aria-labelledby="elearning-title">
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h1 id="elearning-title">{content.title}</h1>
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
        </div>
        <div className={styles.heroVisual}>
          <figure className={`${styles.diagram} ${local.heroDiagram}`}>
            <div className={styles.node}><strong>{heroDiagram.title}</strong></div>
            <div className={styles.branchConnectors} aria-hidden="true"><span>↙</span><span>↘</span></div>
            <div className={styles.branches}>
              {heroDiagram.modes.map((mode) => <div className={styles.platform} key={mode}>{mode}</div>)}
            </div>
            <div className={styles.branchConnectors} aria-hidden="true"><span>↘</span><span>↙</span></div>
            <div className={styles.node}><strong>{heroDiagram.discussion}</strong></div>
            <figcaption>{conceptualCaption}</figcaption>
          </figure>
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
          <LinearDiagram {...engineering.learningDiagram} caption={conceptualCaption} />
          <EngineeringFacts item={engineering.items[0]} />
        </div>
        <div className={`${styles.case} ${styles.caseReverse}`}>
          <div className={styles.workflowVisual}>
            <LinearDiagram {...engineering.discussionDiagram} caption={conceptualCaption} className={local.insetDiagram} />
          </div>
          <EngineeringFacts item={engineering.items[1]} />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="ownership-title">
        <SectionHeading {...ownership} id="ownership-title" />
        <p className={styles.ownershipDescription}>{ownership.description}</p>
        <figure className={`${styles.diagram} ${local.foundationDiagram}`}>
          <div className={styles.node}><strong>{ownership.diagram.workspace}</strong></div>
          <div className={styles.branchConnectors} aria-hidden="true"><span>↙</span><span>↘</span></div>
          <div className={styles.branches}>
            {ownership.diagram.apps.map((app) => <div className={styles.platform} key={app}>{app}</div>)}
          </div>
          <div className={styles.branchConnectors} aria-hidden="true"><span>↘</span><span>↙</span></div>
          <div className={styles.node}>
            <strong>{ownership.diagram.models}</strong>
            <span>{ownership.diagram.example}</span>
          </div>
          <figcaption>{conceptualCaption}</figcaption>
        </figure>
        <p className={styles.ownershipDescription}>{ownership.reflection}</p>
      </section>

      <section className={styles.section} aria-labelledby="outcomes-title">
        <SectionHeading {...results} id="outcomes-title" />
        <ul className={styles.outcomes}>
          {results.items.map((outcome) => (
            <li key={outcome.title}>
              <span className={shared.checkIcon} aria-hidden="true">{icons.check}</span>
              <div>
                <h3 className={local.outcomeTitle}>{outcome.title}</h3>
                <p>{outcome.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
