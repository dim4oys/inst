# Idea: AI-запись на любительские игры

## Snapshot

- Status: hot
- Date discovered: 2026-04-25
- Market: RU/CIS, US, EU
- Language: ru/en
- Source count: 4
- Score: 43/50

## Problem

Организаторы любительских игр часто собирают людей вручную в Telegram/WhatsApp: кто идет, какой уровень, кто оплатил, кто отменился, кого поставить в лист ожидания. Каждая игра превращается в операционную переписку.

## Audience

Организаторы волейбола, футбола, баскетбола, падела, пиклбола и других регулярных групповых игр.

## Current behavior

Чаты, закрепленные посты, Google Sheets, переводы на карту, ручные напоминания и ручные замены.

## Proposed business

Telegram-бот или mini-app: календарь игр, запись, уровень игрока, оплата, waitlist, замены, напоминания и маленькая админ-панель для организатора.

## Evidence

| Source | Signal | URL | Date |
| --- | --- | --- | --- |
| Axios | Adult sports leagues are growing; volleyball is a leading category. | https://www.axios.com/2025/07/29/adult-sports-league | 2025-07-29 |
| Telemetr | Moscow volleyball channel posts manual signup-style game announcements. | https://telemetr.io/en/channels/1706009238-mskvolleyball/posts | 2026-04-25 |
| VolleyballGo | Existing marketplace-like volleyball discovery confirms demand. | https://volleyballgo.su/ | 2026-04-25 |
| Sport Groups | Sports groups discovery shows many local recurring activities. | https://sportgroups.ru/ | 2026-04-25 |

## Monetization

Subscription per organizer, setup fee, or small fee per paid booking. Start with 1,500-5,000 RUB/month for small organizers.

## Score

| Criterion | Score | Notes |
| --- | ---: | --- |
| Pain intensity | 5 | Manual coordination is painful and visible. |
| Frequency | 5 | Games repeat weekly. |
| Willingness to pay | 4 | Organizers already collect payments. |
| Market growth | 4 | Adult sports are growing. |
| Competition gap | 4 | Sports-specific workflow is a wedge. |
| MVP simplicity | 5 | Bot-first MVP is realistic. |
| Distribution | 4 | Organizers are findable in public groups. |
| Global potential | 4 | Same pain exists across cities and sports. |
| Regulation risk | 5 | Low if payments are handled carefully. |
| Platform risk | 3 | Messenger dependence. |

## Next test

Interview 10 volleyball organizers and manually run one week of signup/helpdesk for one organizer.

## Decision

Test first.
