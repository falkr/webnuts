environment:
    pip install jinja2 jinja2-cli

build:
    jinja2 templates/main.j2 data.json > index.html