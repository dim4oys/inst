const ideas = [
  {
    id: "workflow-cartographer",
    title: "AI-картограф рабочих процессов",
    status: "promising",
    tags: ["диагностика", "sop", "внедрение"],
    score: 43,
    sourceCount: 5,
    market: "Global / РФ",
    short: "Не автоматизация сразу, а недельный AI-аудит: где живет правда, какие решения владелец держит в голове, что ломает процессы.",
    thesis: "Малому бизнесу продают AI-автоматизацию, но часто процесс не описан. Продукт перед автоматизацией: записать, разобрать и превратить хаос в понятную карту workflow.",
    good: ["Меньше прямых аналогов, чем у AI-рецепшенов.", "Можно продавать как paid diagnostic перед любым внедрением.", "Подходит агентствам, консультантам и владельцам локальных бизнесов."],
    bad: ["Сложнее объяснить ценность, чем 'получите больше заявок'.", "Нужны доступы к звонкам, чатам, таблицам или наблюдение.", "Результат должен быть очень конкретным, иначе будет выглядеть как консалтинг без продукта."],
    next: "Провести 3 ручных аудита: салон, клининг, небольшое производство. Итогом должен быть 2-page workflow map + список решений владельца.",
    scores: { pain: 4, frequency: 4, payment: 4, growth: 4, competition: 4, mvp: 4, distribution: 3, global: 5, regulation: 4, platform: 5 },
    demand: 76,
    launchDifficulty: 48,
    evidence: [
      ["Reddit: docs live everywhere", "https://www.reddit.com/r/AiForSmallBusiness/comments/1sk3dsx/most_small_businesses_are_going_to_learn_these_ai/"],
      ["Reddit: workflow must be explicit", "https://www.reddit.com/r/AI_Agents/comments/1s42ct9/ive_built_ai_workflows_for_20_small_businesses/"],
      ["Reddit: pain beats architecture", "https://www.reddit.com/r/AiForSmallBusiness/comments/1svisu2/my_takeaway_building_ai_for_small_business_pain/"],
      ["Automaton: automation stack fragmentation", "https://automatonagency.com/insights/small-business-automation-challenges"],
      ["TechRadar: AI projects fail without value/control", "https://www.techradar.com/pro/2026-the-year-enterprise-ai-finally-gets-to-work"]
    ]
  },
  {
    id: "contractor-proof-pack",
    title: "AI-proof pack для подрядчиков",
    status: "promising",
    tags: ["страховые", "фото", "доказательства"],
    score: 42,
    sourceCount: 7,
    market: "US / EU",
    short: "Мобильный помощник для подрядчика: какие фото снять, как подписать, как доказать подлинность, как собрать пакет для claim/rebate/warranty.",
    thesis: "У подрядчиков растет цена плохой документации, а AI-фото создают недоверие. Новый угол: не просто хранить фото, а доказывать их происхождение и связывать с этапами работ.",
    good: ["Новая боль 2026: доверие к фото/видео падает.", "Покупатель понимает деньги: быстрее approval, меньше отказов.", "Можно начать с roofing/restoration/HVAC rebate packets."],
    bad: ["В roofing уже есть document tools.", "Нужна аккуратная юридическая формулировка: не обещать победу в claim.", "Потребуется мобильный UX и надежное хранение."],
    next: "Проверить 15 roofing/restoration подрядчиков: сколько claim/rebate/warranty пакетов они собирают в месяц и что чаще теряется.",
    scores: { pain: 5, frequency: 4, payment: 5, growth: 4, competition: 3, mvp: 3, distribution: 4, global: 4, regulation: 3, platform: 5 },
    demand: 78,
    launchDifficulty: 58,
    evidence: [
      ["Claim photo checklist", "https://www.claimsupplementpro.com/blog/the-contractors-photo-documentation-checklist-for-every-insurance-claim/"],
      ["CrewCam roofing docs", "https://www.crewcamapp.com/post/roofing-photo-documentation-guide-checklist-examples-best-apps"],
      ["IA Solutions supplements", "https://www.iasolutions.claims/blog/roofing-insurance-supplements-2026-guide-independent-adjusters"],
      ["MyHomePros claim process", "https://myhomepros.com/roofing/roof-insurance-claim-process/"],
      ["Instafill HVAC rebates", "https://resources.instafill.ai/docs/hvac-construction/energy-efficiency-rebate-programs"],
      ["Reddit: AI-generated evidence concern", "https://www.reddit.com/r/Insurance/comments/1s2q4qx/aigenerated_evidence_in_claims_is_anyone_seeing/"],
      ["Reddit: contractor AI image evidence", "https://www.reddit.com/r/LegalAdviceUK/comments/1rellxx/contractor_used_ai_image_for_evidence_of_works/"]
    ]
  },
  {
    id: "menu-allergen-diff",
    title: "AI-diff аллергенов для меню",
    status: "watch",
    tags: ["рестораны", "compliance", "меню"],
    score: 40,
    sourceCount: 6,
    market: "US / EU",
    short: "AI сравнивает рецепты, поставщиков, сезонные блюда и меню на сайте/доставке, затем ловит аллергенные расхождения до публикации.",
    thesis: "Аллергены уже не просто FAQ официанта. Новая возможность — не 'создать меню', а держать меню, delivery apps и рецепты синхронными при изменениях.",
    good: ["Регуляторный драйвер усиливается.", "Менее забито, чем бронирование и голосовые боты.", "Можно зайти через маленькие сети, dark kitchens, bakeries, caterers."],
    bad: ["Ответственность высокая, нужен human approval.", "Есть смежные compliance/menu tools.", "Нужны точные данные по ингредиентам и поставщикам."],
    next: "Найти 10 ресторанов/пекарен с сезонным меню и спросить, кто отвечает за аллергенные изменения на сайте и в delivery apps.",
    scores: { pain: 4, frequency: 4, payment: 4, growth: 5, competition: 3, mvp: 3, distribution: 3, global: 4, regulation: 2, platform: 5 },
    demand: 72,
    launchDifficulty: 62,
    evidence: [
      ["AP: California allergen law", "https://apnews.com/article/1baf79d306cef59944a4774df2e915cb"],
      ["National Restaurant Association", "https://www.restaurant.org/education-and-resources/resource-library/key-regulatory-food-safety-trends-in-2026/"],
      ["ADDE Act guide", "https://adde.food-regulations.org/what-it-means-and-how-to-get-ready/"],
      ["Feedle digital menus", "https://www.feedleai.com/blog/food-allergen-labeling-digital-menus"],
      ["EU restaurant labeling", "https://vivashelf.com/blog/eu-food-labeling-requirements-restaurants"],
      ["Reddit: small food producers allergens", "https://www.reddit.com/r/smallbusiness/comments/1o7l7pg/how_do_small_food_producers_handle_allergen/"]
    ]
  },
  {
    id: "authentic-ad-studio",
    title: "Анти-фейковая студия локальной рекламы",
    status: "watch",
    tags: ["реклама", "фото", "доверие"],
    score: 39,
    sourceCount: 6,
    market: "Global / РФ",
    short: "AI делает рекламу только из реальных фото бизнеса: витрина, мастер, продукт, объект. Плюс проверяет, не выглядит ли креатив как дешевый AI-фейк.",
    thesis: "AI-картинки стали дешевыми, но для локального бизнеса они могут снижать доверие. Новая ниша — не 'сгенерируй красивую картинку', а 'сделай честный креатив из реальных материалов'.",
    good: ["Есть явная усталость от AI-looking ads.", "Много малых бизнесов не умеют делать визуал стабильно.", "MVP можно собрать как сервис + шаблоны + artifact detector."],
    bad: ["AI photo tools уже очень много.", "Нужно доказать, что authentic creative конвертит лучше.", "Риск уйти в агентские услуги без продукта."],
    next: "Сделать 20 пар объявлений для локальных бизнесов: fake-looking AI vs real-photo enhanced, затем проверить реакцию владельцев и аудитории.",
    scores: { pain: 4, frequency: 4, payment: 3, growth: 5, competition: 3, mvp: 5, distribution: 4, global: 5, regulation: 5, platform: 1 },
    demand: 70,
    launchDifficulty: 36,
    evidence: [
      ["Reddit: AI ads backlash", "https://www.reddit.com/r/FuckAI/comments/1pkc7op/small_business_owners_using_ai_advertising/"],
      ["Reddit: local AI ads look awful", "https://www.reddit.com/r/SpringfieldIL/comments/1s110au/smallnew_businesses_using_ai/"],
      ["Reddit: photo editing saves time", "https://www.reddit.com/r/AiForSmallBusiness/comments/1svisu2/my_takeaway_building_ai_for_small_business_pain/"],
      ["Reddit: product photo bottleneck", "https://www.reddit.com/r/FacebookAds/comments/1rkq8c1/are_product_photos_still_a_huge_bottleneck_for/"],
      ["Photoroom stats", "https://www.photoroom.com/blog/ai-image-statistics"],
      ["Pixtify product photos", "https://www.pixtify.com/blog/ai-product-photography-in-2026-complete-guide-for-sellers"]
    ]
  },
  {
    id: "field-margin-drift",
    title: "AI-детектор маржинального дрейфа",
    status: "watch",
    tags: ["маржа", "полевые работы", "операции"],
    score: 38,
    sourceCount: 4,
    market: "Global / РФ",
    short: "Для клининга, ремонта, обслуживания: сравнивает смету, фактическое время, дорогу, фото, чеклист и показывает, какие типы работ незаметно убыточны.",
    thesis: "Обычные CRM считают заявки, но не всегда показывают, где маленькая локальная команда теряет маржу. AI может превращать messy job notes в weekly margin review.",
    good: ["Менее очевидный рынок, чем лиды и запись.", "Связано с деньгами владельца, а не vanity automation.", "Можно начать как отчет поверх таблиц, фото и тайм-трекинга."],
    bad: ["Нужны данные по времени и затратам.", "Малые команды могут не считать маржу дисциплинированно.", "Продажа сложнее, чем 'мы отвечаем на звонки'."],
    next: "Найти 5 сервисных компаний, где владелец сам не знает, какие работы самые убыточные, и вручную разобрать 30 последних заказов.",
    scores: { pain: 4, frequency: 4, payment: 4, growth: 4, competition: 4, mvp: 3, distribution: 3, global: 4, regulation: 5, platform: 4 },
    demand: 68,
    launchDifficulty: 56,
    evidence: [
      ["Reddit: labor drift and margin pain", "https://www.reddit.com/r/AiForSmallBusiness/comments/1svisu2/my_takeaway_building_ai_for_small_business_pain/"],
      ["Reddit: one painful process", "https://www.reddit.com/r/AiForSmallBusiness/comments/1rppavu/small_businesses_are_being_sold_ai_tools_they/"],
      ["Reddit: workflows need clear bottleneck", "https://www.reddit.com/r/aiToolForBusiness/comments/1rqnkpp/are_ai_agents_genuinely_practical_for_small/"],
      ["Automaton: small business automation challenges", "https://automatonagency.com/insights/small-business-automation-challenges"]
    ]
  },
  {
    id: "micro-permit-renewal-agent",
    title: "AI-агент лицензий и разрешений",
    status: "watch",
    tags: ["compliance", "лицензии", "дедлайны"],
    score: 36,
    sourceCount: 6,
    market: "US / EU",
    short: "Не просто календарь напоминаний, а агент, который читает письма/порталы/старые PDF, понимает нужные документы и готовит renewal packet.",
    thesis: "Простые reminder tools уже есть. Белая зона — подготовка пакета: какие формы, какой код деятельности, какие страховки, какие вложения, куда отправить.",
    good: ["Боль скучная, но штрафы реальны.", "Подходит ресторанам, подрядчикам, health/beauty, алкогольным лицензиям.", "Можно начать с одного региона/типа бизнеса."],
    bad: ["Есть compliance reminder аналоги.", "Много локальных правил.", "Нужен дисклеймер: не юридическая консультация."],
    next: "Выбрать один штат/город и один тип бизнеса, например рестораны или contractors, затем собрать 20 renewal packets и повторяющиеся документы.",
    scores: { pain: 4, frequency: 3, payment: 4, growth: 3, competition: 3, mvp: 3, distribution: 3, global: 3, regulation: 2, platform: 4 },
    demand: 62,
    launchDifficulty: 64,
    evidence: [
      ["Compliance Reminder", "https://www.compliance-reminder.com/"],
      ["Fairfax digital renewals", "https://townoffairfaxca.gov/business-license-renewals-digital/"],
      ["Washington licensing FAQ", "https://dor.wa.gov/open-business/business-licensing-and-renewals-faqs"],
      ["Restaurant compliance checklist", "https://smbregs.com/blog/restaurant-compliance-checklist"],
      ["Reddit: missed license renewal", "https://www.reddit.com/r/microsaas/comments/1qce1zh/small_business_owners_how_do_you_keep_track_of/"],
      ["Reddit: wrong codes and missed deadlines", "https://www.reddit.com/r/u_Top_Inside9100/comments/1sqy3w6/the_hidden_cost_of_fast_business_registration/"]
    ]
  }
];

const themeCounts = [
  ["доказательства", 5, "#64d49a"],
  ["скрытая маржа", 4, "#f0b86a"],
  ["compliance", 4, "#62c7e8"],
  ["workflow", 4, "#b59cff"],
  ["доверие", 3, "#ef7f78"],
  ["операции", 3, "#9da8b3"]
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
  document.querySelector("#metricTheme").textContent = "доказательства";
}

function scoreColor(score) {
  if (score >= 41) return "var(--green)";
  if (score >= 37) return "var(--amber)";
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
      <div class="mini-bars">${renderBars(idea, ["pain", "payment", "competition", "mvp"])}</div>
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
    const className = idea.score < 37 ? "risk" : idea.launchDifficulty > 60 ? "low" : "";
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
