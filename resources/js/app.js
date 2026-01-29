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

    // Check if we are on the home page and have data
    if (document.getElementById('home-skills-container') && typeof resumeData !== 'undefined') {
        renderHomeSkills();
    }
}

function renderHomeSkills() {
    const lang = localStorage.getItem('lang') || 'he';
    const container = document.getElementById('home-skills-container');
    if (!container || typeof resumeData === 'undefined') return;
    const skills = resumeData.topSkills;

    let html = skills.map(skill => `
        <div class="skill-card compact">
            <img src="${siteConfig.assets.skill_icon_base}${skill.icon}" class="skill-icon" alt="${skill.name}">
            <div class="skill-text">
                <strong>${skill.name}</strong>
            </div>
        </div>
    `).join('');

    // Add the "View All" / "Full Skill Set" Card
    const viewAllText = dictionary[lang] ? dictionary[lang].skill_view_all : "View All";
    html += `
        <a href="${siteConfig.links.page_resume}?tab=skills" class="skill-card compact view-all" style="text-decoration: none;">
            <span style="font-size: 1.2rem;">🚀</span>
            <div class="skill-text">
                <strong>${viewAllText}</strong>
            </div>
        </a>
    `;

    container.innerHTML = html;
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
    // Re-render home skills if they exist (to update the description text)
    if (document.getElementById('home-skills-container')) {
        renderHomeSkills();
    }
}

function toggleLanguage() {
    const current = document.documentElement.getAttribute('lang');
    const newLang = current === 'he' ? 'en' : 'he';
    applyLanguage(newLang);
}