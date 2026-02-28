# Creator Marketing Skills

AI-powered skills for creator marketing teams at consumer brands and agencies. Built by [Archive.com](https://archive.com).

## What This Is

A collection of Claude skills that automate the repetitive, manual work in creator marketing — writing briefs, vetting creators, generating reports, crafting outreach, and more. Each skill encodes real creator marketing expertise so the output is ready to use, not just a starting point.

## Who It's For

- **Brands** running creator programs (beauty, fashion, wellness, food, lifestyle)
- **Agencies** managing creator campaigns for brand clients
- From solo founders sourcing their first creators to Enterprise VPs managing thousands of partnerships

## Installation

Choose one of the two options below. No coding experience required for either.

### Option 1: Claude Desktop with Cowork (Recommended)

The easiest way to get started — no terminal or coding needed.

1. **Download Claude Desktop** from [claude.ai/download](https://claude.ai/download) (macOS or Windows). Sign in with your Anthropic account.
2. **Download the skills** — click the green **Code** button at the top of this page, then **Download ZIP**. Unzip the file.
3. **Open Claude Desktop** and start a new conversation in **Cowork mode**.
4. **Add the folder** — click the folder icon in the chat to give Claude access to the `creator-marketing-skills` folder you unzipped.
5. **Install** — type this in the chat and hit enter:
   ```
   Install the skills from this folder
   ```

That's it. Claude will install everything automatically.

> **Step-by-step guide with screenshots:** [Cowork Getting Started Guide (PDF)](https://23233559.fs1.hubspotusercontent-na1.net/hubfs/23233559/Cowork%20Getting%20Started%20Guide.pdf)

### Option 2: Claude Code (CLI)

For users comfortable with a terminal.

1. **Install Claude Code** from [claude.ai/code](https://claude.ai/code). Sign in with your Anthropic account.
2. **Install Node.js** from [nodejs.org](https://nodejs.org) (click the LTS button). You only need this for the install command.
3. **Open Claude Code** and run:
   ```bash
   npx skills add archive-dot-com/creator-marketing-skills
   ```

Skills are installed to your `.claude/skills/` directory automatically.

> **Step-by-step guide with screenshots:** [Claude Code Getting Started Guide (PDF)](https://23233559.fs1.hubspotusercontent-na1.net/hubfs/23233559/Getting%20Started%20Guide.pdf)

<details>
<summary>Install only specific skills or update existing ones</summary>

```bash
# Install specific skills only
npx skills add archive-dot-com/creator-marketing-skills --skill brand-context creator-outreach-sequence-generator

# List available skills
npx skills add archive-dot-com/creator-marketing-skills --list

# Update to latest versions (re-run the install command)
npx skills add archive-dot-com/creator-marketing-skills
```

</details>

### Alternative: Clone and Copy

```bash
git clone https://github.com/archive-dot-com/creator-marketing-skills.git
cp -r creator-marketing-skills/skills/* .claude/skills/
```

## Getting Started

**Start here: run `/brand-context` first.** This skill visits your brand's website and asks a few creator-marketing-specific questions to build a shared context file. Every other skill reads this file automatically — so you only describe your brand once. Takes about 5 minutes.

```
/brand-context
```

After that, use any skill and it will already know your brand, audience, platforms, and goals.

## Usage

Describe what you need in plain language — Claude will use the right skill automatically:

```
"Write outreach DMs for these 5 creators"
→ Uses creator-outreach-sequence-generator

"Is this creator's audience a good fit for our brand?"
→ Uses audience-demographic-analyzer

"Check if this caption is FTC compliant"
→ Uses ftc-disclosure-spot-checker

"Turn our team's feedback into a revision request for the creator"
→ Uses content-approval-feedback-formatter
```

You can also invoke skills directly:

```
/creator-outreach-sequence-generator
/niche-fit-scorer
/campaign-roi-calculator
```

## Skills

### Setup
| Skill | What it does |
|-------|-------------|
| [brand-context](skills/brand-context/) | Scrape your website + answer a few questions to set up shared brand context. Run this first. |

### Discovery & Vetting
| Skill | What it does |
|-------|-------------|
| [audience-demographic-analyzer](skills/audience-demographic-analyzer/) | Analyze an influencer's audience stats and get a structured alignment verdict. |
| [brand-safety-screen](skills/brand-safety-screen/) | Flag brand safety risks in a creator's recent content. |
| [niche-fit-scorer](skills/niche-fit-scorer/) | Score how well a creator's niche fits your brand and campaign on a 1-10 scale. |

### Outreach & Negotiation
| Skill | What it does |
|-------|-------------|
| [creator-outreach-sequence-generator](skills/creator-outreach-sequence-generator/) | Generate a multi-touch outreach sequence with personalization hooks. |
| [reply-triage-classifier](skills/reply-triage-classifier/) | Classify a batch of influencer replies with suggested next actions. |
| [creator-rate-estimator](skills/creator-rate-estimator/) | Get rate ranges for a creator based on tier, niche, platform, and deliverables. |
| [creator-negotiation-assistant](skills/creator-negotiation-assistant/) | Get strategic response options for counter-offers, objections, or stalled deals. |
| [verbal-agreement-summarizer](skills/verbal-agreement-summarizer/) | Extract agreed terms from a DM or email thread into a clean confirmation recap. |

### Campaign Setup & Briefing
| Skill | What it does |
|-------|-------------|
| [universal-creator-follow-up-chaser](skills/universal-creator-follow-up-chaser/) | Generate escalating follow-up sequences for any chasing scenario. |
| [utm-parameter-builder](skills/utm-parameter-builder/) | Generate correctly formatted UTM strings and tracking URLs for each creator. |
| [creator-briefing-faq-generator](skills/creator-briefing-faq-generator/) | Anticipate common creator questions and produce a ready-to-send FAQ. |
| [creator-content-concept-generator](skills/creator-content-concept-generator/) | Generate 5-10 tailored content concepts that feel native to a creator's style. |
| [multi-platform-format-adapter](skills/multi-platform-format-adapter/) | Adapt a master brief into platform-specific versions (TikTok, Reels, Shorts). |

### Content Review & Compliance
| Skill | What it does |
|-------|-------------|
| [content-approval-feedback-formatter](skills/content-approval-feedback-formatter/) | Turn internal team notes into a clear, constructive revision request for creators. |
| [content-to-brief-compliance-checker](skills/content-to-brief-compliance-checker/) | Check submitted content against every brief requirement with a pass/fail checklist. |
| [ftc-disclosure-spot-checker](skills/ftc-disclosure-spot-checker/) | Review a caption or script for FTC disclosure compliance and flag issues. |

### Metrics & Monitoring
| Skill | What it does |
|-------|-------------|
| [story-metrics-screenshot-parser](skills/story-metrics-screenshot-parser/) | Parse raw Story insights text into a clean, spreadsheet-ready row. |
| [metrics-normalization-formatter](skills/metrics-normalization-formatter/) | Normalize messy metrics from multiple sources into a single standardized table. |
| [content-capture-checklist-builder](skills/content-capture-checklist-builder/) | Generate a monitoring checklist for what to capture on each platform and when. |
| [engagement-rate-calculator-benchmarker](skills/engagement-rate-calculator-benchmarker/) | Calculate engagement rates and compare against benchmarks by tier and platform. |

### Reporting & ROI
| Skill | What it does |
|-------|-------------|
| [campaign-roi-calculator](skills/campaign-roi-calculator/) | ROI summary with narrative framing for leadership. |
| [campaign-status-dashboard-digest](skills/campaign-status-dashboard-digest/) | Weekly status summary from raw spreadsheet data. |
| [creator-posting-compliance-tracker](skills/creator-posting-compliance-tracker/) | Compliance table for contracted vs. actual posts. |
| [post-campaign-creator-scorecard](skills/post-campaign-creator-scorecard/) | Ranked creator retention list based on campaign performance. |

### Repurposing & Paid Media
| Skill | What it does |
|-------|-------------|
| [organic-repost-caption-writer](skills/organic-repost-caption-writer/) | Captions for reposting creator content to brand channels with proper credit. |
| [paid-social-creative-brief](skills/paid-social-creative-brief/) | Brief for the paid social team from whitelisted posts. |
| [paid-ad-copy-adapter](skills/paid-ad-copy-adapter/) | Ad copy variations from a creator's original caption or script. |

### Strategy & Planning
| Skill | What it does |
|-------|-------------|
| [campaign-goal-to-kpi-framework-builder](skills/campaign-goal-to-kpi-framework-builder/) | Full KPI framework from a business objective. |
| [performance-benchmark-setter](skills/performance-benchmark-setter/) | Realistic KPI benchmarks before campaign launch. |
| [quarterly-creator-program-review](skills/quarterly-creator-program-review/) | Structured QBR document from raw campaign data. |

## Troubleshooting

| Problem | Fix |
|---------|-----|
| **Claude doesn't recognize a skill** | Make sure skills are installed. Re-run the install step from above. In Cowork, re-select the folder and try again. |
| **"Command not found" when running `npx`** | Node.js isn't installed. Download it from [nodejs.org](https://nodejs.org), then restart your terminal. |
| **Skills installed but nothing happens** | Run `/brand-context` first. Also try describing what you need in plain language instead of calling a skill name directly. |
| **ZIP won't open (Windows)** | Right-click the .zip file and choose "Extract All" before opening. |

Need more help? Contact the Archive team at support@archive.com or reach out to your customer success manager.

## License

MIT
