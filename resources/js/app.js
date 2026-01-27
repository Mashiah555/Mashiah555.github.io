// This function is now called by layout.js
function initApp() {
    // 1. Load saved settings
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('lang') || 'he';

    // 2. Apply settings
    applyTheme(savedTheme);
    applyLanguage(savedLang);

    // 3. Attach Listeners (Now safe because elements exist)
    const btnTheme = document.getElementById('btn-theme');
    const btnLang = document.getElementById('btn-lang');

    if (btnTheme) btnTheme.addEventListener('click', toggleTheme);
    if (btnLang) btnLang.addEventListener('click', toggleLanguage);
}

/* --- THEME LOGIC --- */
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const btn = document.getElementById('btn-theme');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

/* --- LANGUAGE LOGIC --- */
function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
    localStorage.setItem('lang', lang);

    // Update Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[lang] && dictionary[lang][key]) {
            el.textContent = dictionary[lang][key];
        }
    });

    // Update Button Text
    const btn = document.getElementById('btn-lang');
    if (btn) {
        btn.textContent = lang === 'he' ? dictionary.he.toggle_lang : dictionary.en.toggle_lang;
    }
}

function toggleLanguage() {
    const current = document.documentElement.getAttribute('lang');
    const newLang = current === 'he' ? 'en' : 'he';
    applyLanguage(newLang);
}