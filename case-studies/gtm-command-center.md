# Case Study: GTM Command Center

---

## Executive Summary

Built a unified revenue operations dashboard bridging Marketing and Sales, providing real-time visibility into pipeline velocity, channel efficiency, and rep productivity across 200K+ contacts and multiple acquisition channels.

---

## The Problem

Marketing and Sales operated in silos. Marketing measured leads generated; Sales measured deals closed. No one had a unified view of:

- Which channels actually drove revenue (not just volume)?
- Where were leads stalling in the funnel?
- How did inbound compare to outbound performance?
- What was the true velocity from lead to opportunity?

Leadership needed a single source of truth to answer: **"How is our pipeline performing by channel this week, and where should we focus?"**

---

## My Approach

I built a GTM Command Center in Hex that unified HubSpot CRM data into a comprehensive revenue intelligence platform.

### Data Architecture

| Data Source | Records | Key Fields |
|-------------|---------|------------|
| HubSpot Contacts | 200K+ | Lifecycle stage, scoring, attribution |
| Inbound Attribution | — | First/last touch, UTMs, form data |
| Outbound Campaigns | — | Smartlead sequences, opens, replies |
| Engagement Data | — | Meetings, page views, sales touches |

### Dashboard Structure

| Section | Purpose |
|---------|---------|
| **Executive Summary** | Weekly KPIs with period-over-period trends |
| **Inbound Performance** | Web forms, organic, paid channel metrics |
| **Outbound Attribution** | Campaign sends, reply rates, conversions |
| **Channel Analysis** | Source attribution and form volume |
| **MQL Deep Dive** | Marketing qualification funnel analysis |
| **SAL Deep Dive** | Sales acceptance and pipeline analysis |

---

## Key Metrics Tracked

### Funnel Volume (Weekly with WoW Comparison)

| Stage | This Week | vs Prior |
|-------|-----------|----------|
| Leads Generated | 434 | ↑ 68% |
| MQLs | 17 | ↑ 70% |
| SALs | 3 | ↑ 50% |
| Meetings Booked | 15 | ↑ 400% |

### Database Health (Lifecycle Distribution)

| Stage | Volume |
|-------|--------|
| Subscriber | 30K |
| Lead | 74K |
| MQL | 16K |
| SAL | 3.6K |
| Opportunity | 46K |
| Customer | 17K+ |

---

## Design Patterns Implemented

1. **Time-based filtering** throughout (7-day default, adjustable)
2. **Week-over-week comparisons** for trend detection
3. **Inbound vs Outbound segmentation** for channel clarity
4. **Conversion rate + velocity dual tracking** (not just "how many" but "how fast")
5. **Collapsible sections** for focused exploration without clutter

---

## Results

- **Unified visibility** across 200K+ contacts and all acquisition channels
- **Real-time trend detection** with automated WoW comparisons
- **Channel ROI clarity**: Identified which sources drove SALs, not just leads
- **Velocity insights**: Tracked average days between stage transitions
- **Operational efficiency**: Enabled weekly pipeline reviews with single dashboard

---

## Technical Skills Demonstrated

`SQL` `BigQuery` `Hex` `HubSpot CRM` `Revenue Operations` `Marketing Analytics` `Sales Analytics` `Data Visualization` `Pipeline Analysis`

---

## Key Takeaway

> "A GTM Command Center isn't about more dashboards—it's about one source of truth that bridges Marketing's 'leads generated' with Sales' 'deals closed' to reveal what's actually working."

---

*Cameron Wolf | Senior Growth Leader & Architect*
