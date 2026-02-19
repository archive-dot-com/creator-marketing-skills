# Creator Marketing Skills

## High-Level Objective

Create helpful, extremely helpful, easy-to-use, valuable Claude Code skills that people can use with any of their agents to automate different parts of influencer marketing.

## Approach

- Follow the Corey Haines `marketingskills` repo pattern: pure Claude Code skills (SKILL.md + optional references/)
- Skills are text-in, text-out — no browser, no Chrome, no Cowork dependencies required
- Each skill follows the Agent Skills spec: YAML frontmatter (name + description), markdown instructions, under 500 lines
- Skills should be opinionated, concrete, and immediately useful to creator marketers

## Target Audience

Consumer brands (beauty, fashion, wellness, food, lifestyle, jewelry) and influencer/social/PR agencies running creator programs. See `references/target-audience-brief.md` for the full breakdown by segment (SMB, Mid-Market, Enterprise).

## Key References (always consult)

- `references/target-audience-brief.md` — Who these skills serve: brands by segment (SMB/Mid-Market/Enterprise) and agencies
- `references/voice-tone-guidelines.md` — Archive's writing & messaging guidelines (voice, tone, product terms, banned words)
- `docs/skill-idea-principles.md` — Scoring framework for evaluating which skills to build (ICP reach, feasibility, etc.)
- `docs/skills-v1-manifest.md` — The 30 skills we're building (v1 manifest)

## WIP Research (gitignored, local only)

The `research/` and `scratch/` directories contain scoring, ideation, and analysis files used during skill selection. They are gitignored but available locally for reference:

- `research/archive/` — One-off research (Corey Haines analysis, Claude docs, ICP definitions, etc.)
- `research/scored/` — All 280 skills scored on 7 dimensions with weighted totals
- `research/100-skill-ideas.md` — 100 net-new skill ideas across 5 lenses
- `research/skills-by-job.md` — 180 skills mapped to 18 influencer marketing jobs

## Skill Structure (follow this)

```
skills/skill-name/
├── SKILL.md              # Required: main instructions (<500 lines)
└── references/           # Optional: detailed reference material
    └── *.md
```

## Patterns to Follow (from Corey Haines analysis)

1. Role assignment opening ("You are a...")
2. Brand context check — every skill reads `.claude/brand-context.md` first (created by `/brand-context`)
3. Initial assessment / information gathering section
4. Core principles (3-5, opinionated)
5. Main framework / methodology
6. Output format specification
7. Task-specific questions
8. Related skills cross-references

## Quality Bar

Every skill must pass both review skills before shipping:

- `internal/skill-reviewer/` — Structural quality grader (11 dimensions, must score 110/110)
- `internal/voice-reviewer/` — Brand voice grader (6 dimensions)

## Repo Structure

```
skills/                  # User-facing skills (brand-context + the 30 v1 skills)
internal/                # Internal tooling (not user-facing)
  skill-reviewer/        # Grades skill structure
  voice-reviewer/        # Grades brand voice
  skill-builder/         # Skill authoring helper
docs/                    # Manifests, principles, planning docs
references/              # Permanent reference material for skills
```
