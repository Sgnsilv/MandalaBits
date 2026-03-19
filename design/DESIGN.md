# Design System Specification: The Digital Atelier

## 1. Overview & Creative North Star
**Creative North Star: "The Ethereal Archive"**

This design system moves away from the rigid, sterile grids of traditional productivity apps and toward the tactile, breathable experience of a high-end physical planner. The goal is "Editorial Productivity"—where the interface feels like a curated exhibition of one's thoughts. 

We break the "template" look through **Intentional Asymmetry**. Instead of perfectly centered columns, we use generous, offset white space (e.g., a wide left margin for `display-lg` titles and a narrower right column for utility). By overlapping `surface-container-lowest` cards slightly over `surface-container` sections, we create a sense of physical paper layers, moving the UI from a flat screen to a tactile desktop.

## 2. Colors & Surface Philosophy
The palette is rooted in a spectrum of atmospheric blues, designed to reduce cognitive load and evoke a sense of calm focus.

### The "No-Line" Rule
**Strict Mandate:** 1px solid borders are prohibited for sectioning. Structural boundaries must be defined solely through background color shifts or tonal transitions.
- **Example:** A task list sitting in a `surface-container-low` (#f1f4f9) block atop a `surface` (#f8f9fd) background.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked sheets of fine vellum.
- **Base Layer:** `surface` (#f8f9fd) for the overall application background.
- **Section Layer:** `surface-container` (#eaeef4) to group related modules (e.g., a monthly calendar view).
- **Focus Layer:** `surface-container-lowest` (#ffffff) for active input areas or primary journal entries. This "pops" the most critical content without using harsh shadows.

### The "Glass & Gradient" Rule
To add "soul" to the digital medium:
- **Floating Elements:** Modals and navigation bars should use `surface-container-lowest` at 80% opacity with a `backdrop-blur` of 20px.
- **Signature CTAs:** Use a subtle linear gradient (Top-Left to Bottom-Right) from `primary` (#22648e) to `primary-dim` (#0e5881) for primary action buttons to give them a soft, rounded weight.

## 3. Typography: Editorial Authority
The system pairs the high-fashion elegance of **Newsreader** (Serif) with the functional precision of **Inter** (Sans-Serif).

- **Display & Headlines (Newsreader):** Used for dates, journal titles, and "Moment" headers. The serif adds a "written" human touch.
    - `display-lg`: 3.5rem (The "Hero" date of the day).
    - `headline-md`: 1.75rem (Section headers like "Gratitude" or "Log").
- **Title & Body (Inter):** Used for tasks, notes, and UI labels.
    - `body-lg`: 1rem (Primary journal text).
    - `label-md`: 0.75rem (Metadata like timestamps or tags).

**Hierarchy Tip:** Always lead with a `display-sm` serif header to anchor the page, followed by generous `spacing-8` (2.75rem) before the first body element to allow the layout to breathe.

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, mimicking how paper reflects light.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The slight shift from #ffffff to #f1f4f9 provides enough contrast for the eye to perceive a physical lift without needing a border.
- **Ambient Shadows:** For floating elements (like a "Quick Add" FAB), use a highly diffused shadow:
    - `box-shadow: 0 12px 40px rgba(34, 100, 142, 0.08);` (Note the use of a tinted `primary` color for the shadow instead of pure black).
- **The "Ghost Border" Fallback:** If a container sits on an identical background, use the `outline-variant` (#acb3ba) at **15% opacity**. It should be felt, not seen.

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-dim`), white text, `rounded-lg` (1rem). 
- **Secondary:** `surface-container-high` (#e4e8ef) fill with `on-surface` (#2d3339) text. No border.
- **States:** On hover, increase the `surface-container-highest` elevation or slightly deepen the gradient.

### Input Fields & Text Areas
- **The Journal Field:** No box. Use a `surface-container-lowest` background with a `rounded-md` (0.75rem) corner. 
- **Focus State:** Instead of a heavy border, use a 2px `primary` underline or a subtle glow using the `primary-fixed` (#95cfff) color.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines. 
- **Implementation:** Separate list items using `spacing-2` (0.7rem) of vertical white space. For distinct "Log" entries, use a alternating tonal background (Every second item uses `surface-container-low`).

### Progress Trackers (Habits)
- Use `primary-container` (#95cfff) for inactive states and `primary` (#22648e) for active. Use `rounded-full` (9999px) for pill-shaped habit trackers to mimic "filled-in" ink bubbles.

### New Component: "The Vellum Overlay"
A side-panel component for secondary notes. It uses a `surface-container-lowest` background with 70% opacity and a heavy blur, sliding in to overlap the main content, creating a physical sense of "adding a page."

## 6. Do's and Don'ts

### Do:
- **Use Asymmetric Spacing:** Give more padding to the left of a text block than the right to mimic the margin of a bound book.
- **Embrace White Space:** Use `spacing-12` (4rem) between major sections.
- **Tint Your Neutrals:** Always ensure background grays have a hint of blue (`surface` #f8f9fd) to maintain the "calm" atmosphere.

### Don't:
- **Don't use 100% Black:** Use `on-surface` (#2d3339) for text. Pure black is too harsh for the "Atelier" aesthetic.
- **Don't use Sharp Corners:** Even for small items like checkboxes, use at least `rounded-sm` (0.25rem).
- **Don't Over-Shadow:** If a layout feels cluttered, remove shadows and increase the background color contrast between layers instead.