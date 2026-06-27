/**
 * ============================================================
 * AIT EXAM 2026 - API Layer
 * Google Apps Script Integration
 * File: js/api.js
 * ============================================================
 */

'use strict';

/* ============================================================
   CONFIGURATION
   Replace SCRIPT_URL with your deployed Google Apps Script URL
   ============================================================ */
const AIT_CONFIG = {
  // 👇 REPLACE THIS with your deployed Google Apps Script Web App URL
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxkao1mQPezK_qWQzB9MN2xj1Lkfw8SA9bDfe9JNpHiwdEMzUhznTFn95EEg1Qo3XSumA/exec',

  // Exam settings
  EXAM_DURATION_MINUTES: 90,
  TOTAL_QUESTIONS: 50,
  AUTOSAVE_INTERVAL_SECONDS: 30,

  // Warning thresholds
  WARNING_LIMIT: 3,
  TIMER_WARNING_MINUTES: 15,
  TIMER_DANGER_MINUTES: 5,

  // Session keys
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

/* ============================================================
   API METHODS
   ============================================================ */

/**
 * Generic fetch wrapper for Google Apps Script
 * @param {string} action - The action name
 * @param {Object} payload - Data payload
 * @returns {Promise<Object>}
 */
async function aitApiCall(action, payload = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  try {
    const params = new URLSearchParams({ action, ...payload });
    const response = await fetch(`${AIT_CONFIG.SCRIPT_URL}?${params.toString()}`, {
      method: 'GET',
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    clearTimeout(timeout);
    if (err.name === 'AbortError') {
      throw new Error('Request timed out. Please check your internet connection.');
    }
    throw err;
  }
}

/**
 * Submit exam via POST (for large payloads)
 * @param {string} action
 * @param {Object} payload
 */
async function aitApiPost(action, payload = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(AIT_CONFIG.SCRIPT_URL, {
      method: 'POST',
      signal: controller.signal,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...payload }),
      mode: 'no-cors', // Required for GAS
    });

    clearTimeout(timeout);
    // no-cors returns opaque response — treat as success
    return { success: true };
  } catch (err) {
    clearTimeout(timeout);
    if (err.name === 'AbortError') {
      throw new Error('Submission timed out. Your answers are saved locally.');
    }
    throw err;
  }
}

/* ============================================================
   INDIVIDUAL API ACTIONS
   ============================================================ */

/**
 * Check if email has already registered / attempted the exam
 * @param {string} email
 * @returns {Promise<{exists: boolean, status: string}>}
 */
async function apiCheckEmail(email) {
  return aitApiCall('checkEmail', { email: email.trim().toLowerCase() });
}

/**
 * Register a new candidate
 * @param {Object} candidateData - { name, email, phone, college, district, course }
 * @returns {Promise<{success: boolean, message: string}>}
 */
async function apiRegisterCandidate(candidateData) {
  return aitApiCall('registerCandidate', {
    name: candidateData.name,
    email: candidateData.email.toLowerCase(),
    phone: candidateData.phone,
    college: candidateData.college,
    district: candidateData.district,
    course: candidateData.course,
    startTime: new Date().toISOString(),
    browser: getBrowserInfo().browser,
    os: getBrowserInfo().os,
    device: getBrowserInfo().device,
  });
}

/**
 * Save exam progress (auto-save)
 * @param {string} email
 * @param {Object} answers - { [qIndex]: selectedOption }
 * @returns {Promise<{success: boolean}>}
 */
async function apiSaveProgress(email, answers) {
  return aitApiPost('saveProgress', {
    email: email.toLowerCase(),
    answers: JSON.stringify(answers),
    savedAt: new Date().toISOString(),
  });
}

/**
 * Submit final exam answers
 * @param {Object} submissionData
 */
async function apiSubmitExam(submissionData) {
  return aitApiPost('submitExam', {
    ...submissionData,
    submittedAt: new Date().toISOString(),
  });
}

/**
 * Log a suspicious activity / cheat event
 * @param {string} email
 * @param {string} eventType - 'TAB_SWITCH' | 'FULLSCREEN_EXIT' | 'COPY' | 'PASTE' | 'DEVTOOLS' | 'REFRESH'
 * @param {Object} meta - Additional metadata
 */
async function apiLogCheat(email, eventType, meta = {}) {
  const info = getBrowserInfo();
  return aitApiPost('logCheat', {
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
   BROWSER / DEVICE DETECTION
   ============================================================ */

/**
 * Get browser, OS, and device type information
 * @returns {{ browser: string, os: string, device: string }}
 */
function getBrowserInfo() {
  const ua = navigator.userAgent;

  // Browser detection
  let browser = 'Unknown';
  if (ua.includes('Edg/')) browser = 'Microsoft Edge';
  else if (ua.includes('OPR/') || ua.includes('Opera')) browser = 'Opera';
  else if (ua.includes('Chrome/') && !ua.includes('Chromium')) browser = 'Google Chrome';
  else if (ua.includes('Firefox/')) browser = 'Mozilla Firefox';
  else if (ua.includes('Safari/') && !ua.includes('Chrome')) browser = 'Apple Safari';
  else if (ua.includes('MSIE') || ua.includes('Trident')) browser = 'Internet Explorer';

  // OS detection
  let os = 'Unknown OS';
  if (ua.includes('Windows NT 10')) os = 'Windows 10/11';
  else if (ua.includes('Windows NT 6.3')) os = 'Windows 8.1';
  else if (ua.includes('Windows NT 6.1')) os = 'Windows 7';
  else if (ua.includes('Mac OS X')) os = 'macOS';
  else if (ua.includes('Android')) os = `Android ${(ua.match(/Android (\d+\.?\d*)/) || [])[1] || ''}`;
  else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';
  else if (ua.includes('Linux')) os = 'Linux';

  // Device type
  let device = 'Desktop';
  if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) device = 'Mobile';
  else if (/iPad|Tablet/i.test(ua)) device = 'Tablet';

  return { browser, os, device };
}

/* ============================================================
   LOCAL STORAGE HELPERS
   ============================================================ */

/**
 * Save data to session/local storage safely
 */
function aitStore(key, value) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e2) {
      console.warn('Storage unavailable:', e2);
    }
  }
}

/**
 * Read data from session/local storage safely
 */
function aitRead(key) {
  try {
    const val = sessionStorage.getItem(key) || localStorage.getItem(key);
    return val ? JSON.parse(val) : null;
  } catch (e) {
    return null;
  }
}

/**
 * Remove a key from storage
 */
function aitRemove(key) {
  try {
    sessionStorage.removeItem(key);
    localStorage.removeItem(key);
  } catch (e) { /* noop */ }
}

/**
 * Clear all AIT session data
 */
function aitClearSession() {
  Object.values(AIT_CONFIG.SESSION_KEYS).forEach(key => aitRemove(key));
}

/* ============================================================
   NETWORK STATUS MONITOR
   ============================================================ */

let isOnline = navigator.onLine;

window.addEventListener('online', () => {
  isOnline = true;
  document.dispatchEvent(new CustomEvent('ait:online'));
});

window.addEventListener('offline', () => {
  isOnline = false;
  document.dispatchEvent(new CustomEvent('ait:offline'));
});

/**
 * Check if network is available
 */
function checkNetwork() {
  return isOnline;
}
