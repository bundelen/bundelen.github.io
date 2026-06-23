---
title: Using Your Own Mail Client
description: Send the HTML and text rendered by a Mailable through your own SMTP client or delivery service.
---

Python Mailable only builds and renders content; it doesn't send mail. Pass the rendered output, along with the recipients and attachments tracked on the `Mailable`, to your own SMTP client or delivery service:

```python
email = OrderShipped(user).build()

your_mail_client.send(
    to=email._to_email,
    cc=email._to_cc,
    bcc=email._to_bcc,
    subject=email._subject_line,
    html=email.render(),
    text=email.render_as_text(),
    attachments=email._attachments,
)
```

This keeps Python Mailable focused on composing and rendering emails, while delivery stays with whichever provider or library you already use (e.g. `smtplib`, a transactional email API, or your framework's mailer).
