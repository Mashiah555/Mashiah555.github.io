// ==========================================
// IMPORTS
// ==========================================
import { renderHeader, renderFooter } from '../components/layout.js';
import { initNavbarBehavior } from '../components/navbar.js';
import { initTheme } from '../core/theme.js';
import { applyLanguage, toggleLanguage } from '../core/i18n.js';
import { initScrollAnimations } from '../core/animations.js';
import { renderProjectsPage } from '../renderers/projectsRenderer.js';
import { openModal, closeModal, openLightbox, closeLightbox, initModalListeners, reRenderModalIfOpen } from '../components/modal.js';

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

    setTimeout(() => initScrollAnimations(), 50); // Re-observe after language toggle
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

    // 5. Initialize Scroll Animations
    // Set a slight timeout to ensure dynamic content has rendered first
    setTimeout(() => {
        initScrollAnimations();
    }, 50);

    initModalListeners();
});

// ==========================================
// EVENT DELEGATION ROUTER
// ==========================================
document.addEventListener('click', handleUserInteraction);
document.addEventListener('keydown', (e) => {
    // Make div buttons accessible via Enter/Space keys
    if (e.key === 'Enter' || e.key === ' ') {
        handleUserInteraction(e);
    }
});

function handleUserInteraction(event) {
    // Find the closest element with a data-action attribute
    const target = event.target.closest('[data-action]');
    if (!target) return;

    const action = target.getAttribute('data-action');
    const id = target.getAttribute('data-id');
    const src = target.getAttribute('data-src');

    if (action === 'openModal') {
        event.preventDefault(); // Stop spacebar from scrolling page
        openModal(id);
    }
    else if (action === 'closeModal') {
        closeModal();
    }
    else if (action === 'openLightbox') {
        openLightbox(src);
    }
    else if (action === 'closeLightbox') {
        closeLightbox();
    }
    else if (action === 'handleOutsideClick') {
        // Because the overlay covers the whole screen, we need to make sure 
        // the user actually clicked the dark background, not the modal window inside it!
        if (event.target.id === 'demo-modal') {
            closeModal();
        }
    }
    // Add logic for lightbox outside click
    else if (event.target.id === 'lightbox') {
        closeLightbox();
    }
}