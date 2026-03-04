# Case Study: Sales Pipeline Analytics Dashboard

---

## Executive Summary

Built a full-funnel sales analytics dashboard tracking leads from form submission through deal creation, revealing a critical bottleneck that was invisible to leadership: healthy lead assignment masking poor sales follow-through.

---

## The Problem

Truv's sales team was flying blind. Leads submitted through the "Contact Sales" form were being assigned to reps, but leadership had no visibility into what happened next. Were reps following up? How long did it take to schedule meetings? Where were deals dying?

---

## My Approach

I built a full-funnel analytics dashboard in Hex, connecting HubSpot CRM data via BigQuery to track every lead from form submission through deal creation.

### Data Architecture

- Joined 5+ HubSpot tables (submissions, contacts, owners, engagements, leads)
- Implemented deduplication logic to track initial intent (first submission per email, not most recent)
- Filtered noise (test accounts, invalid data) while preserving analytical integrity
- Built dynamic date range filtering for flexible analysis windows

### Dashboard Structure

| Section | Purpose |
|---------|---------|
| **Executive Overview** | Top-line KPIs and 5-stage conversion funnel |
| **Rep Performance** | Individual conversion rates, speed metrics, quota tracking |
| **Speed & Urgency** | Hot leads requiring immediate action, response time benchmarks |
| **Lead Health** | Stale lead identification, weekly volume trends |
| **Action Items** | Prioritized lists for sales management intervention |

---

## The Insight

The dashboard revealed something counterintuitive: **the problem wasn't lead generation—it was follow-through.**

| Metric | Value | Status |
|--------|-------|--------|
| Lead Assignment Rate | 93% | Healthy |
| First Contact Rate | 47% | Critical Gap |
| Conversion Funnel | 15 → 14 → 7 → 3 → 0 | Major Dropoff |

We had a healthy top of funnel masking a critical gap at first contact. **529 leads were sitting stale, 487 of them completely unassigned to any rep.**

---

## Results

- **Identified 8 "hot leads"** requiring immediate action (high-intent, >24hrs without contact)
- **Exposed rep performance disparities** (0.9 days vs 8.0 days to meeting)
- **Gave sales leadership actionable data** to address the real bottleneck
- **Created a repeatable framework** for ongoing pipeline health monitoring

---

## Technical Skills Demonstrated

`SQL` `BigQuery` `Hex` `HubSpot CRM` `Data Modeling` `Funnel Analysis` `Sales Operations Analytics`

---

## Key Takeaway

> "Healthy top of funnel masks a critical gap at first contact—major conversion drop from 15→7 contacted leads reveals the real problem isn't lead gen, it's sales follow-through."

---

*Cameron Wolf | Senior Growth Leader & Architect*
