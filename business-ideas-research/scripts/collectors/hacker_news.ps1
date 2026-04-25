param(
    [int]$Limit = 30,
    [string[]]$Feeds = @("showstories", "askstories", "newstories"),
    [string]$OutDir = "data/raw"
)

$ErrorActionPreference = "Stop"

$BaseUrl = "https://hacker-news.firebaseio.com/v0"
$RunDate = Get-Date -Format "yyyy-MM-dd"
$OutPath = Join-Path $OutDir "hacker_news_$RunDate.jsonl"
$Seen = @{}

New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

if (Test-Path -LiteralPath $OutPath) {
    Remove-Item -LiteralPath $OutPath -Force
}

foreach ($Feed in $Feeds) {
    $IdsUrl = "$BaseUrl/$Feed.json"
    $Ids = Invoke-RestMethod -Uri $IdsUrl -TimeoutSec 30

    foreach ($Id in ($Ids | Select-Object -First $Limit)) {
        if ($Seen.ContainsKey([string]$Id)) {
            continue
        }

        $Seen[[string]$Id] = $true
        $ItemUrl = "$BaseUrl/item/$Id.json"
        $Item = Invoke-RestMethod -Uri $ItemUrl -TimeoutSec 30

        if ($null -eq $Item -or $Item.type -ne "story") {
            continue
        }

        $ItemScore = 0
        if ($null -ne $Item.score) { $ItemScore = [int]$Item.score }

        $ItemComments = 0
        if ($null -ne $Item.descendants) { $ItemComments = [int]$Item.descendants }

        $Record = [ordered]@{
            id          = $Item.id
            source      = "hacker_news"
            feed        = $Feed
            title       = $Item.title
            url         = $Item.url
            hn_url      = "https://news.ycombinator.com/item?id=$($Item.id)"
            author      = $Item.by
            score       = $ItemScore
            comments    = $ItemComments
            published_at = ([DateTimeOffset]::FromUnixTimeSeconds([int64]$Item.time)).UtcDateTime.ToString("s") + "Z"
            collected_at = (Get-Date).ToUniversalTime().ToString("s") + "Z"
        }

        ($Record | ConvertTo-Json -Compress -Depth 5) | Add-Content -LiteralPath $OutPath -Encoding utf8
        Start-Sleep -Milliseconds 80
    }
}

Write-Output $OutPath
