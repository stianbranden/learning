# Security — the automated backstop

**2026-08-11 — Lesson 05 delivered. Mission lesson sequence complete.**

**Key insight:** Three tools split into two jobs. Dependabot alerts + security updates handle known-vulnerable *dependencies* (passive detect, opt-in auto-fix PR). Secret scanning + push protection handle *leaked credentials* — a different problem, not a dependency issue.

**Second key insight:** Push protection is the odd one out — it's the only check that runs *before* the fact, at `git push` time, rejecting the push outright. Everything else (alerts, plain secret scanning) is after-the-fact: scan what's already in the repo, then notify.

**Not yet covered:** Code scanning / CodeQL — awareness level only (it exists, it's in the same tab, custom queries are out of scope per [[../MISSION.md]]).

**Win:** Not unlocked yet — check the real repo's Security tab, confirm Dependabot alerts + secret scanning are on, toggle security updates + push protection if off.

**Mission status:** All six success-criteria topics from `../MISSION.md` now have a lesson — Issues, Actions, Projects, Pages, Security. Insights/traffic (last mission bullet) has no dedicated lesson yet; worth a lesson 06 or folding into a wrap-up once the security win is retention-tested.
