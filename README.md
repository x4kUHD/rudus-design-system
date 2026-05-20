# Rudus Design System

Design system for [Rudus](https://rudus.ai) — AI-powered preconstruction software for structural concrete subcontractors.

Built for estimators who spend their days in dense, data-heavy applications. Single dark theme, high information density, minimal chrome. Designed to feel familiar to users coming from legacy tools like On-Screen Takeoff and eTakeoff Dimension while introducing AI-native interaction patterns.

![Design system overview](./preview.png)

---

## Packages

| Package                              | Description                                                 | Version     |
| ------------------------------------ | ----------------------------------------------------------- | ----------- |
| [`@rudus/tokens`](./packages/tokens) | CSS custom properties — colors, spacing, typography, radius | `0.1.0`     |
| [`@rudus/ui`](./packages/ui)         | React component library                                     | coming soon |

---

## Getting started

```bash
npm install @rudus/tokens
```

```css
@import "@rudus/tokens";
```

Or import individual files:

```css
@import "@rudus/tokens/colors.css";
@import "@rudus/tokens/primitives.css";
@import "@rudus/tokens/typography.css";
```

---

## Tokens

### Colors

14 semantic tokens. Named by role, not value — `--text-secondary` not `--gray-500`.

| Token              | Value     | Usage                              |
| ------------------ | --------- | ---------------------------------- |
| `--text-primary`   | `#EAE9E9` | Titles, key values, active labels  |
| `--text-secondary` | `#8E8E8E` | Body text, labels, table rows      |
| `--text-tertiary`  | `#6F6F6F` | Captions, hints, "From Drawing"    |
| `--text-disabled`  | `#424242` | Placeholders, disabled fields      |
| `--bg-base`        | `#14130E` | App shell, darkest surfaces        |
| `--bg-elevated`    | `#2A2828` | Panels, ribbon, dropdowns          |
| `--bg-hover`       | `#383636` | Row hover, button hover            |
| `--bg-accent`      | `#242F25` | AI active surfaces, selected trace |
| `--border-subtle`  | `#2B2B2B` | Row separators, dividers           |
| `--border-default` | `#424242` | Panel edges, input outlines        |
| `--accent-solid`   | `#74A67A` | Buttons, active icons              |
| `--accent-text`    | `#A8C9AC` | AI label text on dark              |
| `--error`          | `#D77777` | Required fields, validation errors |
| `--warning`        | `#C89A4A` | Pending review, low confidence     |

### Spacing

7-step scale based on a 4px unit.

| Token       | Value  | Usage                             |
| ----------- | ------ | --------------------------------- |
| `--space-0` | `2px`  | Hairline gaps, divider offsets    |
| `--space-1` | `4px`  | Icon-to-label gap, inline spacing |
| `--space-2` | `8px`  | Compact padding, chip padding     |
| `--space-3` | `12px` | Button padding, toolbar gap       |
| `--space-4` | `16px` | Panel padding, card inner spacing |
| `--space-5` | `24px` | Section spacing, group gap        |
| `--space-6` | `32px` | Outer panel, major sections       |

### Border radius

| Token           | Value    | Usage                                 |
| --------------- | -------- | ------------------------------------- |
| `--radius-sm`   | `3px`    | Ribbon buttons, dropdowns, small tags |
| `--radius-md`   | `6px`    | Input fields, buttons                 |
| `--radius-lg`   | `8px`    | Panel cards, tooltip containers       |
| `--radius-xl`   | `10px`   | Floating elements, AI toolbar         |
| `--radius-full` | `9999px` | Pills, chips, avatar                  |

### Border width

| Token              | Value   | Usage                         |
| ------------------ | ------- | ----------------------------- |
| `--border-thin`    | `0.5px` | Panel edges, row separators   |
| `--border-default` | `1px`   | Input outlines, active states |

### Typography

Single typeface: **Inter**. Six roles named by function, not size.

| Style         | Size | Weight | Line height | Tracking |
| ------------- | ---- | ------ | ----------- | -------- |
| `display`     | 16px | 400    | 24px        | 0        |
| `tool`        | 14px | 400    | 20px        | 0        |
| `subheader`   | 12px | 600    | 18px        | 0        |
| `body-medium` | 12px | 500    | 18px        | 0        |
| `body`        | 12px | 400    | 18px        | 0        |
| `caption`     | 10px | 400    | 14px        | +0.5px   |

---

## Components

11 atom components with full state coverage. See the [interactive reference](./components/atoms.html).

| Component       | States                                   |
| --------------- | ---------------------------------------- |
| Color swatch    | Default, border, disabled                |
| Button          | Primary, hover, disabled, ghost          |
| Input           | Default, focused, error, read-only       |
| Dropdown        | Panel variant, ribbon variant            |
| Button — ribbon | Primary, hover, selected (large + small) |
| Tab             | Active, hover, inactive                  |
| Panel header    | Default, hover, collapsed                |
| Page row        | Default, hover, active                   |
| Trace row       | Default, hover, selected                 |
| Layer row       | Default, hover, closed, selected         |
| Measurement row | Collapsed, expanded, child               |
| Panel           | Composed                                 |

---

## Icons

[Tabler Icons](https://tabler.io/icons) throughout at three sizes:
`12px` for panel indicators, `16px` for inline, `20px` for primary ribbon tools.

See [`/icons/index.html`](./icons/index.html) — interactive reference organized by context. Click any card to copy the Tabler class name.

---

## Design principles

**Semantic over literal.** Every token is named by role, not value. Changing the theme means changing one value, not hunting hex codes through a codebase.

**Density over whitespace.** Estimators work in spreadsheets and legacy desktop tools. The system is tuned for maximum usable content per screen — tight spacing, compact rows, minimal chrome.

**Familiar structure, AI-native interactions.** The ribbon toolbar, trace list, and layer panel deliberately mirror OST and eTakeoff conventions. The AI detection and review patterns — Tab to accept, X to skip, Ctrl+Tab to accept rest — are new, designed to sit on top of the familiar substrate without disrupting muscle memory.

---

## Stack

- **Figma** — design and component library
- **Inter** — typeface
- **Tabler Icons** — icon library
- **CSS custom properties** — token implementation
- **tsup** — package build

---

Built at [Rudus](https://rudus.ai) · YC X26
