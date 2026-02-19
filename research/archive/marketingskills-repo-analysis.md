# Marketing Skills Repo Analysis

Deep research notes on https://github.com/coreyhaines31/marketingskills

**Analyzed on**: 2026-02-19
**Repo author**: Corey Haines (https://corey.co)
**License**: MIT
**Total skills**: 26
**Total CLI tools**: 51
**Total integration guides**: 60

---

## Table of Contents

1. [Repo Structure Overview](#repo-structure-overview)
2. [How Skills Are Organized](#how-skills-are-organized)
3. [The Agent Skills Specification](#the-agent-skills-specification)
4. [Common Patterns Across Skills](#common-patterns-across-skills)
5. [What Tools/Capabilities Skills Reference](#what-toolscapabilities-skills-reference)
6. [Validation and Generation Tooling](#validation-and-generation-tooling)
7. [What Makes the Best Skills Stand Out](#what-makes-the-best-skills-stand-out)
8. [Full Examples of Excellent Skills](#full-examples-of-excellent-skills)
9. [Key Takeaways for Building Our Own Skills](#key-takeaways-for-building-our-own-skills)

---

## Repo Structure Overview

```
marketingskills/
├── .claude-plugin/
│   └── marketplace.json          # Claude Code plugin manifest (lists all 26 skills)
├── .github/
│   ├── FUNDING.yml
│   ├── workflows/
│   │   ├── validate-skill.yml    # CI: validates SKILL.md on push/PR
│   │   └── sync-skills.yml       # CI: syncs marketplace.json + README on skill changes
│   ├── scripts/
│   │   └── sync-skills.js        # Node script to auto-update README table + marketplace.json
│   ├── ISSUE_TEMPLATE/
│   │   ├── skill-request.yml     # Structured issue template for requesting new skills
│   │   └── config.yml
│   └── PULL_REQUEST_TEMPLATE/
│       ├── new-skill.md          # PR template for new skills
│       ├── skill-update.md       # PR template for updating skills
│       └── documentation.md      # PR template for docs
├── skills/                        # 26 marketing skills
│   └── skill-name/
│       ├── SKILL.md              # Required: main instructions (<500 lines)
│       └── references/           # Optional: detailed reference material
│           └── *.md
├── tools/
│   ├── REGISTRY.md               # Master index of all 60+ marketing tools by category
│   ├── clis/                     # 51 zero-dependency Node.js CLI tools
│   │   ├── README.md             # Installation and usage guide
│   │   └── *.js                  # One file per tool (ga4.js, ahrefs.js, etc.)
│   └── integrations/             # 60 API integration guides
│       └── *.md                  # One file per tool (ga4.md, rewardful.md, etc.)
├── AGENTS.md                      # Agent guidelines for working in this repo
├── CONTRIBUTING.md                # Contribution guidelines
├── VERSIONS.md                    # Version tracking table for all skills
├── README.md                      # Main README with skill table, categories, installation
├── validate-skills.sh             # Local validation script (custom bash)
├── validate-skills-official.sh    # Validation using official skills-ref Python library
└── LICENSE                        # MIT
```

### Key structural observations:

1. **Skills are content-only** -- no build step, no compilation. They are pure markdown files with YAML frontmatter.
2. **Tools layer is separate** from skills. Tools live in `tools/` with their own registry, while skills live in `skills/`.
3. **Three tiers of tooling**: CLI tools (Node.js scripts), integration guides (markdown API docs), and MCP-enabled tools (6 tools with Model Context Protocol servers).
4. **Automation is tight**: GitHub Actions auto-validate skills on PR and auto-sync the README table + marketplace.json whenever skills change.

---

## How Skills Are Organized

### Directory Structure Per Skill

Every skill follows this pattern:

```
skills/skill-name/
├── SKILL.md           # Required -- main instructions
└── references/        # Optional -- detailed docs loaded on demand
    ├── frameworks.md
    ├── templates.md
    └── examples.md
```

Some skills also support `scripts/` and `assets/` directories, though none in this repo currently use them.

### Skills by Category

| Category | Skills | Count |
|----------|--------|-------|
| **Conversion Optimization** | page-cro, signup-flow-cro, onboarding-cro, form-cro, popup-cro, paywall-upgrade-cro | 6 |
| **Content & Copy** | copywriting, copy-editing, cold-email, email-sequence, social-content | 5 |
| **SEO & Discovery** | seo-audit, programmatic-seo, competitor-alternatives, schema-markup | 4 |
| **Paid & Distribution** | paid-ads | 1 |
| **Measurement & Testing** | analytics-tracking, ab-test-setup | 2 |
| **Growth Engineering** | free-tool-strategy, referral-program | 2 |
| **Strategy & Monetization** | marketing-ideas, marketing-psychology, launch-strategy, pricing-strategy, content-strategy, product-marketing-context | 6 |

### Naming Conventions

- Lowercase, hyphens only (e.g., `email-sequence`, `ab-test-setup`)
- Cannot start or end with hyphen
- No consecutive hyphens (`--`)
- Must be 1-64 characters
- `name` field in frontmatter MUST match directory name exactly

---

## The Agent Skills Specification

This repo follows the [Agent Skills spec](https://agentskills.io/specification.md). Key requirements:

### Required YAML Frontmatter

```yaml
---
name: skill-name
description: When to use this skill. Include trigger phrases and keywords.
---
```

### Frontmatter Fields

| Field | Required | Constraints |
|-------|----------|-------------|
| `name` | Yes | 1-64 chars, lowercase a-z, numbers, hyphens. Must match directory. |
| `description` | Yes | 1-1024 chars. Describe what it does and when to use it. |
| `license` | No | License name (default: MIT) |
| `metadata` | No | Key-value pairs (author, version, etc.) |

### Description Field -- Critical for Skill Discovery

The `description` is what agents use to decide whether to load a skill. Best practices observed:

1. **Start with "When the user wants..."** -- Every skill opens this way
2. **Include trigger phrases** -- Literal phrases the user might say
3. **Define scope boundaries** -- "For X, see Y" to prevent wrong skill selection
4. **Be comprehensive** -- List many synonyms and related phrases

Example of an excellent description:

```yaml
description: When the user wants to optimize, improve, or increase conversions
  on any marketing page -- including homepage, landing pages, pricing pages,
  feature pages, or blog posts. Also use when the user says "CRO," "conversion
  rate optimization," "this page isn't converting," "improve conversions," or
  "why isn't this page working." For signup/registration flows, see
  signup-flow-cro. For post-signup activation, see onboarding-cro. For forms
  outside of signup, see form-cro. For popups/modals, see popup-cro.
```

---

## Common Patterns Across Skills

After reading all 26 SKILL.md files, here are the patterns that appear consistently:

### Pattern 1: Role Assignment (Opening Line)

Every skill starts by assigning the agent a role:

- "You are a conversion rate optimization expert."
- "You are an expert conversion copywriter."
- "You are an expert cold email writer."
- "You are an expert in analytics implementation and measurement."
- "You are an expert in user onboarding and activation."

This is always a single sentence, second person, declarative.

### Pattern 2: Product Marketing Context Check

Every single skill includes this block immediately after the role assignment:

```markdown
**Check for product marketing context first:**
If `.claude/product-marketing-context.md` exists, read it before asking questions.
Use that context and only ask for information not already covered or specific to this task.
```

This is a brilliant shared-state pattern. The `product-marketing-context` skill creates a file that all other skills read. It prevents the agent from asking the same foundational questions over and over.

### Pattern 3: Initial Assessment / Before Starting Section

After the context check, every skill has a structured information-gathering section:

```markdown
## Initial Assessment

Before providing recommendations, identify:

1. **Page Type**: ...
2. **Primary Conversion Goal**: ...
3. **Traffic Context**: ...
```

This always uses numbered lists with bold labels. It tells the agent what to understand before doing work.

### Pattern 4: Core Principles Section

Most skills have a "Core Principles" section with 3-5 numbered principles:

```markdown
## Core Principles

### 1. Value Before Ask
- Lead with usefulness
- Build trust through content

### 2. One Email, One Job
- Each email has one primary purpose
```

These use `### N. Principle Name` as the subheading format.

### Pattern 5: Framework/Analysis Sections

The bulk of each skill is domain knowledge organized as frameworks. These use:

- **Tables** for reference data (comparisons, options, metrics)
- **Bullet lists** for checklists and criteria
- **Code blocks** for templates, examples, and structured output
- **Bold text** for key terms and emphasis
- **Examples** with specific, concrete illustrations (not abstract)

### Pattern 6: Output Format Section

Every skill specifies exactly how the agent should structure its response:

```markdown
## Output Format

### Quick Wins (Implement Now)
Easy changes with likely immediate impact.

### High-Impact Changes (Prioritize)
Bigger changes that require more effort.

### Test Ideas
Hypotheses worth A/B testing.

### Copy Alternatives
For key elements, provide 2-3 alternatives with rationale.
```

This is critical -- it tells the agent what shape the output should take.

### Pattern 7: Task-Specific Questions

Near the end, every skill lists questions the agent should ask:

```markdown
## Task-Specific Questions

1. What's your current conversion rate and goal?
2. Where is traffic coming from?
3. What does your signup/purchase flow look like after this page?
```

These are fallback questions for when the product marketing context does not cover needed info.

### Pattern 8: Related Skills Section

Every skill ends with a "Related Skills" section that cross-references other skills:

```markdown
## Related Skills

- **signup-flow-cro**: If the issue is in the signup process itself
- **form-cro**: If forms on the page need optimization
- **copywriting**: If the page needs a complete copy rewrite
```

This helps the agent know when to switch skills or suggest adjacent work.

### Pattern 9: References Directory for Deep Content

Skills that need detailed reference material offload it to `references/`:

```markdown
**For detailed templates**: See [references/sequence-templates.md](references/sequence-templates.md)
```

This keeps the main SKILL.md under 500 lines while providing unlimited depth. Examples:

- `cold-email/references/` -- 5 files: frameworks.md, personalization.md, benchmarks.md, subject-lines.md, follow-up-sequences.md
- `copywriting/references/` -- 2 files: copy-frameworks.md, natural-transitions.md
- `analytics-tracking/references/` -- 3 files: ga4-implementation.md, event-library.md, gtm-implementation.md
- `paid-ads/references/` -- 3 files: ad-copy-templates.md, audience-targeting.md, platform-setup-checklists.md
- `social-content/references/` -- 3 files: platforms.md, post-templates.md, reverse-engineering.md

### Pattern 10: Tool Integration Tables

Skills that involve implementation include tool integration tables:

```markdown
## Tool Integrations

| Tool | Best For | MCP | Guide |
|------|----------|:---:|-------|
| **Customer.io** | Behavior-based automation | - | [customer-io.md](../../tools/integrations/customer-io.md) |
| **Mailchimp** | SMB email marketing | ✓ | [mailchimp.md](../../tools/integrations/mailchimp.md) |
```

These link to the tools registry and integration guides.

### Pattern 11: Experiment Ideas Sections

The CRO-family skills (page-cro, signup-flow-cro, popup-cro, onboarding-cro, paywall-upgrade-cro) include detailed experiment ideas sections, often in their own reference files. These are categorized by what is being tested (layout, copy, triggers, etc.).

---

## What Tools/Capabilities Skills Reference

### Tools Registry (60+ tools across 17 categories)

The `tools/REGISTRY.md` is a comprehensive index organized by category:

- **Analytics**: GA4, Mixpanel, Amplitude, PostHog, Segment, Adobe Analytics, Plausible
- **SEO**: Google Search Console, Semrush, Ahrefs, DataForSEO, Keywords Everywhere
- **CRM**: HubSpot, Salesforce
- **Payments**: Stripe, Paddle
- **Referral/Affiliate**: Rewardful, Tolt, Mention Me, Dub.co, PartnerStack
- **Email**: Mailchimp, Customer.io, SendGrid, Resend, Kit, Beehiiv, Klaviyo, Postmark, Brevo, ActiveCampaign
- **Email Outreach**: Hunter, Snov, Lemlist, Instantly
- **Ads**: Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads
- **Automation**: Zapier
- **CRO/Testing**: Hotjar, Optimizely
- **Scheduling**: Calendly, SavvyCal
- **Forms**: Typeform
- **Messaging**: Intercom
- **Social**: Buffer
- **Video**: Wistia
- **Reviews**: Trustpilot, G2
- **Push**: OneSignal
- **Webinar**: Demio, Livestorm
- **Commerce/CMS**: Shopify, WordPress, Webflow
- **Data Enrichment**: Clearbit, Apollo

### MCP-Enabled Tools (6)

These have Model Context Protocol servers for direct agent interaction:
- GA4, Stripe, Mailchimp, Google Ads, Resend, Zapier

### CLI Tools (51)

Zero-dependency Node.js scripts following a consistent pattern:
- No npm install required (Node 18+ only, uses native `fetch`)
- JSON output for piping to `jq`
- Env var auth (`{TOOL}_API_KEY`)
- Consistent command structure: `{tool} <resource> <action> [options]`
- All support `--dry-run` for previewing requests without sending

### Integration Guides

Each tool gets a markdown file covering:
- Capabilities table (API, MCP, CLI, SDK availability)
- Authentication method and setup
- Common agent operations with curl examples
- Best practices and recommendations

### How Skills Reference Tools

Skills reference tools in two ways:

1. **Tool Integration Tables** at the bottom of SKILL.md (e.g., email-sequence lists Customer.io, Mailchimp, Resend, SendGrid, Kit)
2. **Registry pointer** with `For implementation, see the [tools registry](../../tools/REGISTRY.md)`

---

## Validation and Generation Tooling

### Validation Scripts (2)

**`validate-skills.sh`** -- Custom bash script that validates all skills against the Agent Skills spec:

- Checks YAML frontmatter exists and is valid
- Validates `name` field matches directory name
- Validates `name` format (lowercase, alphanumeric, hyphens, 1-64 chars)
- Validates `description` exists and is 1-1024 chars
- Checks for trigger phrases in description ("when", "mention", "use")
- Checks for related skills references ("see", "for", "ref")
- Validates optional fields (license, metadata)
- Checks SKILL.md is under 500 lines
- Color-coded output with pass/warn/fail

**`validate-skills-official.sh`** -- Uses the official `skills-ref` Python library from `agentskills/agentskills` repo:

- Clones the official agentskills repo
- Installs the skills-ref library (supports both `uv` and `pip`)
- Runs `skills-ref validate` on each skill directory
- Reports pass/fail per skill

### GitHub Actions CI

**`validate-skill.yml`** -- Runs on every push/PR that touches `**/SKILL.md`:

- Detects which skills changed
- Runs validation using `Flash-Brew-Digital/validate-skill@v1` (external action)
- Matrix strategy: validates each changed skill independently
- Fails the PR if validation fails

**`sync-skills.yml`** -- Runs on push to main when `skills/**` changes:

- Runs `sync-skills.js` Node script
- Auto-updates `marketplace.json` skills list and description
- Auto-updates README.md skills table (between `<!-- SKILLS:START -->` and `<!-- SKILLS:END -->` markers)
- Auto-commits changes with bot attribution

### Sync Script (`sync-skills.js`)

Node.js script that:
- Scans `skills/` for directories containing `SKILL.md`
- Parses YAML frontmatter from each
- Generates markdown table for README
- Updates `marketplace.json` with skill paths and count
- Reports added/removed skills

### Version Tracking

`VERSIONS.md` provides a version table for all skills with last-updated dates. The AGENTS.md instructs agents to check this file once per session and notify users of available updates.

### PR and Issue Templates

- **New skill PR template**: Checklist (name matches, naming rules, description quality, line count, no secrets, tested locally)
- **Skill update PR template**: For modifying existing skills
- **Documentation PR template**: For non-skill docs changes
- **Skill request issue template**: Structured form with skill name, description, triggers, examples, category, related skills

---

## What Makes the Best Skills Stand Out

After reading all 26 skills, here is what separates the excellent skills from the merely good ones:

### 1. The cold-email Skill -- Best Voice and Personality

This skill stands out because it has the strongest *voice*. Instead of being a dry reference, it reads like advice from an experienced mentor:

- "Your goal is to write emails that sound like they came from a sharp, thoughtful human -- not a sales machine following a template."
- "Every sentence must earn its place."
- "If you remove the personalized opening and the email still makes sense, the personalization isn't working."
- "Work with whatever the user gives you. If they have a strong signal and a clear value prop, that's enough to write. Don't block on missing inputs."

It also has the richest reference material (5 files) and the most opinionated quality check section.

### 2. The copy-editing Skill -- Best Framework (Seven Sweeps)

This skill provides the most structured, repeatable methodology of any skill in the repo. The "Seven Sweeps" framework gives the agent a precise, sequential editing process:

1. Clarity
2. Voice and Tone
3. So What
4. Prove It
5. Specificity
6. Heightened Emotion
7. Zero Risk

Each sweep has explicit instructions on what to check, common problems, a process, and a "loop back" step to verify previous sweeps were not compromised. This is the kind of structured thinking that makes an AI agent genuinely effective.

### 3. The marketing-psychology Skill -- Most Comprehensive Reference

At 455 lines, this is one of the longest skills and serves as an encyclopedia of 70+ mental models organized into categories:
- Foundational Thinking Models
- Understanding Buyers & Human Psychology
- Influencing Behavior & Persuasion
- Pricing Psychology
- Design & Delivery Models
- Growth & Scaling Models

Each model follows a consistent pattern: Name > 1-2 sentence explanation > **Marketing application** in bold.

### 4. The product-marketing-context Skill -- Best Shared State Pattern

This skill is architecturally brilliant. It creates a shared context file (`.claude/product-marketing-context.md`) that every other skill reads before asking questions. This eliminates the #1 pain point of working with AI on marketing tasks: having to re-explain your product, audience, and positioning every single time.

The skill also offers two workflow modes:
1. Auto-draft from codebase (reads README, landing pages, etc.)
2. Start from scratch (guided interview)

### 5. The launch-strategy Skill -- Best Strategic Framework

The ORB Framework (Owned, Rented, Borrowed channels) is a novel contribution that goes beyond typical marketing advice. It includes real case studies (Superhuman, Notion, TRMNL) and a five-phase launch approach that is genuinely useful.

### 6. The seo-audit Skill -- Best Technical Awareness

This skill demonstrates excellent awareness of the agent's own limitations. It includes a prominent warning:

```
### Warning: Schema Markup Detection Limitation

**`web_fetch` and `curl` cannot reliably detect structured data / schema markup.**

Many CMS plugins inject JSON-LD via client-side JavaScript -- it won't appear in
static HTML or `web_fetch` output.
```

This kind of self-aware instruction prevents false audit findings in production use.

### Common Qualities of the Best Skills

1. **Opinionated** -- They take clear positions ("Clarity over cleverness," "Every sentence must earn its place")
2. **Concrete examples** -- Not just principles, but specific before/after illustrations
3. **Anti-patterns** -- They explicitly list what NOT to do
4. **Practical output formats** -- They specify exactly what the agent should produce
5. **Rich references** -- Offloaded detail in `references/` for frameworks, templates, benchmarks
6. **Tool awareness** -- They know what the agent can and cannot do
7. **Cross-referencing** -- Clear pointers to related skills with scope boundaries
8. **Conversational tone** -- Direct, instructional, professional but approachable

---

## Full Examples of Excellent Skills

### Example 1: cold-email SKILL.md (complete)

This is the best skill for voice, personality, and actionable writing guidance.

```yaml
---
name: cold-email
description: Write B2B cold emails and follow-up sequences that get replies. Use when the user wants to write cold outreach emails, prospecting emails, cold email campaigns, sales development emails, or SDR emails. Covers subject lines, opening lines, body copy, CTAs, personalization, and multi-touch follow-up sequences.
---
```

Key sections and what makes them work:

**Opening**: Sets a specific persona -- "an expert cold email writer" who writes emails that "sound like they came from a sharp, thoughtful human -- not a sales machine."

**Writing Principles**: Five principles, each with a memorable name and a concrete test. Example: "Personalization must connect to the problem -- If you remove the personalized opening and the email still makes sense, the personalization isn't working."

**Voice & Tone**: Provides both positive examples ("A smart colleague who noticed something relevant") and negative examples ("A template with fields swapped in," "A LinkedIn DM from someone you've never met").

**Structure**: Shows multiple framework shapes but explicitly says "There's no single right structure. Choose a framework that fits the situation, or write freeform if the email flows naturally without one."

**Quality Check**: A gut-check list that includes "Would YOU reply to this if you received it?"

**What to Avoid**: Explicit anti-patterns including specific jargon to avoid ("synergy," "leverage," "circle back") and specific bad practices ("Asking for 30-minute calls in first touch").

**References**: 5 reference files covering benchmarks, personalization system, subject lines, follow-up sequences, and frameworks.

### Example 2: copy-editing SKILL.md (Seven Sweeps Framework)

The core of this skill is the Seven Sweeps framework. Here is how Sweep 3 ("So What") works -- representative of the quality throughout:

```markdown
### Sweep 3: So What

**Focus:** Does every claim answer "why should I care?"

**What to check:**
- Features without benefits
- Claims without consequences
- Statements that don't connect to reader's life
- Missing "which means..." bridges

**The So What test:**
For every statement, ask "Okay, so what?" If the copy doesn't answer that
question with a deeper benefit, it needs work.

[BAD] "Our platform uses AI-powered analytics"
*So what?*
[GOOD] "Our AI-powered analytics surface insights you'd miss manually -- so
you can make better decisions in half the time"

**Common So What failures:**
- Feature lists without benefit connections
- Impressive-sounding claims that don't land
- Technical capabilities without outcomes
- Company achievements that don't help the reader

**Process:**
1. Read each claim and literally ask "so what?"
2. Highlight claims missing the answer
3. Add the benefit bridge or deeper meaning
4. Ensure benefits connect to real reader desires

**After this sweep:** Return to Voice and Tone, then Clarity.
```

Each sweep follows this same structure: Focus, What to check, Examples, Process, Loop-back instruction.

### Example 3: product-marketing-context SKILL.md (Shared State Pattern)

The structural innovation here is the workflow:

1. Check if `.claude/product-marketing-context.md` exists
2. If yes: read it, summarize, ask which sections to update
3. If no: offer auto-draft from codebase OR start-from-scratch interview
4. Gather information section by section (12 sections)
5. Create the document using a specific template
6. Confirm and save

The 12 sections captured:

1. Product Overview (one-liner, what it does, category, type, business model)
2. Target Audience (company type, decision-makers, use case, JTBD)
3. Personas (B2B only -- user, champion, decision maker, etc.)
4. Problems & Pain Points (core challenge, why alternatives fail, cost, emotional tension)
5. Competitive Landscape (direct, secondary, indirect competitors)
6. Differentiation (key differentiators, how you do it differently)
7. Objections & Anti-Personas (top 3 objections, who is NOT a fit)
8. Switching Dynamics (JTBD Four Forces: push, pull, habit, anxiety)
9. Customer Language (verbatim quotes, words to use/avoid, glossary)
10. Brand Voice (tone, style, personality)
11. Proof Points (metrics, customers, testimonials, value themes)
12. Goals (business goal, conversion action, current metrics)

This template becomes the foundation that all 25 other skills reference.

---

## Key Takeaways for Building Our Own Skills

### Structure Takeaways

1. **Use YAML frontmatter** with `name` and `description` fields. The description must include trigger phrases and scope boundaries.

2. **Keep SKILL.md under 500 lines**. Move detailed reference material to `references/` directory.

3. **Follow the standard section order**:
   - Role assignment (one sentence)
   - Product context check
   - Initial assessment / information gathering
   - Core principles (3-5)
   - Main framework / methodology
   - Specific guidance by subtopic
   - Output format specification
   - Task-specific questions
   - Tool integrations (if applicable)
   - Related skills

4. **Create a shared context skill** (like product-marketing-context) that captures foundational information so users do not repeat themselves across skills.

### Content Takeaways

5. **Be opinionated**. The best skills take clear positions. "Clarity over cleverness" is better than "consider whether clarity or cleverness is more appropriate."

6. **Include concrete examples** for everything. Before/after pairs, specific formulas, real-world case studies. Abstract advice is nearly useless.

7. **List anti-patterns explicitly**. "What to avoid" sections prevent the most common mistakes.

8. **Specify output format precisely**. Tell the agent exactly what shape the response should take (sections, tables, code blocks, alternatives).

9. **Include a quality check / gut-check section**. A final checklist the agent should run before presenting work.

10. **Reference files are powerful**. They allow unlimited depth while keeping the core skill lean. Best reference files include: frameworks with examples, template libraries, benchmarks/data, and platform-specific guides.

### Technical Takeaways

11. **Validation is essential**. Have a script that checks frontmatter format, name matching, description length, and trigger phrases.

12. **Auto-sync tooling** (like sync-skills.js) keeps the README, marketplace.json, and other manifests in sync automatically.

13. **Version tracking** (VERSIONS.md) enables agents to check for updates without re-downloading everything.

14. **Tool integration guides** should be separate from skills. Skills reference tools, but tool docs live in their own directory structure.

15. **CLI tools** should be zero-dependency, single-file scripts with consistent patterns (JSON output, env var auth, dry-run support, resource-action command structure).

### Design Principles

16. **One skill per specific task domain**. CRO is split into 6 skills (page, signup, onboarding, form, popup, paywall) rather than one giant CRO skill.

17. **Cross-reference related skills** with clear scope boundaries. "For X, see Y" in both the description and the Related Skills section.

18. **Skills should be self-contained enough to work alone** but richer when combined with the shared context skill.

19. **Write for the agent, not the user**. Skills are instructions to the AI, not documentation for humans. Second person ("You are an expert..."), imperative mood, direct instructions.

20. **Test with real usage**. The PR template requires "Tested locally with AI agent" before merge.

### What to Replicate

- The product-marketing-context pattern (shared state across skills)
- The "check for context first" block at the top of every skill
- The Seven Sweeps style of structured, repeatable methodology
- The cold-email style of opinionated, voice-driven writing guidance
- The seo-audit style of technical self-awareness (knowing agent limitations)
- The references/ directory for deep content
- The validation script and CI pipeline
- The sync script for keeping manifests current
- The tools registry as a separate, comprehensive index

### What to Improve Upon

- Some skills are quite similar in structure (the 6 CRO skills overlap significantly). Consider whether some could be consolidated or share a base template.
- The `metadata.version` field is used inconsistently -- some skills have it, some do not.
- No skills include example conversations or dialogues showing how the skill should be used in practice.
- The tools layer is comprehensive but may be overkill for our use case. Consider what subset of integrations is relevant.
- No skill includes automated testing (e.g., "given this input, the output should contain X"). Consider adding test fixtures.

---

## Appendix: File Inventory

### All 26 Skills with Reference Files

| Skill | References | Reference Files |
|-------|:---------:|-----------------|
| ab-test-setup | 2 | sample-size-guide.md, test-templates.md |
| analytics-tracking | 3 | ga4-implementation.md, event-library.md, gtm-implementation.md |
| cold-email | 5 | personalization.md, frameworks.md, benchmarks.md, subject-lines.md, follow-up-sequences.md |
| competitor-alternatives | 2 | templates.md, content-architecture.md |
| content-strategy | 0 | -- |
| copy-editing | 1 | plain-english-alternatives.md |
| copywriting | 2 | copy-frameworks.md, natural-transitions.md |
| email-sequence | 3 | sequence-templates.md, copy-guidelines.md, email-types.md |
| form-cro | 0 | -- |
| free-tool-strategy | 1 | tool-types.md |
| launch-strategy | 0 | -- |
| marketing-ideas | 1 | ideas-by-category.md |
| marketing-psychology | 0 | -- |
| onboarding-cro | 1 | experiments.md |
| page-cro | 1 | experiments.md |
| paid-ads | 3 | platform-setup-checklists.md, audience-targeting.md, ad-copy-templates.md |
| paywall-upgrade-cro | 1 | experiments.md |
| popup-cro | 0 | -- |
| pricing-strategy | 2 | tier-structure.md, research-methods.md |
| product-marketing-context | 0 | -- |
| programmatic-seo | 1 | playbooks.md |
| referral-program | 2 | affiliate-programs.md, program-examples.md |
| schema-markup | 1 | schema-examples.md |
| seo-audit | 2 | aeo-geo-patterns.md, ai-writing-detection.md |
| signup-flow-cro | 0 | -- |
| social-content | 3 | reverse-engineering.md, platforms.md, post-templates.md |

### CLI Tools (51 total)

All in `tools/clis/`: activecampaign.js, adobe-analytics.js, ahrefs.js, amplitude.js, apollo.js, beehiiv.js, brevo.js, buffer.js, calendly.js, clearbit.js, customer-io.js, dataforseo.js, demio.js, dub.js, g2.js, ga4.js, google-ads.js, google-search-console.js, hotjar.js, hunter.js, instantly.js, intercom.js, keywords-everywhere.js, kit.js, klaviyo.js, lemlist.js, linkedin-ads.js, livestorm.js, mailchimp.js, mention-me.js, meta-ads.js, mixpanel.js, onesignal.js, optimizely.js, paddle.js, partnerstack.js, plausible.js, postmark.js, resend.js, rewardful.js, savvycal.js, segment.js, semrush.js, sendgrid.js, snov.js, tiktok-ads.js, tolt.js, trustpilot.js, typeform.js, wistia.js, zapier.js
