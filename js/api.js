/**
 * AIT EXAM 2026 - API Layer
 * File: js/api.js
 */

'use strict';

const AIT_CONFIG = {
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxkao1mQPezK_qWQzB9MN2xj1Lkfw8SA9bDfe9JNpHiwdEMzUhznTFn95EEg1Qo3XSumA/exec',
  EXAM_DURATION_MINUTES: 55,
  TOTAL_QUESTIONS: 100,
  AUTOSAVE_INTERVAL_SECONDS: 30,
  WARNING_LIMIT: 6,
  TIMER_WARNING_MINUTES: 10,
  TIMER_DANGER_MINUTES: 3,
  SESSION_KEYS: {
    CANDIDATE: 'ait_candidate',
    ANSWERS: 'ait_answers',
    START_TIME: 'ait_start_time',
    MARKED: 'ait_marked',
    QUESTION_ORDER: 'ait_q_order',
    OPTION_ORDERS: 'ait_o_orders',
    WARNINGS: 'ait_warnings',
    CHEAT_LOG: 'ait_cheat_log',
    SUBMITTED: 'ait_submitted',
  }
};

/**
 * GET request — works with CORS for GAS
 */
async function aitGet(action, params = {}) {
  try {
    const qs = new URLSearchParams({ action, ...params });
    const res = await fetch(`${AIT_CONFIG.SCRIPT_URL}?${qs.toString()}`, {
      method: 'GET',
      mode: 'cors',
    });
    if (!res.ok) throw new Error('Network error');
    return await res.json();
  } catch (err) {
    console.warn('GET error:', err);
    return null;
  }
}

/**
 * POST — no-cors for submit/save (fire and forget)
 */
async function aitPost(action, payload = {}) {
  try {
    await fetch(AIT_CONFIG.SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action, ...payload }),
    });
    return { success: true };
  } catch (err) {
    console.warn('POST error:', err);
    return { success: false };
  }
}

/* ============================================================
   PUBLIC API — All registration via GET (GAS doGet handles it)
   Submit/Save via POST (no-cors)
   ============================================================ */

async function apiCheckEmail(email) {
  return aitGet('checkEmail', { email: email.trim().toLowerCase() });
}

async function apiRegisterCandidate(data) {
  const info = getBrowserInfo();
  // Use GET so GAS doGet handles it — no CORS issue
  return aitGet('registerCandidate', {
    name: data.name,
    email: data.email.toLowerCase(),
    phone: data.phone,
    college: data.college,
    district: data.district,
    course: data.course,
    startTime: new Date().toISOString(),
    browser: info.browser,
    os: info.os,
    device: info.device,
  });
}

async function apiSaveProgress(email, answers) {
  return aitPost('saveProgress', {
    email: email.toLowerCase(),
    answers: JSON.stringify(answers),
    savedAt: new Date().toISOString(),
  });
}

async function apiSubmitExam(data) {
  return aitPost('submitExam', {
    ...data,
    submittedAt: new Date().toISOString(),
  });
}

async function apiLogCheat(email, eventType, meta = {}) {
  const info = getBrowserInfo();
  return aitPost('logCheat', {
    email: email.toLowerCase(),
    event: eventType,
    timestamp: new Date().toISOString(),
    browser: info.browser,
    os: info.os,
    device: info.device,
    ...meta,
  });
}

/* ============================================================
   BROWSER DETECTION
   ============================================================ */
function getBrowserInfo() {
  const ua = navigator.userAgent;
  let browser = 'Unknown';
  if (ua.includes('Edg/')) browser = 'Microsoft Edge';
  else if (ua.includes('Chrome/') && !ua.includes('Chromium')) browser = 'Google Chrome';
  else if (ua.includes('Firefox/')) browser = 'Mozilla Firefox';
  else if (ua.includes('Safari/') && !ua.includes('Chrome')) browser = 'Apple Safari';

  let os = 'Unknown OS';
  if (ua.includes('Windows NT 10')) os = 'Windows 10/11';
  else if (ua.includes('Mac OS X')) os = 'macOS';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';
  else if (ua.includes('Linux')) os = 'Linux';

  let device = 'Desktop';
  if (/Android|iPhone|iPod|BlackBerry|IEMobile/i.test(ua)) device = 'Mobile';
  else if (/iPad|Tablet/i.test(ua)) device = 'Tablet';

  return { browser, os, device };
}

/* ============================================================
   STORAGE HELPERS
   ============================================================ */
function aitStore(key, value) {
  try { sessionStorage.setItem(key, JSON.stringify(value)); } catch (e) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e2) {}
  }
}

function aitRead(key) {
  try {
    const v = sessionStorage.getItem(key) || localStorage.getItem(key);
    return v ? JSON.parse(v) : null;
  } catch (e) { return null; }
}

function aitRemove(key) {
  try { sessionStorage.removeItem(key); localStorage.removeItem(key); } catch (e) {}
}

function aitClearSession() {
  Object.values(AIT_CONFIG.SESSION_KEYS).forEach(k => aitRemove(k));
}

let isOnline = navigator.onLine;
window.addEventListener('online',  () => { isOnline = true;  document.dispatchEvent(new CustomEvent('ait:online'));  });
window.addEventListener('offline', () => { isOnline = false; document.dispatchEvent(new CustomEvent('ait:offline')); });
function checkNetwork() { return isOnline; }
