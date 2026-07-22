# Git Resources

## Knowledge

- [Book: _Pro Git_ (2nd ed.) — Scott Chacon & Ben Straub](https://git-scm.com/book/en/v2)
  The official Git book, free online. The canonical source; prefer it over any blog post. Use for: definitive answers on any command's real behaviour.
- [Pro Git 2.2 — Recording Changes to the Repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
  Tracked/untracked, staged/unstaged, the file lifecycle. Use for: the three-trees model, `git status`, `git add`, `git diff`.
- [Pro Git 2.4 — Undoing Things](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things)
  `--amend`, unstaging, discarding changes. Use for: the "I made a mistake" playbook.
- [Pro Git 3.2 — Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
  Branch as a movable pointer, fast-forward vs. three-way merge, conflict resolution. Use for: the whole team-collaboration half of the mission.
- [Git Reference Manual (`git help <cmd>`)](https://git-scm.com/docs)
  Man pages. Dense but exact. Use for: flag semantics when a tutorial is ambiguous.

## Skills (interactive practice)

- [Learn Git Branching](https://learngitbranching.js.org/)
  Visual, in-browser sandbox with levels. Branch/merge/rebase graphs animate as you type real commands. Use for: making branching intuition stick after a lesson introduces it.
- [Oh My Git!](https://ohmygit.org/)
  Open-source card game over a real Git repo; visualizes the commit graph live. Use for: playful spaced repetition of graph operations.
- [GitHub Skills](https://skills.github.com/)
  Guided courses that run inside a real GitHub repo. Use for: the PR / review / collaboration workflow specifically.

## Wisdom (Communities)

- [r/git](https://reddit.com/r/git)
  Focused, low-noise. Use for: "what actually happened to my repo" recovery questions — post the `git log --graph --oneline --all` output.
- [Stack Overflow `git` tag](https://stackoverflow.com/questions/tagged/git)
  Enormous archive of already-answered failure modes. Use for: search before asking; almost every mistake is documented.

## Gaps

- No resource picked yet for VS Code Git GUI specifically — lessons currently map CLI → GUI by hand. Find one if the GUI half stays load-bearing.
