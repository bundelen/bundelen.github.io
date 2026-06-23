---
title: Installation
description: Install Python Collect, a fluent collection pipeline for Python.
---

New to Python Collect? Start with the [Introduction](/python-collect/introduction/) for an overview of what it does and why.

## Requirements

- Python 3.13+
- No runtime dependencies

## Install

Add it to your project with your dependency manager of choice:

```bash
uv add python-collect
```

or

```bash
pip install python-collect
```

## Quick start

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

`collect()`/`Collection()` accepts a `list`, a `dict`, another `Collection`, any other iterable, or `None`:

```python
from python_collect import collect, Collection

numbers = collect([1, 2, 3, 4, 5])
users = collect({"alice": 30, "bob": 25})
same = Collection([1, 2, 3])

collect(range(3)).to_list()   # [0, 1, 2]
collect().to_list()           # []
```

Every method that returns a collection returns a **new** `Collection`, except for a handful of mutating methods (`push`, `put`, `pop`, `shift`, `prepend`, `forget`, `pull`, `splice`, `transform`) that change the collection in place and return `self`.

When you're done chaining, pull the plain Python value back out:

```python
collect([1, 2, 3]).map(lambda n, i: n * 2).to_list()   # [2, 4, 6]
collect({"a": 1}).all()                                 # {"a": 1}
collect([1, 2, 3]).to_json()                             # "[1, 2, 3]"
```

A `Collection` also supports the usual Python protocols (`len()`, `in`, iteration, and indexing), so you often don't need to convert it at all.
