document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    // Re-run language translation after injecting HTML
    const savedLang = localStorage.getItem('lang') || 'he';
    applyLanguage(savedLang); 
});

function renderHeader() {
    const headerHTML = `
        <nav class="navbar card">
            <div class="nav-left">
                <a href="home_page.html" class="nav-link" data-i18n="nav_home">Home</a>
                <a href="#skills" class="nav-link" data-i18n="nav_skills">Skills</a>
                <a href="about_page.html" class="nav-link" data-i18n="nav_about">About</a>
                <a href="#" class="nav-link" data-i18n="nav_projects">Projects</a>
            </div>
            <div class="nav-right">
                <button id="btn-theme" class="icon-btn" title="Toggle Theme" onclick="toggleTheme()">🌙</button>
                <button id="btn-lang" class="icon-btn" title="Switch Language" onclick="toggleLanguage()">EN</button>
            </div>
        </nav>
    `;
    document.getElementById('global-header').innerHTML = headerHTML;
}

function renderFooter() {
    const footerHTML = `
        <footer class="footer text-center">
            <p data-i18n="footer_rights">© 2026 Yuval Mashiah. All rights reserved.</p>
            <div class="footer-links">
                <a href="#" target="_blank">LinkedIn</a> • 
                <a href="#" target="_blank">GitHub</a>
            </div>
        </footer>
    `;
    document.getElementById('global-footer').innerHTML = footerHTML;
}