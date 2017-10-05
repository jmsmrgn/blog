---
title: Archive
template: page
---

{% for date, groupedFiles in collections.post.files | groupbydate('YYYY') | dictsort | reverse %}
<div>

  #### {{date}}

  {% for file in groupedFiles | sort(false, true, 'date') | reverse %}
  - [{{file.title}}]({{file.url}}) ({{file.date | date('MMMM Do')}})
  {% endfor %}
</div>
{% endfor %}
