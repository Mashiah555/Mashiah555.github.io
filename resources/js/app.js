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

    // --- DYNAMIC RENDERING CALLS ---
    if (typeof resumeData !== 'undefined') {
        // 1. Home Preview Skills
        if (document.getElementById('home-skills-container')) renderHomeSkills();
        // 2. Full Resume Tabs
        if (document.getElementById('skills-content')) renderFullSkills();
        if (document.getElementById('experience-content')) renderExperience();
        if (document.getElementById('education-content')) renderEducation();
        if (document.getElementById('plain-content')) renderPlain();
    }

    initNavbarBehavior();
}

