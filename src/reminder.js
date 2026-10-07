// ============================================================
// WELDON'S FORGE (EN) — daily study reminder (local notifications)
// Schedules one notification per day for the next DAYS days at the
// chosen time, skipping today once the user has studied. Rescheduled
// on app start and on the first study of each day ("wf-studied").
// ============================================================
import { Capacitor } from "@capacitor/core";
import { LocalNotifications } from "@capacitor/local-notifications";
import { getStreak } from "./stats_en.js";
import { loadLang, tr } from "./i18n_en.js";

const KEY = "wf_en_reminder_v1";
const DAYS = 14;
const BASE_ID = 1001;

const MSG = {
  title: { en: "🔥 Time to train, welder!", vi: "🔥 Đến giờ luyện tập rồi!", id: "🔥 Waktunya latihan, welder!" },
  body: {
    en: "A few questions today keep your streak alive. 3 minutes is enough.",
    vi: "Vài câu hỏi hôm nay để giữ chuỗi ngày học. Chỉ cần 3 phút.",
    id: "Beberapa soal hari ini menjaga streak kamu. Cukup 3 menit.",
  },
};

export function loadReminder() {
  try { return { on: false, hour: 19, minute: 0, ...JSON.parse(localStorage.getItem(KEY)) }; }
  catch { return { on: false, hour: 19, minute: 0 }; }
}
function saveReminder(r) { try { localStorage.setItem(KEY, JSON.stringify(r)); } catch {} }

const native = () => Capacitor.isNativePlatform();

async function cancelAll() {
  const notifications = Array.from({ length: DAYS + 1 }, (_, i) => ({ id: BASE_ID + i }));
  try { await LocalNotifications.cancel({ notifications }); } catch {}
}

export async function refreshReminders() {
  if (!native()) return;
  const r = loadReminder();
  await cancelAll();
  if (!r.on) return;
  const { display } = await LocalNotifications.checkPermissions();
  if (display !== "granted") return;

  const lang = loadLang();
  const { studiedToday } = getStreak();
  const now = new Date();
  const notifications = [];
  for (let i = 0; i <= DAYS; i++) {
    const at = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, r.hour, r.minute);
    if (i === 0 && (studiedToday || at <= now)) continue;
    notifications.push({
      id: BASE_ID + i,
      title: tr(MSG.title, lang),
      body: tr(MSG.body, lang),
      schedule: { at, allowWhileIdle: true },
    });
  }
  await LocalNotifications.schedule({ notifications });
}

// Resolves to "on" | "denied" | "unsupported".
export async function enableReminder(hour, minute) {
  if (!native()) return "unsupported";
  let { display } = await LocalNotifications.checkPermissions();
  if (display !== "granted") ({ display } = await LocalNotifications.requestPermissions());
  if (display !== "granted") return "denied";
  saveReminder({ on: true, hour, minute });
  await refreshReminders();
  return "on";
}

export async function disableReminder() {
  saveReminder({ ...loadReminder(), on: false });
  if (native()) await cancelAll();
}

export function initReminders() {
  if (!native()) return;
  refreshReminders();
  window.addEventListener("wf-studied", () => { refreshReminders(); });
}
