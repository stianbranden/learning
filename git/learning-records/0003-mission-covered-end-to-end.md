# All five mission goals covered end to end (through Lesson 06)

Lessons 04–06 delivered the team half: branching & merging (fast-forward vs three-way, merge base), merge conflicts (markers, ours/theirs, add-to-resolve, `--abort`), and remotes + the PR workflow (`origin/main` as a remote-tracking pointer, fetch vs pull, `push -u`, the review loop, reading `git log --graph` on a shared repo). Combined with the solo-safety arc (Lessons 01–03, established per [[0002-solo-safety-covered]]), every success criterion in MISSION.md now has a lesson behind it:

- ✅ Explain what a commit is / where a change lives — L01, L02
- ✅ Undo any common mistake without googling — L03 (established, grill-verified)
- ✅ Branch, merge, resolve a conflict solo start to finish — L04, L05 (conflict half grill-verified 5/5)
- ✅ Open a PR with clean reviewable history + respond to review — L06 (taught, not yet retention-tested)
- ✅ Read `git log --graph` on a shared repo — L06 (taught, not yet retention-tested)

**Implications:** The mission is *taught* end to end but the team half is only *established* through conflicts (L05). L06's material — the remote-pointer model and fetch-vs-pull specifically — has NO retention evidence yet. Do not declare the mission done; grill on a remote/PR scenario next session before closing it out. The remote-tracking-branch idea (`origin/main` = cached bookmark, not live) is the highest-risk concept to have slipped, since the user pushed/pulled by rote before this lesson and rote habits resist model updates.

**Teaching direction now:** shift from new lessons to reps + spaced retrieval. Real PRs, Learn Git Branching's remote levels, GitHub Skills. New lessons only if the mission expands (candidates noted in NOTES: rebase/interactive-rebase, cherry-pick, stash — all currently out of scope or untaught).

**2026-07-25 (later) — L06 retention-verified; mission established.** Grilled 3 remote/PR scenarios. Solid on the highest-risk concept: `origin/main` as a stale local cache (correctly reasoned that a teammate's un-fetched push is invisible, that true state was ahead-3/behind-5 while `git status` still shows only "ahead 3", and that `fetch` updates the cache). fetch-then-merge order correct; PR feedback loop (commit same branch + push, no new PR) correct.

**Two sharpenings delivered (not gaps, refinements):**
1. Divergence *always* forces a three-way **merge commit**; a **conflict** is a separate maybe, only on same-line collisions. User initially answered "merge conflict" where "merge commit (conflict only if same lines)" is precise.
2. Real-world extension taught beyond the conservative reset-before-share rule: a **PR branch is yours alone**, so squashing pushed `wip` commits via `git reset --soft origin/main` + `git push --force-with-lease` is normal practice. Rule refined to: *rewrite freely on a branch only you touch; never on a shared branch (main).* `--force-with-lease` introduced as the safe force.

**Status:** established. All five mission goals now taught AND retention-verified. Mission complete. Future work is reps + spaced review, or new scope (rebase/cherry-pick/stash — see NOTES).
