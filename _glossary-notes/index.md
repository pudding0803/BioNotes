---
layout: default
title: Glossary Notes
---

# Glossary Notes📑

{% for note in site.glossary-notes %}
    {% if note != page %}
        {% assign current_letter = note.title | slice: 0, 1 | upcase %}
        {% if current_letter != previous_letter %}
## {{ current_letter }}
            {% assign previous_letter = current_letter %}
        {% endif %}
* [{{ note.title }}]({{ note.url }})
    {% endif %}
{% endfor %}
