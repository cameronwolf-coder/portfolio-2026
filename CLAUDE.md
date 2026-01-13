# Cameron Wolf Portfolio - Development Standards

**Project Identity:** Technical Force Multiplier Portfolio
**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion
**Performance Target:** Lighthouse 100/100
**Design Philosophy:** 2026 Maximalist-Minimalist Dark Aesthetics

---

## Core Positioning

**Brand Identity:**
- **Title:** Senior Growth Leader & Architect
- **Tagline:** Technical Force Multiplier
- **Key Achievement:** Facilitated the acquisition of ZappyRide by J.D. Power
- **Differentiation:** Overqualified for standard marketing roles - bridges technical execution and strategic growth

**Core Metrics (Hero Section):**
- +2,000% Audience Growth
- 400k First-Year Users
- 100% YOY Revenue Increase

---

## Design System (2026 Aesthetics)

### Color Palette

```css
/* Dark Charcoal Base */
--background: #0a0a0f
--card-bg: #12121a
--card-border: #1e1e2e

/* High-Saturation Neon Accents */
--neon-magenta: #ff006e
--neon-cyan: #00f5ff
--neon-purple: #8b5cf6

/* Gradients */
--gradient-primary: linear-gradient(135deg, #ff006e 0%, #8b5cf6 100%)
--gradient-secondary: linear-gradient(135deg, #00f5ff 0%, #8b5cf6 100%)
```

### Visual Effects

**Glow Effects:**
- `.glow-magenta` - Magenta neon glow for CTAs
- `.glow-cyan` - Cyan neon glow for technical elements
- `.text-glow-magenta` / `.text-glow-cyan` - Text shadows

**Glass Morphism:**
- `.glass` - Frosted glass effect for cards (backdrop-filter: blur(10px))

**Tactile Interactions:**
- Puffy buttons with spring animations (Framer Motion)
- `whileHover={{ scale: 1.05 }}` and `whileTap={{ scale: 0.95 }}`
- Spring stiffness: 400, damping: 17

### Typography

- **Fonts:** Geist Sans (primary), Geist Mono (code)
- **Hero:** 6xl-8xl font-black with gradient text
- **Section Headers:** 5xl-6xl font-black
- **Body:** text-gray-400 for secondary content

---

## Component Architecture

### Key Components

1. **AnimatedCounter**
   - Animates numbers on scroll into view
   - Used for metrics ticker
   - Duration: 2 seconds

2. **PuffyButton**
   - Tactile spring animation
   - Gradient background with scale transforms
   - Primary CTA component

3. **GrowthConcierge (AI Chatbot)**
   - Fixed bottom-right position
   - Simulated AI responses
   - Keywords: zappyride, acquisition, martech, growth
   - Demonstrates LLM implementation expertise

4. **Motion Wrappers**
   - All sections use `motion.div` with viewport triggers
   - `initial={{ opacity: 0, y: 20 }}`
   - `whileInView={{ opacity: 1, y: 0 }}`
   - `viewport={{ once: true }}`

---

## Content Strategy

### Section Hierarchy

1. **Hero**
   - Badge: "Technical Force Multiplier"
   - Name with gradient glow
   - Acquisition headline
   - Live metrics ticker (animated counters)
   - Dual CTAs: "View The Exit Story" + "Get in Touch"

2. **The Exit Story (Acquisition Mechanics)**
   - Focus on the "how" not just "what"
   - Two-column breakdown: Thought Leadership + Infrastructure
   - Timeline component showing April 2021 → May 2023 acquisition
   - Emphasize strategic positioning that drove acquisition value

3. **Technical Infrastructure**
   - Code showcase: HubSpot → Salesforce migration logic
   - Demonstrates technical competence
   - Growth Engine Diagram (3 pillars: Targeting, Automation, Optimization)
   - Interactive hover states on cards

4. **Experience**
   - Timeline format with color-coded companies
   - Each entry: glass card with border-left accent
   - Achievement-focused (not responsibility-focused)
   - Quantified results where possible

5. **Contact**
   - "Let's Build Something" (not "hire me")
   - Animated gradient text
   - Dual cards: Email + LinkedIn
   - Final CTA: "Start a Conversation"

---

## SEO & Performance

### JSON-LD Schema

```json
{
  "@type": "Person",
  "jobTitle": "Senior Growth Leader & Architect",
  "knowsAbout": [
    "Marketing Technology",
    "Growth Strategy",
    "MarTech Stack Implementation"
  ],
  "award": [
    "Facilitated ZappyRide acquisition by J.D. Power"
  ]
}
```

### Meta Tags

- **Title:** "Cameron Wolf | Technical Force Multiplier & Growth Architect"
- **Description:** Emphasizes acquisition facilitation, metrics, MarTech expertise
- **Keywords:** growth marketing, martech, acquisition, technical marketing
- **OpenGraph:** Full social sharing configuration

### Performance Optimizations

- Semantic HTML with proper heading hierarchy
- Lazy loading for scroll-triggered animations
- Optimized font loading (Geist Sans/Mono)
- Minimal JavaScript bundles (Framer Motion tree-shaking)
- No external dependencies beyond core stack

---

## Brand Voice & Messaging

### Tone

- **Confident, not arrogant:** Data-driven claims
- **Technical, not jargon-heavy:** Accessible to both engineers and executives
- **Achievement-focused:** Lead with results, not responsibilities
- **Future-oriented:** "Let's build something" vs. "hire me"

### Key Phrases

- "Technical Force Multiplier"
- "Facilitated the acquisition of ZappyRide by J.D. Power"
- "Growth Architect"
- "MarTech expertise that bridges strategy and execution"
- "Overqualified for standard marketing roles"

### What NOT to Say

- ❌ "Looking for opportunities"
- ❌ "Team player"
- ❌ "Passionate about marketing"
- ✅ "Architect growth at scale"
- ✅ "Facilitated acquisition"
- ✅ "Built infrastructure that drove acquisition value"

---

## Technical Implementation Notes

### Framer Motion Patterns

```typescript
// Scroll progress bar
const { scrollYProgress } = useScroll();
const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

// Staggered animations
transition={{ delay: i * 0.1 }}

// Spring animations for buttons
transition={{ type: "spring", stiffness: 400, damping: 17 }}
```

### Custom CSS Utilities

- `.animate-gradient` - Background position animation (15s ease infinite)
- Custom scrollbar styling with gradient thumb
- Selection color: neon-magenta background

---

## Deployment Checklist

- [ ] Verify all animations are performant (60fps)
- [ ] Test chatbot responses for accuracy
- [ ] Validate JSON-LD schema in Google Rich Results Test
- [ ] Run Lighthouse audit (target: 100/100)
- [ ] Test on mobile devices (iOS Safari, Chrome Android)
- [ ] Verify email links work (mailto:cameron@cameronwolf.info)
- [ ] Check LinkedIn profile link
- [ ] Ensure gradient animations work across browsers

---

## Future Enhancements

1. **Real AI Chatbot:** Connect to OpenAI API with RAG on Cameron's full career data
2. **Case Study Pages:** Deep dives on each major project
3. **Interactive Growth Calculator:** Tool showing potential ROI based on Cameron's historical performance
4. **Video Content:** Embed ZappyCast samples or video testimonials
5. **Dark Mode Toggle:** (Currently dark-only, could add light mode)
6. **Blog/Insights Section:** Technical marketing content

---

## Maintenance Notes

### Color Changes
All neon colors are CSS variables - update in `globals.css` `:root` section

### Content Updates
Primary content is in `app/page.tsx` - all text is in JSX (no CMS needed for v1)

### Adding Projects
Update the projects array in Experience section or create dedicated projects page

### Performance Monitoring
Use Vercel Analytics + Web Vitals to track Core Web Vitals post-deploy

---

**Last Updated:** 2024
**Build Version:** v1.0.0
**Author:** Built with Claude Code via Happy.engineering
