document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();

    if (typeof initApp === 'function') {
        initApp();
    }
});

/* --- HEADER (Navbar) --- */
function renderHeader() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || "home.html";
    const isActive = (p) => page === p ? 'active' : '';

    const headerHTML = `
        <nav class="navbar">
            <div class="nav-left">
                <a href="${siteConfig.links.page_home}" class="nav-link ${isActive(siteConfig.links.page_home)}" data-i18n="nav_home">Home</a>
                <a href="${siteConfig.links.page_resume}" class="nav-link ${isActive(siteConfig.links.page_resume)}" data-i18n="nav_resume">Resume</a>
                <a href="${siteConfig.links.page_projects}" class="nav-link" data-i18n="nav_projects">Projects</a>
                <a href="${siteConfig.links.page_resume}?tab=skills" class="nav-link" data-i18n="nav_skills">Skills</a>
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

/* --- FOOTER --- */
function renderFooter() {
    const footerHTML = `
        <footer class="footer text-center">
            <p data-i18n="footer_rights">© 2026 Yuval Mashiah. All rights reserved.</p>
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