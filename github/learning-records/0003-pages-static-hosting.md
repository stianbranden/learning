# Pages — free static hosting from a repo

**2026-08-09 — Lesson 04 delivered.**

**Key insight:** There are two types of site — user/org sites (`<username>.github.io` repo → root URL) and project sites (any repo → subpath URL). This naming convention controls the URL structure.

**Second key insight:** There are exactly two publishing sources — deploy-from-branch (zero config, for plain files) and GitHub Actions (build step, for frameworks). For this workspace's static HTML, branch deploy is the right choice.

**Important gotcha taught:** Private repo ≠ private site. On GitHub Free, the published Pages site is always publicly accessible regardless of repo visibility. Never put sensitive data in a Pages site.

**Connection to prior lessons:** Pages closes the loop: Issues track work → PRs deliver changes → Actions check them → Pages publishes them. Actions can even be the publishing source, unifying CI and deploy.

**Not yet covered:** Custom domains, Jekyll as a static site generator, Actions-based deploy workflows (covered at awareness level only — revisit if a real build-step need shows up).

**Win:** Enable Pages on the real `learning` repo — deploy from `main`, visit the live URL. The entire learning workspace becomes a published website.
