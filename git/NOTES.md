# Notes

## User preferences

- Mixed CLI + VS Code GUI user. Teach the CLI command as the source of truth, and name the GUI equivalent so the mapping is explicit.
- Starting level: `add` / `commit` / `push` / `pull` are habitual; branches are shaky; no underlying mental model.
- Mission is dual (solo safety + team collaboration). Solo-safety topics come first — they are the prerequisite for handling team situations calmly.

## Teaching notes

- Git's real difficulty is that its vocabulary overloads common words (`reset`, `checkout`, `HEAD`, `origin`). Every lesson should push new terms into `reference/git-glossary.html` and stick to those definitions.
- Prefer teaching the *graph* (commits + pointers) over teaching command recipes. Recipes rot; the graph model transfers.

## Session log

- 2026-07-22 — Workspace created. Mission set. Lesson 0001 (three trees) delivered.
- 2026-07-23 — Lesson 0002 (what a commit is: graph, branch/HEAD pointers) delivered. Root + course index.html added.
- 2026-07-24 — Lesson 0003 (undo playbook) delivered. Solo-safety arc complete (see LR-0002). Next: team half — branching/merging.
- 2026-07-25 — Lesson 0004 (branching & merging: fast-forward vs three-way, merge commit, merge base) delivered. Team half begun. Next: Lesson 0005 — merge conflicts, resolved by hand.
