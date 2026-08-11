# Insights &amp; Traffic — read-only activity charts

**2026-08-11 — Lesson 06 delivered.**

**Key insight:** Insights splits into git-derived charts (Pulse, Contributors, Code frequency, Network — all reflect public commit history) vs. Traffic, which is the only chart counting *visitors*, not committers. Different data source, different audience.

**Gotcha taught:** Traffic is collaborator-only (push access required) even on a public repo, and only retains 14 days — not a historical record, a recent-trend signal.

**Correction (same day, from the win attempt):** the win step sent the user to Pulse/Contributors/Traffic on `stianbranden/learning` — all three were inaccessible. Cause: the repo is **private**, and on **GitHub Free**, six graphs (Pulse, Contributors, Traffic, Commits, Code frequency, Network) render only for *public* repos — push access doesn't override it. What remains on a private Free repo: Dependency graph, Forks, and (with Actions enabled) Actions usage/performance metrics. Lesson 06 and its win steps were rewritten to point at the tabs that actually work on this repo, plus a callout explaining the plan gate. Source: [GitHub Docs — About repository graphs](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/about-repository-graphs).

**Mission status:** all six `../MISSION.md` success bullets now have a lesson (Issues, Actions, Projects, Pages, Security, Insights/Traffic). Mission's `## Why` also names **releases** as in-scope platform surface, not yet in the success list — user has requested it as lesson 07. Worth folding into the success list next MISSION.md touch rather than treating as scope creep.

**Win:** retention-tested against the real repo, but the original win steps didn't survive contact — repo is private on Free, so Pulse/Contributors/Traffic are gated. Confirmed working: Dependency graph, Forks, Actions usage metrics.
