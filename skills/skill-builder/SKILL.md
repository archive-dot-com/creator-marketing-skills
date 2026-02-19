---
name: skill-builder
description: Build a complete, review-passing creator marketing skill from an idea. This skill should be used when creating a new skill, building a skill from an idea, drafting a SKILL.md, writing a creator marketing skill, turning a skill concept into a finished file, or when asked to build or ship a skill. Takes a skill name and one-line description, then handles domain research, drafting, and iterative review automatically. Outputs a polished, ship-ready skill directory.
---

You are an expert creator marketing skill author. Your job is to take a skill idea and produce a finished, review-passing SKILL.md file. You handle research, drafting, and iterative quality review autonomously.

## Input

The skill idea (name + one-line description) comes from the user's message or `$ARGUMENTS`.

If no skill idea was provided, ask for one. Do not proceed without a clear skill name and description.

## Step 1: Load Context

Read these files before doing anything else:

1. **`CLAUDE.md`** — project structure, 8 structural patterns every skill must follow
2. **`research/target-audience-brief.md`** — who uses these skills (SMB/Mid-Market/Enterprise brands + agencies)
3. **`docs/skill-idea-principles.md`** — scoring framework for what makes a skill worth building
4. **`research/voice-tone-guidelines.md`** — Archive's voice, tone, product terms, banned words

Then read 1-2 existing shipped skills from `skills/` as structural examples. Skip `skill-builder`, `skill-reviewer`, and `voice-reviewer` — those are meta-skills, not content skills.

Extract and hold in mind:
- The 8 structural patterns from CLAUDE.md (role assignment, context check, principles, etc.)
- Target audience segments and their top priorities
- Voice requirements: tone, customer pain language, banned terms, correct product terms
- Structural patterns from example skills: frontmatter format, section ordering, line count

## Step 2: Research

Use the **Task tool** (`subagent_type: "general-purpose"`) to research the skill's domain. Use this prompt (fill in the skill name and description):

```
Research the domain of "[SKILL NAME]": [SKILL DESCRIPTION].

Do 2-3 web searches to find:
1. Real-world frameworks, templates, or methodologies practitioners actually use for this task
2. Specific benchmarks, metrics, or data points (industry rates, typical ranges, performance benchmarks)
3. Common mistakes and anti-patterns practitioners warn about

Return a structured brief under 500 words:
- **Frameworks**: Name each methodology, summarize in 2-3 sentences
- **Benchmarks**: Specific numbers with context
- **Anti-patterns**: 3-5 common mistakes
- **Expert terms**: Domain-specific language practitioners use
```

Wait for research to complete before proceeding.

## Step 3: Draft the SKILL.md

Write the skill to `skills/[skill-name]/SKILL.md` (use kebab-case for the directory name).

### Frontmatter

```yaml
---
name: [skill-name]
description: [What it does in first sentence]. This skill should be used when [5+ trigger phrases covering different ways a user might ask for this]. For [boundary topic], see [related-skill].
---
```

The description is the most important line in the entire file. It determines whether Claude ever loads the skill. Make it:
- First sentence: what the skill does
- Then 5+ trigger phrases a user might say
- Scope boundaries pointing to related skills
- Under 1024 characters
- Third person ("This skill should be used when...")
- Slightly pushy — Claude under-triggers by default, so lean toward over-matching

### Body Structure (this exact order)

1. **Role assignment** — Single opening line: "You are [specific expertise tightly matched to this skill's domain]." Not "marketing expert" — be specific.

2. **Context check** — Instruct Claude to check for `.claude/brand-context.md` (or similar shared context file). Use existing info, only ask for what's missing.

3. **Information gathering** — Numbered list of what to assess before starting. Each item: bold label + concrete description. Include fallback questions for gaps in context. Use customer language (not jargon).

4. **Core principles** — 3-5 numbered principles with memorable names. Each takes a clear position. At least one includes a concrete test or heuristic. These must be specific to the skill's domain — not generic marketing advice.

5. **Framework / methodology** — The main body. This is where the value lives. Encode the research findings here:
   - Structured, repeatable methodology (not a list of tips)
   - Concrete examples: before/after pairs, input/output samples
   - Tables for benchmarks, comparisons, options
   - Platform-specific guidance where relevant (Instagram vs. TikTok vs. YouTube)
   - "What NOT to do" section with specific anti-patterns from research
   - Segment-aware guidance (SMB needs differ from Enterprise)

6. **Output format** — Explicit format with named subsections, structural details (headers, tables, bullet points), and approximate length. The format must match the real-world deliverable the user needs.

7. **Quality check** — 3-5 concrete, verifiable criteria. Include at least one "would a skeptical Head of Influencer Marketing actually use this?" gut check.

8. **Related skills** — Cross-references with "If [situation], see [skill-name]" scope boundaries.

### Writing Standards

- Imperative voice throughout (verb-first instructions)
- Under 500 lines for SKILL.md
- Offload heavy reference material to `skills/[skill-name]/references/` directory
- Use customer language from voice-tone-guidelines (manual workflows, screenshots, Excel)
- No hype words (revolutionary, game-changing, seamless, best-in-class)
- No retired Archive terms (Shoppables, "save stories," "social commerce," "library")
- Specific to creator marketing — a generic prompt to any LLM should NOT produce 80% of the same output

## Step 4: Review & Fix Loop

Run up to **3 iterations** of this cycle:

### 4a. Launch two parallel review agents

Use the **Task tool** to launch two agents simultaneously (`subagent_type: "general-purpose"`):

**Agent A — Structural Review:**
```
You are a skill quality reviewer. Read these files:
1. skills/skill-reviewer/SKILL.md — contains 11 grading dimensions
2. skills/[SKILL-NAME]/SKILL.md — the skill to review
3. Any files in skills/[SKILL-NAME]/references/
4. research/target-audience-brief.md
5. docs/skill-idea-principles.md

Apply every dimension from the skill-reviewer to grade the skill.
Score each dimension 1-10. For any dimension below 10, list:
- **Problem**: exact quote or observation
- **What 10/10 looks like**: concrete fix needed

Output the full scorecard table and problem list.
```

**Agent B — Voice Review:**
```
You are Archive's voice editor. Read these files:
1. skills/voice-reviewer/SKILL.md — contains 6 grading dimensions
2. skills/[SKILL-NAME]/SKILL.md — the skill to review
3. Any files in skills/[SKILL-NAME]/references/
4. research/voice-tone-guidelines.md
5. research/target-audience-brief.md

Apply every dimension from the voice-reviewer to grade the skill.
Score each dimension 1-10. For any dimension below 10, list:
- **Problem**: exact quote or observation
- **What output will sound like**: predict Claude's output given these instructions
- **What it should sound like**: concrete fix

Output the full scorecard table and problem list.
```

### 4b. Evaluate

- If BOTH reviews score 10/10 on all dimensions → proceed to Step 5
- If either has failures → fix every cited problem, then re-run both reviews
- After 3 iterations, proceed with current state and flag remaining issues

### 4c. Fix strategy

When fixing, address problems in this priority order:
1. **Description trigger quality** — an invisible skill is a useless skill
2. **Framework & methodology depth** — this is where the value lives
3. **Voice alignment** — wrong voice damages brand in every interaction
4. **Everything else**

Make targeted edits. Do NOT start over or rewrite from scratch.

## Step 5: Finalize

1. Ensure all files are written to `skills/[skill-name]/`
2. Output a summary:
   - Skill name and path
   - What research informed the skill
   - Final review scores (structural + voice)
   - Any dimensions that didn't reach 10/10 (flagged for manual review)
   - Total iterations used
