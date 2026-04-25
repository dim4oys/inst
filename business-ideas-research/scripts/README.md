# Scripts

Future scripts should be split into three groups:

```text
collectors/  fetch signals from each source
analyzers/   cluster, score and summarize signals
exporters/   write Markdown, CSV, JSON and reports
```

Do not put API keys in scripts. Use environment variables and document them in `.env.example`.

## First pilot

Collect fresh Hacker News signals:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/collectors/hacker_news.ps1 -Limit 20
```

Generate the pilot report:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/analyzers/hacker_news_pilot_report.ps1
```
