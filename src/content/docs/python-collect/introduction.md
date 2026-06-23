---
title: Introduction
description: What Python Collect is, and why you'd reach for it.
---

**Python Collect** is a fluent collection pipeline for Python, modeled after [collect.js](https://collect.js.org/) (itself a port of Laravel's `Collection`). It wraps a `list` or `dict` and gives you chainable, expressive methods for transforming, filtering, and aggregating data instead of writing loops and comprehensions by hand.

```python
from python_collect import collect

result = (
    collect([1, 2, 3, 4, 5, 6])
    .filter(lambda n, i: n % 2 == 0)
    .map(lambda n, i: n * n)
    .sum()
)
# 56
```

## Why Python Collect?

Loops and list comprehensions get hard to read once you're chaining more than one or two operations. Python Collect lets each step read top to bottom, named for what it does, instead of nesting `for` loops or stacking comprehensions.

## Features

- Over 100 chainable methods covering filtering, mapping, grouping, sorting, and aggregation
- Works with both `list` and `dict` data, passing indices or keys to your callbacks automatically
- Returns a new `Collection` by default; a handful of explicit methods (`push`, `put`, `pop`, ...) mutate in place
- Extendable with your own methods via `Collection.macro()`
- Zero runtime dependencies, Python 3.13+
