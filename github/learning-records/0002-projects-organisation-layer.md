# Projects — organising items without leaving GitHub

**2026-08-09 — Lesson 03 delivered.**

**Key insight:** Projects live at the user/org level, not the repo level. A single project can span many repos. This is non-obvious and matters for anyone thinking about how to organize work across codebases.

**Second key insight:** Custom field data (e.g. a "Priority" single-select) lives on the *project*, not on the issue. Labels are the issue-side equivalent. This changes how you think about where to put metadata — use labels for things that should be visible everywhere, custom fields for planning data that only matters in the project context.

**Mental model taught:** Issues & PRs are source of truth (repo-level) → Project adds a planning layer on top (user/org-level) → Views are saved filters on that planning layer.

**Not yet covered:** Built-in workflow automations (auto-add, auto-status-on-close), Insights/charts, iteration fields for sprint planning. These are natural follow-ups once the user has used a real project board.

**Win:** Create a real project board, add issues, add a Priority field, drag items between columns, create a second view. Hands-on, against the real repo.
