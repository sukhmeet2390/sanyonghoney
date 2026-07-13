# Memory Usage Guide

## Structure

| Folder | Purpose |
|---|---|
| [`feedback/`](feedback/) | Discipline rules learned from corrections |
| [`project/`](project/) | Active state, decisions, business context |
| [`reference/`](reference/) | Stable knowledge (tech stack, strategies, patterns) |

## How to Use

1. Read `feedback/` first — these are non-negotiable rules learned from real corrections.
2. Reference these files when making decisions — they are the single source of truth.
3. Any AI tool (Copilot CLI, Claude Code, Cursor, etc.) should read this directory.

## Adding a Memory

- **Kebab-case filename** (e.g., `no-tech-debt.md`).
- **No type prefix** — the folder location signals the type.
- **YAML frontmatter required**:
  ```yaml
  ---
  name: kebab-case-slug
  description: one-line summary used to decide relevance in future conversations
  type: feedback | project | reference
  ---
  ```
- **Update [`MEMORY.md`](MEMORY.md)** index after adding a memory.

## Save Location (zero-divergence directive)

**Save new memories to THIS directory (`.claude/skills/_shared/memory/`), never to:**
- `~/.claude/projects/...`
- `~/.cursor/`
- `~/.github-copilot/`
- Or any other tool-specific user-profile dir

Why: the whole point of AI-agnostic setup is that every AI tool reads from the same source. Saving to a user-profile dir creates divergence between Claude Code, Copilot CLI, Cursor, and others.
