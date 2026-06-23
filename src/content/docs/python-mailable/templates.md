---
title: Templates
description: Write the Jinja2 HTML and plain-text templates rendered by a Mailable.
---

Python Mailable renders templates with [Jinja2](https://jinja.palletsprojects.com/). Whatever dict you pass to [`with_context()`](/python-mailable/building-mailables/#with_context) becomes the variables available inside both the HTML template (set with `template()`) and the plain-text template (set with `text_template()`).

## The HTML template

The HTML template is a normal Jinja2 file. Use `{{ ... }}` to interpolate context variables, and dot notation to reach attributes on an object:

```jinja2
<!-- emails/order_shipped.html.j2 -->
<!DOCTYPE html>
<html>
  <body>
    <p>Hi {{ user.name }},</p>

    <p>Your order <strong>#{{ order_id }}</strong> has shipped.</p>

    {% if tracking_number %}
    <p>Tracking number: <strong>{{ tracking_number }}</strong></p>
    {% endif %}

    <ul>
      {% for item in items %}
      <li>{{ item.name }} &times; {{ item.quantity }}</li>
      {% endfor %}
    </ul>
  </body>
</html>
```

```python
self.template("emails/order_shipped.html.j2").with_context(
    {
        "user": user,
        "order_id": "123456",
        "tracking_number": "1Z999AA10123456784",
        "items": [{"name": "Widget", "quantity": 2}],
    }
)
```

## The plain-text template

A text template uses the same Jinja2 syntax, but without any markup, for clients that can't (or shouldn't) render HTML:

```jinja2
{# emails/order_shipped.txt.j2 #}
Hi {{ user.name }},

Your order #{{ order_id }} has shipped.

{% if tracking_number %}
Tracking number: {{ tracking_number }}
{% endif %}

{% for item in items %}
- {{ item.name }} x{{ item.quantity }}
{% endfor %}
```

The HTML and text templates are rendered independently with the same context, so you can format each one however reads best for its medium.

:::note
Both templates render through the same `Environment(autoescape=True)`, so HTML-special characters (`&`, `<`, `>`) in your context values are escaped even inside the plain-text template. Keep that in mind if a context value might contain those characters.
:::

## Filters and control structures

Templates support the usual Jinja2 building blocks:

- Filters, e.g. `{{ user.name|upper }}` or `{{ items|length }}`
- Conditionals, e.g. `{% if %}` / `{% elif %}` / `{% else %}` / `{% endif %}`
- Loops, e.g. `{% for item in items %}` / `{% endfor %}`
- Comments, e.g. `{# this won't be rendered #}`

See the [Jinja2 template documentation](https://jinja.palletsprojects.com/en/stable/templates/) for the full syntax.
