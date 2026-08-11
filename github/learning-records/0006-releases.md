# Releases — tag + notes as a pinnable snapshot

**2026-08-11 — Lesson 07 delivered.**

**Key insight:** A release is thin under the hood — a git tag (pointer to one commit) plus title, notes, and optional assets. The "release" is a wrapper GitHub builds around a concept the user already half-knows from git; `git tag` itself was never taught in `../../git/` lessons, so this lesson introduced just enough of it (lightweight pointer, fixed forever) without re-teaching git CLI mechanics.

**Gotcha taught:** GitHub's own docs describe *what* a release is but don't prescribe *when* to cut one. Framed as a judgment call: pin a version when an outside consumer needs a fixed reference point (library, Docker tag, downloadable binary); skip it when the only "version" that matters is whatever's on main (continuous deploy, no outside consumers). This repo is the second case — releases here are for practicing the mechanic, not because the repo needs shipping.

**Design choice:** win step drafts a release (`v0.1.0`, Generate release notes) but explicitly does not publish — draft releases are private/editable/deletable, so the practice rep costs nothing and doesn't put a real artifact on the public-facing (if ever made public) repo.

**Mission status:** all eight `../MISSION.md` success bullets now have a corresponding lesson (Issues, Actions, CI, Projects, Pages, Security, Insights/Traffic, Releases). Course's original scope is fully covered — next session should ask the user whether to close out the mission, extend it (advanced Actions, org features — currently out of scope), or start a new course.

**Win:** not yet retention-tested — check whether the user actually drafted the release on `stianbranden/learning`.
