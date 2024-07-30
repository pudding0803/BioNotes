---
layout: default
title: Research Notes
---

# Research Notes🔍

{% for note in site.research-notes %}
    {% if note != page %}
        {% assign current_date = note.date | date: "%Y-%m-%d" %}
        {% if current_date != previous_date %}
### {{ current_date }}
            {% assign previous_date = current_date %}
        {% endif %}
<div class="box px-5" data-href="{{ site.baseurl }}{{ note.url }}">
    <div class="has-text-weight-medium mb-4">{{ note.title }}</div>
    <div class="columns">
        <div class="column is-10">
            <div class="tags">
            {% for tag in note.tags %}
                <a class="tag is-primary is-light is-medium">
                    <span class="icon-text">
                        <span class="icon">
                            <i class="fas fa-tag"></i>
                        </span>
                        <span>{{ tag }}</span>
                    </span>
                </a>
            {% endfor %}
            </div>
        </div>
        <div class="column is-flex is-align-items-center">
            <span class="icon-text">
                <span class="icon">
                    <i class="fas fa-user"></i>
                </span>
                <span>{{ note.speaker }}</span>
            </span>
        </div>
    </div>
</div>
    {% endif %}
{% endfor %}

