# Skill Idea Evaluation Principles

A framework for deciding which creator marketing skills are worth building, in what order, and for whom.

---

## How to Use This Document

Before building any new skill, score it against the dimensions below. Each dimension is scored 1-10. A skill idea must average **8+** across all dimensions to be worth building. Anything below 6 on any single dimension is a red flag that needs resolution before proceeding.

---

## Dimension 1: ICP Segment Reach (1-10)

How many of our ICP segments does this skill serve?

| Score | Criteria |
|-------|----------|
| 10 | Serves all 3 brand segments (SMB, Mid-Market, Enterprise) AND agencies |
| 8-9 | Serves 2-3 brand segments AND agencies |
| 6-7 | Serves 2+ brand segments OR strong single-segment + agency fit |
| 4-5 | Serves only 1 brand segment with no agency relevance |
| 1-3 | Niche use case that doesn't map to any defined segment priority |

**Reference the segment priority stacks:**

- **SMB Brands**: Sourcing → Campaign Tracking → Social Listening
- **Mid-Market Influencer Teams**: Social Listening/Content Capture → Reporting → Sourcing
- **Mid-Market Social Teams**: Social Listening → Social Flirting
- **Enterprise Influencer Teams**: Creator Vetting
- **Enterprise Social Teams**: Social Flirting → Trends Reporting → Social Listening
- **Agencies (all tiers)**: Match the brand segment they serve

---

## Dimension 2: Workflow Pain Severity (1-10)

How painful is the current manual workflow this skill replaces?

| Score | Criteria |
|-------|----------|
| 10 | Users literally say "this is killing me" — hours of repetitive manual work per week (screenshotting Stories, tracking in Excel, hunting for posts) |
| 8-9 | Clear time sink (1-2 hours per session), users actively looking for solutions |
| 6-7 | Moderate friction — doable manually but annoying and error-prone |
| 4-5 | Mild inconvenience — current workflow works, skill is a nice-to-have |
| 1-3 | No real pain — skill solves a problem users don't actually have |

**Use customer language to validate pain:**
- "Everything is manual"
- "Manually screenshotting stories"
- "Screenshots in Google Drive"
- "Tracking lives in Excel"
- "Missing stories before they disappear"
- "Content slipping through the cracks"
- "Can't prove ROI"
- "Finding creators is annoying"

If the skill's pain point doesn't map to real language customers use, score it lower.

---

## Dimension 3: Output Actionability (1-10)

Can the user immediately use the output, or does it require significant post-processing?

| Score | Criteria |
|-------|----------|
| 10 | Output is copy-paste ready — a brief, email, report, or scorecard that goes directly to the next person in the workflow |
| 8-9 | Output needs minor customization (swap a name, adjust a number) before use |
| 6-7 | Output is a strong draft that needs a review pass but saves 70%+ of the work |
| 4-5 | Output is a framework or template the user still needs to fill in substantially |
| 1-3 | Output is advice or suggestions — the user still does all the real work |

**Best-in-class outputs from our 15 planned skills:**
- Campaign Brief Generator → complete brief ready to send to a creator
- Creator Outreach DM/Email Writer → 3 ready-to-send messages
- End-of-Campaign Report Generator → formatted exec-ready report
- Content Brief Builder → 1-2 page brief ready to attach to a contract

---

## Dimension 4: Repeatability (1-10)

How often will a single user invoke this skill?

| Score | Criteria |
|-------|----------|
| 10 | Multiple times per week (outreach messages, content briefs, vetting scorecards) |
| 8-9 | Weekly or per-campaign (campaign briefs, reports, trend research) |
| 6-7 | Monthly or quarterly (ambassador program design, gifting program setup) |
| 4-5 | Once per project or initiative (CRM template, wiki builder) |
| 1-3 | One-time setup task with no recurring use |

High repeatability means more value per skill AND more opportunities for the skill to demonstrate Archive's positioning (capture everything, automate the manual, prove ROI).

---

## Dimension 5: Archive Product Alignment (1-10)

Does this skill reinforce Archive's product areas and messaging pillars?

| Score | Criteria |
|-------|----------|
| 10 | Directly demonstrates a core Archive product area (Social Listening, Creator Activations, Social Flirting) AND maps to a messaging pillar (capture everything, automate the manual, prove ROI) |
| 8-9 | Clearly adjacent to an Archive product area — the skill output naturally leads to Archive adoption |
| 6-7 | Relevant to creator marketing broadly but doesn't specifically highlight Archive capabilities |
| 4-5 | Generic marketing skill that any platform could offer |
| 1-3 | No connection to Archive's product, category, or positioning |

**Alignment check questions:**
- Does this skill's output make the user want Archive's Social Listening, Creator Activations, or Social Flirting?
- Does the skill use Archive-specific terminology correctly (Archive's AI, Smart AI Fields, Archive Radar)?
- Does the skill solve a pain that Archive the product also solves — reinforcing the brand?

---

## Dimension 6: Feasibility & Quality Ceiling (1-10)

Can Claude actually deliver a 10/10 output for this skill given its capabilities?

| Score | Criteria |
|-------|----------|
| 10 | Pure content generation from structured inputs — briefs, copy, reports, playbooks. Claude excels here. |
| 8-9 | Content generation + light analysis or calculation (rate estimates, compliance checks, scoring rubrics) |
| 6-7 | Requires browser automation (Claude in Chrome) with public data — doable but rate-limited and fragile to UI changes |
| 4-5 | Requires access to private data, APIs, or authenticated sessions that may not be available |
| 1-3 | Requires real-time data, live integrations, or capabilities Claude fundamentally lacks |

**Honest caveats to factor in:**
- Browser-based skills (Tier 2) work but are limited to ~20-50 profiles per session
- Platform UI changes can break navigation — these skills need maintenance
- Rate benchmarks are based on training data, not real-time market data
- Legal/compliance output needs a disclaimer — it's guidance, not legal advice

---

## Dimension 7: Differentiation (1-10)

How unique is this skill compared to what someone could get from a generic ChatGPT prompt?

| Score | Criteria |
|-------|----------|
| 10 | Skill encodes proprietary frameworks, industry benchmarks, or multi-step workflows that a generic prompt can't replicate. Includes opinionated best practices from real creator marketing experience. |
| 8-9 | Skill has structured methodology and domain-specific templates that go well beyond "write me a brief" |
| 6-7 | Skill provides useful structure but the core output is achievable with a detailed prompt |
| 4-5 | Skill is essentially a well-formatted prompt wrapper |
| 1-3 | No meaningful differentiation from a generic AI conversation |

**What creates differentiation:**
- Structured frameworks (like the Seven Sweeps methodology in the marketingskills repo)
- Industry-specific benchmarks and rate tables
- Platform-specific templates (Instagram vs. TikTok vs. YouTube)
- Multi-step workflows with quality checks built in
- Opinionated guidance that takes a position ("never do X, always do Y")
- Integration with Archive's product context and terminology

---

## Scoring Template

Use this template to evaluate any skill idea:

```
Skill Name: _______________
One-liner: _______________

| Dimension | Score | Notes |
|-----------|-------|-------|
| 1. ICP Segment Reach | /10 | |
| 2. Workflow Pain Severity | /10 | |
| 3. Output Actionability | /10 | |
| 4. Repeatability | /10 | |
| 5. Archive Product Alignment | /10 | |
| 6. Feasibility & Quality Ceiling | /10 | |
| 7. Differentiation | /10 | |
| **Average** | **/10** | |

Decision: BUILD / DEFER / KILL
Rationale: _______________
```

**Decision rules:**
- **BUILD**: Average 8+ and no single dimension below 6
- **DEFER**: Average 6-7 or one dimension below 6 that could be improved with more research
- **KILL**: Average below 6 or multiple dimensions below 4

---

## Current Skill Rankings

Apply this framework to our 15 planned skills. Re-score periodically as we learn from user feedback and usage data.

### Tier 1 — Fully Autonomous (text generation)

| Skill | Segment | Pain | Action | Repeat | Archive | Feasibility | Diff | Avg |
|-------|---------|------|--------|--------|---------|-------------|------|-----|
| Campaign Brief Generator | 9 | 8 | 10 | 9 | 8 | 10 | 7 | **8.7** |
| Creator Outreach DM/Email | 9 | 9 | 10 | 10 | 7 | 10 | 8 | **9.0** |
| Rate Negotiation Playbook | 8 | 7 | 8 | 8 | 5 | 8 | 8 | **7.4** |
| Content Brief Builder | 9 | 9 | 10 | 9 | 8 | 10 | 7 | **8.9** |
| FTC Compliance Reviewer | 8 | 6 | 9 | 8 | 6 | 9 | 8 | **7.7** |
| End-of-Campaign Report | 9 | 9 | 10 | 8 | 10 | 9 | 9 | **9.1** |

### Tier 2 — Browser-Powered

| Skill | Segment | Pain | Action | Repeat | Archive | Feasibility | Diff | Avg |
|-------|---------|------|--------|--------|---------|-------------|------|-----|
| Creator Discovery | 9 | 9 | 9 | 9 | 9 | 7 | 9 | **8.7** |
| Creator Vetting Scorecard | 9 | 10 | 9 | 9 | 10 | 7 | 9 | **9.0** |
| Trend Research Assistant | 8 | 7 | 8 | 8 | 8 | 7 | 8 | **7.7** |
| Competitor Creator Audit | 8 | 7 | 9 | 6 | 9 | 7 | 9 | **7.9** |

### Tier 3 — Integration-Ready

| Skill | Segment | Pain | Action | Repeat | Archive | Feasibility | Diff | Avg |
|-------|---------|------|--------|--------|---------|-------------|------|-----|
| Creator CRM Template | 7 | 6 | 7 | 3 | 5 | 8 | 6 | **6.0** |
| Campaign Wiki Builder | 7 | 6 | 8 | 5 | 6 | 8 | 5 | **6.4** |
| Gifting Program Designer | 8 | 7 | 9 | 5 | 8 | 10 | 8 | **7.9** |
| Usage Rights Guide | 7 | 6 | 8 | 6 | 5 | 9 | 7 | **6.9** |
| Ambassador Program Blueprint | 8 | 7 | 9 | 4 | 8 | 10 | 8 | **7.7** |

### Recommended Build Order

Based on scores, build in this order:

1. **End-of-Campaign Report Generator** (9.1) — highest score, strongest Archive alignment, proves ROI pillar
2. **Creator Outreach DM/Email Writer** (9.0) — highest repeatability, strongest pain, SMB magnet
3. **Creator Vetting Scorecard** (9.0) — Enterprise's #1 use case, $200+/creator manual cost today
4. **Content Brief Builder** (8.9) — universal pain point, high repeatability, high actionability
5. **Campaign Brief Generator** (8.7) — natural starting point for new campaigns
6. **Creator Discovery Workflow** (8.7) — SMB's #1 priority, strong Archive alignment
7. **Gifting Program Designer** (7.9) — high feasibility, strong Archive tie-in
8. **Competitor Creator Audit** (7.9) — strong differentiation, unique competitive intel

Skills scoring below 7.5 should be deferred until v2 or reconsidered.

---

## How to Update Rankings

1. After each skill ships, collect user feedback on actual value delivered
2. Track invocation frequency — low usage suggests the skill idea scored higher than reality
3. Re-score quarterly based on ICP shifts, product changes, and competitive landscape
4. Add new skill ideas to the scoring template before building
5. Kill skills that consistently score below 6 on any dimension after launch
