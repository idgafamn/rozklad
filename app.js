const SEMESTER_START = new Date(2026, 1, 9);
const SEMESTER_END   = new Date(2026, 4, 30);
const REFERENCE_MONDAY = new Date(2026, 1, 9);

function getWeekType(date) {
  const msPerWeek = 7 * 24 * 60 * 60 * 1000;
  const day = date.getDay();
  const diffToMon = day === 0 ? -6 : 1 - day;
  const thisMonday = new Date(date);
  thisMonday.setDate(date.getDate() + diffToMon);
  thisMonday.setHours(0, 0, 0, 0);
  const weekDiff = Math.round((thisMonday - REFERENCE_MONDAY) / msPerWeek);
  return weekDiff % 2 === 0 ? "A" : "B";
}

const scheduleData = {
  A: {
    Mon: [
      { num:1, time:["08:30","09:50"], subject:"Веб програмування на стороні клієнта", type:"Л",   teacher:"доц. Демків Лідія Степанівна",           tags:[{cls:"tag-flow",    icon:"teal",  text:"Потік 2/Б"}] },
      { num:2, time:["10:10","11:30"], subject:"Іноземна мова",                         type:"ПрС", teacher:"доц. Гуляк Оксана Богданівна",           tags:[{cls:"tag-group",   icon:"purple",text:"Збірна група"},{cls:"tag-room",icon:"blue",text:"407/Т"}] },
      { num:3, time:["11:50","13:10"], subject:"Філософія",                              type:"Л",   teacher:"доц. Лосик Ореста Миколаївна",           tags:[{cls:"tag-flow",    icon:"teal",  text:"Потік 1/Б"}] },
      { num:4, time:["13:30","14:50"], subject:"Веб програмування на стороні клієнта", type:"Лаб", teacher:"доц. Демків Лідія Степанівна",           tags:[{cls:"tag-subgroup",icon:"orange",text:"підгр. 1"},{cls:"tag-room",icon:"blue",text:"106/Б"}] }
    ],
    Tue: [
      { num:1, time:["08:30","09:50"], subject:"Історія української культури",          type:"ПрС", teacher:"асист. Маринюк Андрій Володимирович",   tags:[{cls:"tag-room",    icon:"blue",  text:"213/Т"}] },
      { num:2, time:["10:10","11:30"], subject:"Прикладна статистика та ймовірнісні процеси", type:"Л", teacher:"проф. Болеста Іван Михайлович",    tags:[{cls:"tag-flow",    icon:"teal",  text:"Потік"},{cls:"tag-room",icon:"blue",text:"130/Т"}] }
    ],
    Wed: [
      { num:3, time:["11:50","13:10"], subject:"Математичні методи дослідження операцій",       type:"Лаб", teacher:"асист. Вдовиченко Віктор Мар'янович", tags:[{cls:"tag-subgroup",icon:"orange",text:"підгр. 1"},{cls:"tag-room",icon:"blue",text:"№13/Т"}] },
      { num:4, time:["13:30","14:50"], subject:"Іноземна мова",                                 type:"ПрС", teacher:"доц. Гуляк Оксана Богданівна",          tags:[{cls:"tag-group",   icon:"purple",text:"Збірна група"},{cls:"tag-room",icon:"blue",text:"407/Т"}] },
      { num:5, time:["15:05","16:25"], subject:"Прикладна статистика та ймовірнісні процеси",   type:"Лаб", teacher:"доц. Калівошка Богдана Михайлівна",     tags:[{cls:"tag-subgroup",icon:"orange",text:"підгр. 1"},{cls:"tag-room",icon:"blue",text:"313/Т"}] }
    ],
    Thu: [
      { num:3, time:["11:50","13:10"], subject:"Філософія",                                              type:"ПрС", teacher:"доц. Джунь Валерій Володимирович",    tags:[{cls:"tag-room",icon:"blue",text:"5/Б"}] },
      { num:4, time:["13:30","14:50"], subject:"Комп'ютерні мережі та протоколи передачі даних",        type:"Л",   teacher:"доц. Цибуляк Богдан Зіновійович",    tags:[{cls:"tag-flow",icon:"teal",text:"Потік"},{cls:"tag-room",icon:"blue",text:"2/Б"}] }
    ],
    Fri: [
      { num:1, time:["08:30","09:50"], subject:"Комп'ютерні мережі та протоколи передачі даних", type:"Лаб", teacher:"доц. Цибуляк Богдан Зіновійович", tags:[{cls:"tag-subgroup",icon:"orange",text:"підгр. 1"},{cls:"tag-room",icon:"blue",text:"№3/Т"}] },
      { num:2, time:["10:10","11:30"], subject:"Математичні методи дослідження операцій",        type:"Л",   teacher:"доц. Горон Богдан Ігорович",       tags:[{cls:"tag-flow",    icon:"teal",  text:"Потік"},{cls:"tag-room",icon:"blue",text:"129/Т"}] }
    ],
    Sat: [],
    Sun: []
  },

  B: {
    Mon: [
      { num:1, time:["08:30","09:50"], subject:"Веб програмування на стороні клієнта", type:"Л",   teacher:"доц. Демків Лідія Степанівна", tags:[{cls:"tag-flow",    icon:"teal",  text:"Потік 2/Б"}] },
      { num:2, time:["10:10","11:30"], subject:"Іноземна мова",                         type:"ПрС", teacher:"доц. Гуляк Оксана Богданівна", tags:[{cls:"tag-group",   icon:"purple",text:"Збірна група"},{cls:"tag-room",icon:"blue",text:"407/Т"}] },
      { num:3, time:["11:50","13:10"], subject:"Філософія",                              type:"Л",   teacher:"доц. Лосик Ореста Миколаївна", tags:[{cls:"tag-flow",    icon:"teal",  text:"Потік 1/Б"}] },
      { num:4, time:["13:30","14:50"], subject:"Веб програмування на стороні клієнта", type:"Лаб", teacher:"доц. Демків Лідія Степанівна", tags:[{cls:"tag-subgroup",icon:"orange",text:"підгр. 1"},{cls:"tag-room",icon:"blue",text:"106/Б"}] }
    ],
    Tue: [
      { num:1, time:["08:30","09:50"], subject:"Історія української культури",          type:"Л",   teacher:"доц. Бойко Ігор Мирославович",       tags:[{cls:"tag-flow",icon:"teal",text:"Потік 1/Б"}] },
      { num:2, time:["10:10","11:30"], subject:"Прикладна статистика та ймовірнісні процеси", type:"Л", teacher:"проф. Болеста Іван Михайлович", tags:[{cls:"tag-flow",icon:"teal",text:"Потік"},{cls:"tag-room",icon:"blue",text:"130/Т"}] }
    ],
    Wed: [
      { num:3, time:["11:50","13:10"], subject:"Математичні методи дослідження операцій", type:"Лаб", teacher:"асист. Вдовиченко Віктор Мар'янович", tags:[{cls:"tag-subgroup",icon:"orange",text:"підгр. 1"},{cls:"tag-room",icon:"blue",text:"№13/Т"}] }
    ],
    Thu: [
      { num:4, time:["13:30","14:50"], subject:"Комп'ютерні мережі та протоколи передачі даних", type:"Л", teacher:"доц. Цибуляк Богдан Зіновійович", tags:[{cls:"tag-flow",icon:"teal",text:"Потік"},{cls:"tag-room",icon:"blue",text:"2/Б"}] }
    ],
    Fri: [
      { num:1, time:["08:30","09:50"], subject:"Комп'ютерні мережі та протоколи передачі даних", type:"Лаб", teacher:"доц. Цибуляк Богдан Зіновійович", tags:[{cls:"tag-subgroup",icon:"orange",text:"підгр. 1"},{cls:"tag-room",icon:"blue",text:"№3/Т"}] },
      { num:2, time:["10:10","11:30"], subject:"Математичні методи дослідження операцій",        type:"Л",   teacher:"доц. Горон Богдан Ігорович",       tags:[{cls:"tag-flow",    icon:"teal",  text:"Потік"},{cls:"tag-room",icon:"blue",text:"129/Т"}] }
    ],
    Sat: [],
    Sun: []
  }
};

const ICONS = {
  blue:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  purple: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  orange: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/></svg>`,
  teal:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`
};

const ALL_KEYS     = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const DAY_SHORT_UA = { Mon:"ПН", Tue:"ВТ", Wed:"СР", Thu:"ЧТ", Fri:"ПТ", Sat:"СБ", Sun:"НД" };
const DAY_LONG_UA  = { Mon:"Понеділок", Tue:"Вівторок", Wed:"Середа", Thu:"Четвер", Fri:"П'ятниця", Sat:"Субота", Sun:"Неділя" };
const MONTH_UA     = ["січ.","лют.","бер.","квіт.","трав.","черв.","лип.","серп.","вер.","жовт.","лист.","груд."];
const WEEKENDS     = new Set(["Sat","Sun"]);

function typeInfo(t) {
  if (t === "Л")   return { cls:"type-lec", strip:"strip-lec", label:"Лекція" };
  if (t === "Лаб") return { cls:"type-lab", strip:"strip-lab", label:"Лабораторна" };
  return                   { cls:"type-prs", strip:"strip-prs", label:"Практична" };
}

function mondayOf(date) {
  const d = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() + (day === 0 ? -6 : 1 - day));
  d.setHours(0, 0, 0, 0);
  return d;
}

function weekDays(baseDate) {
  const mon = mondayOf(baseDate);
  return ALL_KEYS.map((key, i) => {
    const d = new Date(mon);
    d.setDate(mon.getDate() + i);
    return { key, date: d };
  });
}

function fmt(date) {
  return `${date.getDate()} ${MONTH_UA[date.getMonth()]}`;
}

function renderSemesterProgress() {
  const now        = new Date();
  const totalMs    = SEMESTER_END - SEMESTER_START;
  const elapsedMs  = Math.min(Math.max(now - SEMESTER_START, 0), totalMs);
  const pct        = Math.round((elapsedMs / totalMs) * 100);

  const msLeft     = Math.max(SEMESTER_END - now, 0);
  const weeksLeft  = Math.ceil(msLeft / (7 * 24 * 60 * 60 * 1000));

  document.getElementById("sem-weeks-left").innerHTML =
    `до кінця ${weeksLeft} тиж.`;
  document.getElementById("sem-bar-fill").style.width = `${pct}%`;
}

let today           = new Date();
let viewDate        = new Date(today);
let activeMainTab   = "current";

function getViewWeekBase() {
  if (activeMainTab === "current") return today;
  const nextMon = mondayOf(today);
  nextMon.setDate(nextMon.getDate() + 7);
  return nextMon;
}

function renderDayTabs() {
  const base     = getViewWeekBase();
  const weekType = getWeekType(base);
  const days     = weekDays(base);

  document.getElementById("day-tabs").innerHTML = days.map(({ key, date }) => {
    const isWeekend = WEEKENDS.has(key);
    const isActive  = date.toDateString() === viewDate.toDateString();
    const isToday   = date.toDateString() === today.toDateString();
    const lessons   = isWeekend ? [] : (scheduleData[weekType][key] || []);
    const hasLessons = lessons.length > 0;

    return `
      <div class="day-tab ${isActive ? "active" : ""} ${isWeekend ? "weekend" : ""}"
           onclick="selectDay('${date.toISOString()}')">
        <div class="day-name" style="${isToday && !isActive ? "color:var(--accent)" : ""}">${DAY_SHORT_UA[key]}</div>
        <div class="day-num">${date.getDate()}</div>
        ${hasLessons || isWeekend ? `<div class="day-dot${isWeekend ? " red" : ""}"></div>` : ""}
      </div>`;
  }).join("");
}

function renderDateHeader() {
  const base     = getViewWeekBase();
  const days     = weekDays(base);
  const found    = days.find(d => d.date.toDateString() === viewDate.toDateString());
  if (!found) return;
  document.getElementById("date-title").textContent =
    `${DAY_LONG_UA[found.key]}, ${fmt(viewDate)}`;
}

function renderEvents() {
  const base      = getViewWeekBase();
  const weekType  = getWeekType(base);
  const days      = weekDays(base);
  const found     = days.find(d => d.date.toDateString() === viewDate.toDateString());
  const isWeekend = found && WEEKENDS.has(found.key);
  const lessons   = (!found || isWeekend) ? [] : (scheduleData[weekType][found.key] || []);

  const container = document.getElementById("events-container");

  if (isWeekend) {
    container.innerHTML = `
      <div class="empty-day">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 01-3.46 0"/>
        </svg>
        <p class="weekend-msg">Вихідний — відпочивайте 🌿</p>
      </div>`;
    return;
  }

  if (!lessons.length) {
    container.innerHTML = `
      <div class="empty-day">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8"  y1="2" x2="8"  y2="6"/>
          <line x1="3"  y1="10" x2="21" y2="10"/>
        </svg>
        <p>Пар немає — відпочивай 🎉</p>
      </div>`;
    return;
  }

  container.innerHTML = lessons.map(l => {
    const ti       = typeInfo(l.type);
    const tagsHTML = l.tags.map(t =>
      `<span class="tag ${t.cls}">${ICONS[t.icon]}${t.text}</span>`
    ).join("");

    return `
      <div class="event-card">
        <div class="event-strip ${ti.strip}"></div>
        <div class="event-time">
          <div class="lesson-num">${l.num}</div>
          <span class="time-start">${l.time[0]}</span>
          <div class="time-dash"></div>
          <span class="time-end">${l.time[1]}</span>
        </div>
        <div class="event-content">
          <div class="event-title">${l.subject}</div>
          <span class="event-type-badge ${ti.cls}">${ti.label}</span>
          <div class="event-teacher">${l.teacher}</div>
          <div class="event-tags">${tagsHTML}</div>
        </div>
      </div>`;
  }).join("");
}

function renderAll() {
  renderSemesterProgress();
  renderDayTabs();
  renderDateHeader();
  renderEvents();
}

function selectDay(isoDate) {
  viewDate = new Date(isoDate);
  renderAll();
}

function switchTab(el, tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  el.classList.add("active");
  activeMainTab = tab;
  const base = getViewWeekBase();
  const days = weekDays(base);
  const todayInWeek = days.find(d => d.date.toDateString() === today.toDateString());
  viewDate = todayInWeek ? new Date(today) : new Date(days[0].date);
  renderAll();
}

function scheduleNextDayRefresh() {
  const now       = new Date();
  const tomorrow  = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  tomorrow.setHours(0, 0, 1, 0);
  setTimeout(() => {
    today    = new Date();
    viewDate = new Date(today);
    renderAll();
    scheduleNextDayRefresh();
  }, tomorrow - now);
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  scheduleNextDayRefresh();
});
