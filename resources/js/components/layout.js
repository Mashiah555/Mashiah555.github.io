import { siteConfig } from '../data/config.js';

export function renderHeader() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    const isProjects = (page === "projects.html");

    const headerHTML = `
        <nav class="navbar">
            <div class="nav-left">
                <a href="${siteConfig.links.page_home}" id="nav-home" class="nav-link" data-i18n="nav_home"></a>
                <a href="${siteConfig.links.page_resume}" id="nav-resume" class="nav-link" data-i18n="nav_resume"></a>
                <a href="${siteConfig.links.page_projects}" id="nav-projects" class="nav-link ${isProjects ? 'active' : ''}" data-i18n="nav_projects"></a>
                <a href="${siteConfig.links.page_skills}" id="nav-skills" class="nav-link" data-i18n="nav_skills"></a>
            </div>
            <div class="nav-right">
                <button id="btn-theme" class="icon-btn" title="Toggle Theme">🌙</button>
                <button id="btn-lang" class="icon-btn" title="Switch Language">EN</button>
            </div>
        </nav>
    `;
    const headerContainer = document.getElementById('global-header');
    if (headerContainer) headerContainer.innerHTML = headerHTML;
}

export function renderFooter() {
    const footerHTML = `
        <footer class="footer text-center">
            <p data-i18n="footer_rights"></p>
            <div class="footer-links">
                <a href="${siteConfig.links.linkedin}" target="_blank" class="footer-link">
                    <img src="${siteConfig.assets.icon_linkedin}" alt="in"> LinkedIn
                </a>
                <a href="${siteConfig.links.github}" target="_blank" class="footer-link">
                    <img src="${siteConfig.assets.icon_github}" alt="GH"> GitHub
                </a>
                <a href="${siteConfig.links.email}" class="footer-link">
                    <img src="${siteConfig.assets.icon_gmail}" alt="@"> Email
                </a>
            </div>
        </footer>
    `;
    const footerContainer = document.getElementById('global-footer');
    if (footerContainer) footerContainer.innerHTML = footerHTML;
}