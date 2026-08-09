# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal **learning workspace**, not an application. There is no build, no test
runner, no dependencies. Each top-level folder (`git/`, `agile/`, `ai-finance/`) is a
self-contained **course** authored as static HTML lessons the user reads in a browser.
The root `index.html` is a hand-maintained catalog linking to each course's
`index.html`. Open any `.html` directly in a browser — nothing compiles.

Your role here is **teacher**, not just editor: you author lessons, keep the workspace
files current, and decide what to teach next from the learning records. New courses are
started with `/teach <topic>` from the root.

## Course anatomy (every course follows this)

```
<course>/
  index.html              catalog of the course's lessons + reference + workspace files
  MISSION.md              WHY the user is learning this — grounds every teaching decision
  RESOURCES.md            trusted primary sources (regulators, canonical books), with a "Gaps" section
  NOTES.md                user preferences + teaching notes behind them (not every course has one yet)
  learning-records/       NNNN-*.md — what's been established about the learner; drives what's taught next
  lessons/                NNNN-slug.html — the lessons, four-digit zero-padded, ordered
  reference/              living glossary + pattern cards, cited to primary sources
  assets/
    quiz.js               retrieval-practice quiz component
```

Files are created **lazily** — a course has a `reference/` or `NOTES.md` only once one
was needed. Match the existing course's structure when adding to it.

## Non-obvious conventions

- **MISSION.md is load-bearing.** Every lesson must trace to a mission goal. Read it and
  the latest `learning-records/` entry before authoring anything — they encode the
  learner's starting level and what NOT to re-teach (e.g. git: "the gap is the model, not
  the vocabulary — don't spend lessons on command syntax").
- **Adding a lesson means updating two indexes.** Every time you add a lesson, add its
  card to that course's `index.html` AND update the course's line in the root
  `index.html` (the `X lessons · Y reference` meta count). Both are hand-maintained —
  nothing regenerates them.
- **learning-records/ drive sequencing.** They record what's established and what's still
  awaiting evidence. Append a new record when a lesson's model is confirmed learned;
  don't treat a model as established until the record says so.
- **RESOURCES.md provenance rule.** Cite claims to the primary sources listed there
  (Pro Git, Scrum Guide, FSB/GAO/CFTC). The `## Gaps` section tracks missing sources —
  update it when a gap is filled or found.
- **Every lesson embeds a quiz** via `quiz.js`: a `<div class="quiz" data-quiz='[...]'>`
  plus `<script src="../assets/quiz.js">`. Quiz options must be equal length so
  formatting leaks no answer; feedback is immediate and answers can't be changed after
  commit (the miss is the retrieval-practice point). See the header comment in
  `git/assets/quiz.js`.
- **One shared stylesheet — no per-course CSS.** All courses use the single
  `assets/style.css` at the repo root. **Do not create per-course `style.css` files.**
  CSS custom properties (`--rule`, `--accent`, `--ink-soft`, `--ok`, `--bad`, etc.) are
  defined there. If a course needs a different accent colour, override `--accent` and
  `--accent-soft` in a one-line `<style>:root { ... }</style>` block in that course's
  HTML pages (see `agile/` for the pattern). Lesson-specific styling goes in an inline
  `<style>` block in the lesson; shared styling lives in the root `style.css`.
- Lessons name **both the CLI command and its VS Code GUI equivalent** where relevant —
  a standing constraint from the git mission.

## Committing

Commits are per-lesson / per-chapter, terse (`Git lesson 6`, `AI Finance cource`).
Follow that style. Only commit when asked.
