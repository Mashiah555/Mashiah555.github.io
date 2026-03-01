// ==========================================
// IMPORTS
// ==========================================
import { renderHeader, renderFooter } from '../components/layout.js';
import { initNavbarBehavior } from '../components/navbar.js';
import { initTheme } from '../core/theme.js';
import { applyLanguage, toggleLanguage } from '../core/i18n.js';
import { renderProjectsPage } from '../renderers/projectsRenderer.js';
import { initModalListeners, reRenderModalIfOpen } from '../components/modal.js';

// ==========================================
// RENDER CONTROLLER
// ==========================================

/**
 * Re-renders the grid and updates the modal (if it's currently open)
 * whenever the user switches between Hebrew and English.
 */
function updateProjectsView() {
    renderProjectsPage();
    reRenderModalIfOpen();
}

// ==========================================
// APP INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Core Systems & Layout
    renderHeader();
    renderFooter();
    initNavbarBehavior();
    initTheme();

    // 2. Language Setup
    const savedLang = localStorage.getItem('lang') || 'he';
    applyLanguage(savedLang);

    // 3. Render Initial Data
    renderProjectsPage();

    // 4. Attach Listeners (Language Toggle & Modals)
    const btnLang = document.getElementById('btn-lang');
    if (btnLang) {
        btnLang.addEventListener('click', () => toggleLanguage(updateProjectsView));
    }

    initModalListeners();
});