# Linear Best Practices

Rules and conventions for how we use Linear at the Growth team.

---

## Team & People

| Entity | ID |
|---|---|
| **Team** | Growth (`c935c1a0-a0fc-41e5-a598-a537fcd344de`) |
| **Cameron Wolf** | `e0bb82cc-96ed-4d37-a9c8-df774f929dcb` |
| **Kaytren Bruner** | `966e7ba1-f9a7-448f-a4a6-516067bca022` |

---

## Project Rules

### Naming Convention

Projects follow the pattern: **`[CustomerName] [Campaign Type]`**

Examples:
- `Plaid Case Study Email`
- `ADP Case Study Email`

### Required Project Fields

Every project must have:
- **Name** — follows naming convention above
- **Team** — always `Growth`
- **Target date** — the final deliverable date (e.g., send date for emails)
- **Priority** — defaults to Normal (3) unless specified
- **Description** — one-line summary including the customer name and target date

### Priority Levels

| Level | Value | When to Use |
|---|---|---|
| Urgent | 1 | Deadline within 48 hours or exec-requested |
| High | 2 | This week's deliverables |
| Normal | 3 | Default — standard timeline work |
| Low | 4 | Nice-to-have, no hard deadline |

---

## Issue Rules

### Issue Creation

- Issues always belong to the **Growth** team
- Every issue must be assigned to a **project**
- Every issue must have an **assignee**
- Every issue must have a **due date**
- Priority defaults to **Normal (3)** unless the project warrants otherwise

### Blocking Relationships

Use `blockedBy` to enforce task ordering. Issues should not be completable out of sequence.

**Pattern:** Upstream work blocks downstream work. A task cannot start until everything it depends on is done.

Example chain:
```
Initial Copy → Email Build + List Selection → Test Email Sent → Send
```

- `Email Build` is blocked by `Initial Copy`
- `List Selection` is blocked by `Initial Copy`
- `Test Email Sent` is blocked by both `Email Build` and `List Selection`
- `Send` is blocked by `Test Email Sent`

### Assignment Defaults

| Role | Default Owner |
|---|---|
| Copywriting (Initial Copy) | Kaytren Bruner |
| Email Build, List Selection, Testing, Sending | Cameron Wolf |
| Project Lead | Cameron Wolf |

---

## Due Date Calculation

Due dates are calculated backwards from the project target date using **business days only** (Mon–Fri). No holiday adjustments.

### Case Study Email Template

| Task | Offset from Send Date |
|---|---|
| Initial Copy | -7 business days |
| Email Build | -5 business days |
| List Selection | -5 business days |
| Test Email Sent | -2 business days |
| Send | Send date (0) |

### Business Day Rules

- Count backwards skipping Saturdays and Sundays
- If a send date falls on a weekend, flag it and suggest the next Monday
- No holiday calendar — business days = Mon–Fri only (v1)

---

## Project Health & Status Updates

### When to Post Updates

- Updates are posted for **In Progress** (`started`) projects led by Cameron Wolf
- If no `started` projects exist, also check `planned` state for "Needs Review" projects
- Post updates on a regular cadence (weekly recommended)

### Health Calculation

Health is auto-calculated based on issue progress vs. timeline:

```
progress = completed_issues / total_issues
time_elapsed = (today - start_date) / (target_date - start_date)
```

| Condition | Health |
|---|---|
| `progress >= time_elapsed - 0.1` | On Track |
| `progress >= time_elapsed - 0.3` | At Risk |
| `progress < time_elapsed - 0.3` | Off Track |

**No target date?**
- Any progress or in-progress issues → On Track
- Zero progress, no activity → At Risk

**Blocker bump:** If any issue is blocked, health bumps up one severity level (On Track → At Risk, At Risk → Off Track).

### Status Update Format

Every project update includes three sections:

```markdown
**Progress:** {done}/{total} issues ({%})

**Shipped:** [What was completed in the last 7 days]

**Blocked:** [Any blocked issues and what blocks them, or "None"]

**Next:** [Top 2-3 open/in-progress issues by priority]
```

### Approval Before Posting

Never auto-post updates. Always present a draft table for review and get explicit approval before posting to Linear.

---

## Workflow Templates

### Case Study Email Campaign

A standard 5-issue project with blocking relationships:

```
1. Initial Copy        → Kaytren  → Send -7 biz days
2. Email Build         → Cameron  → Send -5 biz days  (blocked by 1)
3. List Selection      → Cameron  → Send -5 biz days  (blocked by 1)
4. Test Email Sent     → Cameron  → Send -2 biz days  (blocked by 2, 3)
5. Send                → Cameron  → Send date         (blocked by 4)
```

**Confirmation:** After creating, present a summary table showing all tasks, assignees, due dates, and the blocking chain.

---

## General Principles

1. **Every issue needs an owner.** No unassigned work.
2. **Every issue needs a due date.** No open-ended tasks.
3. **Use blocking relationships.** They prevent out-of-order execution and surface bottlenecks.
4. **Projects have target dates.** This enables health tracking and status updates.
5. **Default to Normal priority.** Only escalate when there's a real reason.
6. **Weekend send dates get flagged.** Always suggest the next Monday.
7. **Approval before posting.** Status updates are drafted and reviewed before going live.
8. **Business days only.** All date math uses Mon–Fri. No holiday adjustments yet.
