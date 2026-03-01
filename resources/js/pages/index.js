// ==========================================
// IMPORTS
// ==========================================
import { siteConfig } from '../data/config.js';
import { renderHeader, renderFooter } from '../components/layout.js';
import { initNavbarBehavior } from '../components/navbar.js';
import { initTheme } from '../core/theme.js';
import { applyLanguage, toggleLanguage } from '../core/i18n.js';
import {
    renderHomeSkills,
    renderFullSkills,
    renderExperience,
    renderEducation,
    renderPlain
} from '../renderers/resumeRenderer.js';

// ==========================================
// PAGE-SPECIFIC INITIALIZATION
// ==========================================

/**
 * Injects static assets (images, links) into the DOM.
 * This was previously inline in index.html.
 */
function injectStaticAssets() {
    // Inject Profile Image & Download Links
    const profileImg = document.getElementById('profile-img');
    const dlHe = document.getElementById('dl-he');
    const dlEn = document.getElementById('dl-en');

    if (profileImg) profileImg.src = siteConfig.assets.profile_img;
    if (dlHe) dlHe.href = siteConfig.documents.resume_he;
    if (dlEn) dlEn.href = siteConfig.documents.resume_en;

    // Inject Socials
    const socialsContainer = document.getElementById('socials');
    if (socialsContainer) {
        socialsContainer.innerHTML = `
            <a href="${siteConfig.links.linkedin}" target="_blank" class="social-btn">
                <img src="${siteConfig.assets.icon_linkedin}" alt="LinkedIn">
            </a>
            <a href="${siteConfig.links.github}" target="_blank" class="social-btn">
                <img src="${siteConfig.assets.icon_github}" alt="GitHub">
            </a>
            <a href="${siteConfig.links.email}" class="social-btn">
                <img src="${siteConfig.assets.icon_gmail}" alt="Email">
            </a>
        `;
    }

    // Inject Placeholders
    document.querySelectorAll('.use-placeholder').forEach(img => {
        img.src = siteConfig.assets.default_icon;
    });
}

// ==========================================
// RENDER CONTROLLER
// ==========================================

/**
 * Calls all rendering functions for the dynamic sections of the index page.
 * Passed as a callback to the language toggler so it re-renders on switch.
 */
function renderAllSections() {
    if (document.getElementById('home-skills-container')) renderHomeSkills();
    if (document.getElementById('skills-content')) renderFullSkills();
    if (document.getElementById('experience-content')) renderExperience();
    if (document.getElementById('education-content')) renderEducation();
    if (document.getElementById('plain-content')) renderPlain();

    // If PDF preview is open during language switch, reload the correct PDF
    const previewView = document.getElementById('view-preview');
    if (previewView && previewView.style.display !== 'none') {
        loadPdf();
    }
}

// ==========================================
// VIEW & TAB LOGIC (Global Attachments)
// ==========================================
// Note: Attached to window because index.html still uses inline onclick="openTab(...)" attributes.

window.openTab = function (tabName) {
    // 1. Hide all tabs and remove active class from buttons
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    // 2. Show Content
    const content = document.getElementById(tabName);
    if (content) content.classList.add('active');

    // 3. Highlight Button
    const btn = document.querySelector(`button[onclick="openTab('${tabName}')"]`);
    if (btn) btn.classList.add('active');
};

window.switchView = function (mode) {
    // 1. Reset Buttons
    ['visual', 'plain', 'preview'].forEach(v => {
        const btn = document.getElementById(`btn-view-${v}`);
        if (btn) btn.classList.remove('active');
    });

    // 2. Activate Clicked Button
    const activeBtn = document.getElementById(`btn-view-${mode}`);
    if (activeBtn) activeBtn.classList.add('active');

    // 3. Toggle Content Areas
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
};

async function loadPdf() {
    const frame = document.getElementById('resume-pdf-frame');
    if (!frame) return;

    const lang = localStorage.getItem('lang') || 'he';
    const pdfUrl = lang === 'he' ? siteConfig.documents.resume_he : siteConfig.documents.resume_en;

    if (frame.getAttribute('data-loaded-url') === pdfUrl) return;

    if (navigator.pdfViewerEnabled === false) {
        console.warn("Browser does not support built-in PDF viewing. Switching to Plain view.");
        window.switchView('plain');
        return;
    }

    try {
        const response = await fetch(pdfUrl, { method: 'HEAD' });
        if (!response.ok) throw new Error(`Status: ${response.status}`);

        frame.src = pdfUrl;
        frame.setAttribute('data-loaded-url', pdfUrl);
    } catch (error) {
        console.error("PDF Load Failed:", error);
        window.switchView('plain');
    }
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

    // 2. Initial Data & DOM Setup
    injectStaticAssets();

    // 3. Language Setup & Initial Render
    const savedLang = localStorage.getItem('lang') || 'he';
    applyLanguage(savedLang);
    renderAllSections();

    // 4. Attach Event Listeners
    const btnLang = document.getElementById('btn-lang');
    if (btnLang) {
        btnLang.addEventListener('click', () => toggleLanguage(renderAllSections));
    }

    // 5. Check URL Params for specific tab routing
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab) {
        window.openTab(tab);
    } else {
        window.openTab('experience'); // Default tab
    }
});