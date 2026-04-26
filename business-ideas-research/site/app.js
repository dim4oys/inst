const ideas = [
  {
    id: "home-service-quote-router",
    title: "AI-диспетчер заявок для домашних услуг",
    status: "promising",
    tags: ["ремонт", "клининг", "заявки"],
    score: 44,
    sourceCount: 6,
    market: "US / EU / РФ",
    short: "AI принимает звонок или сообщение, уточняет задачу, срочность, адрес, фото, бюджет и передает мастеру готовую заявку.",
    thesis: "В домашних услугах клиент часто выбирает первого, кто ответил. Здесь AI продает не магию, а скорость реакции и меньше потерянных лидов.",
    good: ["Сильный ROI: пропущенный звонок сразу равен потерянной работе.", "Подходит клинингу, сантехнике, электрике, HVAC, ремонту.", "MVP можно начать с text-back и формы без сложного голоса."],
    bad: ["Нужны разные сценарии по нишам.", "Голосовая версия требует аккуратной обработки звонков.", "Рынок уже видит много generic AI-рецепшенов."],
    next: "Собрать 30 компаний из карт и проверить: кто отвечает до 5 минут, кто позже часа, кто не отвечает вообще.",
    scores: { pain: 5, frequency: 5, payment: 5, growth: 4, competition: 3, mvp: 4, distribution: 5, global: 4, regulation: 4, platform: 5 },
    demand: 88,
    launchDifficulty: 48,
    evidence: [
      ["CallJolt missed calls", "https://calljolt.com/blog/guide/home-service-business-missed-call-statistics"],
      ["CallJolt call answering", "https://calljolt.com/blog/guides/home-service-call-answering-statistics"],
      ["US Tech lead response", "https://ustechautomations.com/resources/blog/home-services-lead-response-speed-how-to-2026"],
      ["CleaningOS AI", "https://cleaningos.com/software/ai-automations/"],
      ["LeadDuo cleaning", "https://www.leadduo.io/en/solutions/servicehub/cleaning"],
      ["Reddit speed-to-lead", "https://www.reddit.com/r/Tech4LocalBusiness/comments/1qucaeh/speed_to_lead_ai_automation_for_local_business/"]
    ]
  },
  {
    id: "wedding-venue-proposal-copilot",
    title: "AI-сметчик для свадебных площадок",
    status: "promising",
    tags: ["ивенты", "смета", "банкет"],
    score: 42,
    sourceCount: 3,
    market: "Global / РФ",
    short: "AI отвечает на запрос пары, проверяет дату, гостей, пакет, меню, бюджет и готовит красивое коммерческое предложение.",
    thesis: "Площадки теряют дорогие заявки из-за медленного ответа и ручных PDF. Быстрый расчет и follow-up могут конвертировать одну заявку в крупный чек.",
    good: ["Высокая ценность одной сделки.", "Сценарий хорошо структурируется.", "Можно продавать как настройку под площадку, а не как общий CRM."],
    bad: ["Нужно поддерживать актуальные цены и доступность дат.", "Сделка эмоциональная, нельзя звучать шаблонно.", "Продажи venue-бизнесу могут быть медленными."],
    next: "Отправить тестовые запросы в 20 площадок и замерить скорость, полноту ответа и наличие follow-up.",
    scores: { pain: 5, frequency: 3, payment: 5, growth: 4, competition: 4, mvp: 4, distribution: 4, global: 4, regulation: 5, platform: 4 },
    demand: 78,
    launchDifficulty: 43,
    evidence: [
      ["Wedding venue automation", "https://mewrcreate.com/blog/ai-wedding-venue-automation"],
      ["Venue response time", "https://www.silvermine.ai/newsletter/wedding-venue-inquiry-response-time-how-fast-you-should-reply-before-couples-move-on"],
      ["Reddit venue response", "https://www.reddit.com/r/WeddingsCanada/comments/1rsep2p/expected_venue_response_times_for_inquiry/"]
    ]
  },
  {
    id: "auto-service-bay-fill",
    title: "AI-ассистент автосервиса",
    status: "watch",
    tags: ["авто", "сервис", "слоты"],
    score: 40,
    sourceCount: 4,
    market: "US / EU / РФ",
    short: "AI принимает сервисные звонки после закрытия, подтверждает визит, переносит запись и помогает заполнить свободные окна.",
    thesis: "У автосервисов дорогие пустые слоты и много звонков, которые отвлекают мастеров-приемщиков. AI может стать диспетчером, а не заменой эксперта.",
    good: ["Высокий средний чек ремонта.", "Есть понятный бизнес-кейс: заполненные bays.", "Работает как слой подтверждений, text-back и after-hours capture."],
    bad: ["Интеграции с DMS/календарями могут усложнить запуск.", "Нужно не обещать диагностику, если данных мало.", "У дилеров уже сильные продукты."],
    next: "Искать независимые автосервисы, где запись идет по телефону/WhatsApp и нет тяжелой системы.",
    scores: { pain: 5, frequency: 4, payment: 5, growth: 4, competition: 3, mvp: 3, distribution: 4, global: 4, regulation: 4, platform: 4 },
    demand: 76,
    launchDifficulty: 57,
    evidence: [
      ["Numa no-shows", "https://www.numa.com/blog/reduce-service-lane-appointment-no-shows-ai"],
      ["Numa scheduling", "https://www.numa.com/blog/ai-appointment-scheduling-dealerships"],
      ["11sight auto scheduling", "https://www.11sight.com/technology/why-ai-is-the-best-solution-for-auto-scheduling"],
      ["Visive auto scheduler", "https://www.visive.ai/ai-auto-service-scheduler"]
    ]
  },
  {
    id: "pet-care-front-desk",
    title: "AI-фронтдеск для ветклиник и груминга",
    status: "watch",
    tags: ["питомцы", "звонки", "no-show"],
    score: 39,
    sourceCount: 4,
    market: "US / EU / РФ",
    short: "AI обрабатывает перегруз ресепшена: запись, переносы, FAQ, срочность, напоминания, депозиты для груминга.",
    thesis: "Ветклиники и груминг перегружены звонками, а владельцам питомцев нужен быстрый ответ. Но здесь важна осторожность: AI не должен давать медицинские советы.",
    good: ["Боль видна на ресепшене и в no-show.", "Высокая эмоциональная срочность у клиента.", "Можно начать с missed-call text-back и записи."],
    bad: ["Медицинский контекст повышает риск.", "Нужны правила эскалации человеку.", "Голосовой AI может раздражать в тревожных ситуациях."],
    next: "Проверить отдельно груминг как более простой вход, а ветклиники оставить для аккуратной версии с triage-to-human.",
    scores: { pain: 5, frequency: 4, payment: 4, growth: 4, competition: 3, mvp: 3, distribution: 4, global: 4, regulation: 2, platform: 4 },
    demand: 74,
    launchDifficulty: 60,
    evidence: [
      ["Vet phone assistant", "https://www.schultztechnology.com/blog/ai-phone-assistant-for-veterinary-clinics/"],
      ["Vet missed call text-back", "https://bizaigpt.com/blog/ai-missed-call-text-back-for-veterinary-clinics"],
      ["Vet phone stats", "https://agentzap.ai/blog/veterinary-phone-statistics"],
      ["Dog grooming no-shows", "https://www.reddit.com/r/doggrooming/comments/1rh7ysm/the_noshow_epidemic_is_getting_out_of_hand/"]
    ]
  },
  {
    id: "restaurant-waste-par-planner",
    title: "AI-планировщик закупок для небольших ресторанов",
    status: "watch",
    tags: ["рестораны", "закупки", "потери"],
    score: 38,
    sourceCount: 5,
    market: "Global",
    short: "AI помогает считать par levels, прогнозировать спрос, сезонность, локальные события и снижать пищевые потери.",
    thesis: "Рестораны теряют маржу на лишних закупках и отходах. Для малого ресторана ценность не в сложной платформе, а в простом еженедельном помощнике по закупке.",
    good: ["Потери бьют прямо по марже.", "Можно стартовать с CSV/POS-экспорта и ручной сверки.", "Есть понятные отчеты: что заказать, что сократить, что продать акцией."],
    bad: ["Данные у малого ресторана часто грязные.", "Шефы могут не доверять автоматике.", "Интеграции с POS и складом усложняют масштабирование."],
    next: "Найти 10 ресторанов с ручной закупкой и проверить, ведут ли они списания хотя бы в таблице.",
    scores: { pain: 4, frequency: 5, payment: 4, growth: 4, competition: 3, mvp: 3, distribution: 3, global: 4, regulation: 5, platform: 3 },
    demand: 72,
    launchDifficulty: 58,
    evidence: [
      ["Restaurant AI stats", "https://adai.news/resources/statistics/restaurant-ai-statistics-2026/"],
      ["Forbes food waste", "https://www.forbes.com/sites/hankcardello/2026/03/25/restaurants-lose-162-billion-to-food-waste-new-report-finds/"],
      ["Nory food waste", "https://www.nory.ai/blog/how-can-ai-reduce-food-waste-in-restaurants"],
      ["Restaurant365 AI ROI", "https://www.restaurant365.com/guides/ai-for-restaurants-roi-2026/"],
      ["US Tech inventory case", "https://ustechautomations.com/resources/blog/restaurant-inventory-automation-case-study-2026"]
    ]
  },
  {
    id: "fitness-retention-nudges",
    title: "AI-retention для студий и фитнес-клубов",
    status: "watch",
    tags: ["фитнес", "удержание", "crm"],
    score: 37,
    sourceCount: 4,
    market: "US / EU / РФ",
    short: "AI ищет клиентов, которые перестали ходить, и запускает персональные сообщения, офферы, звонки тренеру и микро-события.",
    thesis: "Фитнес-бизнес часто покупает новых клиентов, пока старые тихо отваливаются. AI полезен не как тренер, а как early-warning по поведению.",
    good: ["Retention понятен владельцу через LTV.", "Данные уже есть в CRM/абонементах.", "Можно начать с еженедельного списка риска и шаблонов сообщений."],
    bad: ["Нужен доступ к посещениям.", "Многие клубы уже имеют CRM.", "Сложно доказать causal effect без пилота."],
    next: "Проверить 10 студий: кто отслеживает отсутствие 7-14 дней и что делает до отмены абонемента.",
    scores: { pain: 4, frequency: 4, payment: 4, growth: 3, competition: 3, mvp: 4, distribution: 3, global: 4, regulation: 4, platform: 4 },
    demand: 69,
    launchDifficulty: 46,
    evidence: [
      ["Nutripy churn", "https://nutripy.io/blog/ai-churn-prediction-fitness"],
      ["Regulr retention", "https://regulr.ai/blog/fitness-member-retention-stats"],
      ["Regulr studios", "https://www.regulr.ai/for/fitness-studios"],
      ["Reddit gym retention", "https://www.reddit.com/r/GymOwnerNetwork/comments/1nitrzh/retention_keeps_eating_away_at_growth_tips/"]
    ]
  },
  {
    id: "dental-missed-call-recovery",
    title: "AI-восстановление пропущенных заявок для стоматологий",
    status: "watch",
    tags: ["стоматология", "звонки", "пациенты"],
    score: 36,
    sourceCount: 5,
    market: "US / РФ",
    short: "AI отвечает на пропущенный звонок текстом, записывает на простые типы визитов, напоминает и возвращает отмененные слоты.",
    thesis: "Стоматология платежеспособна, но ниша уже шумная. Возможность есть, если продавать не generic AI, а конкретный missed-call recovery с измеримым результатом.",
    good: ["Высокая ценность нового пациента.", "Сильная боль ресепшена.", "Есть русскоязычные и англоязычные сигналы спроса."],
    bad: ["Медицинский контекст и доверие.", "Много конкурентов в 2026.", "Нужны строгие сценарии и интеграции."],
    next: "Не начинать первым. Вернуться, если найдем узкий вход: ночные заявки, имплантация, отмены, гигиена или конкретная МИС.",
    scores: { pain: 5, frequency: 4, payment: 5, growth: 4, competition: 1, mvp: 3, distribution: 3, global: 3, regulation: 2, platform: 3 },
    demand: 75,
    launchDifficulty: 66,
    evidence: [
      ["Dental AI receptionist", "https://dentalpracticeinsider.org/ai-dental-receptionist/"],
      ["Practice Edge no-shows", "https://www.practiceedge.online/articles/dental-ai-scheduling-no-shows-2026.html"],
      ["VoiceFleet RU dental", "https://voicefleet.ai/blog/ru-ai-resepshn-stomatologiya-novye-patsienty-2026"],
      ["UIRIX dental RU", "https://www.uirix.com/ru/blog/dental-practice-ai-receptionist"],
      ["Reddit dental automation", "https://www.reddit.com/r/AiAutomations/comments/1svj6co/is_ai_automation_for_dental_clinics_still_worth/"]
    ]
  }
];

const themeCounts = [
  ["быстрый ответ", 7, "#64d49a"],
  ["заявки", 5, "#62c7e8"],
  ["потери", 4, "#f0b86a"],
  ["локальные услуги", 4, "#9da8b3"],
  ["follow-up", 4, "#b59cff"],
  ["операции", 3, "#ef7f78"]
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
  document.querySelector("#metricTheme").textContent = "быстрый ответ";
}

function scoreColor(score) {
  if (score >= 40) return "var(--green)";
  if (score >= 36) return "var(--amber)";
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
    const className = idea.score < 36 ? "risk" : idea.launchDifficulty > 60 ? "low" : "";
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
