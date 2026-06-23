---
title: Building Mailables
description: Define a Mailable subclass and configure recipients, subject, templates, context, and attachments.
---

`Mailable` is an abstract `dataclass` base class. Every email you define subclasses it and implements `build()`, which configures the email through a fluent, chainable API and returns `self`.

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

Any dataclass fields you add (like `user` above) are available to `build()` for composing the recipient, subject, and template context.

## Recipients

### `to()`

Sets the primary recipient's email address.

```python
self.to("jane@example.com")
```

### `cc()`

Adds one or more CC recipients. Accepts multiple arguments, and you can call it more than once; addresses just accumulate.

```python
self.cc("manager@example.com")
self.cc("manager@example.com", "ops@example.com")
```

### `bcc()`

Adds one or more BCC recipients, with the same call signature as `cc()`.

```python
self.bcc("audit@example.com")
self.bcc("audit@example.com", "compliance@example.com")
```

## Subject

### `subject()`

Sets the email's subject line.

```python
self.subject("Your order has shipped!")
```

## Template paths

### `template()`

Sets the path to the HTML Jinja2 template, resolved relative to the project root.

```python
self.template("emails/order_shipped.html.j2")
```

### `text_template()`

Sets the path to a separate plain-text Jinja2 template, for sending a text alternative alongside (or instead of) HTML.

```python
self.text_template("emails/order_shipped.txt.j2")
```

Both are optional and independent: set either, both, or neither. For how to write the content of these template files, including Jinja2 syntax and examples, see [Templates](/python-mailable/templates/).

## Context

### `with_context()`

Merges a dict of template variables into the email's context. Safe to call multiple times; later calls add to (and override matching keys in) the existing context.

```python
self.with_context({"user": self.user, "order_id": self.order_id})
```

```python
@dataclass
class OrderShipped(Mailable):
    user: User

    def build(self):
        return (
            self.to(self.user.email)
                .subject("Your order has shipped!")
                .template("emails/order_shipped.html.j2")
                .text_template("emails/order_shipped.txt.j2")
                .with_context({"user": self.user})
        )
```

## Attachments

### `attach()`

Registers a file path to be attached to the email. Call it once per file; paths accumulate in order.

```python
self.attach("invoices/order_42.pdf")
self.attach("invoices/order_42.pdf").attach("packing_slip.pdf")
```

Python Mailable only tracks attachment paths. Actually attaching the files to an outgoing message is the responsibility of your mail-sending code, since this package doesn't send mail itself (see [Using your own mail client](/python-mailable/using-your-own-mail-client/)).

## Method reference

| Method                       | Description                                               |
| ---------------------------- | --------------------------------------------------------- |
| `to(recipient_email)`        | Sets the primary recipient.                               |
| `cc(*emails)`                | Adds CC recipients (accumulates across calls).            |
| `bcc(*emails)`               | Adds BCC recipients (accumulates across calls).           |
| `subject(subject_line)`      | Sets the subject line.                                    |
| `template(path)`             | Sets the HTML template path.                              |
| `text_template(path)`        | Sets the plain-text template path.                        |
| `with_context(context_dict)` | Merges variables into the template context.               |
| `attach(file_path)`          | Registers a file path as an attachment.                   |
| `build()`                    | Abstract: implement it to configure and return the email. |

All configuration methods (`to`, `cc`, `bcc`, `subject`, `template`, `text_template`, `with_context`, `attach`) return `self`, so they chain freely in any order inside `build()`.
