# English with J portfolio update

Reviewed on November 7, 2026. Content source: the owner-supplied
`ENGLISH_WITH_J_PORTFOLIO_FINAL_SPEC (1).md`. The October requirements document
referenced by that spec is a plan, not evidence of completed implementation.

## Published content

The existing `/projects/english-with-j` route now uses the shared case study
renderer: overview, focus areas, engineering highlights, solo product ownership,
and current progress/roadmap. English publication copy is retained, with matching
Vietnamese content. The hero and homepage card each display one localized status
pill. Both preview links point to `https://englishwithj.xyz/`.

Phase 1 is described as an in-progress MVP: first listen/notes, segment dictation,
audio-and-text caption shadowing, and completion/progress. Phase 2 AI questions,
mistake analysis, and voice input remain planned; Phase 3 covers caption refinement.
No completion percentages, learning outcomes, payment delivery, or backend
implementation claims are published.

## Source verification and limits

The sibling checkout `../englishwithJ` was available for read-only inspection.

- `package.json` and the source establish Next.js, React, and TypeScript usage.
  These are the only technology tags displayed on this project.
- `src/features/listening/practice-page.tsx` contains the four-stage practice UI,
  note/draft handling, and calls to a save queue/API.
- `src/features/listening/comparison.ts` contains word-comparison logic.
- `src/features/listening/media.ts` and `components/captions.tsx` contain
  timestamp-based caption selection and text highlighting. The player uses audio,
  not a rendered video.
- `src/features/listening/components/shell.tsx` and `i18n.ts` contain EN/VI labels
  and a language control.
- Crucially, `src/features/listening/server/backend.ts` throws
  `PracticeError("unavailable", 503)`. The API route uses this adapter. Its comment
  explicitly says no auth/database integration exists in this checkout yet.

This verifies the presence of frontend and comparison code, not a usable deployed
lesson flow. Product tests and authenticated product flows were not run. Account
flows, durable notes/progress, paid access, payment webhooks, and AI integrations
remain unverified. The portfolio therefore retains the spec's conservative copy
and adds no feature-completion table.

The public homepage returned HTTP 200 and the title `English with J`, but a
Chromium inspection after network idle found empty body text and no images.
No genuine English with J screenshots were found in the inspected asset directories. The portfolio
uses three explicitly labeled conceptual diagrams, with no fabricated UI or
borrowed E-Learning imagery. Public accessibility does not establish completion
or that the public deployment matches the local checkout.

## Portfolio validation

- `npm run lint`: passed.
- `npx tsc --noEmit --incremental false`: passed.
- `npm run build`: passed, exporting all 13 pages.
- Existing non-blocking Next.js warning: multiple lockfiles cause workspace-root
  inference to select the parent directory.
- English publication prose compared with the supplied spec: all 17 standalone
  paragraphs matched verbatim; cards, metadata, labels, and supporting items were
  also included.
- Chromium checked EN and VI at 320, 390, 768, and 1440 px: no horizontal overflow,
  correct stacked/two-column focus cards, five-part layout, one hero status pill,
  two safe external preview links, and three labeled conceptual figures.
- Checked title/description metadata, back-to-projects and homepage-card navigation,
  language persistence after reload, and homepage card status.
- Checked the final homepage hero copy in EN/VI at 390 and 1440 px, and verified
  the preview CTA has a visible keyboard-focus outline.
- Smoke-checked NexStox, E-Learning, Cleaning Services, and Shopify pages; their
  images loaded through `/jasmine-portfolio/assets/...`. No browser runtime errors
  or failing local HTTP responses occurred during the final checks.
- Compared both content files against HEAD: all unrelated projects are unchanged.
  The homepage hero's two paragraphs were subsequently updated in EN/VI at the
  owner's request, using the supplied React/TypeScript and 9+ years copy.

The shared renderer changes are optional fields for hero diagrams, extra copy,
status, preview actions, and supporting items. Existing case studies retain their
previous content and rendering paths. No routes, base-path configuration, image
pipeline, dependencies, or hosting configuration changed.

## Modified files

- `src/content/en.json`, `src/content/vi.json`: English with J content and the
  subsequently requested homepage hero paragraphs.
- `src/content/project-detail.ts`: optional fields for the shared renderer.
- `src/app/projects/[id]/ProjectCaseStudy.tsx` and
  `ProjectCaseStudy.module.scss`: status, diagrams, preview actions, supporting
  items, and responsive styling.
- `src/app/projects/[id]/page.tsx`: optional per-project SEO title.
- `src/components/Projects/Projects.tsx` and `Projects.module.scss`: optional
  localized project-card status.
- `docs/english-with-j-portfolio.md`: this content and verification record.
