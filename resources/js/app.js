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

function initNavbarBehavior() {
    const resumeSection = document.getElementById('resume-section');
    const navHome = document.getElementById('nav-home');
    const navResume = document.getElementById('nav-resume');
    const navSkills = document.getElementById('nav-skills');

    // Select the navbar for the smart hide/show logic
    const navbar = document.querySelector('.navbar');

    /* --- SMART NAVBAR SCROLL LOGIC --- */
    let lastScrollY = window.scrollY;

    const handleSmartNavbar = () => {
        if (!navbar) return;
        const currentScrollY = window.scrollY;

        // Ignore negative scrolling (rubber banding effect on mobile)
        if (currentScrollY < 0) return;

        // Determine Direction
        // If scrolling DOWN and we are past the top (offset > 80px)
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            navbar.classList.add('navbar--hidden');
        } else {
            // If scrolling UP
            navbar.classList.remove('navbar--hidden');
        }
        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleSmartNavbar);

    if (!resumeSection) return;

    /* --- 1. CLICK HANDLERS (Keep existing) --- */
    const scrollToResume = () => {
        const headerOffset = 80;
        const elementPosition = resumeSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    };

    if (navHome) {
        navHome.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            history.pushState(null, null, './');
        });
    }

    if (navResume) {
        navResume.addEventListener('click', (e) => {
            e.preventDefault();
            openTab('experience');
            scrollToResume();
            history.pushState(null, null, '?tab=experience');
        });
    }

    if (navSkills) {
        navSkills.addEventListener('click', (e) => {
            e.preventDefault();
            openTab('skills');
            scrollToResume();
            history.pushState(null, null, '?tab=skills');
        });
    }

    /* --- 2. SCROLL SPY (Keep existing) --- */
    const updateActiveNav = () => {
        const scrollY = window.scrollY;
        const triggerPoint = resumeSection.offsetTop - 150;

        if (navHome) navHome.classList.remove('active');
        if (navResume) navResume.classList.remove('active');
        if (navSkills) navSkills.classList.remove('active');

        if (scrollY < triggerPoint) {
            if (navHome) navHome.classList.add('active');
        } else {
            const isSkillsOpen = document.querySelector('.tab-btn[onclick="openTab(\'skills\')"]')
                ?.classList.contains('active');

            if (isSkillsOpen) {
                if (navSkills) navSkills.classList.add('active');
            } else {
                if (navResume) navResume.classList.add('active');
            }
        }
    };

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    /* --- 3. TAB CLICK LISTENER --- */
    document.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('tab-btn')) {
            setTimeout(() => {
                window.dispatchEvent(new Event('scroll'));
            }, 50);
        }
    });
}

/* --- VIEW MODE SWITCHING (Visual/Plain/Preview) --- */
function switchView(mode) {
    // Reset Buttons
    ['visual', 'plain', 'preview'].forEach(v => {
        const btn = document.getElementById(`btn-view-${v}`);
        if (btn) btn.classList.remove('active');
    });

    // Activate Clicked Button
    const activeBtn = document.getElementById(`btn-view-${mode}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Toggle Content Areas
    const viewVisual = document.getElementById('view-visual');
    const viewPlain = document.getElementById('view-plain');
    const viewPreview = document.getElementById('view-preview');

    if (viewVisual) viewVisual.style.display = 'none';
    if (viewPlain) viewPlain.style.display = 'none';
    if (viewPreview) viewPreview.style.display = 'none';

    if (mode === 'visual' && viewVisual) {
        viewVisual.style.display = 'block';
    } else if (mode === 'plain' && viewPlain) {
        viewPlain.style.display = 'block';
        renderPlain();
    } else if (mode === 'preview' && viewPreview) {
        viewPreview.style.display = 'block';
        loadPdf();
    }
}

/* --- RENDER HOME PREVIEW SKILLS --- */
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

/* --- RENDER PLAIN Mode --- */
function renderPlain() {
    const container = document.getElementById('plain-content');
    if (!container) return;
    const lang = localStorage.getItem('lang') || 'he';

    // Helper to get text safely
    const t = (key) => (dictionary[lang] && dictionary[lang][key]) ? dictionary[lang][key] : key;

    // GENERATE PLAIN HTML
    let html = `
        <div class="plain-header">
            <h1>${t('greeting')}</h1>
            <p>${t('hero_role')} • ${t('hero_location')}</p>
            <div class="plain-links">
                <a href="${siteConfig.links.email}">${siteConfig.links.email.replace('mailto:', '')}</a> | 
                <a href="${siteConfig.links.linkedin}" target="_blank">LinkedIn</a> | 
                <a href="${siteConfig.links.github}" target="_blank">GitHub</a>
            </div>
        </div>

        <hr class="plain-divider">

        <div class="plain-section">
            <h2>${t('tab_exp').toUpperCase()}</h2>
            ${resumeData.experience.map(job => {
        const link = job.link || "#";
        return `
                <div class="plain-item">
                    <div class="plain-item-header">
                        <strong>${job.role[lang]}</strong>
                        <span>${job.dates[lang]}</span>
                    </div>
                    <a href="${link}" target="_blank" class="plain-company">${job.company[lang]}</a>
                    <p>${job.description[lang]}</p>
                </div>
            `;
    }).join('')}
        </div>

        <div class="plain-section">
            <h2>${t('tab_edu').toUpperCase()}</h2>
            ${resumeData.education.map(edu => {
        const link = edu.link || "#";
        return `
                <div class="plain-item">
                    <div class="plain-item-header">
                        <strong>${edu.degree[lang]}</strong>
                        <span>${edu.dates[lang]}</span>
                    </div>
                    <a href="${link}" target="_blank" class="plain-company">${edu.school[lang]}</a>
                    <p>${edu.description[lang]}</p>
                </div>
            `;
    }).join('')}
        </div>

        <div class="plain-section">
            <h2>${t('tab_skills').toUpperCase()}</h2>
            <div class="plain-skills-list">
                ${resumeData.skillsCategories.map(cat => {
        // Get translated category name
        const catName = dictionary[lang][cat.id] || cat.id;
        // Get list of skills in this category
        const skillList = cat.items.map(item => item.name).join('  •  ');

        return `
                        <div class="plain-skill-row">
                            <span class="plain-skill-cat">${catName}:</span>
                            <span class="plain-skill-items">${skillList}</span>
                        </div>
                    `;
    }).join('')}
            </div>
        </div>
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
}
const originalApplyLanguage = applyLanguage;
applyLanguage = function (lang) {
    originalApplyLanguage(lang); // Call original logic

    // Re-render dynamic sections with new language mode
    if (document.getElementById('home-skills-container')) renderHomeSkills();
    if (document.getElementById('skills-content')) renderFullSkills();
    if (document.getElementById('experience-content')) renderExperience();
    if (document.getElementById('education-content')) renderEducation();
    if (document.getElementById('plain-content')) renderPlain();
    // UPDATE PDF (if visible)
    if (document.getElementById('view-preview') && document.getElementById('view-preview').style.display !== 'none') {
        loadPdf();
    }
};

function toggleLanguage() {
    const current = document.documentElement.getAttribute('lang');
    const newLang = current === 'he' ? 'en' : 'he';
    applyLanguage(newLang);
}

// Helper: Loads the PDF into the iframe based on current language
async function loadPdf() {
    const frame = document.getElementById('resume-pdf-frame');
    if (!frame) return;

    const lang = localStorage.getItem('lang') || 'he';
    const pdfUrl = lang === 'he' ? siteConfig.documents.resume_he : siteConfig.documents.resume_en;

    // Avoid reloading if already loaded
    if (frame.getAttribute('data-loaded-url') === pdfUrl) return;

    /* --- DETECTION LOGIC --- */

    // 1. Browser Capability Check
    // If the browser explicitly says it doesn't support PDF viewing (e.g., some mobile browsers), 
    // switch to Plain view immediately.
    if (navigator.pdfViewerEnabled === false) {
        console.warn("Browser does not support built-in PDF viewing. Switching to Plain view.");
        switchView('plain');
        return;
    }

    try {
        // 2. Network Availability Check
        // Try to fetch just the headers (HEAD) to see if the file exists.
        // If this fails (404) or throws a network error (CORS/Offline)- catch it.
        const response = await fetch(pdfUrl, { method: 'HEAD' });

        if (!response.ok) {
            throw new Error(`PDF file missing or inaccessible (Status: ${response.status})`);
        }

        // 3. Success: Load the PDF
        frame.src = pdfUrl;
        frame.setAttribute('data-loaded-url', pdfUrl); // Mark as loaded

    } catch (error) {
        console.error("PDF Load Failed:", error);

        // FORCE SWITCH TO PLAIN VIEW (automatically updates the buttons and hides the broken preview)
        switchView('plain');
    }
}