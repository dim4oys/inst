# Scripts

Future scripts should be split into three groups:

```text
collectors/  fetch signals from each source
analyzers/   cluster, score and summarize signals
exporters/   write Markdown, CSV, JSON and reports
```

Do not put API keys in scripts. Use environment variables and document them in `.env.example`.
