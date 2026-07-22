# Mission: Git

## Why

Two goals, one tool. Solo: never lose work again — version everything, undo any mistake, and know exactly how to get back to a good state. Team: work in a shared repo without fear — branch, open PRs, and resolve merge conflicts without needing someone else to unstick things.

## Success looks like

- Explain what a commit actually is, and where any change lives at any moment (working directory / staging area / repository)
- Undo any common mistake — wrong file staged, bad commit message, committed to wrong branch, accidental `reset` — without googling
- Branch, merge, and resolve a real conflict solo, start to finish
- Open a pull request with a clean, reviewable history and respond to review feedback
- Read `git log --graph` and know what happened in a shared repo without asking

## Constraints

- Starting level: comfortable with `add` / `commit` / `push` / `pull`. Branches shaky. No mental model of what happens underneath.
- Uses a mix of CLI and VS Code's Git GUI — lessons teach the CLI command, and name the GUI button it maps to
- Lessons must be short enough to finish in one sitting

## Out of scope

- Git internals plumbing (`git cat-file`, object database surgery) — beyond the object model needed for the mental model
- Git hooks, submodules, LFS, monorepo tooling
- CI/CD, GitHub Actions
