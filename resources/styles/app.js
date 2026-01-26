// Dictionary for translations
const translations = {
    he: {
        greeting: "שלום, אני יובל משיח",
        role: "מפתח Full Stack",
        btn_portfolio: "לתיק העבודות",
        toggle_lang: "EN",
        toggle_theme: "🌙"
    },
    en: {
        greeting: "Hi, I'm Yuval Mashiah",
        role: "Full Stack Developer",
        btn_portfolio: "View Portfolio",
        toggle_lang: "HE",
        toggle_theme: "☀️"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Load saved settings or defaults
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('lang') || 'he';

    // 2. Apply initial settings
    applyTheme(savedTheme);
    applyLanguage(savedLang);

    // 3. Attach Event Listeners
    document.getElementById('btn-theme').addEventListener('click', toggleTheme);
    document.getElementById('btn-lang').addEventListener('click', toggleLanguage);
});

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update icon
    const icon = theme === 'dark' ? '☀️' : '🌙';
    document.getElementById('btn-theme').textContent = icon;
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
    localStorage.setItem('lang', lang);

    // Update text content for all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update Language Button Text (Show the *other* language)
    const btnText = lang === 'he' ? translations.he.toggle_lang : translations.en.toggle_lang;
    document.getElementById('btn-lang').textContent = btnText;
}

function toggleLanguage() {
    const current = document.documentElement.getAttribute('lang');
    const newLang = current === 'he' ? 'en' : 'he';
    applyLanguage(newLang);
}
