param(
    [string]$RawPath = "",
    [string]$ReportDir = "reports/weekly",
    [int]$Top = 15
)

$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($RawPath)) {
    $RawPath = Get-ChildItem -LiteralPath "data/raw" -Filter "hacker_news_*.jsonl" |
        Sort-Object LastWriteTime -Descending |
        Select-Object -First 1 -ExpandProperty FullName
}

if ([string]::IsNullOrWhiteSpace($RawPath) -or -not (Test-Path -LiteralPath $RawPath)) {
    throw "Raw Hacker News JSONL file was not found."
}

New-Item -ItemType Directory -Force -Path $ReportDir | Out-Null

$RunDate = Get-Date -Format "yyyy-MM-dd"
$ReportPath = Join-Path $ReportDir "$RunDate-hacker-news-pilot.md"
$DisplayRawPath = $RawPath
try {
    $DisplayRawPath = (Resolve-Path -LiteralPath $RawPath -Relative) -replace "^\.\\", ""
}
catch {
    $DisplayRawPath = $RawPath
}

$PainTerms = @(
    "alternative", "manual", "expensive", "hard", "slow", "can't find",
    "looking for", "need", "workflow", "spreadsheet", "boring", "tedious"
)

$BusinessTerms = @(
    "ai", "agent", "llm", "automation", "workflow", "saas", "api", "data",
    "analytics", "search", "security", "privacy", "finance", "invoice",
    "marketplace", "developer", "productivity", "email", "calendar", "crm"
)

function Get-Tags {
    param([string]$Text)

    $Lower = $Text.ToLowerInvariant()
    $Tags = New-Object System.Collections.Generic.List[string]

    if ($Lower -match "\b(ai|llm|agent|prompt|model|inference|openai|claude)\b") { $Tags.Add("ai") }
    if ($Lower -match "\b(api|cli|sdk|database|github|developer|code|terminal|postgres|server)\b") { $Tags.Add("devtools") }
    if ($Lower -match "\b(workflow|automate|automation|productivity|email|calendar|notes|spreadsheet)\b") { $Tags.Add("productivity") }
    if ($Lower -match "\b(data|analytics|dashboard|search|crawler|monitor|report)\b") { $Tags.Add("data") }
    if ($Lower -match "\b(security|privacy|auth|password|compliance|encrypt)\b") { $Tags.Add("security") }
    if ($Lower -match "\b(finance|invoice|accounting|tax|payment|billing)\b") { $Tags.Add("finance") }
    if ($Lower -match "\b(learn|course|school|education|teacher|student)\b") { $Tags.Add("education") }
    if ($Lower -match "\b(shop|ecommerce|marketplace|store|retail|seller)\b") { $Tags.Add("commerce") }

    if ($Tags.Count -eq 0) {
        $Tags.Add("general")
    }

    return $Tags.ToArray()
}

function Get-SignalScore {
    param(
        [object]$Item,
        [string[]]$Tags
    )

    $RawTitle = ""
    if ($null -ne $Item.title) { $RawTitle = [string]$Item.title }
    $Title = $RawTitle.ToLowerInvariant()
    $Score = 0

    $Score += [Math]::Min(10, [Math]::Floor(([int]$Item.score) / 15))
    $Score += [Math]::Min(8, [Math]::Floor(([int]$Item.comments) / 4))

    if ($Item.feed -eq "showstories") { $Score += 6 }
    if ($Item.feed -eq "askstories") { $Score += 5 }
    if ($Title.StartsWith("show hn:")) { $Score += 4 }
    if ($Title.StartsWith("ask hn:")) { $Score += 3 }

    $BusinessHits = 0
    foreach ($Term in $BusinessTerms) {
        if ($Title.Contains($Term)) { $BusinessHits += 1 }
    }
    $Score += [Math]::Min(12, $BusinessHits * 3)

    $PainHits = 0
    foreach ($Term in $PainTerms) {
        if ($Title.Contains($Term)) { $PainHits += 1 }
    }
    $Score += [Math]::Min(12, $PainHits * 4)

    if ($Tags -contains "ai") { $Score += 2 }
    if ($Tags -contains "devtools") { $Score += 2 }
    if ($Tags -contains "productivity") { $Score += 2 }

    return [Math]::Min(50, $Score)
}

$Items = Get-Content -LiteralPath $RawPath -Encoding utf8 |
    Where-Object { -not [string]::IsNullOrWhiteSpace($_) } |
    ForEach-Object { $_ | ConvertFrom-Json }

$Analyzed = foreach ($Item in $Items) {
    $ItemTitle = ""
    if ($null -ne $Item.title) { $ItemTitle = [string]$Item.title }
    $Tags = Get-Tags -Text $ItemTitle
    $SignalScore = Get-SignalScore -Item $Item -Tags $Tags

    [pscustomobject]@{
        id           = $Item.id
        feed         = $Item.feed
        title        = $Item.title
        hn_url       = $Item.hn_url
        external_url = $Item.url
        points       = [int]$Item.score
        comments     = [int]$Item.comments
        tags         = ($Tags -join ", ")
        signal_score = $SignalScore
    }
}

$TopItems = $Analyzed | Sort-Object signal_score, comments, points -Descending | Select-Object -First $Top
$TagCounts = @{}

foreach ($Item in $Analyzed) {
    foreach ($Tag in ($Item.tags -split ", ")) {
        if (-not $TagCounts.ContainsKey($Tag)) { $TagCounts[$Tag] = 0 }
        $TagCounts[$Tag] += 1
    }
}

$ThemeRows = $TagCounts.GetEnumerator() |
    Sort-Object Value -Descending |
    ForEach-Object { "| $($_.Key) | $($_.Value) |" }

$SignalRows = foreach ($Item in $TopItems) {
    $Title = ($Item.title -replace "\|", "\|")
    "| $($Item.signal_score) | $($Item.feed) | $Title | $($Item.tags) | $($Item.points) | $($Item.comments) | [HN]($($Item.hn_url)) |"
}

$IdeaRows = foreach ($Item in ($TopItems | Select-Object -First 5)) {
    $CleanTitle = $Item.title -replace "^Show HN:\s*", "" -replace "^Ask HN:\s*", ""
    $Angle = "Check whether this is a repeated pain or only a launch signal."

    if ($Item.tags -match "ai") { $Angle = "Look for a narrow paid workflow where AI can remove manual work." }
    elseif ($Item.tags -match "devtools") { $Angle = "Check if developers already pay for this workflow or if it can become open-source lead generation." }
    elseif ($Item.tags -match "productivity") { $Angle = "Validate daily/weekly usage frequency and willingness to pay." }
    elseif ($Item.tags -match "security") { $Angle = "Check buyer urgency, compliance pressure and trust requirements." }

    "| $CleanTitle | $($Item.tags) | $($Item.signal_score)/50 | $Angle |"
}

$Report = @"
# Hacker News Pilot Report: $RunDate

## Summary

Pilot source: Hacker News.

Raw file: ``$DisplayRawPath``

Signals reviewed: $($Analyzed.Count)

This is an early signal report, not a final list of business ideas. The goal is to identify themes worth deeper validation.

## Theme Counts

| Theme | Signals |
| --- | ---: |
$($ThemeRows -join "`n")

## Top Signals

| Signal score | Feed | Title | Tags | HN points | Comments | Link |
| ---: | --- | --- | --- | ---: | ---: | --- |
$($SignalRows -join "`n")

## Candidate Directions

| Direction | Tags | Score | Next validation step |
| --- | --- | ---: | --- |
$($IdeaRows -join "`n")

## What This Test Proves

- The project can fetch fresh market/product signals from a public source.
- We can turn noisy posts into a ranked shortlist.
- The next layer should add clustering across sources, because one HN signal is not enough to call something a strong business idea.

## Next Step

Add one more independent source, preferably GitHub search/trending or Product Hunt, then compare overlapping themes.
"@

$Report | Set-Content -LiteralPath $ReportPath -Encoding utf8
Write-Output $ReportPath
