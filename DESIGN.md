# Cameron Wolf Portfolio Design System

## 0. Reference & Translation

The homepage takes its visual grammar from the live Radical Face site, inspected on July 14, 2026 through Firecrawl's rendered HTML, stylesheet, script, branding, and screenshot surfaces.

Reference patterns carried forward:

- A full-width condensed nameplate that behaves as image and identity at once.
- Serif narrative copy paired with compact sans-serif UI text.
- A pale paper canvas interrupted by deliberate red, violet, green, gray, and off-black color fields.
- Large rounded image and content modules rather than conventional SaaS cards.
- Sticky chapter titles that turn a long page into a sequence of scenes.
- One horizontal collection with tactile overflow and scroll snapping.
- Slow 1000ms in-view fades and restrained transform feedback.

Intentional deviations:

- Radical Face's logos, copy, artwork, fonts, and audio interactions are not copied.
- Cameron's existing headshot, proof, case studies, routes, and contact details remain the content source.
- Scroll behavior uses native CSS and scroll snapping rather than Lenis or a vertical-scroll hijack.
- The page keeps semantic HTML and renders as a Server Component with no new runtime dependency.

## 1. Atmosphere & Identity

The homepage feels like a record sleeve for a systems operator. It is bold, tactile, slightly strange, and easy to read. The memorable moment is the oversized `CAMERON.WOLF` nameplate collapsing into a rounded portrait and a direct statement about building revenue systems.

Design dials:

- Design variance: 8/10
- Motion intensity: 6/10
- Visual density: 4/10

## 2. Color

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Canvas | `--rf-canvas` | `#f0eeeb` | Primary page background |
| Ink | `--rf-ink` | `#0e0e0e` | Text, rules, dark sections |
| Soft block | `--rf-soft` | `#dad5ce` | Portrait frame and muted panels |
| Paper | `--rf-paper` | `#f8f6f2` | Light inset surfaces |
| Red | `--rf-red` | `#c81f24` | Primary emphasis and proof card with AA-compliant light text |
| Violet | `--rf-violet` | `#6756bd` | Secondary proof card |
| Green | `--rf-green` | `#41674e` | Tertiary proof card |
| Muted ink | `--rf-muted` | `#5f5f5f` | Metadata and supporting copy |
| Dark text | `--rf-dark-text` | `#f0eeeb` | Text on off-black sections |

Color blocks are structural. Each accent appears as one complete surface, never as a glow, gradient, or decorative speckle.

## 3. Typography

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Nameplate | `clamp(4.6rem, 15.2vw, 14rem)` | 900 | 0.72 | -0.055em | `CAMERON.WOLF` hero identity |
| Chapter | `clamp(4rem, 11vw, 10rem)` | 900 | 0.78 | -0.045em | Sticky section labels |
| Display serif | `clamp(3rem, 7vw, 7rem)` | 400 | 0.94 | -0.045em | Main claims |
| Card title | `clamp(2rem, 3.5vw, 4rem)` | 400 | 1.05 | -0.025em | Project and proof titles |
| Lead | `clamp(1.45rem, 2.7vw, 2.75rem)` | 400 | 1.16 | -0.02em | Narrative statements |
| Body | `clamp(1.05rem, 1.45vw, 1.5rem)` | 400 | 1.45 | 0 | Reading copy |
| UI | `0.875rem` | 600 | 1 | 0.02em | Navigation and actions |
| Metadata | `0.75rem` | 600 | 1.2 | 0.12em | Labels and numbering |

Families:

- Condensed display: Impact, Haettenschweiler, Arial Narrow Bold, sans-serif.
- Narrative serif: Iowan Old Style, Palatino Linotype, Book Antiqua, Palatino, Georgia, serif.
- UI: Geist Sans, system-ui, sans-serif.
- Metadata: Geist Mono, monospace.

The condensed face is used only for the nameplate and chapter labels. Serif carries the human voice. Sans-serif handles navigation and controls.

## 4. Spacing & Layout

Base unit: 4px. Intent tokens: 8, 12, 16, 24, 32, 48, 64, 80, 96, 128, 160, and 208px.

- Page gutter: `clamp(16px, 2.1vw, 32px)`.
- Fixed navigation height: 80px desktop, 72px mobile.
- Maximum reading width: 66 characters.
- Hero image ratio: wide cinematic frame on desktop, portrait crop on mobile.
- Major module radius: 24px desktop, 18px mobile.
- Pill radius: 999px.
- Chapter sections use a sticky label above a composition unique to that chapter.
- Mobile collapses every multi-column section to one column below 768px.

## 5. Components

### Fixed editorial navigation

- Structure: wordmark, three direct links, one contact action.
- Rest: canvas background, black text, 1px bottom rule.
- Hover: link gains underline and moves 1px upward.
- Active: 1px downward press.
- Focus: 3px red outline with 3px offset.
- Mobile: compact two-row layout, no hidden destinations.

### Nameplate hero

- Structure: oversized nameplate, rounded portrait, short operator statement, identity caption.
- Entry: nameplate fades from 0 and shifts up 20px over 700ms.
- Portrait: existing `/headshot.jpg`, top aligned, grayscale with warm contrast.
- Accessibility: portrait has descriptive alt text; statement remains readable without animation.

### Sticky chapter

- Structure: sticky condensed label followed by chapter content.
- Labels: `SYSTEMS`, `PROOF`, and `METHOD`.
- Behavior: label sticks below the navigation while its content scrolls.
- Mobile: sticky behavior is removed to prevent viewport obstruction.

### Horizontal project rail

- Structure: five project panels with index, title, system, and business outcome.
- Interaction: native horizontal overflow, mandatory scroll snap, visible scrollbar, grab cursor.
- Hover: interactive panel shifts up 6px and its action rule lengthens.
- Keyboard: each linked panel is focusable and receives the same visual emphasis.

### Proof color block

- Structure: company logo, measured result, concise system summary, case-study link.
- Variants: red, violet, and green surfaces.
- Radius: 24px.
- Hover: 6px upward translation and subtle image scale.
- Focus: 3px paper outline.

### Case study access gate

- Structure: the public hero, summary, and metrics remain visible; Situation, Insight, Action, and Result render only after Web3Forms confirms the email notification.
- Surface: existing dark card and border tokens from the case-study route, with the active maroon or teal accent carried into the form label and submit action.
- Form: one work-email field, one primary action, a plain-language privacy note, and an inline live-region error.
- Interaction: one server action validates the submission, sends the Web3Forms notification, sets an HttpOnly cookie only after provider acceptance, and returns the visitor to the case study with the full body rendered.
- Accessibility: persistent label, visible focus state, 44px minimum controls, server-side validation, and no content hidden only with CSS.
- Privacy: the form states exactly what is sent and promises no newsletter or automated follow-up.

### Technical dark room

- Structure: off-black rounded section with four capability groups.
- Separation: pale rules and spacing, no floating card shadows.
- Motion: groups reveal sequentially only when motion is allowed.

### Contact footer

- Structure: oversized serif invitation, email, LinkedIn, copyright.
- Surface: off-black.
- Links: pale pill outlines that fill pale on hover.

## 6. Motion & Interaction

Motion communicates sequence, affordance, and spatial continuity.

- Hero nameplate entry: 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity and translateY only.
- In-view section reveal: 1000ms linear fade with a 24px translateY, implemented with CSS view timelines where supported.
- Interactive hover: 240ms cubic-bezier(0.16, 1, 0.3, 1), transform and color only.
- Portrait and proof image hover: 600ms transform scale, clipped by the rounded frame.
- Horizontal rail: native scroll with `scroll-snap-type: x mandatory`.
- Sticky chapter titles communicate the current scene; they do not animate independently.
- No infinite marquee, parallax loop, custom cursor, or scroll listener.
- `prefers-reduced-motion: reduce` removes entry animations, smooth scrolling, transforms, and transition delays.

## 7. Depth & Surface

Depth comes from scale, cropping, overlap, and full color fields.

- Light modules use 1px black rules or a soft block fill.
- Accent proof modules use solid red, violet, and green.
- The portrait and proof logos sit inside clipped rounded frames.
- Shadows are limited to one soft portrait shadow: `0 18px 50px rgba(14, 14, 14, 0.14)`.
- The sticky navigation and portrait caption use a restrained translucent blur for legibility over imagery; no glass cards, glow, gradient, decorative blur, or nested-card stack appears on the homepage.

## 8. Accessibility Constraints & Accepted Debt

Target: WCAG 2.2 AA.

- All actions have at least a 44px target.
- Keyboard focus remains visible on every link.
- Navigation destinations remain available at every breakpoint.
- Heading order stays sequential.
- Body text targets at least 4.5:1 contrast and large text at least 3:1.
- Horizontal content remains keyboard-scrollable and does not trap vertical scrolling.
- Sticky labels are disabled on small screens.
- Motion respects `prefers-reduced-motion`.

| Item | Location | Why accepted | Owner / Exit |
|------|----------|--------------|--------------|
| Condensed display uses system fallbacks | Hero and chapter labels | Radical Face's Druk license and assets are not reused | Replace only if Cameron supplies a licensed condensed display font |
| CSS view-timeline reveal is progressive enhancement | Major sections | Unsupported browsers receive fully visible static content | Reassess when cross-browser support requirements change |
| Notification delivery depends on Web3Forms availability | Case-study access gate | The server action refuses access when the provider times out, rejects the request, or returns an unexpected response | Move to a dedicated transactional mail provider if delivery reliability becomes business-critical |
| Access cookie uses an opaque convention, not a signature | Case-study access gate | The protected content is portfolio material, and the gate is intended to capture ordinary visitor interest | Add a server secret and signed token if the content becomes sensitive |
