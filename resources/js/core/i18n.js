import { dictionary } from '../data/translations.js';

// Helper for getting translated text
export function t(key) {
    const lang = localStorage.getItem('lang') || 'he';
    return (dictionary[lang] && dictionary[lang][key]) ? dictionary[lang][key] : key;
}

export function applyLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'he' ? 'rtl' : 'ltr');
    localStorage.setItem('lang', lang);

    // Update Text Content natively using the data attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    // Update Buttons
    const btnLang = document.getElementById('btn-lang');
    if (btnLang) {
        btnLang.textContent = lang === 'he' ? dictionary.he.toggle_lang : dictionary.en.toggle_lang;
        btnLang.title = t('tooltip_lang');
    }
}

export function toggleLanguage(reRenderCallback) {
    const current = document.documentElement.getAttribute('lang');
    const newLang = current === 'he' ? 'en' : 'he';
    applyLanguage(newLang);

    // Call the page-specific re-render function (KISS - Dependency Injection)
    if (reRenderCallback) reRenderCallback();
}