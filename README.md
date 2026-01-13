# Cameron Wolf - Technical Force Multiplier Portfolio

A high-performance, immersive portfolio built for a Senior Growth Leader who facilitated the acquisition of ZappyRide by J.D. Power. This is not a standard marketing portfolio - it's architected to demonstrate technical competence, strategic thinking, and measurable impact.

## 🚀 Key Features

### **Live Metrics Showcase**
- Animated counter displaying +2000% audience growth
- 400k first-year users acquisition
- 100% YOY revenue increase
- Real-time scroll progress indicator

### **The Exit Story**
Detailed case study on the mechanics of acquisition:
- ZappyCast podcast thought leadership
- Data-driven infrastructure that drove acquisition value
- Interactive timeline from hire to exit
- Quantified business impact at every stage

### **Technical Infrastructure Demo**
- Live code showcase: HubSpot → Salesforce migration logic
- Growth Engine visualization
- Demonstrates MarTech expertise beyond standard marketing

### **Growth Concierge AI**
- Interactive chatbot trained on career data
- Responds to queries about acquisition, MarTech, growth strategies
- Proof of LLM implementation expertise
- Fixed bottom-right with tactile animations

### **2026 Design Aesthetics**
- Dark maximalist-minimalist style
- Neon magenta/cyan accents with glow effects
- Glass morphism cards with backdrop blur
- "Squishy" puffy button interactions (Framer Motion springs)
- Immersive scroll animations and micro-interactions

## 🎨 Design Philosophy

**Maximalist-Minimalist:** High-impact neon accents on dark charcoal backgrounds. Every element serves a conversion purpose.

**Tactile & Responsive:** Framer Motion spring animations make every interaction feel physical. Buttons "squish" on press, cards float on hover.

**Data-First:** Lead with quantified achievements. Metrics ticker in hero, timeline visualization, code samples proving technical chops.

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom utilities
- **Animation:** Framer Motion (spring physics)
- **Performance:** Optimized for Lighthouse 100/100
- **SEO:** JSON-LD Professional Profile schema

## 📊 Performance Targets

- ✅ Lighthouse Performance: 100/100
- ✅ First Contentful Paint: <1.8s
- ✅ Largest Contentful Paint: <2.5s
- ✅ Cumulative Layout Shift: <0.1
- ✅ Time to Interactive: <3.8s

## 🎯 Brand Positioning

**Title:** Senior Growth Leader & Architect
**Tagline:** Technical Force Multiplier
**Differentiation:** Overqualified for standard marketing roles - bridges technical execution and strategic growth

**Key Messaging:**
- "Facilitated the acquisition of ZappyRide by J.D. Power"
- "Architect growth at scale"
- "MarTech expertise that bridges strategy and execution"

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Main portfolio (all sections)
│   ├── layout.tsx            # Root layout with SEO & JSON-LD
│   └── globals.css           # 2026 theme config & utilities
├── CLAUDE.md                 # Development standards & guidelines
└── README.md                 # This file
```

## 🎨 Custom Utilities

### CSS Classes

```css
.glow-magenta          /* Neon magenta box shadow */
.glow-cyan             /* Neon cyan box shadow */
.text-glow-magenta     /* Magenta text shadow */
.text-glow-cyan        /* Cyan text shadow */
.glass                 /* Frosted glass backdrop filter */
.animate-gradient      /* Animated gradient background */
```

### Framer Motion Patterns

```typescript
// Puffy button spring
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
transition={{ type: "spring", stiffness: 400, damping: 17 }}

// Scroll-triggered reveal
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}

// Staggered animations
transition={{ delay: i * 0.1 }}
```

## 📝 Content Sections

1. **Hero**
   - Technical Force Multiplier badge
   - Name with gradient glow effect
   - Acquisition headline
   - Live metrics ticker
   - Dual CTAs

2. **The Exit Story**
   - Acquisition mechanics breakdown
   - ZappyCast thought leadership case
   - Data infrastructure impact
   - Interactive timeline

3. **Technical Infrastructure**
   - Code showcase (HubSpot/Salesforce)
   - Growth Engine diagram
   - MarTech expertise proof

4. **Experience**
   - Timeline with color-coded companies
   - Achievement-focused (quantified results)
   - Glass morphism cards

5. **Contact**
   - "Let's Build Something" positioning
   - Animated gradient header
   - Email + LinkedIn cards

## 🔍 SEO Optimization

### Structured Data

JSON-LD schema for Professional Profile:
- Person type with job title
- Knowledge graph (MarTech, Growth Strategy, etc.)
- Awards & achievements
- Education (University of Michigan)
- Current employer (Inspiration Mobility)

### Meta Tags

- Optimized title & description
- OpenGraph social sharing
- Twitter card configuration
- Mobile-responsive viewport
- Semantic HTML5 structure

## 🎭 Easter Eggs & Micro-Interactions

- Scroll progress bar (gradient magenta→purple→cyan)
- Custom scrollbar with gradient thumb
- Text selection in neon magenta
- Hover state on all interactive elements
- AI chatbot with career-specific responses
- Animated counters on scroll into view
- Grid background pattern in hero

## 📊 Analytics Ready

Built for integration with:
- Vercel Analytics
- Google Analytics 4
- Hotjar heatmaps
- Web Vitals monitoring

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Using Vercel CLI
vercel

# Or via GitHub integration
1. Push to GitHub
2. Import to Vercel
3. Auto-deploy on push
```

### Custom Domain Setup

1. Add domain in Vercel settings
2. Configure DNS records
3. SSL automatically provisioned
4. Update `CLAUDE.md` with live URL

## 🧪 Testing Checklist

- [ ] All animations 60fps
- [ ] Chatbot responses accurate
- [ ] Mobile responsive (iOS Safari, Chrome Android)
- [ ] Lighthouse 100/100 score
- [ ] JSON-LD validates (Google Rich Results)
- [ ] Email links functional
- [ ] LinkedIn profile opens correctly
- [ ] Gradient animations cross-browser

## 📈 Conversion Optimization

- **Above-the-fold:** Acquisition headline + metrics
- **Social Proof:** Quantified achievements throughout
- **Technical Credibility:** Code samples + AI chatbot
- **Clear CTAs:** "View The Exit Story" → "Start a Conversation"
- **No Friction:** Direct mailto: links, no forms

## 🎯 Target Audience

**Primary:** VPs of Growth, CTOs, CEOs at high-growth startups
**Secondary:** Hiring managers seeking technical marketing leaders
**Positioning:** Overqualified for standard roles, ready for strategic leadership

## 📚 Development Standards

See **CLAUDE.md** for:
- Brand voice & messaging guidelines
- Component architecture patterns
- Design system specifications
- Content strategy
- Future enhancement roadmap

## 🤝 Credits

**Built With:**
- Next.js 15 & React 19
- Framer Motion physics
- Tailwind CSS utilities
- Geist Sans/Mono fonts

**Developed Using:**
- Claude Code via [Happy](https://happy.engineering)
- TypeScript strict mode
- Component-driven architecture
- Performance-first methodology

## 📄 License

Personal portfolio - All rights reserved © 2024 Cameron Wolf

---

**Live Site:** https://cameronwolf.info
**Contact:** cameron@cameronwolf.info
**LinkedIn:** https://www.linkedin.com/in/camwolf/

> "Technical Force Multiplier | Growth Architect | Acquisition Facilitator"
