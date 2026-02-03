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
        // 1. Home Preview (Trailer)
        if (document.getElementById('home-skills-container')) {
            renderHomeSkills();
        }
        // 2. Full Resume Tabs
        if (document.getElementById('skills-content')) renderFullSkills();
        if (document.getElementById('experience-content')) renderExperience();
        if (document.getElementById('education-content')) renderEducation();
    }
}

/* --- RENDER HOME PREVIEW (Trailer) --- */
function renderHomeSkills() {
    const lang = localStorage.getItem('lang') || 'he';
    const container = document.getElementById('home-skills-container');
    if (!container || typeof resumeData === 'undefined') return;

    const skills = resumeData.topSkills;

    const html = skills.map(skill => `
        <div class="skill-card compact">
            <img src="${siteConfig.assets.skill_icon_base}${skill.icon}" class="skill-icon" alt="${skill.name}">
            <div class="skill-text">
                <strong>${skill.name}</strong>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

/* --- RENDER FULL SKILLS TAB --- */
function renderFullSkills() {
    const container = document.getElementById('skills-content');
    if (!container) return;

    const lang = localStorage.getItem('lang') || 'he';

    const html = resumeData.skillsCategories.map(cat => {
        // Get category title from dictionary
        const title = dictionary[lang][cat.id] || cat.id;

        // Generate Cards
        const cardsHtml = cat.items.map(item => {
            // Determine Icon Source (Standard vs Custom vs None)
            let imgHtml = '';
            if (item.icon) {
                imgHtml = `<img src="${siteConfig.assets.skill_icon_base}${item.icon}" class="skill-icon" alt="${item.name}">`;
            } else if (item.iconSrc) {
                imgHtml = `<img src="${item.iconSrc}" class="skill-icon" alt="${item.name}">`;
            }

            // Get Description
            const desc = dictionary[lang][item.descKey] || "";

            return `
                <div class="skill-card">
                    ${imgHtml}
                    <div class="skill-text">
                        <strong>${item.name}</strong>
                        <p data-i18n="${item.descKey}">${desc}</p>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <h3 class="section-title" data-i18n="${cat.id}">${title}</h3>
            <div class="skills-grid">
                ${cardsHtml}
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

/* --- RENDER EXPERIENCE TAB --- */
function renderExperience() {
    const container = document.getElementById('experience-content');
    if (!container) return;
    const lang = localStorage.getItem('lang') || 'he';

    const html = resumeData.experience.map(job => {
        // Fallback values if none provided
        const iconSrc = job.iconSrc || siteConfig.assets.default_icon;
        const link = job.link || "#";

        return `
        <div class="job-item">
            <a href="${link}" target="_blank" class="timeline-icon">
                <img src="${iconSrc}" alt="Logo">
            </a>
            
            <div class="job-card">
                <div class="job-header">
                    <div class="job-info">
                        <h3 class="job-role">${job.role[lang]}</h3>
                        <a href="${link}" target="_blank" class="job-company">${job.company[lang]}</a>
                    </div>
                    <span class="timeline-date">${job.dates[lang]}</span>
                </div>
                <p>${job.description[lang]}</p>
            </div>
        </div>
    `}).join('');

    container.innerHTML = html;
}

/* --- RENDER EDUCATION TAB --- */
function renderEducation() {
    const container = document.getElementById('education-content');
    if (!container) return;
    const lang = localStorage.getItem('lang') || 'he';

    const html = resumeData.education.map(edu => {
        // Fallback values if none provided
        const iconSrc = edu.iconSrc || siteConfig.assets.default_icon;
        const link = edu.link || "#";

        return `
        <div class="job-item">
            <a href="${link}" target="_blank" class="timeline-icon">
                <img src="${iconSrc}" alt="Logo">
            </a>

            <div class="job-card">
                <div class="job-header">
                    <div class="job-info">
                        <h3 class="job-role">${edu.degree[lang]}</h3>
                        <a href="${link}" target="_blank" class="job-company">${edu.school[lang]}</a>
                    </div>
                    <span class="timeline-date">${edu.dates[lang]}</span>
                </div>
                <p>${edu.description[lang]}</p>
            </div>
        </div>
    `}).join('');

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
const originalApplyLanguage = applyLanguage;
applyLanguage = function (lang) {
    originalApplyLanguage(lang); // Call original logic

    // Re-render dynamic sections with new language
    if (document.getElementById('home-skills-container')) renderHomeSkills();
    if (document.getElementById('skills-content')) renderFullSkills();
    if (document.getElementById('experience-content')) renderExperience();
    if (document.getElementById('education-content')) renderEducation();
};

function toggleLanguage() {
    const current = document.documentElement.getAttribute('lang');
    const newLang = current === 'he' ? 'en' : 'he';
    applyLanguage(newLang);
}