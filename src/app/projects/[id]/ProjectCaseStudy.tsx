import { Fragment, type CSSProperties } from "react";
import Image from "next/image";
import type { ProjectCaseStudyContent, ProjectDiagram, ProjectFeature, ProjectImage, ProjectSection } from "@/content/project-detail";
import { icons, type IconName } from "@/components/icons";
import { withBasePath } from "@/lib/base-path";
import shared from "./page.module.scss";
import styles from "./ProjectCaseStudy.module.scss";

function ProjectScreenshot({ image, hero = false, full = false, card = false }: {
  image: ProjectImage;
  hero?: boolean;
  full?: boolean;
  card?: boolean;
}) {
  const screenshot = (
    <Image
      src={withBasePath(image.src)}
      alt={image.alt ?? image.caption}
      width={image.width}
      height={image.height}
      sizes={full ? "(max-width: 1160px) 100vw, 1080px" : card
        ? "(max-width: 640px) 100vw, (max-width: 1160px) 50vw, 520px"
        : "(min-width: 1024px) 480px, (min-width: 768px) 680px, 100vw"}
      loading={hero ? "eager" : "lazy"}
      fetchPriority={hero ? "high" : "auto"}
    />
  );

  const figure = (
    <figure className={`${styles.screenshot} ${card ? styles.heroVisual : ""}`}>
      {screenshot}
      <figcaption>
        {image.caption}
        {image.openLabel && <span className={styles.screenshotHint}>{image.openLabel}</span>}
      </figcaption>
    </figure>
  );

  return image.openLabel ? (
    <a
      className={styles.screenshotOpener}
      href={withBasePath(image.src)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${image.caption}. ${image.openLabel}`}
    >
      {figure}
    </a>
  ) : figure;
}

function Diagram({ content, inset = false, standalone = false }: {
  content: ProjectDiagram;
  inset?: boolean;
  standalone?: boolean;
}) {
  const branches = content.branches && (
    <div className={`${styles.branches} ${content.sharedResource ? styles.apps : ""}`}>
      {content.branches.map((branch) => <div className={styles.platform} key={branch}>{branch}</div>)}
    </div>
  );

  return (
    <figure className={`${styles.diagram} ${inset ? styles.insetDiagram : ""} ${standalone ? styles.foundationDiagram : ""}`}>
      {content.nodes.map((node, index) => (
        <Fragment key={node.title}>
          {index > 0 && <span className={styles.connector} aria-hidden="true">↓</span>}
          <div className={styles.node}>
            <strong>{node.title}</strong>
            {node.detail && <span>{node.detail}</span>}
          </div>
        </Fragment>
      ))}
      {branches && (content.sharedResource ? (
        <>
          <span className={styles.connector} aria-hidden="true">↓</span>
          <div className={styles.foundationResources}>
            {branches}
            <span className={styles.resourceConnector} aria-hidden="true">↔</span>
            <div className={styles.node}><strong>{content.sharedResource}</strong></div>
          </div>
        </>
      ) : (
        <>
          <div className={styles.branchConnectors} aria-hidden="true"><span>↙</span><span>↘</span></div>
          {branches}
        </>
      ))}
      {content.input && (
        <div className={styles.secondaryFlow}>
          {content.input.map((step, index) => (
            <Fragment key={step}>
              {index > 0 && <span aria-hidden="true">↓</span>}
              {index === 0 ? <strong>{step}</strong> : <span>{step}</span>}
            </Fragment>
          ))}
        </div>
      )}
      {content.caption && <figcaption>{content.caption}</figcaption>}
    </figure>
  );
}

function EngineeringFeature({ feature }: { feature: ProjectFeature }) {
  const visual = feature.visual;
  const media = visual && <>
    {visual.eyebrow && <p className={styles.eyebrow}>{visual.eyebrow}</p>}
    {visual.diagram && <Diagram content={visual.diagram} inset={visual.framed} />}
    {visual.image && <ProjectScreenshot image={visual.image} />}
  </>;

  return (
    <>
      <div className={`${styles.case} ${feature.reverse ? styles.caseReverse : ""} ${!visual ? styles.textOnly : ""}`}>
        {visual?.framed ? <div className={styles.workflowVisual}>{media}</div> : media}
        <div className={styles.caseContent}>
          <p className={styles.eyebrow}>{feature.eyebrow}</p>
          <h3>{feature.title}</h3>
          <dl className={styles.facts}>
            {feature.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>
                  {fact.points ? <>
                    {fact.body && <p>{fact.body}</p>}
                    {fact.points.length > 0 && <ul className={styles.implementation}>
                      {fact.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>}
                  </> : fact.body}
                </dd>
              </div>
            ))}
          </dl>
          {feature.note && <p className={styles.caseNote}>{feature.note}</p>}
        </div>
      </div>
      {!!feature.images?.length && <div className={styles.screenshotGrid}>
        {feature.images.map((image) => <ProjectScreenshot key={image.src} image={image} card />)}
      </div>}
    </>
  );
}

function CaseStudySection({ section }: { section: ProjectSection }) {
  const headingId = `${section.id}-title`;
  return (
    <section className={styles.section} aria-labelledby={headingId}>
      <header className={styles.sectionHeader}>
        <p className={styles.eyebrow}>{section.eyebrow}</p>
        <h2 id={headingId}>{section.title}</h2>
      </header>
      {section.showcases?.map((showcase, index) => (
        <div className={`${styles.case} ${styles.showcase} ${index % 2 ? styles.caseReverse : ""}`} key={showcase.title}>
          <div className={styles.workflowVisual}>
            <ProjectScreenshot image={showcase.image} />
          </div>
          <div className={styles.caseContent}>
            <p className={styles.eyebrow}>{showcase.subhead}</p>
            <h3>{showcase.title}</h3>
            <p className={styles.description}>{showcase.description}</p>
            <ul className={`${styles.implementation} ${styles.showcasePoints}`}>
              {showcase.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <a className={`${shared.homeLink} ${styles.externalLink}`} href={showcase.link.href} target="_blank" rel="noopener noreferrer">
              {showcase.link.label}
            </a>
          </div>
        </div>
      ))}
      {section.cards && <div className={shared.challengeGrid}>
        {section.cards.map((card, index) => (
          <div className={shared.challengeCard} key={card.title}>
            <div className={styles.cardMarker} aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span>
              {card.icon && Object.hasOwn(icons, card.icon) && icons[card.icon as IconName]}
            </div>
            <h3 className={shared.itemTitle}>{card.title}</h3>
            <p className={shared.itemBody}>{card.body}</p>
          </div>
        ))}
      </div>}
      {section.features?.map((feature) => <EngineeringFeature key={feature.title} feature={feature} />)}
      {section.lead && <p className={styles.ownershipLead}>{section.lead}</p>}
      {section.description && <p className={styles.ownershipDescription}>{section.description}</p>}
      {section.diagram && <Diagram content={section.diagram} standalone />}
      {section.steps && <ol
        className={`${styles.flow} ${section.steps.length > 3 ? styles.flowExtended : ""}`}
        style={{ "--step-count": section.steps.length } as CSSProperties}
      >
        {section.steps.map((step, index, steps) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.stepNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            {index < steps.length - 1 && <span className={styles.flowArrow} aria-hidden="true">→</span>}
          </li>
        ))}
      </ol>}
      {section.reflection && <p className={styles.ownershipDescription}>{section.reflection}</p>}
      {section.engagements?.map((engagement) => (
        <div className={styles.engagement} key={engagement.title}>
          <p className={styles.eyebrow}>{engagement.eyebrow}</p>
          <h3>{engagement.title}</h3>
          <p className={styles.description}>{engagement.body}</p>
          {engagement.link && <a className={`${shared.homeLink} ${styles.externalLink}`} href={engagement.link.href} target="_blank" rel="noopener noreferrer">
            {engagement.link.label}
          </a>}
        </div>
      ))}
      {section.outcomesTitle && <h3 className={styles.outcomesHeading}>{section.outcomesTitle}</h3>}
      {section.outcomes && <ul className={styles.outcomes}>
        {section.outcomes.map((outcome) => (
          <li key={outcome.title ?? outcome.body}>
            <span className={shared.checkIcon} aria-hidden="true">{icons.check}</span>
            {outcome.title ? <div>
              <h3 className={styles.outcomeTitle}>{outcome.title}</h3>
              <p>{outcome.body}</p>
            </div> : <p>{outcome.body}</p>}
          </li>
        ))}
      </ul>}
      {section.takeaway && <div className={styles.takeaway}>
        {section.takeawayTitle && <h3>{section.takeawayTitle}</h3>}
        <p>{section.takeaway}</p>
      </div>}
    </section>
  );
}

export function ProjectCaseStudy({ content }: { content: ProjectCaseStudyContent }) {
  const { hero, sections } = content;
  const full = hero.layout === "full";

  return (
    <article className={styles.article} aria-labelledby="project-title">
      <header className={`${styles.hero} ${full ? styles.heroFull : ""} ${!hero.heroImage ? styles.textOnly : ""}`}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="project-title">{hero.title}</h1>
          <p className={styles.lead}>{hero.lead}</p>
          <p className={styles.description}>{hero.description}</p>
          <dl className={styles.meta}>
            {hero.meta.map((entry) => <div key={entry.label}><dt>{entry.label}</dt><dd>{entry.value}</dd></div>)}
          </dl>
          {hero.team && <p className={styles.team}><strong>{hero.team.label}:</strong> {hero.team.value}</p>}
          {hero.techTags && <ul className={`${shared.techGrid} ${styles.techTags}`}>
            {hero.techTags.map((tag) => <li className={shared.techChip} key={tag}>{tag}</li>)}
          </ul>}
        </div>
        {hero.heroImage && <div className={`${styles.heroVisual} ${full ? styles.heroMedia : ""}`}>
          <ProjectScreenshot image={hero.heroImage} hero full={full} />
        </div>}
        {hero.heroImages && <div className={`${styles.screenshotGrid} ${styles.heroGallery}`}>
          {hero.heroImages.map((image) => <ProjectScreenshot key={image.src} image={image} hero card />)}
          {hero.imageNote && <p className={styles.imageNote}>{hero.imageNote}</p>}
        </div>}
      </header>
      {sections.map((section) => <CaseStudySection key={section.id} section={section} />)}
    </article>
  );
}
