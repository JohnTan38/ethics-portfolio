# AGENTS.md

Purpose: Guidance for coding agents working in this Next.js repository. This file is designed to be reusable across similar Next.js projects.

## Core Principles
- Preserve existing UX patterns unless explicitly asked to redesign.
- Keep changes minimal, focused, and reversible.
- Favor readability over cleverness.
- Avoid breaking route structure, data contracts, and shared component APIs.

## Tech Assumptions
- Framework: Next.js (App Router).
- Language: TypeScript + React.
- Styling: Tailwind CSS utility classes.
- Icons: `lucide-react`.
- Content pages may use HTML strings rendered with `dangerouslySetInnerHTML`; sanitize by design and only add trusted static content.

## Project Conventions
- Main landing page: `app/page.tsx`.
- Section route pattern: `app/project/[id]/[sectionId]/`.
- Section data source: `lib/data/project1.ts`.
- Reusable UI components live under `app/components/`.
- Static assets (PDF, images): `public/`.

## Implementation Rules
- When adding a new section/part:
  1. Add or update card data in `app/page.tsx`.
  2. Add corresponding section payload in `lib/data/project1.ts`.
  3. Ensure IDs match route links exactly.
  4. Maintain color/theme consistency with existing parts.
- When adding downloadable files:
  1. Place files in `public/`.
  2. Use root-relative URLs (example: `/My_File.pdf`).
  3. Wire options through selector components (example: `PdfDownloadSelector`).
- Keep UI responsive and mobile-safe for all edits.

## Safety and Quality
- Do not remove existing user content unless requested.
- Do not rename route folders or dynamic params without explicit instruction.
- Validate that new links and downloads resolve correctly.
- Prefer additive changes over broad refactors during feature requests.

## Agent Workflow
1. Read target files first.
2. Implement exact requested behavior.
3. Re-check related components and data links.
4. Summarize changed files and what each change does.
5. Note any unverified items if runtime tests were not executed.

## Extending for Other Next.js Projects
- Keep this file and adjust only:
  - Route locations
  - Data source files
  - Styling system notes (if not Tailwind)
  - Build/test commands
- Maintain the same structure so agents can onboard quickly.
