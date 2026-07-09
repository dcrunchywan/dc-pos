# TASK-002

Title

Create Application Shell Layout

---

## Objective

Create the main application layout that replicates the current Google AppSheet POS workflow.

This task only creates the application shell.

No business logic.

No product rendering.

No API.

---

## Read First

Before doing anything, read:

- .ai/AI_CONTEXT.md
- .ai/PROJECT_STATE.md

---

## Requirements

Desktop First.

Tablet Landscape is the primary target device.

Mobile must remain usable.

Use CSS Grid.

The application must contain three areas:

1. Left Sidebar
2. Main Content
3. Right Cart Panel

Each area should contain only a placeholder title.

Example:

Sidebar

Main Content

Cart

---

## Layout

Desktop

Sidebar:
fixed width

Main:
flexible width

Cart:
fixed width

Main content should be the only scrollable area.

---

## Mobile

Sidebar becomes hidden (future drawer).

Cart moves below main content.

No drawer implementation yet.

---

## Design Rules

Do not redesign the workflow.

Replicate the AppSheet operational layout.

Keep the HTML semantic.

Use CSS variables where appropriate.

Do not install dependencies.

---

## Acceptance Criteria

- Responsive
- No console errors
- No warnings
- Vite build passes
- Layout closely resembles the existing AppSheet structure
- Placeholder only (no business logic)

---

## Deliverables

- Updated layout
- Task Report
- Build verification

Mobile Portrait

Do not place the cart below the page.

Instead:

The payment summary must remain fixed to the bottom of the viewport.

The product list scrolls independently.

The bottom payment area is always visible.