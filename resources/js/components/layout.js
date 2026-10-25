import { linksConfig, assetsConfig } from '/resources/js/data/configs.js';
import { initAccessibility } from '/resources/js/components/accessibility.js';

export function renderHeader() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    const isProjects = (page === "projects.html");

    const headerHTML = `
        <nav class="navbar">
            <div class="nav-left">
                <a href="${linksConfig.page_home}" id="nav-home" class="nav-link" data-i18n="nav_home"></a>
                <a href="${linksConfig.page_resume}" id="nav-resume" class="nav-link" data-i18n="nav_resume"></a>
                <a href="${linksConfig.page_projects}" id="nav-projects" class="nav-link ${isProjects ? 'active' : ''}" data-i18n="nav_projects"></a>
                <a href="${linksConfig.page_skills}" id="nav-skills" class="nav-link" data-i18n="nav_skills"></a>
            </div>
            <div class="nav-right">
                <button id="btn-a11y" class="icon-btn" aria-label="Accessibility Menu" aria-expanded="false" title="Accessibility\nנגישות">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                        <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
                    </svg>
                </button>
                <div class="dropdown theme-dropdown">
                    <button id="btn-theme" class="icon-btn" aria-label="Toggle Theme">
                        💻
                    </button>
    
                    <div class="dropdown-menu theme-menu">
                        <button class="dropdown-item theme-option" data-theme-val="light" data-i18n="light_theme">☀️ Light</button>
                        <button class="dropdown-item theme-option" data-theme-val="dark" data-i18n="dark_theme">🌙 Dark</button>
                        <button class="dropdown-item theme-option" data-theme-val="system" data-i18n="auto_theme">💻 System</button>
                    </div>
                </div>
                <button id="btn-lang" class="icon-btn" title="Switch Language">EN</button>
            </div>
        </nav>
    `;
    const headerContainer = document.getElementById('global-header');
    if (headerContainer) headerContainer.innerHTML = headerHTML;

    initAccessibility();
}

export function renderFooter() {
    const footerHTML = `
        <footer class="footer text-center">
            <p data-i18n="footer_rights"></p>
            <div class="footer-links">
                <a href="${linksConfig.linkedin}" target="_blank" class="footer-link text-link">
                    <img src="${assetsConfig.icon_linkedin}" alt="in"> LinkedIn
                </a>
                <a href="${linksConfig.github}" target="_blank" class="footer-link text-link">
                    <img src="${assetsConfig.icon_github}" alt="GH"> GitHub
                </a>
                <a href="${linksConfig.email}" class="footer-link text-link">
                    <img src="${assetsConfig.icon_gmail}" alt="@"> Email
                </a>
            </div>
        </footer>
    `;
    const footerContainer = document.getElementById('global-footer');
    if (footerContainer) footerContainer.innerHTML = footerHTML;
}