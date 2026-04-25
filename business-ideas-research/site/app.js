const ideas = [
  {
    id: "sports-game-booking",
    title: "AI-запись на любительские игры",
    status: "promising",
    tags: ["спорт", "запись", "telegram"],
    score: 43,
    sourceCount: 4,
    market: "РФ / Global",
    short: "Telegram-сервис для организаторов волейбола, пиклбола и других игр: запись, уровни, оплата, waitlist, замены.",
    thesis: "Организаторы ведут игры в чатах и таблицах. AI может отвечать на вопросы, собирать игроков, напоминать и закрывать пустые места.",
    good: ["Боль понятна сразу: не хватает игроков, отмены, оплата.", "MVP можно сделать как Telegram-бот.", "Регулярность высокая: игры каждую неделю."],
    bad: ["Нужно аккуратно решить платежи и возвраты.", "Организаторы привыкли к бесплатным чатам.", "Для роста нужны разные виды спорта и площадки."],
    next: "Поговорить с 10 организаторами волейбола и вручную провести одну неделю записи для одной группы.",
    scores: { pain: 5, frequency: 5, payment: 4, growth: 4, competition: 4, mvp: 5, distribution: 4, global: 4, regulation: 5, platform: 3 },
    demand: 84,
    launchDifficulty: 38,
    evidence: [
      ["Axios: adult sports leagues", "https://www.axios.com/2025/07/29/adult-sports-league"],
      ["Telemetr: Volleyball Moscow", "https://telemetr.io/en/channels/1706009238-mskvolleyball/posts"],
      ["VolleyballGo", "https://volleyballgo.su/"],
      ["Sport Groups", "https://sportgroups.ru/"]
    ]
  },
  {
    id: "local-ai-receptionist",
    title: "AI-ответчик для домашних услуг",
    status: "promising",
    tags: ["ремонт", "лиды", "звонки"],
    score: 41,
    sourceCount: 3,
    market: "РФ / US / EU",
    short: "AI собирает заявку для клининга, ремонта, сантехники или кондиционеров, когда мастер занят или не взял трубку.",
    thesis: "В домашних услугах выигрывает тот, кто быстрее ответил. AI может принять лид, уточнить вводные и поставить callback.",
    good: ["Понятный ROI: пропущенный звонок может быть потерянной работой.", "Бизнесы легко найти в картах.", "MVP можно начать с чата и формы до голоса."],
    bad: ["AI-рецепшены уже появляются.", "Голос и запись звонков требуют аккуратности.", "Ниши сильно отличаются по вопросам и ценам."],
    next: "Прозвонить или написать 30 локальным сервисам и измерить ответ за 5 минут, 1 час или никогда.",
    scores: { pain: 5, frequency: 4, payment: 5, growth: 4, competition: 3, mvp: 4, distribution: 4, global: 4, regulation: 4, platform: 4 },
    demand: 81,
    launchDifficulty: 50,
    evidence: [
      ["CallJolt: missed calls", "https://calljolt.com/blog/guides/home-service-business-missed-call-statistics"],
      ["CallRail: lost home-service leads", "https://www.callrail.com/blog/save-home-services-business-from-missed-calls-lost-jobs"],
      ["Reddit: home service leads", "https://www.reddit.com/r/smallbusiness/comments/1mc1iu0"]
    ]
  },
  {
    id: "no-show-autopilot",
    title: "No-show autopilot",
    status: "watch",
    tags: ["предоплата", "напоминания", "салоны"],
    score: 40,
    sourceCount: 3,
    market: "Global",
    short: "Подтверждения, депозитные ссылки, правила отмены, waitlist и автозаполнение пустых слотов.",
    thesis: "Пустой слот сразу превращается в потерянные деньги. Это легче продать, чем абстрактную автоматизацию.",
    good: ["Понятный ROI.", "Можно работать поверх текущей записи.", "AI полезен для мягких переносов и поиска замен."],
    bad: ["Штрафы и депозиты требуют аккуратности.", "У ниш разные правила отмены.", "Нужны платежные ссылки и согласие клиента."],
    next: "Собрать 20 салонов, которые пишут о записи в директ/мессенджеры, и спросить число no-show за месяц.",
    scores: { pain: 5, frequency: 4, payment: 4, growth: 4, competition: 3, mvp: 4, distribution: 4, global: 4, regulation: 3, platform: 4 },
    demand: 74,
    launchDifficulty: 46,
    evidence: [
      ["BookrHub: no-show report", "https://www.bookrhub.com/en/no-show-report-2026"],
      ["Reddit: salon no-shows", "https://www.reddit.com/r/Tech4LocalBusiness/comments/1qzbz3q/how_local_salons_use_booking_apps_to_reduce/"],
      ["Booksy AI booking", "https://biz.booksy.com/en-us/blog/booksy-google-ai-mode-integration"]
    ]
  },
  {
    id: "kids-classes-coordinator",
    title: "AI-координатор детских кружков",
    status: "watch",
    tags: ["дети", "секции", "родители"],
    score: 36,
    sourceCount: 2,
    market: "РФ / EU",
    short: "Запись детей, группы по возрасту, напоминания родителям, платежи, переносы и типовые вопросы.",
    thesis: "У секций регулярные занятия, платежи и много одинаковых вопросов от родителей.",
    good: ["Потребность повторяется месяцами.", "Много типовых вопросов.", "Подходит школам танцев, спорта, языков."],
    bad: ["Нужна осторожность с данными детей.", "Секции чувствительны к цене.", "Часть задач закрывает обычная CRM."],
    next: "Найти 20 секций, где пробное занятие и вопросы родителей идут вручную через WhatsApp/Telegram.",
    scores: { pain: 4, frequency: 5, payment: 3, growth: 3, competition: 3, mvp: 4, distribution: 3, global: 4, regulation: 2, platform: 4 },
    demand: 68,
    launchDifficulty: 50,
    evidence: [
      ["Business.com: practical SMB AI", "https://www.business.com/articles/ai-usage-smb-workplace-study/"],
      ["Messenger booking", "https://girafffe.ru/materials/kak-vesti-zapis-klientov-cherez-telegram-ili-vatsap/"]
    ]
  },
  {
    id: "restaurant-events-bot",
    title: "AI-бот для банкетов",
    status: "watch",
    tags: ["рестораны", "заявки", "ивенты"],
    score: 36,
    sourceCount: 2,
    market: "РФ / Global",
    short: "Бот уточняет дату, гостей, бюджет, меню, зал, предоплату и передает менеджеру готовую заявку.",
    thesis: "Одна банкетная заявка может стоить дорого. Быстрый ответ вечером может окупить сервис одной продажей.",
    good: ["Высокая ценность одной заявки.", "Сценарий хорошо структурируется.", "Можно начать с Telegram/WhatsApp."],
    bad: ["Продажа ресторанам может быть медленной.", "Меню и цены меняются.", "Нужен правильный момент передачи менеджеру."],
    next: "Отправить вечерние тест-запросы в 20 площадок и замерить скорость/качество ответа.",
    scores: { pain: 4, frequency: 3, payment: 4, growth: 3, competition: 3, mvp: 4, distribution: 3, global: 4, regulation: 4, platform: 4 },
    demand: 63,
    launchDifficulty: 44,
    evidence: [
      ["Catering automation", "https://ustechautomations.com/resources/blog/restaurant-catering-automation-how-to-guide-2026"],
      ["Business.com: SMB AI", "https://www.business.com/articles/ai-usage-smb-workplace-study/"]
    ]
  },
  {
    id: "small-club-court-booking",
    title: "Мини-бронирование кортов",
    status: "watch",
    tags: ["спорт", "корты", "клубы"],
    score: 35,
    sourceCount: 3,
    market: "US / EU / РФ",
    short: "Легкая система для малых клубов: корт/зал, open play, waitlist, прайм-тайм, платежи и напоминания.",
    thesis: "Рост пиклбола/падела создает давление на бронирование. Маленьким клубам может быть нужна система проще тяжелых club-management продуктов.",
    good: ["Клубы уже берут деньги за корты.", "Боль повторяется каждую неделю.", "Логичное расширение после записи на игры."],
    bad: ["Есть сильные продукты для кортов.", "Нужна надежность и платежи.", "MVP сложнее, чем бот для записи на игру."],
    next: "Поговорить с 5 малыми клубами и понять, что им дорого или неудобно в текущих системах.",
    scores: { pain: 4, frequency: 4, payment: 4, growth: 4, competition: 2, mvp: 3, distribution: 3, global: 4, regulation: 5, platform: 2 },
    demand: 70,
    launchDifficulty: 59,
    evidence: [
      ["USA Pickleball growth", "https://usapickleball.org/about-us/organizational-docs/pickleball-annual-growth-report/"],
      ["GoTab court systems", "https://gotab.com/latest/best-pickleball-software-court-reservation-systems-for-us-clubs-in-2025"],
      ["Reddit reservation software", "https://www.reddit.com/r/Pickleball/comments/1oo44p7/pickleball_court_reservation_software/"]
    ]
  }
];

const themeCounts = [
  ["запись", 6, "#64d49a"],
  ["спорт", 4, "#62c7e8"],
  ["мессенджеры", 4, "#b59cff"],
  ["локальные услуги", 3, "#9da8b3"],
  ["no-show", 3, "#f0b86a"],
  ["предоплата", 2, "#ef7f78"]
];

const labels = {
  pain: "Боль",
  frequency: "Частота",
  payment: "Платежи",
  growth: "Рост",
  competition: "Gap",
  mvp: "MVP",
  distribution: "Канал",
  global: "Масштаб",
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
  return Number(localStorage.getItem(`local-idea-rating:${id}`) || 0);
}

function setStoredRating(id, rating) {
  localStorage.setItem(`local-idea-rating:${id}`, String(rating));
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
  document.querySelector("#metricTheme").textContent = "запись";
}

function scoreColor(score) {
  if (score >= 38) return "var(--green)";
  if (score >= 34) return "var(--amber)";
  return "var(--red)";
}

function renderBars(idea, keys) {
  return keys.map((key) => `
    <div class="mini-bar">
      <span>${labels[key]}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${idea.scores[key] * 20}%; background:${scoreColor(idea.scores[key] * 10)}"></div></div>
      <strong>${idea.scores[key]}</strong>
    </div>
  `).join("");
}

function filteredIdeas() {
  const query = searchInput.value.trim().toLowerCase();
  return ideas.filter((idea) => {
    const haystack = `${idea.title} ${idea.short} ${idea.tags.join(" ")} ${idea.market}`.toLowerCase();
    return (activeFilter === "all" || idea.status === activeFilter) && (!query || haystack.includes(query));
  });
}

function renderCards() {
  const items = filteredIdeas();
  visibleCount.textContent = `${items.length} показано`;
  ideasGrid.innerHTML = items.map((idea) => `
    <article class="idea-card ${idea.id === selectedId ? "is-selected" : ""}" data-id="${idea.id}">
      <div class="card-top">
        <div class="badge-row">
          <span class="badge ${idea.status}">${statusLabel(idea.status)}</span>
          ${idea.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}
        </div>
        <div class="score-pill" style="border-color:${scoreColor(idea.score)}">${idea.score}</div>
      </div>
      <div><h3>${idea.title}</h3><p>${idea.short}</p></div>
      <div class="mini-bars">${renderBars(idea, ["pain", "payment", "mvp", "distribution"])}</div>
      <div class="card-footer"><span>${idea.market}</span><span>${idea.sourceCount} сигналов</span></div>
    </article>
  `).join("");

  document.querySelectorAll(".idea-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedId = card.dataset.id;
      renderCards();
      renderDetail();
    });
  });
}

function renderRating(idea) {
  const rating = getStoredRating(idea.id);
  return [1, 2, 3, 4, 5].map((value) =>
    `<button class="rating-button ${rating === value ? "is-active" : ""}" data-rating="${value}" type="button">${value}</button>`
  ).join("");
}

function renderDetail() {
  const idea = ideas.find((item) => item.id === selectedId) || ideas[0];
  detailContent.innerHTML = `
    <div class="detail-title">
      <div>
        <div class="badge-row">
          <span class="badge ${idea.status}">${statusLabel(idea.status)}</span>
          ${idea.tags.map((tag) => `<span class="badge">${tag}</span>`).join("")}
        </div>
        <h2>${idea.title}</h2>
      </div>
      <div class="score-pill" style="border-color:${scoreColor(idea.score)}">${idea.score}</div>
    </div>
    <div class="detail-block"><h3>Почему это может быть хорошо</h3><p>${idea.thesis}</p><ul>${idea.good.map((item) => `<li>${item}</li>`).join("")}</ul></div>
    <div class="detail-block"><h3>Почему это может быть плохо</h3><ul>${idea.bad.map((item) => `<li>${item}</li>`).join("")}</ul></div>
    <div class="detail-block"><h3>Скоринг</h3><div class="mini-bars">${renderBars(idea, Object.keys(idea.scores))}</div></div>
    <div class="detail-block"><h3>Моя оценка</h3><div class="rating-row">${renderRating(idea)}</div></div>
    <div class="detail-block"><h3>Следующий тест</h3><p>${idea.next}</p></div>
    <div class="detail-block"><h3>Сигналы</h3><div class="evidence-list">${idea.evidence.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`).join("")}</div></div>
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
  document.querySelector("#themeBars").innerHTML = themeCounts.map(([name, count, color]) => `
    <div class="theme-bar">
      <span>${name}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${(count / max) * 100}%; background:${color}"></div></div>
      <strong>${count}</strong>
    </div>
  `).join("");
}

function renderMatrix() {
  document.querySelector("#matrixPoints").innerHTML = ideas.map((idea) => {
    const className = idea.score < 34 ? "risk" : idea.launchDifficulty > 58 ? "low" : "";
    const left = Math.max(9, Math.min(91, idea.demand));
    const bottom = Math.max(15, Math.min(88, idea.launchDifficulty));
    return `<button class="matrix-point ${className}" data-id="${idea.id}" style="left:${left}%; bottom:${bottom}%;" title="${idea.title}" type="button">${idea.score}</button>`;
  }).join("");

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
