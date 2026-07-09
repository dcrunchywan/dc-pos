# TASK-004

Title

Complete Legacy POS UI Clone

---

## Objective

Continue cloning the production AppScript POS interface until the Vite application visually matches the existing production application as closely as possible.

The goal is visual parity.

No business logic should be migrated.

---

## Golden UI Reference

Read before implementation:

- legacy/index.html

Treat this file as the single source of truth for the user interface.

Do not redesign the application.

---

## Read First

Before editing files, read:

- .ai/AI_CONTEXT.md
- .ai/PROJECT_STATE.md
- legacy/index.html

---

## Business Intent

Cashiers should immediately feel familiar with the new application.

The interface should look and behave like the current production system.

Modernize the code, not the workflow.

---

## Scope

Complete the remaining visual migration of the POS screen.

This includes, where applicable:

- Sidebar navigation
- Sidebar icons
- Sidebar status section
- Cart panel
- Cart header
- Cart item rows
- Cart footer
- Total section
- Payment section
- Action buttons
- Product card polishing
- Header spacing
- Typography
- Colors
- Borders
- Shadows
- Mobile bottom payment bar
- Overall spacing and density

Use realistic static dummy content.

No placeholders that simply display labels such as "Cart Header" or "Cart Footer".

---

## Requirements

Preserve the legacy application:

- layout
- spacing
- proportions
- hierarchy
- cashier workflow

The result should feel almost identical to the current production UI.

Use semantic HTML.

Use Vanilla CSS.

Do not introduce Bootstrap.

---

## Out of Scope

Do not implement:

- Cart logic
- Search logic
- Category filtering
- Product filtering
- Payment processing
- Transaction saving
- State management
- API calls
- google.script.run
- localStorage
- IndexedDB
- Supabase

Everything remains static.

---

## Design Rules

Clone.

Do not redesign.

Minor improvements are allowed only if they clearly improve usability without changing the workflow.

Preserve the operational experience.

---

## Acceptance Criteria

- Visual similarity to legacy UI is above 95%.
- Desktop layout closely matches the production application.
- Mobile layout follows the legacy workflow.
- Sidebar visually resembles the production system.
- Cart visually resembles the production system.
- Product cards closely resemble the production system.
- No placeholder panels remain on the POS screen.
- Responsive behavior remains correct.
- Build passes.
- No console errors.

---

## Deliverables

- Updated POS screen
- Build verification
- Task Report
- Desktop screenshot
- Tablet screenshot
- Mobile screenshot

---

Success Criteria

The cashier should be able to switch from the legacy application to the new Vite application without needing to relearn the interface.

## Before Editing

1. Explain your implementation plan.
2. List the files to modify.
3. Estimate complexity.
4. Wait for approval.
