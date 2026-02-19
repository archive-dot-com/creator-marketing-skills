# Creator Marketing Skills

## High-Level Objective

Create helpful, extremely helpful, easy-to-use, valuable Claude Code skills that people can use with any of their agents to automate different parts of influencer marketing.

## Approach

- Follow the Corey Haines `marketingskills` repo pattern: pure Claude Code skills (SKILL.md + optional references/)
- Skills are text-in, text-out — no browser, no Chrome, no Cowork dependencies required
- Each skill follows the Agent Skills spec: YAML frontmatter (name + description), markdown instructions, under 500 lines
- Skills should be opinionated, concrete, and immediately useful to creator marketers

## Target Audience

Consumer brands (beauty, fashion, wellness, food, lifestyle, jewelry) and influencer/social/PR agencies running creator programs. See `research/target-audience-brief.md` for the full breakdown by segment (SMB, Mid-Market, Enterprise).

## Key References (always consult)

- `research/target-audience-brief.md` — Who these skills serve: brands by segment (SMB/Mid-Market/Enterprise) and agencies
- `research/voice-tone-guidelines.md` — Archive's writing & messaging guidelines (voice, tone, product terms, banned words)
- `docs/skill-idea-principles.md` — Scoring framework for evaluating which skills to build (ICP reach, feasibility, etc.)

## Archive (one-off research, consult when needed)

- `research/archive/marketingskills-repo-analysis.md` — Deep analysis of Corey Haines' 26 marketing skills
- `research/archive/installed-skill-creators-analysis.md` — How to build skills (templates, validation, best practices)
- `research/archive/claude-code-official-docs.md` — Official Claude Code skills documentation
- `research/archive/skills-draft.md` — Initial 15 skill concepts (Tier 1/2/3)
- `research/archive/The Many Jobs of Influencer Marketers*.md` — Influencer marketing roles, outcomes, and jobs-to-be-done
- `research/archive/icp-segment-definitions.md` — Archive's ICP segments and feature priorities
- `research/archive/contact-fit-principles.md` — Who the target users are by role/title
- `research/archive/company-fit-principles.md` — What companies fit the ICP

## Skill Structure (follow this)

```
skills/skill-name/
├── SKILL.md              # Required: main instructions (<500 lines)
└── references/           # Optional: detailed reference material
    └── *.md
```

## Patterns to Follow (from Corey Haines analysis)

1. Role assignment opening ("You are a...")
2. Product marketing context check (shared state pattern)
3. Initial assessment / information gathering section
4. Core principles (3-5, opinionated)
5. Main framework / methodology
6. Output format specification
7. Task-specific questions
8. Related skills cross-references
