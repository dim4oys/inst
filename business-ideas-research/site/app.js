const ideas = [
  {
    id: "agent-ops",
    title: "Agent Ops Stack",
    status: "watch",
    tags: ["ai", "devtools"],
    score: 38,
    sourceCount: 4,
    market: "Global",
    short:
      "Операционный слой для команд, которые уже используют AI-агентов: знания, секреты, браузерные задачи и аудит.",
    thesis:
      "Сигналы сходятся вокруг одной боли: агенты становятся полезными, но управлять их памятью, доступами и действиями пока неудобно и рискованно.",
    good: [
      "Сразу несколько независимых HN-сигналов в одном кластере.",
      "Понятная B2B-аудитория: команды разработки и AI-автоматизации.",
      "Можно начать с узкого MVP: Git-backed knowledge base плюс credential proxy."
    ],
    bad: [
      "Рынок еще формируется, поэтому платежеспособность нужно проверять интервью.",
      "Работа с секретами требует доверия и аккуратной безопасности."
    ],
    next:
      "Проверить повторение темы в GitHub и Product Hunt, затем поговорить с 5 командами, которые реально запускают агентов.",
    scores: {
      pain: 4,
      frequency: 4,
      payment: 3,
      growth: 5,
      competition: 3,
      mvp: 3,
      distribution: 4,
      global: 5,
      regulation: 4,
      platform: 3
    },
    demand: 78,
    launchDifficulty: 58,
    evidence: [
      ["LLM wiki for agents", "https://news.ycombinator.com/item?id=47899844"],
      ["Agent credential vault", "https://news.ycombinator.com/item?id=47865822"],
      ["Browser Harness", "https://news.ycombinator.com/item?id=47890841"],
      ["Agent MCP Studio", "https://news.ycombinator.com/item?id=47899375"]
    ]
  },
  {
    id: "agent-vault",
    title: "Credential Vault for Agents",
    status: "promising",
    tags: ["ai", "security"],
    score: 36,
    sourceCount: 2,
    market: "Global",
    short:
      "Прокси и хранилище доступов, которое позволяет агентам выполнять задачи без прямой передачи секретов.",
    thesis:
      "Если AI-агенты получают доступ к браузеру, репозиториям и SaaS, секреты становятся отдельной покупаемой проблемой.",
    good: [
      "Высокая боль при любом production-использовании агентов.",
      "Есть понятная ценность для команд: меньше риска утечек и случайных действий.",
      "Можно продавать как security layer поверх существующих agent workflows."
    ],
    bad: [
      "Нужна сильная экспертиза безопасности.",
      "Доверие к новому vault-продукту будет расти медленно."
    ],
    next:
      "Проверить, есть ли в GitHub issues и Reddit повторяющиеся жалобы на безопасный доступ агентов к сервисам.",
    scores: {
      pain: 5,
      frequency: 3,
      payment: 4,
      growth: 5,
      competition: 3,
      mvp: 2,
      distribution: 3,
      global: 5,
      regulation: 3,
      platform: 3
    },
    demand: 74,
    launchDifficulty: 72,
    evidence: [["Agent Vault", "https://news.ycombinator.com/item?id=47865822"]]
  },
  {
    id: "browser-harness",
    title: "Browser Task Harness",
    status: "watch",
    tags: ["ai", "automation"],
    score: 34,
    sourceCount: 2,
    market: "Global",
    short:
      "Среда, где агент может безопасно выполнять браузерные задачи с ограничениями, логами и повторяемыми сценариями.",
    thesis:
      "Браузер остается универсальным интерфейсом к бизнес-процессам, а агентам нужен контролируемый способ работать в нем.",
    good: [
      "Понятный тренд: AI-агенты все чаще хотят действовать, а не только отвечать.",
      "Можно продавать execution minutes, hosted workers или team workspace.",
      "Полезно для агентств автоматизации и внутренних ops-команд."
    ],
    bad: [
      "Много технических краевых случаев.",
      "Часть задач может быть лучше решена через API, а не браузер."
    ],
    next:
      "Собрать 20 конкретных browser workflows, которые бизнес уже делает вручную, и оценить готовность платить.",
    scores: {
      pain: 4,
      frequency: 4,
      payment: 3,
      growth: 5,
      competition: 3,
      mvp: 3,
      distribution: 3,
      global: 5,
      regulation: 3,
      platform: 1
    },
    demand: 70,
    launchDifficulty: 66,
    evidence: [["Browser Harness", "https://news.ycombinator.com/item?id=47890841"]]
  },
  {
    id: "sqlite-notify",
    title: "Realtime Layer for SQLite",
    status: "watch",
    tags: ["devtools", "data"],
    score: 30,
    sourceCount: 1,
    market: "Global",
    short:
      "Инструменты, которые дают SQLite больше realtime-возможностей для маленьких приложений и локальных first-продуктов.",
    thesis:
      "SQLite все чаще выбирают для простых и локальных приложений; вокруг него появляются точечные расширения для production-like сценариев.",
    good: [
      "Высокий HN-интерес: много очков и комментариев.",
      "Аудитория разработчиков легко достижима через open-source.",
      "Может стать developer-led продуктом с paid cloud или support."
    ],
    bad: [
      "Пока это больше devtool-сигнал, чем очевидный бизнес.",
      "Монетизация вокруг низкоуровневых open-source библиотек сложная."
    ],
    next:
      "Проверить GitHub stars growth, issues и проекты, которые уже пытаются использовать SQLite как realtime backbone.",
    scores: {
      pain: 3,
      frequency: 3,
      payment: 2,
      growth: 4,
      competition: 3,
      mvp: 4,
      distribution: 4,
      global: 5,
      regulation: 5,
      platform: 4
    },
    demand: 61,
    launchDifficulty: 42,
    evidence: [["Honker", "https://news.ycombinator.com/item?id=47874647"]]
  },
  {
    id: "home-server-os",
    title: "Friendly Home Server OS",
    status: "archive",
    tags: ["devtools", "consumer"],
    score: 26,
    sourceCount: 1,
    market: "US/EU",
    short:
      "Упрощенная операционная система для домашнего сервера, self-hosting и локального хранения данных.",
    thesis:
      "Интерес есть, но пока он больше похож на hobbyist-сегмент, где высокая любовь к продукту не всегда превращается в платежи.",
    good: [
      "Понятная аудитория энтузиастов self-hosting.",
      "Высокий эмоциональный отклик на HN.",
      "Можно развивать через комьюнити."
    ],
    bad: [
      "Сложная поддержка железа и окружений.",
      "Платежеспособность потребительского self-hosting рынка неочевидна.",
      "Много сильных open-source альтернатив."
    ],
    next:
      "Архивировать до появления B2B-сценария или явной платной боли, например для малых офисов.",
    scores: {
      pain: 2,
      frequency: 2,
      payment: 1,
      growth: 3,
      competition: 2,
      mvp: 2,
      distribution: 3,
      global: 4,
      regulation: 5,
      platform: 4
    },
    demand: 50,
    launchDifficulty: 74,
    evidence: [["Home server OS", "https://news.ycombinator.com/item?id=47896163"]]
  },
  {
    id: "markdown-knowledge",
    title: "Markdown Knowledge Manager",
    status: "watch",
    tags: ["productivity", "data"],
    score: 28,
    sourceCount: 2,
    market: "Global",
    short:
      "Локальный менеджер Markdown-баз знаний для разработчиков, команд и AI-assisted documentation.",
    thesis:
      "Спрос на Markdown knowledge base есть, но рынок переполнен; идея становится интереснее, если связать ее с агентами или командной документацией.",
    good: [
      "Много комментариев и интереса к knowledge tooling.",
      "Легко сделать MVP и показать в dev-комьюнити.",
      "Можно встроиться в AI-agent memory сценарий."
    ],
    bad: [
      "Очень высокая конкуренция: Obsidian, Notion, Logseq, docs tools.",
      "Без узкого позиционирования будет еще один notes app."
    ],
    next:
      "Искать не общий notes app, а узкую работу: agent-maintained docs, onboarding для dev-команд или changelog intelligence.",
    scores: {
      pain: 3,
      frequency: 4,
      payment: 2,
      growth: 3,
      competition: 1,
      mvp: 5,
      distribution: 3,
      global: 5,
      regulation: 5,
      platform: 5
    },
    demand: 58,
    launchDifficulty: 28,
    evidence: [
      ["Tolaria", "https://news.ycombinator.com/item?id=47882697"],
      ["LLM wiki for agents", "https://news.ycombinator.com/item?id=47899844"]
    ]
  }
];

const themeCounts = [
  ["general", 34, "#9da8b3"],
  ["ai", 16, "#b59cff"],
  ["devtools", 12, "#62c7e8"],
  ["data", 3, "#64d49a"],
  ["productivity", 1, "#f0b86a"],
  ["security", 1, "#ef7f78"]
];

const labels = {
  pain: "Боль",
  frequency: "Частота",
  payment: "Платежи",
  growth: "Рост",
  competition: "Gap",
  mvp: "MVP",
  distribution: "Канал",
  global: "Глобал",
  regulation: "Право",
  platform: "Платформа"
};

let activeFilter = "all";
let selectedId = ideas[0].id;

const ideasGrid = document.querySelector("#ideasGrid");
const detailContent = document.querySelector("#detailContent");
const visibleCount = document.querySelector("#visibleCount");
const searchInput = document.querySelector("#searchInput");

function getStoredRating(id) {
  return Number(localStorage.getItem(`idea-rating:${id}`) || 0);
}

function setStoredRating(id, rating) {
  localStorage.setItem(`idea-rating:${id}`, String(rating));
}

function statusLabel(status) {
  if (status === "promising") return "Promising";
  if (status === "archive") return "Archive";
  return "Watch";
}

function renderMetrics() {
  document.querySelector("#metricTotal").textContent = String(ideas.length);
  const average = Math.round(ideas.reduce((sum, idea) => sum + idea.score, 0) / ideas.length);
  document.querySelector("#metricAverage").textContent = `${average}/50`;
  document.querySelector("#metricTheme").textContent = "AI agents";
}

function scoreColor(score) {
  if (score >= 36) return "var(--green)";
  if (score >= 30) return "var(--amber)";
  return "var(--red)";
}

function renderMiniBars(idea) {
  const keys = ["pain", "payment", "growth", "mvp"];
  return keys
    .map(
      (key) => `
        <div class="mini-bar">
          <span>${labels[key]}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${idea.scores[key] * 20}%; background:${scoreColor(idea.scores[key] * 10)}"></div></div>
          <strong>${idea.scores[key]}</strong>
        </div>`
    )
    .join("");
}

function filteredIdeas() {
  const query = searchInput.value.trim().toLowerCase();
  return ideas.filter((idea) => {
    const matchesStatus = activeFilter === "all" || idea.status === activeFilter;
    const haystack = `${idea.title} ${idea.short} ${idea.tags.join(" ")} ${idea.market}`.toLowerCase();
    return matchesStatus && (!query || haystack.includes(query));
  });
}

function renderCards() {
  const items = filteredIdeas();
  visibleCount.textContent = `${items.length} показано`;

  ideasGrid.innerHTML = items
    .map(
      (idea) => `
        <article class="idea-card ${idea.id === selectedId ? "is-selected" : ""}" data-id="${idea.id}">
          <div class="card-top">
            <div class="badge-row">
              <span class="badge ${idea.status}">${statusLabel(idea.status)}</span>
              ${idea.tags.map((tag) => `<span class="badge ${tag}">${tag}</span>`).join("")}
            </div>
            <div class="score-pill" style="border-color:${scoreColor(idea.score)}">${idea.score}</div>
          </div>
          <div>
            <h3>${idea.title}</h3>
            <p>${idea.short}</p>
          </div>
          <div class="mini-bars">${renderMiniBars(idea)}</div>
          <div class="card-footer">
            <span>${idea.market}</span>
            <span>${idea.sourceCount} источн.</span>
          </div>
        </article>`
    )
    .join("");

  document.querySelectorAll(".idea-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedId = card.dataset.id;
      renderCards();
      renderDetail();
    });
  });
}

function renderScoreBreakdown(idea) {
  return Object.entries(idea.scores)
    .map(
      ([key, value]) => `
        <div class="mini-bar">
          <span>${labels[key]}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${value * 20}%; background:${scoreColor(value * 10)}"></div></div>
          <strong>${value}</strong>
        </div>`
    )
    .join("");
}

function renderRating(idea) {
  const rating = getStoredRating(idea.id);
  return [1, 2, 3, 4, 5]
    .map(
      (value) => `
        <button class="rating-button ${rating === value ? "is-active" : ""}" data-rating="${value}" type="button">${value}</button>`
    )
    .join("");
}

function renderDetail() {
  const idea = ideas.find((item) => item.id === selectedId) || ideas[0];
  detailContent.innerHTML = `
    <div class="detail-title">
      <div>
        <div class="badge-row">
          <span class="badge ${idea.status}">${statusLabel(idea.status)}</span>
          ${idea.tags.map((tag) => `<span class="badge ${tag}">${tag}</span>`).join("")}
        </div>
        <h2>${idea.title}</h2>
      </div>
      <div class="score-pill" style="border-color:${scoreColor(idea.score)}">${idea.score}</div>
    </div>

    <div class="detail-block">
      <h3>Почему это может быть хорошо</h3>
      <p>${idea.thesis}</p>
      <ul>${idea.good.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="detail-block">
      <h3>Почему это может быть плохо</h3>
      <ul>${idea.bad.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="detail-block">
      <h3>Скоринг</h3>
      <div class="mini-bars">${renderScoreBreakdown(idea)}</div>
    </div>

    <div class="detail-block">
      <h3>Моя оценка</h3>
      <div class="rating-row">${renderRating(idea)}</div>
    </div>

    <div class="detail-block">
      <h3>Следующий тест</h3>
      <p>${idea.next}</p>
    </div>

    <div class="detail-block">
      <h3>Сигналы</h3>
      <div class="evidence-list">
        ${idea.evidence.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
      </div>
    </div>
  `;

  document.querySelectorAll(".rating-button").forEach((button) => {
    button.addEventListener("click", () => {
      setStoredRating(idea.id, Number(button.dataset.rating));
      renderDetail();
    });
  });
}

function renderThemes() {
  const max = Math.max(...themeCounts.map((item) => item[1]));
  document.querySelector("#themeBars").innerHTML = themeCounts
    .map(
      ([name, count, color]) => `
        <div class="theme-bar">
          <span>${name}</span>
          <div class="bar-track"><div class="bar-fill" style="width:${(count / max) * 100}%; background:${color}"></div></div>
          <strong>${count}</strong>
        </div>`
    )
    .join("");
}

function renderMatrix() {
  document.querySelector("#matrixPoints").innerHTML = ideas
    .map((idea) => {
      const className = idea.score < 28 ? "risk" : idea.launchDifficulty > 65 ? "low" : "";
      const left = Math.max(9, Math.min(91, idea.demand));
      const bottom = Math.max(15, Math.min(88, idea.launchDifficulty));
      return `<button class="matrix-point ${className}" data-id="${idea.id}" style="left:${left}%; bottom:${bottom}%;" title="${idea.title}" type="button">${idea.score}</button>`;
    })
    .join("");

  document.querySelectorAll(".matrix-point").forEach((point) => {
    point.addEventListener("click", () => {
      selectedId = point.dataset.id;
      renderCards();
      renderDetail();
    });
  });
}

document.querySelectorAll(".segmented-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segmented-button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    activeFilter = button.dataset.filter;
    renderCards();
  });
});

searchInput.addEventListener("input", renderCards);

renderMetrics();
renderCards();
renderDetail();
renderThemes();
renderMatrix();
