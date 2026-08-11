# 0002 — Data Structures Established

**Lesson:** 0002-lists-dicts-tuples
**Date:** 2026-08-12
**Status:** Established

## What was learned

- Lists: ordered, mutable, 0-indexed, `[]`; `.append()`, `.pop()`, `.sort()`
- Slicing: `items[start:stop]`, stop excluded, omit either end
- List comprehensions: `[expr for x in iterable]`
- Dicts: key-value, `{}`, `.get(key, default)` for safe access, `.items()` iteration
- Tuples: immutable, `()`, unpacking (`a, b = pair`), used as dict keys / function returns
- Mapped each structure to its pandas analog (Series ≈ list, DataFrame row ≈ dict, `.iterrows()` ≈ tuple) to keep the mission's end goal visible

## Evidence

User asked to move on to the next lesson after 0002 — treating the portfolio-tracker exercise as completed.

## What's next

Strings, slicing on strings, and file I/O — opening a real file with `with open(...)`,
reading lines, and parsing CSV rows before pandas abstracts it away. This is the last
stop before `pandas.read_csv` actually makes sense as more than magic.

## Non-obvious notes

- No new non-obvious teaching adjustment surfaced this lesson — pace and format (concept → comprehension → pandas-analogy note → quiz → exercise) is working, keep it.
