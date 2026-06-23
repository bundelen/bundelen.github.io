---
title: Installation
description: Install Python Mailable, an email builder for Python.
---

New to Python Mailable? Start with the [Introduction](/python-mailable/introduction/) for an overview of what it does and why.

## Requirements

- Python 3.13+
- [Jinja2](https://jinja.palletsprojects.com/) for template rendering

## Install

Add it to your project with your dependency manager of choice:

```bash
uv add python-mailable
```

or

```bash
pip install python-mailable
```

## Quick start

Subclass `Mailable` and implement `build()`:

```python
from dataclasses import dataclass
from python_mailable.mailable import Mailable

@dataclass
class OrderShipped(Mailable):
    user: User

    def build(self):
        return (
            self.to(self.user.email)
                .subject("Your order has shipped!")
                .template("emails/order_shipped.html.j2")
                .with_context({"user": self.user})
        )

email = OrderShipped(user).build()
html = email.render()
```
