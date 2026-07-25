/* Reusable retrieval-practice quiz component.
 *
 * Usage in a lesson:
 *   <div class="quiz" data-quiz='[
 *     {"q":"Question text?","a":["opt one","opt two"],"correct":0,"why":"explanation"}
 *   ]'></div>
 *   <script src="../assets/quiz.js"></script>
 *
 * Design rules baked in:
 *  - options are rendered in given order; keep them equal length so formatting leaks no clue
 *  - feedback is immediate (storage strength via retrieval + corrective feedback)
 *  - answers cannot be changed after commit; the miss is the point
 */
(function () {
  const css = `
  .quiz{border:1px solid var(--rule);border-radius:6px;padding:1.25rem 1.4rem;margin:2rem 0;background:#fff}
  .quiz-head{font-family:ui-monospace,Consolas,monospace;font-size:.7rem;letter-spacing:.12em;
    text-transform:uppercase;color:var(--accent);margin-bottom:1rem}
  .quiz-q{margin:0 0 .75rem;font-weight:600}
  .quiz-item{margin-bottom:1.75rem}
  .quiz-item:last-child{margin-bottom:0}
  .quiz-opt{display:block;width:100%;text-align:left;font:inherit;font-size:.93rem;
    background:#fbfaf6;border:1px solid var(--rule);border-radius:4px;padding:.5rem .75rem;
    margin-bottom:.4rem;cursor:pointer;transition:background .12s,border-color .12s}
  .quiz-opt:hover:not(:disabled){background:#f2efe6}
  .quiz-opt:disabled{cursor:default}
  .quiz-opt.right{background:var(--ok-soft);border-color:var(--ok);font-weight:600}
  .quiz-opt.wrong{background:var(--bad-soft);border-color:var(--bad);text-decoration:line-through}
  .quiz-why{font-size:.9rem;color:var(--ink-soft);margin-top:.5rem;padding-left:.75rem;
    border-left:2px solid var(--rule);display:none}
  .quiz-why.show{display:block}
  .quiz-score{margin-top:1rem;padding-top:.75rem;border-top:1px solid var(--rule);
    font-family:ui-monospace,Consolas,monospace;font-size:.82rem;color:var(--ink-soft)}`;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  document.querySelectorAll('.quiz').forEach(function (root) {
    const items = JSON.parse(root.dataset.quiz);
    const title = root.dataset.title || 'Check yourself — no scrolling back';
    let answered = 0, correct = 0;

    root.innerHTML = '<div class="quiz-head">' + title + '</div>';

    items.forEach(function (item, i) {
      const wrap = document.createElement('div');
      wrap.className = 'quiz-item';
      const q = document.createElement('p');
      q.className = 'quiz-q';
      q.textContent = (i + 1) + '. ' + item.q;
      wrap.appendChild(q);

      const why = document.createElement('div');
      why.className = 'quiz-why';
      why.textContent = item.why;

      const buttons = item.a.map(function (opt, j) {
        const b = document.createElement('button');
        b.className = 'quiz-opt';
        b.textContent = opt;
        b.onclick = function () {
          buttons.forEach(function (other, k) {
            other.disabled = true;
            if (k === item.correct) other.classList.add('right');
          });
          if (j !== item.correct) b.classList.add('wrong'); else correct++;
          answered++;
          why.classList.add('show');
          score.textContent = 'answered ' + answered + '/' + items.length +
            '  ·  correct ' + correct;
        };
        wrap.appendChild(b);
        return b;
      });

      wrap.appendChild(why);
      root.appendChild(wrap);
    });

    const score = document.createElement('div');
    score.className = 'quiz-score';
    score.textContent = 'answered 0/' + items.length + '  ·  correct 0';
    root.appendChild(score);
  });
})();
