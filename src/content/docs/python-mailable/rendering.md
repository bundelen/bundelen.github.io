---
title: Rendering
description: Render HTML and plain-text output from a Mailable.
---

Once a `Mailable` is [built](/python-mailable/building-mailables/) and its [templates are written](/python-mailable/templates/), render its HTML or plain-text content with `render()` and `render_as_text()`.

### `render()`

Renders the HTML template with the current context and returns the result as a string. Returns `None` if no `template()` was set.

```python
email = OrderShipped(user).build()
html = email.render()
```

### `render_as_text()`

Renders the plain-text template with the current context. Returns `None` if no `text_template()` was set.

```python
text = email.render_as_text()
```

`render()` also accepts `as_text=True` as an equivalent way to render the text version: `email.render(as_text=True)`.

Both `render()` and `render_as_text()` accept an optional `project_root: Path` argument if your templates live outside the default project root (the `python_mailable` package's parent directory).

## Method reference

| Method                                    | Description                                                              |
| ----------------------------------------- | ------------------------------------------------------------------------ |
| `render(project_root=..., as_text=False)` | Renders the HTML (or text, if `as_text=True`) template. `None` if unset. |
| `render_as_text(project_root=...)`        | Renders the plain-text template. `None` if unset.                        |
