---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
---
<div class="books">
  {% for book in site.books %}
    {% include book.html %}
  {% endfor %}
</div>
