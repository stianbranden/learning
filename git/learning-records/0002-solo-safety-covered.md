# Solo-safety half of mission covered through Lesson 03

Lessons 01–03 delivered: three trees, commit graph (snapshot + parent, branch/HEAD pointers), and the undo playbook (restore, amend, reset soft/mixed/hard, revert, reflog). This is the full "never lose work / undo anything" arc from the mission.

**Implications:** The solo-safety goal is now *taught* but not yet *established* — no evidence the user retained it. Before declaring it done, watch for evidence (a correctly answered recovery scenario, or the user reporting they used reset/reflog for real). Next teaching thrust shifts to the team-collaboration half: branching/merging (Lesson 04), then conflicts, then the PR workflow. The reset three-trees framing in Lesson 03 depends hard on Lesson 01's model — if branching lessons reveal the three-trees model didn't stick, loop back before proceeding to conflicts.

**2026-07-25 update — established.** Grilled on three interleaved scenarios, all reasoned correctly from memory: (1) `reset --hard` commits are recoverable via reflog, (2) fast-forward merge produces 1 commit and no merge commit, (3) `revert` not `reset` after a commit is pushed/shared. Solo-safety is now *established*, not just taught.

**One live gap (feeds future review):** on reflog recovery the user reaches for `git switch <sha>` (→ detached HEAD) instead of `git reset --hard <sha>` to move the branch pointer. The `switch = move HEAD` vs `reset = move the branch pointer` distinction is the thing to re-test in a later spaced round. See [[0003-mission-covered-end-to-end]].

**2026-07-25 (later) — gap closed.** Re-tested in a spaced round: user correctly gave `git reset --hard <sha>` (not `switch`) to restore a branch after a bad `reset --hard` + reflog lookup. The switch-vs-reset distinction is now retained. Same round: 5/5 on conflict mechanism, marker reading, add-to-resolve, and `merge --abort`.

**Status:** established. No open gaps in the solo-safety / branching-merging-conflict material.
