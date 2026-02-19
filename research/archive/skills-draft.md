## Purpose

This page is for gathering feedback on the 15 creator marketing skills planned for the Archive GitHub repo. Each skill includes feasibility notes, required inputs, and expected output. Leave comments on anything that needs adjustment before we start building.

> 📋 **How to review:** Use Notion comments on individual skills to flag concerns, suggest changes, or vote on priority. Feedback questions are at the bottom.

---

## Tier 1 — Fully Autonomous

These 6 skills run entirely within Claude Cowork through text and document generation — no browser required. Where noted, Claude in Chrome can optionally enhance the skill to eliminate additional manual steps.

---

### Skill 1 · Campaign Brief Generator

**What it does:** User inputs product details, campaign goal, budget range, and brand vibe. Claude generates a complete, ready-to-send creator brief.

**Feasibility:** 🟢 High — pure content generation from structured inputs. Fully doable in Cowork today with no dependencies.

**Required inputs:**

- Product or brand name
- Campaign objective (awareness, conversions, UGC, etc.)
- Target audience description
- Budget range
- Deliverable types (Reels, Stories, TikToks, YouTube, etc.)
- Content tone or vibe
- Any brand restrictions or off-limits topics

**Expected output:** A formatted ~500-word campaign brief including: campaign overview, creator requirements, deliverable specs, timeline, compensation range, brand dos and don'ts, and submission guidelines. Ready to copy-paste or export as a Word doc via Cowork.

**Works in:** Claude Cowork ✓ · Claude Code ✓

---

### Skill 2 · Creator Outreach DM/Email Writer

**What it does:** Claude writes personalized outreach messages in 3 formats. With Claude in Chrome, it can also navigate directly to the creator's profile to find their business email or Linktree link, and — optionally — draft the DM directly into Instagram's message interface so the user just reviews and hits send.

**Feasibility:** 🟢 High — writing is fully autonomous without Chrome. Chrome enhancement adds contact-finding and DM pre-population.

**Required inputs:**

- Creator's handle and platform
- Brand name and product
- What you want them to do (post type, timeline)
- Desired tone (casual vs. professional)

**Chrome enhancement (optional):** Claude navigates to the creator's profile, reads their bio to find a business email or Linktree, then drafts the outreach message directly in the Instagram DM interface. User reviews and sends.

**Expected output:** 3 outreach variations — a short IG DM (under 300 characters), a longer email version, and a follow-up for non-responders — plus guidance on when to use each. With Chrome: message pre-drafted in the DM interface.

**Works in:** Claude Cowork ✓ · Claude Code ✓ · Claude in Chrome (optional enhancement)

---

### Skill 3 · Rate Negotiation Playbook

**What it does:** User inputs follower count, engagement rate, and deliverable types. Claude outputs a tailored negotiation script with market rate estimates, opening offers, counters, and walk-away points.

**Feasibility:** 🟢 High — calculation plus scripting. Rate benchmarks are based on Claude's training data and may not reflect real-time market shifts, which we'll disclose in the skill.

**Required inputs:**

- Creator's follower count and platform
- Estimated engagement rate (%)
- Deliverable types (e.g., 2 Reels + 3 Stories)
- Your budget ceiling
- Whether usage rights are required
- Any exclusivity requirements

**Expected output:** A negotiation playbook with: market rate estimate for this creator tier, your recommended opening offer, how to respond to 4–5 common pushback scenarios, your walk-away threshold, and usage rights add-on pricing guidance.

**Works in:** Claude Cowork ✓ · Claude Code ✓

---

### Skill 4 · Content Brief Builder

**What it does:** Generates a detailed per-creator content brief that can be sent directly to a creator alongside their contract.

**Feasibility:** 🟢 High — structured writing. One of the most immediately valuable skills; content briefs are a consistent pain point for brand teams.

**Required inputs:**

- Creator name and platform
- Deliverable type and count
- Campaign theme and key messages (2–3 bullets)
- Required mentions, hashtags, and tags
- Any visual or aesthetic requirements
- Posting window (dates)
- Approval process (does the brand review before posting?)

**Expected output:** A complete 1–2 page content brief the brand can send directly to the creator, including: campaign context, content guidelines, do's and don'ts, reference examples, hashtag list, FTC disclosure requirements, and submission/approval steps.

**Works in:** Claude Cowork ✓ · Claude Code ✓

---

### Skill 5 · FTC Compliance Reviewer

**What it does:** Claude audits a creator post for FTC disclosure compliance and rewrites the caption to be compliant. With Claude in Chrome, the user just provides the post URL — Claude navigates to it and extracts the full caption automatically. No copy-pasting.

**Feasibility:** 🟢 High — text analysis is fully autonomous. Chrome enhancement eliminates the data-entry step entirely.

**Required inputs:**

- Post URL (with Chrome) OR pasted caption text (without Chrome)
- Relationship type (paid partnership, gifted, affiliate, or ambassador)
- The platform (Instagram, TikTok, YouTube, etc.)

**Chrome enhancement (optional):** User provides the post URL. Claude navigates to it in Chrome, reads the full caption and all hashtags, and runs the compliance audit automatically.

**Expected output:** A compliance assessment with: pass/flag status per FTC requirement, specific issues explained in plain English, and 2–3 compliant caption rewrites that preserve the creator's voice and tone.

**Works in:** Claude Cowork ✓ · Claude Code ✓ · Claude in Chrome (optional for URL-based input)

---

### Skill 6 · End-of-Campaign Report Generator

**What it does:** Claude turns raw campaign metrics into a polished, exec-ready report with narrative context, KPI analysis, and key learnings. With Claude in Chrome, it can navigate directly to the brand's Instagram Business or TikTok Analytics dashboard and pull per-post metrics for each creator's content — no spreadsheet or manual data entry needed.

**Feasibility:** 🟢 High for report generation — fully autonomous from pasted data. Chrome analytics pull requires user to have a business/creator account on the relevant platform.

**Required inputs:**

- Campaign name and dates
- Creator list
- Per-creator metrics (paste in, OR let Chrome pull from analytics dashboard)
- Total spend
- Original KPI targets

**Chrome enhancement (optional):** Claude navigates to the platform's analytics dashboard, identifies each creator's content, and extracts impressions, reach, engagement, and link clicks before generating the report.

**Expected output:** A formatted report including: executive summary, KPI performance vs. benchmarks, top-performing creators, content highlights, key learnings, and recommended next steps. Exportable as .docx or PDF via Cowork.

**Works in:** Claude Cowork ✓ · Claude Code ✓ · Claude in Chrome (optional for analytics pull)

---

## Tier 2 — Browser-Powered

These 4 skills run fully automated using Claude in Chrome. Because the user is already logged into Instagram and TikTok in their Chrome browser, Claude can navigate those platforms on their behalf — running searches, scrolling results, visiting creator profiles, extracting data, and building reports automatically. The user just provides the brief; Claude does the rest.

> 🌐 **Prerequisite for all Tier 2 skills:** User must be logged into the relevant platform(s) in their Chrome browser before running the skill.

> ⚠️ **Honest caveat:** Claude reads what's visible on the page, just as a human would. Very high-volume runs (100+ profiles in one session) may trigger platform rate limits. These skills are optimized for 20–50 creator evaluations per session. Platform UI changes can occasionally affect navigation — we'll maintain the skills as platforms evolve.

---

### Skill 7 · Creator Discovery Workflow

**What it does:** User describes what they're looking for. Claude opens Chrome, navigates to Instagram and/or TikTok, runs targeted hashtag and keyword searches, scrolls through results, visits promising creator profiles, reads their stats, and returns a ranked shortlist — fully automatically.

**Feasibility:** 🟢 High — with Claude in Chrome and the user logged in, this is a fully automated end-to-end workflow. No copy-pasting, no manual searching.

**Required inputs:**

- Brand category and campaign vibe
- Target audience demographics
- Platform(s) to search (Instagram, TikTok, or both)
- Creator tier target (nano: 1k–10k, micro: 10k–100k, macro: 100k–1M, mega: 1M+)
- Geographic or language requirements, if any
- 2–3 example creators or aesthetic references (optional but improves results)

**How Claude works in Chrome:**

1. Generates 10–15 relevant hashtags and keyword queries based on brand inputs
2. Navigates to each hashtag search on Instagram and/or TikTok
3. Scrolls through search results, flags accounts within the target follower tier
4. Visits each flagged profile: reads follower count, bio, engagement on recent posts, content themes, and any visible sponsored content history
5. Compiles all profile data and ranks candidates by brand fit
6. Returns a discovery report with top 10–20 creators

**Expected output:** A creator discovery report with: the search strategy used (hashtags + queries), top 10–20 creator candidates ranked by fit, a per-creator summary for each (handle, platform, follower count, avg engagement, content theme, brand-fit rationale), and recommended next steps.

**Works in:** Claude Cowork ✓ with Claude in Chrome (Chrome required)

---

### Skill 8 · Creator Vetting Scorecard

**What it does:** User provides a list of creator handles. Claude navigates to each profile in Chrome, extracts all publicly visible stats, and scores each creator against a brand-fit rubric. No manual data entry required from the user.

**Feasibility:** 🟢 High — Claude reads follower counts, bios, post engagement, content themes, and existing brand partnerships directly from the platform UI. Works for public accounts; private accounts return a "cannot vet — private account" flag.

**Required inputs:**

- List of creator handles and platform(s)
- Your brand values, aesthetic, and any hard brand safety restrictions
- Creator tier you're targeting (optional)
- Any content category exclusions (e.g., alcohol, competitor brands)

**How Claude works in Chrome:**

1. Navigates to each creator's profile
2. Reads: follower count, following count, bio, website or email
3. Clicks through 6–8 recent posts: reads likes, comments, captions, content theme, and any sponsorship disclosures
4. Estimates engagement rate from visible data
5. Flags any brand safety concerns
6. Scores each creator across 5 dimensions and generates a recommendation

**Expected output:** A vetting scorecard for each creator scored across: content quality, audience fit, engagement health, brand safety, and existing sponsorship patterns — plus an overall hire/hold/pass recommendation with reasoning for each.

**Works in:** Claude Cowork ✓ with Claude in Chrome (Chrome automates the data pull; manual input also supported without Chrome)

---

### Skill 9 · Trend Research Assistant

**What it does:** Claude navigates directly to TikTok's Discover page, Instagram's Explore and Reels tabs, and YouTube Trending to capture what's actually trending right now — live, real-time platform data rather than web search results alone.

**Feasibility:** 🟢 High — TikTok Discover and Instagram Explore are accessible to any logged-in user and surface real-time trending content. This gives far fresher and more specific results than web search. Claude combines browser-collected data with web search for the most comprehensive output.

**Required inputs:**

- Brand category or niche
- Target platform(s) (TikTok, Instagram, YouTube Shorts, or all three)
- Time horizon ("right now" for live trends, or "past 30 days" for a broader view)
- Content format focus, if any (e.g., tutorials, unboxing, GRWM, day-in-the-life)

**How Claude works in Chrome:**

1. Navigates to TikTok Discover — reads currently trending hashtags, sounds, and content formats
2. Navigates to Instagram Explore — captures trending content themes and formats visible in the feed
3. Navigates to YouTube Trending — reads top Shorts and long-form videos in the relevant category
4. Supplements with web search for trend context and third-party reporting
5. Synthesizes all sources into a single trend brief

**Expected output:** A real-time trend brief with: top 5–7 trending content formats and themes in the niche (pulled live from platforms), example creators riding each trend, specific ways the brand could participate authentically, and a shelf-life assessment for each trend (2-week spike vs. emerging evergreen format).

**Works in:** Claude Cowork ✓ with Claude in Chrome (Chrome provides real-time data; web search works as a fallback without Chrome)

---

### Skill 10 · Competitor Creator Audit

**What it does:** Claude navigates directly to competitor brands' Instagram and TikTok pages, browses their content, identifies sponsored creator partnerships from disclosure language, clicks through to creator profiles, and builds a comprehensive map of the competitor's creator strategy.

**Feasibility:** 🟢 High — public brand pages on Instagram and TikTok are fully accessible. Claude reads post captions for disclosure language (#ad, #partner, #gifted), visits creator profiles mentioned or tagged, and browses the brand's "Tagged" section. Note: some brands limit who can view their Tagged content — this is a platform-level setting Claude cannot work around.

**Required inputs:**

- Competitor brand handle(s) and platform(s)
- Time window to audit (e.g., last 6 months — Claude scrolls back that far)
- What you want to learn (creator tiers used, content formats, posting frequency, campaign themes)

**How Claude works in Chrome:**

1. Navigates to each competitor's Instagram and/or TikTok profile
2. Scrolls through recent posts, reading captions for disclosure language
3. Clicks through to creator profiles from any tagged or mentioned creators to get their follower stats
4. Checks the brand's Tagged section (if accessible) for additional creator-posted content
5. Supplements findings with web search for press coverage of notable campaigns
6. Builds a creator partner map with tier and content format analysis

**Expected output:** A competitor creator audit with: estimated creator tier strategy, content formats and themes they favor, posting frequency and cadence, a list of identified creator partners with approximate follower tiers, and gap opportunities — niches or creator types the competitor isn't tapping that your brand could own.

**Works in:** Claude Cowork ✓ with Claude in Chrome (Chrome required; web search used as supplement)

---

## Tier 3 — Integration-Ready Outputs

These 5 skills produce structured outputs designed to plug directly into the tools brands already use. HubSpot and Notion MCP connectors are available in Claude Cowork today, enabling Claude to create records and pages directly — not just generate instructions.

---

### Skill 11 · Creator CRM Template (HubSpot-Ready)

**What it does:** Claude builds a structured creator relationship management setup — contact fields, deal stages, and tracking properties — ready to implement in HubSpot. With the HubSpot MCP connector, Claude configures this directly in the user's HubSpot account.

**Feasibility:** 🟢 High — HubSpot MCP connector is available in Claude Cowork today. With user permission, Claude can configure the framework directly rather than just providing instructions.

**Required inputs:**

- How many creators you typically manage at once
- Your creator workflow stages (e.g., prospecting → outreach → contracted → live → reporting)
- Any custom fields you track (exclusivity dates, content category, preferred platform, rates)

**Expected output:** A HubSpot CRM setup including: contact property definitions, deal pipeline stages, task templates for each stage, and a sample creator contact entry — configured directly in HubSpot via MCP connector.

**Works in:** Claude Cowork ✓ with HubSpot MCP connector

---

### Skill 12 · Campaign Wiki Builder (Notion-Ready)

**What it does:** Claude generates a full campaign documentation page in Notion — brief, creator roster, content tracker, and reporting template — created directly in the user's Notion workspace via MCP connector.

**Feasibility:** 🟢 High — Notion MCP connector is available in Claude Cowork today. One of the most plug-and-play skills in the repo.

**Required inputs:**

- Campaign name and brand
- Campaign objective
- Creator list (names or handles)
- Deliverables per creator
- Campaign timeline
- Total budget

**Expected output:** A Notion page created directly in your workspace with: campaign overview, creator roster table, content submission tracker, campaign calendar, and a blank reporting section to fill post-campaign.

**Works in:** Claude Cowork ✓ with Notion MCP connector

---

### Skill 13 · Gifting Program Designer

**What it does:** Claude designs an end-to-end product gifting program — tier structure, product selection logic, outreach copy, and follow-up sequence.

**Feasibility:** 🟢 High — pure strategy and writing output. No external tools needed.

**Required inputs:**

- Brand and product category
- Average product retail value
- Gifting goal (awareness, UGC generation, or long-term relationship building)
- Monthly gifting budget
- Whether you want to require posting or keep it no-strings-attached

**Expected output:** A gifting program playbook including: a 2–3 tier structure (casual seeding vs. VIP gifting), product selection criteria, outreach plus confirmation email templates, a 3-step follow-up sequence, how to track ROI without requiring posts, and a decision framework for who gets upgraded to a paid partnership.

**Works in:** Claude Cowork ✓ · Claude Code ✓

---

### Skill 14 · Usage Rights & Exclusivity Negotiation Guide

**What it does:** User pastes a proposed contract clause around usage rights or exclusivity. Claude analyzes it, flags issues, and suggests negotiation counters from both the brand and creator perspective.

**Feasibility:** 🟢 High — legal text analysis plus negotiation coaching. Note: this is guidance, not legal advice. A standard disclaimer will be included prominently in the skill.

**Required inputs:**

- The specific contract clause(s) in question
- Which side you're on (brand or creator)
- Deliverables and platforms involved
- Deal context (one-off vs. ongoing, rough compensation level)

**Expected output:** A clause-by-clause breakdown with: plain-English translation of what was agreed to, any red flags or missing protections, suggested counter-language, and negotiation talking points for the live conversation.

**Works in:** Claude Cowork ✓ · Claude Code ✓

---

### Skill 15 · Long-Term Ambassador Program Blueprint

**What it does:** Claude designs a tiered ambassador program from scratch — structure, qualification criteria, benefits, content expectations, and communication cadence.

**Feasibility:** 🟢 High — strategic planning plus document creation. One of the highest-value outputs in the repo given how many brands want ambassador programs but don't know where to start.

**Required inputs:**

- Brand category and product(s)
- Average order value
- What you want ambassadors to do (post frequency, content types)
- What you can offer (commission %, free product, flat fee, exclusive access)
- How many ambassadors you want to manage initially

**Expected output:** A complete ambassador program blueprint with: a 3-tier structure with qualification criteria for each level, benefits package per tier, content expectations and posting cadence, application and onboarding process, monthly communication calendar template, and metrics to track program health over time.

**Works in:** Claude Cowork ✓ · Claude Code ✓

---

## Feedback Requested

For each skill, please consider:

1. **Feasibility check** — Does the Chrome automation approach seem accurate and realistic?
2. **Input realism** — Are the required inputs things marketers will actually have on hand?
3. **Output value** — Does the expected output match what would be genuinely useful day-to-day?
4. **Missing skills** — Any workflows that belong in v1 but aren't listed here?
5. **Priority order** — If we had to ship 5 skills first, which 5 would you choose?

Leave comments directly on any skill section above, or add notes below.

---

## Reviewer Notes

*(Add your feedback here)*
