# Installed Skill-Creator Tools: Comprehensive Analysis

## Overview

There are multiple skill-creation tools installed in the Claude Code environment, spread across two plugin marketplaces. This document captures everything they teach about building effective skills.

---

## 1. Tool Inventory

### From `every-marketplace` (compound-engineering plugin)

| Tool | Type | Location |
|------|------|----------|
| `create-agent-skills` | Skill | `~/.claude/plugins/marketplaces/every-marketplace/plugins/compound-engineering/skills/create-agent-skills/` |
| `skill-creator` | Skill | `~/.claude/plugins/marketplaces/every-marketplace/plugins/compound-engineering/skills/skill-creator/` |
| `create-agent-skill` | Command | `~/.claude/plugins/marketplaces/every-marketplace/plugins/compound-engineering/commands/create-agent-skill.md` |
| `heal-skill` | Command | `~/.claude/plugins/marketplaces/every-marketplace/plugins/compound-engineering/commands/heal-skill.md` |

### From `claude-plugins-official` marketplace

| Tool | Type | Location |
|------|------|----------|
| `skill-creator` (official) | Skill | `~/.claude/plugins/marketplaces/claude-plugins-official/plugins/skill-creator/skills/skill-creator/` |
| `skill-development` | Skill | `~/.claude/plugins/marketplaces/claude-plugins-official/plugins/plugin-dev/skills/skill-development/` |

---

## 2. What Each Tool Does

### A. `create-agent-skills` (compound-engineering)

**Purpose:** Expert guidance for creating, writing, and refining Claude Code Skills. The most comprehensive structural reference.

**Key features:**
- Provides a detailed SKILL.md authoring guide with YAML frontmatter spec
- Has a complete file tree: references/ (13 files), templates/ (2 files), workflows/ (10 files)
- Enforces XML-based body structure (this is specific to compound-engineering's philosophy)
- Includes a router-pattern template for complex multi-workflow skills
- Provides audit, verify, and domain-expertise creation workflows
- Favors `<objective>`, `<quick_start>`, `<success_criteria>` XML tags as required structure

**Structure:**
```
create-agent-skills/
  SKILL.md
  references/
    api-security.md
    be-clear-and-direct.md
    best-practices.md
    common-patterns.md
    core-principles.md
    executable-code.md
    iteration-and-testing.md
    official-spec.md
    recommended-structure.md
    skill-structure.md
    using-scripts.md
    using-templates.md
    workflows-and-validation.md
  templates/
    router-skill.md
    simple-skill.md
  workflows/
    add-reference.md
    add-script.md
    add-template.md
    add-workflow.md
    audit-skill.md
    create-domain-expertise-skill.md
    create-new-skill.md
    get-guidance.md
    upgrade-to-router.md
    verify-skill.md
```

### B. `skill-creator` (compound-engineering)

**Purpose:** Practical guide for creating skills end-to-end, including initialization scripts and packaging.

**Key features:**
- Includes `scripts/init_skill.py` -- generates a template skill directory
- Includes `scripts/package_skill.py` -- validates and zips a skill for distribution
- Includes `scripts/quick_validate.py` -- basic frontmatter validation
- Follows a 6-step creation process: Understand -> Plan -> Initialize -> Edit -> Package -> Iterate
- Focuses on the **audience**: "the skill is being created for another instance of Claude to use"
- Uses markdown headings (not XML) in its own SKILL.md body

### C. `create-agent-skill` (command)

**Purpose:** A simple slash command that delegates to the `create-agent-skills` skill.

```yaml
---
name: create-agent-skill
description: Create or edit Claude Code skills with expert guidance on structure and best practices
allowed-tools: Skill(create-agent-skills)
argument-hint: [skill description or requirements]
---

Invoke the create-agent-skills skill for: $ARGUMENTS
```

### D. `heal-skill` (command)

**Purpose:** Fix incorrect SKILL.md files when a skill has wrong instructions or outdated API references.

**Workflow:**
1. Detect which skill is running from conversation context
2. Reflect on what went wrong and how the fix was discovered
3. Present proposed changes with before/after diffs
4. Get user approval before making edits
5. Apply changes and optionally commit

**Interesting pattern:** Uses XML tags (`<objective>`, `<process>`, `<step_1>`, etc.) for its own structure while being a command (not a skill).

### E. `skill-creator` (claude-plugins-official)

**Purpose:** The most comprehensive tool -- creates new skills AND iteratively improves them with automated evaluation. Includes eval, benchmark, and improve modes.

**Key features:**
- Full eval framework with executor, grader, comparator, and analyzer agents
- Blind A/B comparison protocol for skill improvement
- Workspace structure for versioning skill iterations
- Statistical benchmarking with variance analysis (3 runs per configuration)
- Task tracking for multi-step workflows
- Explicit advice on writing style: explain **why** rather than using heavy-handed MUSTs
- Encourages "pushy" descriptions to combat Claude's tendency to under-trigger skills
- Has init_skill.py and package_skill.py scripts

**Unique insight on skill descriptions:**
> "Currently Claude has a tendency to 'undertrigger' skills -- to not use them when they'd be useful. To combat this, please make the skill descriptions a little bit 'pushy'."

### F. `skill-development` (plugin-dev)

**Purpose:** Guidance for creating skills specifically within Claude Code plugins.

**Key features:**
- Plugin-specific considerations (skill lives in plugin's `skills/` directory)
- Auto-discovery mechanism explained
- No packaging needed (distributed as part of the plugin)
- Targets 1,500-2,000 word SKILL.md body (stricter than the 500-line/5k-word limits elsewhere)
- Emphasizes specific trigger phrases in descriptions
- References real plugin-dev skills as examples

---

## 3. Templates and Patterns

### Simple Skill Template (from create-agent-skills)

```markdown
---
name: {{SKILL_NAME}}
description: {{What it does}} Use when {{trigger conditions}}.
---

<objective>
{{Clear statement of what this skill accomplishes}}
</objective>

<quick_start>
{{Immediate actionable guidance - what Claude should do first}}
</quick_start>

<process>
## Step 1: {{First action}}
{{Instructions for step 1}}

## Step 2: {{Second action}}
{{Instructions for step 2}}

## Step 3: {{Third action}}
{{Instructions for step 3}}
</process>

<success_criteria>
{{Skill name}} is complete when:
- [ ] {{First success criterion}}
- [ ] {{Second success criterion}}
- [ ] {{Third success criterion}}
</success_criteria>
```

### Router Skill Template (for complex multi-workflow skills)

```markdown
---
name: {{SKILL_NAME}}
description: {{What it does}} Use when {{trigger conditions}}.
---

<essential_principles>
## {{Core Concept}}
{{Principles that ALWAYS apply, regardless of which workflow runs}}
</essential_principles>

<intake>
**Ask the user:**
What would you like to do?
1. {{First option}}
2. {{Second option}}
3. {{Third option}}
**Wait for response before proceeding.**
</intake>

<routing>
| Response | Workflow |
|----------|----------|
| 1, "{{keywords}}" | `workflows/{{first-workflow}}.md` |
| 2, "{{keywords}}" | `workflows/{{second-workflow}}.md` |
| 3, "{{keywords}}" | `workflows/{{third-workflow}}.md` |
**After reading the workflow, follow it exactly.**
</routing>

<reference_index>
## Domain Knowledge
All in `references/`:
- {{reference-1.md}} - {{purpose}}
- {{reference-2.md}} - {{purpose}}
</reference_index>

<workflows_index>
## Workflows
All in `workflows/`:
| Workflow | Purpose |
|----------|---------|
| {{first-workflow}}.md | {{purpose}} |
| {{second-workflow}}.md | {{purpose}} |
</workflows_index>

<success_criteria>
A well-executed {{skill name}}:
- {{First criterion}}
- {{Second criterion}}
</success_criteria>
```

### Workflow File Template

```markdown
# Workflow: {{Name}}

<required_reading>
**Read these reference files NOW:**
1. references/relevant-file.md
2. references/another-file.md
</required_reading>

<process>
## Step 1: {{Name}}
{{What to do}}

## Step 2: {{Name}}
{{What to do}}
</process>

<success_criteria>
This workflow is complete when:
- [ ] Criterion 1
- [ ] Criterion 2
</success_criteria>
```

### Domain Expertise Skill Pattern

For comprehensive domain skills that cover an entire lifecycle (build -> debug -> test -> optimize -> ship):

```
expertise/domain-name/
  SKILL.md              # Router with essential principles + intake
  workflows/
    build-new-thing.md
    add-feature.md
    debug-thing.md
    write-tests.md
    optimize-performance.md
    ship-thing.md
  references/
    architecture.md
    libraries.md
    patterns.md
    testing-debugging.md
    performance.md
    deployment.md
    anti-patterns.md
```

### Init Script Template (from init_skill.py)

The init_skill.py generates a SKILL.md with:
- Frontmatter with name and TODO description placeholder
- Overview section
- "Structuring This Skill" guidance (deleted after choosing structure)
- Four structural patterns suggested: Workflow-Based, Task-Based, Reference/Guidelines, Capabilities-Based
- Resource directory examples (scripts/, references/, assets/)

---

## 4. Validation Rules and Quality Checks

### Automated Validation (quick_validate.py)

The script checks:
1. SKILL.md exists in the directory
2. File starts with `---` (YAML frontmatter)
3. Frontmatter has valid format (opening and closing `---`)
4. `name:` field present
5. `description:` field present
6. Name is hyphen-case: `^[a-z0-9-]+$`
7. Name doesn't start/end with hyphen or contain consecutive hyphens
8. Description doesn't contain angle brackets (`<` or `>`)

### Manual Audit Checklist (from audit-skill workflow)

**YAML Frontmatter:**
- [ ] Has `name:` field (lowercase-with-hyphens)
- [ ] Name matches directory name
- [ ] Has `description:` field
- [ ] Description says what it does AND when to use it
- [ ] Description is third person

**Structure:**
- [ ] SKILL.md under 500 lines
- [ ] Pure XML structure (no markdown headings in body) -- NOTE: this is compound-engineering's preference, not universal
- [ ] All XML tags properly closed
- [ ] Has required tags: objective OR essential_principles
- [ ] Has success_criteria

**Router Pattern (if complex):**
- [ ] Essential principles inline in SKILL.md (not in separate file)
- [ ] Has intake question
- [ ] Has routing table
- [ ] All referenced workflow files exist
- [ ] All referenced reference files exist

**Workflows (if present):**
- [ ] Each has required_reading section
- [ ] Each has process section
- [ ] Each has success_criteria section
- [ ] Required reading references exist

**Content Quality:**
- [ ] Principles are actionable (not vague platitudes)
- [ ] Steps are specific (not "do the thing")
- [ ] Success criteria are verifiable
- [ ] No redundant content across files

### Verification Workflow (content freshness)

The verify-skill workflow checks if content is still accurate by:
- Categorizing the skill by dependency type (API/Service, CLI Tools, Framework, Integration, Pure Process)
- Extracting verifiable claims (endpoints, flags, patterns, file paths)
- Verifying via Context7, WebSearch, or running commands
- Generating a freshness report with status per claim
- Recommending re-verification schedules (API: 1-2 months, Framework: 3-6 months)

---

## 5. Best Practices Encoded Across All Tools

### Frontmatter / Description

1. **Always third person** in description. "This skill should be used when..." not "Use this skill when..."
2. **Include trigger keywords** -- both what it does AND when to use it
3. **Be pushy** with descriptions -- Claude tends to under-trigger. Example: "Make sure to use this skill whenever the user mentions dashboards, data visualization, internal metrics, or wants to display any kind of company data, even if they don't explicitly ask for a 'dashboard.'"
4. **Name constraints**: lowercase, hyphens, numbers only. Max 64 chars. Must match directory name.
5. **No reserved words**: anthropic-*, claude-*
6. **Naming conventions vary by source**:
   - Official spec + best-practices.md: gerund form (processing-pdfs, analyzing-spreadsheets)
   - skill-structure.md: verb-noun (create-agent-skills, manage-facebook-ads, setup-stripe-payments)
   - Both are acceptable

### Content / Writing Style

1. **Imperative/infinitive form** -- "To accomplish X, do Y" not "You should do X"
2. **Concise is key** -- context window is shared. Challenge each paragraph: "Does this justify its token cost?"
3. **Assume Claude is smart** -- only add context Claude doesn't already have
4. **Explain the why** -- not heavy-handed MUSTs. Claude has good theory of mind.
5. **Match specificity to fragility**: high freedom for creative tasks, low freedom for fragile operations
6. **Include concrete examples** with input/output pairs
7. **No time-sensitive information** -- use "old patterns" section with `<details>` instead

### Progressive Disclosure

1. **Three loading levels:**
   - Metadata (name + description) -- always in context (~100 words)
   - SKILL.md body -- when skill triggers (<500 lines / <5k words)
   - Bundled resources -- as needed (unlimited)
2. **Keep SKILL.md lean**: 500 lines max, ideally 1,500-2,000 words for plugin skills
3. **References one level deep** -- no SKILL.md -> advanced.md -> details.md chains
4. **Add table of contents** to reference files over 100 lines
5. **Organize by domain** not by document type -- e.g., references/finance.md, references/sales.md
6. **Scripts execute without loading** into context window (token efficient)

### File Organization

```
skill-name/
  SKILL.md              # Required. Entry point.
  references/           # Documentation loaded as needed
  scripts/              # Executable code (token efficient)
  assets/               # Files used in output (templates, images, fonts)
  workflows/            # Step-by-step procedures (for complex skills)
  templates/            # Output structure templates (for consistent output)
```

**When to use each:**
- `scripts/` -- same code rewritten repeatedly, deterministic reliability needed
- `references/` -- documentation Claude should reference while working; keeps SKILL.md lean
- `assets/` -- files not loaded into context, used in final output (logos, templates, boilerplate)
- `workflows/` -- complex skill with multiple distinct user intents (router pattern)
- `templates/` -- skill produces consistent output structures

### Anti-Patterns to Avoid

1. **XML tags in body** (according to official spec) vs. **Markdown headings in body** (according to compound-engineering) -- these two sources DISAGREE. The official Anthropic spec uses markdown headings; compound-engineering prefers XML tags.
2. **Vague descriptions** -- "Helps with documents" is useless
3. **Deep reference nesting** -- keep references one level from SKILL.md
4. **Too many options without defaults** -- provide a default with escape hatch
5. **Windows-style paths** -- always use forward slashes
6. **Monolithic skills** -- single file over 500 lines
7. **Mixed concerns** -- procedures and knowledge in same file
8. **Skippable principles** -- essential principles should be inline in SKILL.md
9. **Vague steps** -- "Handle the error appropriately"
10. **Untestable criteria** -- "User is satisfied"
11. **Redundant content** -- same info in multiple places
12. **Missing resource references** -- Claude won't know references/ exists if SKILL.md doesn't mention them

---

## 6. Key Disagreements Between Sources

### XML vs. Markdown in Skill Body

**compound-engineering's create-agent-skills** strongly advocates for pure XML tags:
> "Remove ALL markdown headings (#, ##, ###) from skill body content. Replace with semantic XML tags."

They argue XML provides:
- Consistent parsing across skills
- Unambiguous section boundaries
- Better token efficiency (~15 tokens vs ~20 for markdown)
- Better Claude performance

**Official Anthropic spec** (from code.claude.com) uses standard markdown headings:
```markdown
# Your Skill Name
## Instructions
## Examples
```

**The official skill-creator** (claude-plugins-official) also uses markdown headings extensively.

**Practical implication for us:** Markdown headings work fine and are the official Anthropic way. XML tags are a compound-engineering-specific convention that may provide marginal benefits but adds complexity.

### SKILL.md Length Targets

- Official spec: under 500 lines
- compound-engineering: under 500 lines
- plugin-dev skill-development: 1,500-2,000 words (stricter, more specific)
- Official skill-creator: <500 lines ideal, but "feel free to go longer if needed"

### Naming Convention

- Official best-practices: gerund form (processing-pdfs)
- compound-engineering: verb-noun (create-agent-skills, manage-facebook-ads)
- Both are acceptable per the official spec

---

## 7. Key Takeaways for Building Our Own Skills

### Most Important Things

1. **The description is everything for triggering.** Spend real time on it. Include specific user phrases, scenarios, and be slightly "pushy." Claude under-triggers skills by default.

2. **Progressive disclosure is the core design pattern.** SKILL.md is a lean entry point. Heavy content goes in references/. Scripts execute without loading. This is universal across all sources.

3. **Think about what Claude doesn't know.** Skills provide knowledge Claude can't have -- company-specific schemas, current API endpoints, domain-specific workflows, bundled scripts. Don't waste tokens on things Claude already knows.

4. **Concrete examples beat abstract instructions.** Input/output pairs, code samples, decision trees. Every source emphasizes this.

5. **Test with real usage, not test scenarios.** Observe where Claude struggles. The official skill-creator even has a full eval framework for this.

6. **Explain why, not just what.** The official skill-creator explicitly says: "Try hard to explain the why behind everything you're asking the model to do. Today's LLMs are smart."

### Structural Decisions

- **Simple skill (single task, <200 lines):** Single SKILL.md, no subdirectories
- **Standard skill (moderate complexity):** SKILL.md + references/ + examples/
- **Complex skill (multiple workflows):** Router pattern with intake -> routing -> workflows/ + references/
- **Domain expertise skill (full lifecycle):** Router + comprehensive workflows (build/debug/test/optimize/ship) + exhaustive references

### For Our Creator Marketing Skills

Based on all research, our skills should:

1. **Have pushy, keyword-rich descriptions** that list specific trigger phrases
2. **Use markdown headings** (official Anthropic convention, simpler)
3. **Keep SKILL.md under 500 lines** with detailed content in references/
4. **Use imperative writing style** -- verb-first instructions
5. **Include concrete examples** with realistic input/output
6. **Reference all supporting files** explicitly from SKILL.md so Claude knows they exist
7. **Provide scripts** for any repetitive or deterministic operations
8. **Include success criteria** so Claude knows when it's done
9. **Organize references by domain** -- e.g., by platform (youtube.md, tiktok.md, instagram.md) rather than by type

---

## 8. Full Content of Key SKILL.md Files

### compound-engineering/skill-creator/SKILL.md

```markdown
---
name: skill-creator
description: Guide for creating effective skills. This skill should be used when users want to create a new skill (or update an existing skill) that extends Claude's capabilities with specialized knowledge, workflows, or tool integrations.
license: Complete terms in LICENSE.txt
---

# Skill Creator

This skill provides guidance for creating effective skills.

## About Skills

Skills are modular, self-contained packages that extend Claude's capabilities by providing
specialized knowledge, workflows, and tools. Think of them as "onboarding guides" for specific
domains or tasks--they transform Claude from a general-purpose agent into a specialized agent
equipped with procedural knowledge that no model can fully possess.

### What Skills Provide

1. Specialized workflows - Multi-step procedures for specific domains
2. Tool integrations - Instructions for working with specific file formats or APIs
3. Domain expertise - Company-specific knowledge, schemas, business logic
4. Bundled resources - Scripts, references, and assets for complex and repetitive tasks

### Anatomy of a Skill

Every skill consists of a required SKILL.md file and optional bundled resources:

skill-name/
  SKILL.md (required)
    YAML frontmatter metadata (required)
      name: (required)
      description: (required)
    Markdown instructions (required)
  Bundled Resources (optional)
    scripts/          - Executable code (Python/Bash/etc.)
    references/       - Documentation intended to be loaded into context as needed
    assets/           - Files used in output (templates, icons, fonts, etc.)

### Progressive Disclosure Design Principle

Skills use a three-level loading system to manage context efficiently:

1. Metadata (name + description) - Always in context (~100 words)
2. SKILL.md body - When skill triggers (<5k words)
3. Bundled resources - As needed by Claude (Unlimited*)

*Unlimited because scripts can be executed without reading into context window.

## Skill Creation Process

### Step 1: Understanding the Skill with Concrete Examples
### Step 2: Planning the Reusable Skill Contents
### Step 3: Initializing the Skill (init_skill.py)
### Step 4: Edit the Skill
### Step 5: Packaging a Skill (package_skill.py)
### Step 6: Iterate
```

### compound-engineering/create-agent-skills/SKILL.md

(See full content in Section 2A above -- 300 lines covering core principles, skill structure, step-by-step creation process, auditing rubric, common patterns, and anti-patterns.)

### claude-plugins-official/skill-creator/SKILL.md

(See full content in Section 2E above -- 763 lines covering the full eval framework including building blocks, mode workflows, task tracking, architecture, creating skills, improving skills, eval mode, benchmark mode, workspace structure, and coordinator responsibilities.)

---

## 9. The Validation Script (quick_validate.py)

```python
#!/usr/bin/env python3
"""Quick validation script for skills - minimal version"""

import sys, os, re
from pathlib import Path

def validate_skill(skill_path):
    """Basic validation of a skill"""
    skill_path = Path(skill_path)

    # Check SKILL.md exists
    skill_md = skill_path / 'SKILL.md'
    if not skill_md.exists():
        return False, "SKILL.md not found"

    # Read and validate frontmatter
    content = skill_md.read_text()
    if not content.startswith('---'):
        return False, "No YAML frontmatter found"

    # Extract frontmatter
    match = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not match:
        return False, "Invalid frontmatter format"

    frontmatter = match.group(1)

    # Check required fields
    if 'name:' not in frontmatter:
        return False, "Missing 'name' in frontmatter"
    if 'description:' not in frontmatter:
        return False, "Missing 'description' in frontmatter"

    # Extract name for validation
    name_match = re.search(r'name:\s*(.+)', frontmatter)
    if name_match:
        name = name_match.group(1).strip()
        if not re.match(r'^[a-z0-9-]+$', name):
            return False, f"Name should be hyphen-case"
        if name.startswith('-') or name.endswith('-') or '--' in name:
            return False, f"Name cannot start/end with hyphen or contain consecutive hyphens"

    # Extract and validate description
    desc_match = re.search(r'description:\s*(.+)', frontmatter)
    if desc_match:
        description = desc_match.group(1).strip()
        if '<' in description or '>' in description:
            return False, "Description cannot contain angle brackets"

    return True, "Skill is valid!"
```

---

## 10. The Eval Framework (official skill-creator)

The official skill-creator has a sophisticated improvement loop:

**Building Blocks:**
- **Eval Run:** Execute skill on prompt, produce transcript + outputs + metrics
- **Grade Expectations:** Pass/fail per assertion with evidence
- **Blind Compare:** A/B test two outputs without knowing which skill produced them
- **Post-hoc Analysis:** Analyze WHY the winner won

**Improvement Loop:**
1. Execute (3 parallel runs for variance)
2. Grade assertions
3. Blind compare against previous best (if iteration > 0)
4. Post-hoc analysis
5. Update state (track best version, not just latest)
6. Create new version and apply improvements
7. Stop when: time budget exhausted, goal achieved, diminishing returns, or user requests stop

**Key design decisions:**
- Best version tracked (not necessarily the latest)
- Blind A/B protocol prevents bias
- Multiple runs per iteration for statistical reliability
- Each agent (executor, grader, comparator, analyzer) has its own reference file

---

## 11. File Locations Quick Reference

All paths under `/Users/benigeri/.claude/plugins/marketplaces/`:

```
every-marketplace/plugins/compound-engineering/
  skills/create-agent-skills/SKILL.md           # Main skill creation guidance
  skills/create-agent-skills/references/         # 13 reference files
  skills/create-agent-skills/templates/          # Simple + router templates
  skills/create-agent-skills/workflows/          # 10 workflow files
  skills/skill-creator/SKILL.md                  # Practical creation guide
  skills/skill-creator/scripts/                  # init, package, validate scripts
  commands/create-agent-skill.md                 # Slash command -> skill
  commands/heal-skill.md                         # Fix incorrect skills

claude-plugins-official/
  plugins/skill-creator/skills/skill-creator/SKILL.md      # Full eval framework
  plugins/skill-creator/skills/skill-creator/agents/       # executor, grader, comparator, analyzer
  plugins/skill-creator/skills/skill-creator/references/   # eval-mode, benchmark-mode, schemas
  plugins/skill-creator/skills/skill-creator/scripts/      # 8 utility scripts
  plugins/plugin-dev/skills/skill-development/SKILL.md     # Plugin-specific guidance
  plugins/plugin-dev/skills/skill-development/references/  # skill-creator-original.md
```
