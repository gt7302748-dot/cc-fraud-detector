# Design Brief

## Direction

Analytical Security Dashboard — Professional fraud detection platform inspired by premium security dashboards and financial analytics platforms (Stripe, Linear, security operations centers).

## Tone

Serious, data-driven, precise. Deep navy/slate foundations convey trustworthiness and analytical rigor; spare use of color (red for risk, green for safety, blue for metrics) creates clarity without distraction.

## Differentiation

Dual semantic color system: fraud transactions render in destructive red with precision metrics; legitimate transactions in success green; ML model metrics in primary blue/purple. This instant visual hierarchy allows analysts to scan fraud patterns at a glance.

## Color Palette

| Token       | Light OKLCH      | Dark OKLCH       | Role                                    |
| ----------- | ---------------- | ---------------- | --------------------------------------- |
| background  | 0.97 0.008 230   | 0.14 0.02 250    | Clean off-white (light) / Deep navy     |
| foreground  | 0.16 0.01 230    | 0.92 0.01 250    | High-contrast text                      |
| card        | 0.995 0.004 230  | 0.18 0.02 250    | Elevated content surfaces               |
| primary     | 0.48 0.18 250    | 0.72 0.18 250    | ML metrics, analytical indicators       |
| destructive | 0.55 0.22 25     | 0.55 0.22 25     | Fraud alerts, risk indicators           |
| chart-1     | 0.55 0.22 25     | 0.55 0.22 25     | Red (fraud transactions)                |
| chart-2     | 0.65 0.18 145    | 0.65 0.18 145    | Green (legitimate transactions)         |
| chart-3     | 0.48 0.18 250    | 0.72 0.18 250    | Blue/purple (metrics, ML insights)      |

## Typography

- Display: Space Grotesk — Technical precision for headings, dashboard titles, metric labels
- Body: DM Sans — Clean, readable body text and UI labels
- Mono: JetBrains Mono — Code snippets, feature IDs, technical data
- Scale: `text-4xl font-bold` (hero), `text-xl font-semibold` (section), `text-sm font-medium` (labels), `text-base` (body)

## Elevation & Depth

Minimal shadows preserve the serious aesthetic: cards use `shadow-card` (1px, subtle), elevated modals use `shadow-elevated` (4px). Dark mode card backgrounds (0.18 L) lift slightly from background (0.14 L).

## Structural Zones

| Zone       | Background              | Border                  | Notes                                        |
| ---------- | ----------------------- | ----------------------- | -------------------------------------------- |
| Header     | card / card             | border / border         | Logo, title, theme toggle, metric summary    |
| Sidebar    | sidebar / sidebar-dark  | sidebar-border          | Navigation links, active state primary color |
| Content    | background              | —                       | Alternate card bg for sections               |
| Metric Row | card with chart colors  | subtle border           | Fraud/legit cards side-by-side               |
| Footer     | muted/20 with border-t  | border                  | Attribution, metadata                        |

## Spacing & Rhythm

Grid-based 8px rhythm: sections gap `4`, content padding `6-8`, cards `4` internal padding. Generous whitespace between data zones reinforces focus.

## Component Patterns

- Buttons: Primary (blue), Destructive (red), Secondary (slate). No fill on secondary; hover via border/opacity.
- Cards: 6px radius, `shadow-card`, `bg-card` with 1px border-border. Fraud cards left-accent in red; legit in green.
- Tabs: Underline active state in primary; text stays muted until hover.
- Badges: Semantic red (fraud), green (legit), blue (metrics) with light backgrounds in light mode.
- Charts: Recharts with palette [red, green, blue, purple, amber]; legend below with semantic labels.

## Motion

- Entrance: Cards fade in 200ms on mount (opacity 0→1).
- Hover: Button/link hover adds 50ms smooth transition to opacity/border.
- Active: Tab underline animates 150ms easeOut.

## Constraints

- No gradients; all colors expressed as OKLCH values.
- No rounded corners > 6px (borders-radius maintained at 0.375rem).
- Icons and text always use semantic tokens; no arbitrary color classes.
- Dark mode is primary; light mode is equal-priority alternative, not an afterthought.

## Signature Detail

Card-based metric grid with left-accent borders: fraud cards left-bordered in red, legitimate in green, metrics in blue/purple. This one visual pattern communicates the entire security/analytics hierarchy instantly.
