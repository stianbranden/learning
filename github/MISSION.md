# Mission: GitHub

## Why

Broad platform fluency. Git-the-tool is established (see `../git/MISSION.md` —
solo safety + team collaboration both retention-verified). This course covers
GitHub-the-platform: everything built around git that isn't git itself —
Issues, Actions, Projects, Pages, security tooling, releases. No single driving
task yet; goal is knowing what's possible so a real need (CI pipeline, project
board, OSS contribution) has a running start instead of a cold start.

This repo (`stianbranden/learning`, pushed to GitHub) is the practice ground —
lessons use it directly wherever possible instead of a throwaway sandbox.

## Success looks like

- Use Issues to track work: labels, milestones, linking issues to PRs, closing via commit message
- Explain what GitHub Actions is and read/write a simple workflow YAML (trigger, job, steps)
- Set up a basic CI workflow (e.g. run a check on push) on a real repo
- Use a Projects board to organize issues/PRs (views, status fields)
- Publish a GitHub Pages site from a repo
- Know what the Security tab offers (Dependabot alerts, secret scanning) at a "what is this for" level
- Navigate a repo's Insights (contributors, traffic) and know what they're for
- Cut a release (tag + notes) and know when a release is warranted vs. just merging to main

## Constraints

- Starting level: git CLI/PR workflow solid (see `../git/MISSION.md`). GitHub's
  web features (Issues, Actions, Projects, Pages, Security tab) are light
  exposure only — opened a PR/issue before, no fluency on what's possible
- Sequence: natural order — Issues/PRs first (closest to known git flow), then
  Actions, then Projects, Pages, security
- Lessons short enough to finish in one sitting
- Prefer working against the real `learning` repo on GitHub over a throwaway demo repo

## Out of scope

- Git internals / CLI mechanics — that's `../git/`, already covered
- Advanced Actions (matrix builds, reusable workflows, self-hosted runners) —
  revisit if a real CI need shows up
- GitHub Enterprise / org admin features
- Advanced security (CodeQL custom queries, SBOM) — awareness-level only for now
