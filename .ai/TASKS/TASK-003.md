# TASK-003

Title

Migrate POS Main Workspace

---

## Objective

Migrate the main POS workspace from the legacy AppScript application into the new Vite project.

The objective is to recreate the visual layout and operational workflow of the existing POS without migrating any business logic.

This task focuses only on the cashier's main workspace.

---

## Golden UI Reference

Read before implementation:

- legacy/index.html

This file is the Golden UI Reference.

Do not redesign it.

Preserve the existing cashier workflow and visual proportions as closely as possible.

---

## Read First

Before editing files, read:

- .ai/AI_CONTEXT.md
- .ai/PROJECT_STATE.md
- legacy/index.html

---

## Business Intent

The cashier must immediately recognize the interface.

Do not optimize for modern appearance.

Optimize for operational familiarity and transaction speed.

The legacy UI has already been validated through daily production use.

---

## Scope

Migrate only the Main Workspace.

Include:

- Search Bar (UI only)
- Bypass Tunai switch (UI only)
- Category Level 1 chips
- Category Level 2 chips
- Product Grid
- 12 dummy product cards

Do NOT migrate:

- Cart logic
- Payment logic
- Sidebar logic
- Backend calls
- Owner dashboard
- Stock module
- History module

---

## Requirements

The visual layout should closely follow the legacy application.

Preserve:

- spacing
- proportions
- density
- hierarchy
- cashier workflow

Use semantic HTML.

Use Vanilla CSS.

Do not use Bootstrap.

---

## Product Cards

Create 12 static product cards.

Each card should contain:

- Image placeholder
- Category badge
- Product name
- Price

Use realistic dummy data.

No click events.

---

## Search Area

Include:

- Search input
- Bypass Tunai switch
- Category Level 1 chips
- Category Level 2 chips

Everything is static.

No filtering.

No state.

---

## Out of Scope

Do not implement:

- JavaScript interaction
- Event listeners
- State management
- API
- google.script.run
- localStorage
- Supabase
- IndexedDB

---

## Design Rules

Do not redesign the interface.

The legacy AppScript UI is considered the UX specification.

Desktop and mobile may have different layouts if required by operational workflow.

---

## Acceptance Criteria

- Visual layout resembles the legacy POS workspace.
- Product Grid becomes the dominant visual area.
- Search area proportions match the legacy UI.
- Responsive behavior remains intact.
- Build passes successfully.
- No console errors.
- No business logic.

---

## Deliverables

- Updated POS Main Workspace
- Build verification
- Task Report
- Browser screenshot for review