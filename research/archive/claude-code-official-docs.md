# Claude Code Skills: Official Documentation Research Notes

> Research compiled 2026-02-19. Sources: Anthropic official documentation, GitHub repositories, and engineering blog posts.

---

## Table of Contents

1. [What Are Skills?](#1-what-are-skills)
2. [SKILL.md Format Specification](#2-skillmd-format-specification)
3. [Frontmatter Reference (Claude Code Extensions)](#3-frontmatter-reference-claude-code-extensions)
4. [Skill Types and Content Patterns](#4-skill-types-and-content-patterns)
5. [Storage Locations and Discovery](#5-storage-locations-and-discovery)
6. [Supporting Files and Directory Structure](#6-supporting-files-and-directory-structure)
7. [Progressive Disclosure Design](#7-progressive-disclosure-design)
8. [Invocation Control](#8-invocation-control)
9. [Available Tools](#9-available-tools)
10. [String Substitutions and Arguments](#10-string-substitutions-and-arguments)
11. [Dynamic Context Injection](#11-dynamic-context-injection)
12. [Skills and Subagents](#12-skills-and-subagents)
13. [Hooks in Skills](#13-hooks-in-skills)
14. [Permissions and Tool Restrictions](#14-permissions-and-tool-restrictions)
15. [Agent Skills Open Standard](#15-agent-skills-open-standard)
16. [Best Practices from Anthropic](#16-best-practices-from-anthropic)
17. [Anthropic's Official Example Skills](#17-anthropics-official-example-skills)
18. [Limitations and Constraints](#18-limitations-and-constraints)
19. [Key Takeaways for Building Our Own Skills](#19-key-takeaways-for-building-our-own-skills)

---

## 1. What Are Skills?

**Source**: [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)

Skills extend what Claude can do. They are folders of instructions, scripts, and resources that Claude loads dynamically to improve performance on specialized tasks. A skill is a directory containing a `SKILL.md` file and optional supporting resources.

From the Anthropic engineering blog:
> "Instead of building fragmented, custom-designed agents for each use case, anyone can now specialize their agents with composable capabilities by capturing and sharing their procedural knowledge."

Skills teach Claude:
- Specialized workflows (multi-step procedures for specific domains)
- Tool integrations (instructions for working with specific file formats or APIs)
- Domain expertise (company-specific knowledge, schemas, business logic)
- Bundled resources (scripts, references, and assets for complex/repetitive tasks)

**Key mental model**: Think of skills as "onboarding guides" for specific domains or tasks -- they transform Claude from a general-purpose agent into a specialized agent equipped with procedural knowledge that no model can fully possess.

### Skills vs. Slash Commands (Historical)

Slash commands have been **merged into skills** as of Claude Code v2.1.3. A file at `.claude/commands/review.md` and a skill at `.claude/skills/review/SKILL.md` both create `/review` and work the same way. Existing `.claude/commands/` files continue to work. Skills add optional features: a directory for supporting files, frontmatter to control invocation, and the ability for Claude to load them automatically when relevant.

**Source**: [GitHub Issue #13115](https://github.com/anthropics/claude-code/issues/13115)

---

## 2. SKILL.md Format Specification

**Source**: [Agent Skills Specification](https://agentskills.io/specification), [Anthropic Skills Repo](https://github.com/anthropics/skills)

### Minimal Structure

```
skill-name/
└── SKILL.md          # Required
```

### SKILL.md Format

The `SKILL.md` file must contain YAML frontmatter followed by Markdown content.

```yaml
---
name: skill-name
description: A description of what this skill does and when to use it.
---

# Skill Instructions

Your markdown instructions here...
```

### Required Frontmatter Fields (Agent Skills Standard)

| Field         | Required | Constraints                                                                                                   |
|---------------|----------|---------------------------------------------------------------------------------------------------------------|
| `name`        | Yes      | Max 64 chars. Lowercase letters, numbers, hyphens only. No start/end hyphens. No consecutive hyphens. Must match directory name. |
| `description` | Yes      | Max 1024 chars. Non-empty. Describes what skill does AND when to use it.                                      |

### Optional Frontmatter Fields (Agent Skills Standard)

| Field           | Constraints                                                                                     |
|-----------------|-------------------------------------------------------------------------------------------------|
| `license`       | License name or reference to a bundled license file.                                            |
| `compatibility` | Max 500 chars. Environment requirements (intended product, system packages, network access).     |
| `metadata`      | Arbitrary key-value mapping for additional metadata (e.g., author, version).                    |
| `allowed-tools` | Space-delimited list of pre-approved tools. (Experimental in the standard)                       |

### Name Field Rules

- Must be 1-64 characters
- Only lowercase alphanumeric characters and hyphens (`a-z`, `0-9`, `-`)
- Must not start or end with `-`
- Must not contain consecutive hyphens (`--`)
- Must match the parent directory name

### Description Field Best Practices

The description is the **primary triggering mechanism**. It must describe both what the skill does AND when to use it. Include specific keywords that help agents identify relevant tasks.

**Good**:
```yaml
description: Extracts text and tables from PDF files, fills PDF forms, and merges multiple PDFs. Use when working with PDF documents or when the user mentions PDFs, forms, or document extraction.
```

**Bad**:
```yaml
description: Helps with PDFs.
```

**Critical insight from Anthropic's skill-creator**: Include ALL "when to use" information in the description field, NOT in the body. The body is only loaded after triggering, so "When to Use This Skill" sections in the body are not helpful to Claude.

---

## 3. Frontmatter Reference (Claude Code Extensions)

**Source**: [Claude Code Skills Docs](https://code.claude.com/docs/en/skills)

Claude Code extends the Agent Skills standard with additional frontmatter fields:

| Field                      | Required    | Description                                                                                         |
|----------------------------|-------------|-----------------------------------------------------------------------------------------------------|
| `name`                     | No          | Display name. If omitted, uses directory name. Lowercase letters, numbers, hyphens (max 64 chars).  |
| `description`              | Recommended | What the skill does and when to use it. Claude uses this to decide when to apply the skill.         |
| `argument-hint`            | No          | Hint shown during autocomplete. Example: `[issue-number]` or `[filename] [format]`.                |
| `disable-model-invocation` | No          | `true` prevents Claude from auto-loading this skill. Manual `/name` only. Default: `false`.         |
| `user-invocable`           | No          | `false` hides from `/` menu. For background knowledge only Claude should use. Default: `true`.      |
| `allowed-tools`            | No          | Tools Claude can use without permission when skill is active.                                       |
| `model`                    | No          | Model to use when this skill is active.                                                             |
| `context`                  | No          | Set to `fork` to run in a forked subagent context.                                                  |
| `agent`                    | No          | Which subagent type to use when `context: fork` is set.                                             |
| `hooks`                    | No          | Hooks scoped to this skill's lifecycle.                                                             |

**Important**: In the Agent Skills open standard, only `name` and `description` are specified. The rest (`disable-model-invocation`, `user-invocable`, `allowed-tools`, `model`, `context`, `agent`, `hooks`, `argument-hint`) are Claude Code-specific extensions.

---

## 4. Skill Types and Content Patterns

**Source**: [Claude Code Skills Docs](https://code.claude.com/docs/en/skills)

### Reference Content

Adds knowledge Claude applies to current work. Conventions, patterns, style guides, domain knowledge. Runs inline.

```yaml
---
name: api-conventions
description: API design patterns for this codebase
---

When writing API endpoints:
- Use RESTful naming conventions
- Return consistent error formats
- Include request validation
```

### Task Content

Step-by-step instructions for a specific action (deployments, commits, code generation). Often paired with `disable-model-invocation: true` for manual invocation only.

```yaml
---
name: deploy
description: Deploy the application to production
context: fork
disable-model-invocation: true
---

Deploy the application:
1. Run the test suite
2. Build the application
3. Push to the deployment target
```

---

## 5. Storage Locations and Discovery

**Source**: [Claude Code Skills Docs](https://code.claude.com/docs/en/skills)

### Priority Order (highest to lowest)

| Location   | Path                                                 | Applies to                     |
|------------|------------------------------------------------------|--------------------------------|
| Enterprise | See managed settings                                  | All users in your organization |
| Personal   | `~/.claude/skills/<skill-name>/SKILL.md`             | All your projects              |
| Project    | `.claude/skills/<skill-name>/SKILL.md`               | This project only              |
| Plugin     | `<plugin>/skills/<skill-name>/SKILL.md`              | Where plugin is enabled        |

When skills share the same name across levels, higher-priority locations win: enterprise > personal > project. Plugin skills use a `plugin-name:skill-name` namespace, so they cannot conflict.

### Automatic Discovery from Nested Directories

When working with files in subdirectories, Claude Code automatically discovers skills from nested `.claude/skills/` directories. For example, if editing a file in `packages/frontend/`, Claude Code also looks for skills in `packages/frontend/.claude/skills/`. This supports **monorepo setups**.

### Skills from Additional Directories

Skills in `.claude/skills/` within directories added via `--add-dir` are loaded automatically and support live change detection (editable during a session without restarting).

---

## 6. Supporting Files and Directory Structure

**Source**: [Claude Code Skills Docs](https://code.claude.com/docs/en/skills), [Anthropic skill-creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)

### Recommended Structure

```
my-skill/
├── SKILL.md           # Main instructions (required)
├── scripts/           # Executable code (Python/Bash/etc.)
├── references/        # Documentation loaded into context as needed
├── assets/            # Files used in output (templates, icons, fonts)
├── template.md        # Template for Claude to fill in
└── examples/
    └── sample.md      # Example output showing expected format
```

### scripts/

Executable code for tasks that require deterministic reliability or are repeatedly rewritten.

- **When to include**: When the same code is being rewritten repeatedly or deterministic reliability is needed
- **Benefits**: Token efficient, deterministic, may be executed without loading into context
- **Note**: Scripts may still need to be read by Claude for patching or environment-specific adjustments

### references/

Documentation and reference material intended to be loaded as needed into context.

- **Examples**: Database schemas, API documentation, domain knowledge, company policies
- **Benefits**: Keeps SKILL.md lean, loaded only when Claude determines it's needed
- **Best practice**: If files are large (>10k words), include grep search patterns in SKILL.md
- **Avoid duplication**: Information should live in either SKILL.md or references files, not both

### assets/

Files not intended to be loaded into context, but used within output Claude produces.

- **Examples**: Brand assets, PowerPoint templates, HTML boilerplate, fonts
- **Benefits**: Separates output resources from documentation, enables Claude to use files without loading them into context

### What NOT to Include

A skill should only contain essential files. Do NOT create:
- README.md
- INSTALLATION_GUIDE.md
- QUICK_REFERENCE.md
- CHANGELOG.md
- Any auxiliary documentation files

---

## 7. Progressive Disclosure Design

**Source**: [Anthropic Engineering Blog](https://claude.com/blog/equipping-agents-for-the-real-world-with-agent-skills), [Anthropic skill-creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)

Skills use a three-level loading system to manage context efficiently:

1. **Level 1 - Metadata (name + description)**: Always in context (~100 tokens). This is ALL that's loaded at startup for all skills.
2. **Level 2 - SKILL.md body**: When skill triggers (<5k tokens recommended, under 500 lines)
3. **Level 3 - Bundled resources**: As needed by Claude (unlimited, scripts can be executed without reading into context)

### Key Design Patterns

**Pattern 1: High-level guide with references**
```markdown
# PDF Processing

## Quick start
Extract text with pdfplumber: [code example]

## Advanced features
- **Form filling**: See [FORMS.md](FORMS.md) for complete guide
- **API reference**: See [REFERENCE.md](REFERENCE.md) for all methods
```

**Pattern 2: Domain-specific organization** (for skills with multiple domains)
```
bigquery-skill/
├── SKILL.md (overview and navigation)
└── reference/
    ├── finance.md (revenue, billing metrics)
    ├── sales.md (opportunities, pipeline)
    └── product.md (API usage, features)
```
When user asks about sales metrics, Claude only reads `sales.md`.

**Pattern 3: Conditional details**
```markdown
## Creating documents
Use docx-js for new documents. See [DOCX-JS.md](DOCX-JS.md).

## Editing documents
For simple edits, modify the XML directly.
**For tracked changes**: See [REDLINING.md](REDLINING.md)
```

### Guidelines for Progressive Disclosure

- Keep SKILL.md under **500 lines**
- Split content into separate files when approaching this limit
- **Always reference supporting files** from SKILL.md and describe clearly when to read them
- Avoid deeply nested references -- keep them one level deep from SKILL.md
- For files longer than 100 lines, include a table of contents at the top
- When supporting multiple variants/frameworks, keep only core workflow and selection guidance in SKILL.md; move variant-specific details to separate reference files

---

## 8. Invocation Control

**Source**: [Claude Code Skills Docs](https://code.claude.com/docs/en/skills)

### Who Can Invoke

| Frontmatter                      | You can invoke | Claude can invoke | When loaded into context                                     |
|----------------------------------|----------------|-------------------|--------------------------------------------------------------|
| (default)                        | Yes            | Yes               | Description always in context, full skill loads when invoked |
| `disable-model-invocation: true` | Yes            | No                | Description NOT in context, full skill loads when you invoke |
| `user-invocable: false`          | No             | Yes               | Description always in context, full skill loads when invoked |

### When to Use Each

- **`disable-model-invocation: true`**: For workflows with side effects or controlled timing. Examples: `/commit`, `/deploy`, `/send-slack-message`. You don't want Claude deciding to deploy.
- **`user-invocable: false`**: For background knowledge that isn't actionable as a command. Example: `legacy-system-context` skill that explains how an old system works.

### Restricting Claude's Skill Access

Three approaches:
1. **Disable all skills**: Deny the `Skill` tool in `/permissions`
2. **Allow/deny specific skills**: Using permission rules like `Skill(commit)`, `Skill(review-pr *)`, `Skill(deploy *)`
3. **Hide individual skills**: `disable-model-invocation: true` in frontmatter (removes from Claude's context entirely)

### Context Budget for Skill Descriptions

Skill descriptions are loaded into context so Claude knows what's available. The budget scales dynamically at **2% of the context window**, with a fallback of **16,000 characters**. Override with `SLASH_COMMAND_TOOL_CHAR_BUDGET` environment variable.

---

## 9. Available Tools

**Source**: [GitHub gist of Claude Code tools](https://gist.github.com/wong2/e0f34aac66caf890a332f7b6f9e2ba8f), [Claude Code built-in tools reference](https://www.vtrivedy.com/posts/claudecode-tools-reference)

Claude Code provides these built-in tools that skills can interact with:

| Tool          | Description                                              |
|---------------|----------------------------------------------------------|
| `Bash`        | Execute shell commands with optional timeout             |
| `Read`        | Read files (supports images, PDFs, notebooks)            |
| `Write`       | Create or overwrite files                                |
| `Edit`        | Exact string replacements in files                       |
| `MultiEdit`   | Multiple edits to single files in one operation          |
| `Glob`        | Fast file pattern matching (`**/*.js`)                   |
| `Grep`        | Content search with regex                                |
| `LS`          | List files and directories                               |
| `WebFetch`    | Fetch and analyze URL content                            |
| `WebSearch`   | Search the web                                           |
| `NotebookRead`| Read Jupyter notebook cells                              |
| `NotebookEdit`| Modify Jupyter notebook cells                            |
| `TodoRead`    | Read task lists                                          |
| `TodoWrite`   | Write/manage task lists                                  |
| `Task`        | Spawn subagents                                          |
| `Agent`       | Launch autonomous agents for complex searches            |
| `Skill`       | Invoke skills                                            |

### Using `allowed-tools` in Skills

You can restrict tools when a skill is active:
```yaml
---
name: safe-reader
description: Read files without making changes
allowed-tools: Read, Grep, Glob
---
```

This creates a "read-only mode" where Claude can explore files but not modify them.

You can also use patterns like `Bash(git *)` for more granular Bash command control.

---

## 10. String Substitutions and Arguments

**Source**: [Claude Code Skills Docs](https://code.claude.com/docs/en/skills)

### Available Substitutions

| Variable               | Description                                                                    |
|------------------------|--------------------------------------------------------------------------------|
| `$ARGUMENTS`           | All arguments passed when invoking the skill                                   |
| `$ARGUMENTS[N]`        | Specific argument by 0-based index                                             |
| `$N`                   | Shorthand for `$ARGUMENTS[N]` (e.g., `$0` for first argument)                 |
| `${CLAUDE_SESSION_ID}` | Current session ID (for logging, session-specific files)                       |

### Example with Positional Arguments

```yaml
---
name: migrate-component
description: Migrate a component from one framework to another
---

Migrate the $0 component from $1 to $2.
Preserve all existing behavior and tests.
```

Running `/migrate-component SearchBar React Vue` replaces `$0` with `SearchBar`, `$1` with `React`, `$2` with `Vue`.

### If `$ARGUMENTS` Is Not Present

If you invoke a skill with arguments but the skill doesn't include `$ARGUMENTS`, Claude Code appends `ARGUMENTS: <your input>` to the end of the skill content.

---

## 11. Dynamic Context Injection

**Source**: [Claude Code Skills Docs](https://code.claude.com/docs/en/skills)

The `` !`command` `` syntax runs shell commands **before** the skill content is sent to Claude. The command output replaces the placeholder.

```yaml
---
name: pr-summary
description: Summarize changes in a pull request
context: fork
agent: Explore
allowed-tools: Bash(gh *)
---

## Pull request context
- PR diff: !`gh pr diff`
- PR comments: !`gh pr view --comments`
- Changed files: !`gh pr diff --name-only`

## Your task
Summarize this pull request...
```

This is **preprocessing**, not something Claude executes. Claude only sees the final result.

### Enabling Extended Thinking

Include the word "ultrathink" anywhere in your skill content to enable extended thinking mode.

---

## 12. Skills and Subagents

**Source**: [Claude Code Sub-agents Docs](https://code.claude.com/docs/en/sub-agents)

### Running Skills in a Subagent (`context: fork`)

Add `context: fork` to frontmatter to run a skill in isolation. The skill content becomes the prompt that drives the subagent. It won't have access to conversation history.

```yaml
---
name: deep-research
description: Research a topic thoroughly
context: fork
agent: Explore
---

Research $ARGUMENTS thoroughly:
1. Find relevant files using Glob and Grep
2. Read and analyze the code
3. Summarize findings with specific file references
```

**Warning**: `context: fork` only makes sense for skills with explicit instructions. Guidelines without a task result in a subagent that returns without meaningful output.

### Available Agent Types

- `Explore` - Read-only, uses Haiku (fast, low-latency), optimized for codebase exploration
- `Plan` - Research agent for planning, inherits model, read-only
- `general-purpose` - All tools, inherits model, for complex multi-step tasks
- Custom agents from `.claude/agents/`

### Preloading Skills into Subagents

Subagents can have skills preloaded via the `skills` field in their frontmatter:

```yaml
---
name: api-developer
description: Implement API endpoints following team conventions
skills:
  - api-conventions
  - error-handling-patterns
---

Implement API endpoints. Follow the conventions and patterns from the preloaded skills.
```

The full content of each skill is injected into the subagent's context at startup (not just made available for invocation). Subagents don't inherit skills from the parent conversation.

### Two Directions

| Approach                     | System prompt                             | Task                        | Also loads                   |
|-----------------------------|-------------------------------------------|-----------------------------|------------------------------|
| Skill with `context: fork`  | From agent type (Explore, Plan, etc.)     | SKILL.md content            | CLAUDE.md                    |
| Subagent with `skills` field| Subagent's markdown body                  | Claude's delegation message | Preloaded skills + CLAUDE.md |

---

## 13. Hooks in Skills

**Source**: [Claude Code Hooks Reference](https://code.claude.com/docs/en/hooks)

Skills can define hooks in their YAML frontmatter. These hooks are scoped to the skill's lifecycle and only run when that skill is active.

```yaml
---
name: secure-operations
description: Perform operations with security checks
hooks:
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./scripts/security-check.sh"
---
```

### Supported Hook Events in Skills

All hook events are supported: `PreToolUse`, `PostToolUse`, `PostToolUseFailure`, `Stop`, `SessionStart`, `UserPromptSubmit`, etc.

The `once` field is available for skill hooks -- if `true`, the hook runs only once per session then is removed.

### Hook Types

- **Command hooks** (`type: "command"`): Run shell commands
- **Prompt hooks** (`type: "prompt"`): Single-turn LLM evaluation
- **Agent hooks** (`type: "agent"`): Multi-turn subagent with tool access

---

## 14. Permissions and Tool Restrictions

**Source**: [Claude Code Skills Docs](https://code.claude.com/docs/en/skills)

### Skill-Level Tool Restrictions

```yaml
---
name: safe-reader
allowed-tools: Read, Grep, Glob
---
```

### Permission Rule Syntax

```
# Allow only specific skills
Skill(commit)
Skill(review-pr *)

# Deny specific skills
Skill(deploy *)
```

`Skill(name)` for exact match, `Skill(name *)` for prefix match with any arguments.

### Important Note

`user-invocable` only controls menu visibility, NOT Skill tool access. Use `disable-model-invocation: true` to block programmatic invocation.

---

## 15. Agent Skills Open Standard

**Source**: [agentskills.io](https://agentskills.io)

Claude Code skills follow the **Agent Skills** open standard (originally developed by Anthropic, released as open standard). The standard is supported by a growing ecosystem:

- Claude Code, Claude.ai, Claude API
- Gemini CLI, Cursor, VS Code
- OpenAI Codex, Roo Code, GitHub
- Amp, Goose, and many more

The specification at agentskills.io defines the core format. Claude Code extends it with additional features like invocation control, subagent execution, dynamic context injection, and hooks.

### Validation

```bash
skills-ref validate ./my-skill
```

### Packaging

Skills can be packaged into `.skill` files (zip with .skill extension) for distribution:
```bash
scripts/package_skill.py <path/to/skill-folder>
```

---

## 16. Best Practices from Anthropic

**Source**: [Anthropic skill-creator](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md), [Claude Code Skills Docs](https://code.claude.com/docs/en/skills)

### Core Principle: Conciseness

> "The context window is a public good. Skills share the context window with everything else Claude needs: system prompt, conversation history, other Skills' metadata, and the actual user request."

**Default assumption: Claude is already very smart.** Only add context Claude doesn't already have. Challenge each piece of information: "Does Claude really need this explanation?" and "Does this paragraph justify its token cost?"

**Prefer concise examples over verbose explanations.**

### Set Appropriate Degrees of Freedom

Match specificity to task fragility and variability:

- **High freedom** (text instructions): Multiple valid approaches, context-dependent decisions
- **Medium freedom** (pseudocode/scripts with parameters): Preferred pattern exists, some variation acceptable
- **Low freedom** (specific scripts, few parameters): Fragile operations, consistency critical, specific sequence required

> Think of Claude as exploring a path: a narrow bridge with cliffs needs specific guardrails (low freedom), while an open field allows many routes (high freedom).

### Writing Guidelines

Always use **imperative/infinitive form** in SKILL.md content.

### Description Writing

- Include both what the skill does AND specific triggers/contexts for when to use it
- Put ALL "when to use" information in the description, not the body
- Example: "Comprehensive document creation, editing, and analysis with support for tracked changes, comments, formatting preservation, and text extraction. Use when Claude needs to work with professional documents (.docx files) for: (1) Creating new documents, (2) Modifying or editing content, (3) Working with tracked changes, (4) Adding comments, or any other document tasks"

### Skill Creation Process (from Anthropic)

1. **Understand the skill with concrete examples** -- Ask: What functionality? What are usage examples? What would a user say to trigger this?
2. **Plan reusable skill contents** -- Analyze each example: What scripts, references, assets would help when executing these workflows repeatedly?
3. **Initialize the skill** -- Create directory structure
4. **Edit the skill** -- Implement resources and write SKILL.md. Remember: the skill is for another instance of Claude to use.
5. **Package the skill** -- Validate and package
6. **Iterate based on real usage** -- Use on real tasks, notice struggles, update

### Context Management Tips

- Keep SKILL.md under 500 lines
- Move detailed reference material to separate files
- Reference supporting files clearly with descriptions of when to read them
- Avoid deeply nested references (one level deep from SKILL.md)
- Structure longer reference files with table of contents

### Security

From the Anthropic blog:
> "Install skills only from trusted sources. When installing a skill from a less-trusted source, thoroughly audit it before use."

Review: bundled files, code dependencies, instructions directing Claude to external network sources.

---

## 17. Anthropic's Official Example Skills

**Source**: [Anthropic Skills Repository](https://github.com/anthropics/skills)

### Repository Structure

```
anthropics/skills/
├── skills/
│   ├── docx/               # Word document creation/editing (source-available)
│   ├── pdf/                # PDF manipulation (source-available)
│   ├── pptx/               # PowerPoint creation/editing (source-available)
│   ├── xlsx/               # Excel/spreadsheet (source-available)
│   ├── creative-design/    # Art, music, design skills
│   ├── development-technical/  # Testing, MCP, development skills
│   └── enterprise-communication/  # Business workflows
├── spec/                    # Agent Skills specification
├── template/                # Skill template for creating new skills
└── skill-creator/           # Meta-skill for creating other skills
```

### Key Skills

- **Document Skills** (docx, pdf, pptx, xlsx): Source-available reference implementations for complex production skills
- **skill-creator**: Meta-skill that teaches Claude how to create effective skills (the most detailed reference for best practices)

### Installation in Claude Code

```bash
/plugin marketplace add anthropics/skills
/plugin install document-skills@anthropic-agent-skills
/plugin install example-skills@anthropic-agent-skills
```

---

## 18. Limitations and Constraints

**Source**: [Claude Code Skills Docs](https://code.claude.com/docs/en/skills)

### Context Budget

- Skill descriptions are loaded into context for discovery
- Budget: **2% of context window** (fallback: 16,000 characters)
- If too many skills, some may be excluded
- Override with `SLASH_COMMAND_TOOL_CHAR_BUDGET` environment variable
- Check `/context` for warnings about excluded skills

### Subagent Limitations

- Subagents **cannot spawn other subagents** (no nesting)
- `context: fork` only works with skills that have explicit tasks (not just guidelines)
- Background subagents auto-deny non-pre-approved permissions
- MCP tools are not available in background subagents

### Skill Triggering Issues

- If Claude doesn't use a skill: check description keywords, verify with "What skills are available?"
- If Claude triggers too often: make description more specific, use `disable-model-invocation: true`
- Skill naming conflicts: if a skill and command share the same name, the skill takes precedence

### Body Size

- **Keep under 500 lines** (SKILL.md body)
- **< 5000 tokens recommended** for body content
- No hard limit, but progressive disclosure should be used for larger skills

---

## 19. Key Takeaways for Building Our Own Skills

### Architecture Decisions

1. **Progressive disclosure is essential**: Metadata always loaded, SKILL.md body on trigger, references on demand. This respects the context window as a shared resource.

2. **Description is the most important field**: It's the primary triggering mechanism. Include comprehensive "what it does" AND "when to use it" information. Every keyword matters.

3. **Scripts for deterministic tasks**: If a task requires the same code every time, bundle a script. "Sorting a list via token generation is far more expensive than simply running a sorting algorithm."

4. **Reference files for domain knowledge**: Keep SKILL.md lean. Move schemas, API docs, detailed guides to `references/`. Claude reads them only when needed.

5. **Assets for output resources**: Templates, images, fonts go in `assets/`. They're used in output, not loaded into context.

### Content Design

6. **Be concise**: Claude is already smart. Only add what it doesn't know. Challenge every paragraph's token cost.

7. **Match freedom to fragility**: Use specific scripts for fragile operations, text instructions for flexible ones.

8. **Use imperative form**: Write instructions as commands ("Extract the data", not "The data should be extracted").

9. **Include concrete examples**: Prefer examples over verbose explanations.

10. **No auxiliary documentation**: No README.md, CHANGELOG.md, etc. Just the skill content.

### Invocation and Control

11. **Use `disable-model-invocation: true` for side-effect-heavy skills**: Deployments, commits, messaging should be manual-only.

12. **Use `context: fork` for isolated tasks**: Research, analysis, and tasks that produce lots of output benefit from subagent isolation.

13. **Use `allowed-tools` to enforce safety**: Restrict to read-only tools for analysis skills, limit Bash patterns for specific operations.

14. **Use hooks for lifecycle control**: PreToolUse hooks can validate operations; PostToolUse hooks can run linters after file changes.

### Testing and Iteration

15. **Test with real tasks**: The iteration cycle is: use skill -> notice struggles -> update -> test again.

16. **Monitor triggering behavior**: Pay attention to skill names and descriptions that trigger activation correctly.

17. **Request self-reflection on failures**: When iterating, ask Claude what went wrong and capture successful patterns.

### Distribution

18. **Project skills via version control**: Commit `.claude/skills/` for team sharing.

19. **Personal skills in `~/.claude/skills/`**: For cross-project personal workflows.

20. **Plugin distribution**: For broader sharing across teams and projects.

---

## Sources

- [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)
- [Create custom subagents - Claude Code Docs](https://code.claude.com/docs/en/sub-agents)
- [Hooks reference - Claude Code Docs](https://code.claude.com/docs/en/hooks)
- [Anthropic Skills Repository](https://github.com/anthropics/skills)
- [Anthropic skill-creator SKILL.md](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)
- [Equipping agents for the real world with Agent Skills - Anthropic Engineering](https://claude.com/blog/equipping-agents-for-the-real-world-with-agent-skills)
- [Agent Skills Specification](https://agentskills.io/specification)
- [Agent Skills Overview](https://agentskills.io)
- [Claude Code Tools and System Prompt](https://gist.github.com/wong2/e0f34aac66caf890a332f7b6f9e2ba8f)
- [Claude Code GitHub Issues on Skills/Commands Merge](https://github.com/anthropics/claude-code/issues/13115)
- [The Complete Guide to Building Skills for Claude (PDF)](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf)
