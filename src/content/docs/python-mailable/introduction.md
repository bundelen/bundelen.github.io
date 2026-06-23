---
title: Introduction
description: What Python Mailable is, and why you'd reach for it.
---

**Python Mailable** is an email builder for Python, inspired by Laravel's `Mailable` class. It provides a clean and reusable structure for defining, composing, and rendering emails with rich context and templates.

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
```

:::caution
Python Mailable only **renders** email content (HTML and plain text). It does not send email. Pass the rendered output to your own SMTP client or email delivery service.
:::

## Why Python Mailable?

Mixing string templates, recipients, and attachments directly into your sending code makes emails hard to test and hard to reuse. Python Mailable gives each email its own class with a single `build()` method, so the structure of an email is defined once and rendered the same way everywhere.

## Features

- Define email classes with subjects, recipients, and templates
- Render HTML and plain-text versions from separate Jinja2 templates
- Pass context to templates for dynamic rendering
- Attach files easily
- Designed for clarity, testability, and reusability
