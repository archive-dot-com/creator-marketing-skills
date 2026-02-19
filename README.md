# Creator Marketing Skills

AI-powered skills for creator marketing teams at consumer brands and agencies. Built for [Archive](https://archive.com).

## What This Is

A collection of Claude Code skills that automate the repetitive, manual work in creator marketing — writing briefs, vetting creators, generating reports, crafting outreach, and more. Each skill encodes real creator marketing expertise so the output is ready to use, not just a starting point.

## Who It's For

- **Brands** running creator programs (beauty, fashion, wellness, food, lifestyle)
- **Agencies** managing creator campaigns for brand clients
- From solo founders sourcing their first creators to Enterprise VPs managing thousands of partnerships

## Getting Started

**Start here: run `/brand-context` first.** This skill scrapes your brand's website and asks a few creator-marketing-specific questions to build a shared context file. Every other skill reads this file automatically — so you only describe your brand once.

```
/brand-context
```

After that, use any skill and it will already know your brand, audience, platforms, and goals.

## Skills

### Setup
| Skill | What it does |
|-------|-------------|
| **brand-context** | Scrape your website + answer a few questions to set up shared brand context. Run this first. |

### Discovery & Vetting
| Skill | What it does |
|-------|-------------|
| **audience-demographic-analyzer** | Analyze an influencer's audience stats and get a structured alignment verdict. |
| **brand-safety-screen** | Flag brand safety risks in a creator's recent content. |
| **niche-fit-scorer** | Score how well a creator's niche fits your brand and campaign on a 1-10 scale. |

### Outreach & Negotiation
| Skill | What it does |
|-------|-------------|
| **creator-outreach-sequence-generator** | Generate a multi-touch outreach sequence with personalization hooks. |
| **reply-triage-classifier** | Classify a batch of influencer replies with suggested next actions. |
| **creator-rate-estimator** | Get rate ranges for a creator based on tier, niche, platform, and deliverables. |
| **creator-negotiation-assistant** | Get strategic response options for counter-offers, objections, or stalled deals. |
| **verbal-agreement-summarizer** | Extract agreed terms from a DM or email thread into a clean confirmation recap. |

### Campaign Setup & Briefing
| Skill | What it does |
|-------|-------------|
| **universal-creator-follow-up-chaser** | Generate escalating follow-up sequences for any chasing scenario. |
| **utm-parameter-builder** | Generate correctly formatted UTM strings and tracking URLs for each creator. |
| **creator-briefing-faq-generator** | Anticipate common creator questions and produce a ready-to-send FAQ. |
| **creator-content-concept-generator** | Generate 5-10 tailored content concepts that feel native to a creator's style. |
| **multi-platform-format-adapter** | Adapt a master brief into platform-specific versions (TikTok, Reels, Shorts). |

### Content Review & Compliance
| Skill | What it does |
|-------|-------------|
| **content-approval-feedback-formatter** | Turn internal team notes into a clear, constructive revision request for creators. |
| **content-to-brief-compliance-checker** | Check submitted content against every brief requirement with a pass/fail checklist. |
| **ftc-disclosure-spot-checker** | Review a caption or script for FTC disclosure compliance and flag issues. |

### Metrics & Monitoring
| Skill | What it does |
|-------|-------------|
| **story-metrics-screenshot-parser** | Parse raw Story insights text into a clean, spreadsheet-ready row. |
| **metrics-normalization-formatter** | Normalize messy metrics from multiple sources into a single standardized table. |
| **content-capture-checklist-builder** | Generate a monitoring checklist for what to capture on each platform and when. |
| **engagement-rate-calculator-benchmarker** | Calculate engagement rates and compare against benchmarks by tier and platform. |

### Reporting & ROI (coming soon)
| Skill | What it does |
|-------|-------------|
| campaign-roi-calculator | ROI summary with narrative framing for leadership. |
| campaign-status-dashboard-digest | Weekly status summary from raw spreadsheet data. |
| creator-posting-compliance-tracker | Compliance table for contracted vs. actual posts. |
| post-campaign-creator-scorecard | Ranked creator retention list based on campaign performance. |

### Repurposing & Paid Media (coming soon)
| Skill | What it does |
|-------|-------------|
| organic-repost-caption-writer | Captions for reposting creator content to brand channels. |
| paid-social-creative-brief | Brief for the paid social team from whitelisted posts. |
| paid-ad-copy-adapter | Ad copy variations from a creator's original caption or script. |

### Strategy & Planning (coming soon)
| Skill | What it does |
|-------|-------------|
| campaign-goal-to-kpi-framework-builder | Full KPI framework from a business objective. |
| performance-benchmark-setter | Realistic KPI benchmarks before campaign launch. |
| quarterly-creator-program-review | Structured QBR document from raw campaign data. |

## Installation

```
# Coming soon — will be installable as a Claude Code plugin
```

## License

MIT
