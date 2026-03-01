import { siteConfig } from '../data/config.js';
import { resumeData } from '../data/data.js';
import { t } from '../core/i18n.js';

let currentOpenProjectId = null;

// ==========================================
// MODAL LOGIC
// ==========================================

export function openDemoModal(projectId) {
    const project = resumeData.projects.find(p => p.id === projectId);
    if (!project) return;

    currentOpenProjectId = projectId;
    const lang = localStorage.getItem('lang') || 'he';
    const modal = document.getElementById('demo-modal');
    const titleEl = document.getElementById('modal-title');
    const contentEl = document.getElementById('modal-dynamic-content');
    const headerBtnsEl = document.getElementById('modal-header-buttons');

    const iconExternal = siteConfig.assets.icon_external;
    const iconRepo = siteConfig.assets.icon_repo;

    // 1. Set Header
    titleEl.textContent = project.title;
    headerBtnsEl.innerHTML = '';

    // Add Site Button (Round)
    if (project.links.site) {
        const btnSite = document.createElement('a');
        btnSite.href = project.links.site;
        btnSite.target = "_blank";
        btnSite.className = "modal-header-btn";
        btnSite.title = "Visit Website";
        btnSite.innerHTML = iconExternal;
        headerBtnsEl.appendChild(btnSite);
    }

    // Add GitHub Button (Round)
    if (project.links.github) {
        const btnRepo = document.createElement('a');
        btnRepo.href = project.links.github;
        btnRepo.target = "_blank";
        btnRepo.className = "modal-header-btn";
        btnRepo.title = "Source Code";
        btnRepo.innerHTML = iconRepo;
        headerBtnsEl.appendChild(btnRepo);
    }

    // --- BUILD CONTENT ---

    // A. About Text (Prefer 'about' over 'description' if available)
    const aboutText = (project.about && project.about[lang]) ? project.about[lang] : project.description[lang];

    // B. Features & Aspects (Collapsible)
    let featuresBlock = '';
    let aspectsBlock = '';

    // 1. Functional Features (DETAILS tag)
    if (project.features && project.features[lang] && project.features[lang].length > 0) {
        featuresBlock = `
                    <details>
                        <summary><span data-i18n="modal_features">Key Features</span></summary>
                        <div class="details-content">
                            <ul class="features-list">
                                ${project.features[lang].map(f => `<li>${f}</li>`).join('')}
                            </ul>
                        </div>
                    </details>`;
    }

    // 2. Technical Aspects (DETAILS tag)
    if (project.aspects && project.aspects[lang] && project.aspects[lang].length > 0) {
        // UNIFIED DESIGN: Use 'features-list' for aspects too
        aspectsBlock = `
                    <details>
                        <summary><span data-i18n="modal_aspects">System Aspects</span></summary>
                        <div class="details-content">
                            <ul class="features-list">
                                ${project.aspects[lang].map(a => `<li>${a}</li>`).join('')}
                            </ul>
                        </div>
                    </details>`;
    }

    // Combine into Grid Container
    let combinedFeaturesHtml = '';
    if (featuresBlock || aspectsBlock) {
        combinedFeaturesHtml = `<div class="features-grid">${featuresBlock}${aspectsBlock}</div>`;
    }

    // C. Technologies & Services (Unified Design)
    const techHtml = project.stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

    let servicesHtml = '';
    if (project.services && project.services.length > 0) {
        // UNIFIED DESIGN: Standard tech-tag (no inline colors)
        servicesHtml = project.services.map(srv => `<span class="tech-tag">${srv}</span>`).join('');
    }

    let stackHtml = `
                <div class="modal-section" style="margin-bottom: 1rem;">
                     <h4><span data-i18n="modal_tech">Technologies</span></h4>
                     <div class="project-tags" style="margin-bottom:8px">
                        ${techHtml}
                     </div>
                     <div class="project-tags" style="margin-bottom:0">
                        ${servicesHtml}
                     </div>
                </div>`;

    // D. Gallery
    let galleryHtml = '';
    if (project.gallery && project.gallery.length > 0) {
        galleryHtml = `
                    <div class="modal-section">
                        <h4><span data-i18n="modal_gallery">Gallery</span></h4>
                        <div class="gallery-grid">
                            ${project.gallery.map(img => `
                                <div class="gallery-item" onclick="openLightbox('${img}')">
                                    <img src="${img}" alt="Screenshot" loading="lazy" 
                                        onload="
                                            const ratio = this.naturalWidth / this.naturalHeight;
                                            if (ratio > 1.1) this.parentElement.classList.add('landscape');
                                            else if (ratio < 0.9) this.parentElement.classList.add('portrait');
                                        ">
                                </div>
                            `).join('')}
                        </div>
                    </div>`;
    }

    // E. Bottom Section (Instructions + Action Buttons)
    let bottomSectionHtml = '';

    // Safety checks to see if parameters exist and are not empty
    const hasInstructions = project.instructions && project.instructions[lang] && project.instructions[lang].trim() !== "";
    const hasHyperlink = project.hyperlink && project.hyperlink.url && project.hyperlink.url.trim() !== "";
    const hasActions = project.links.site || project.links.github;

    if (hasInstructions || hasHyperlink || hasActions) {
        bottomSectionHtml += `<div class="modal-bottom-section">`;

        // 1. Instructions & Hyperlink
        if (hasInstructions || hasHyperlink) {
            let textPart = hasInstructions ? project.instructions[lang] : "";
            let linkPart = "";

            if (hasHyperlink) {
                // Allows custom translated text for the link, defaults to "Documentation"
                const linkText = (project.hyperlink.text && project.hyperlink.text[lang]) ? project.hyperlink.text[lang] : "Documentation";
                linkPart = `<a href="${project.hyperlink.url}" target="_blank">${linkText}</a>`;
            }

            bottomSectionHtml += `
                        <div class="modal-instructions">
                            <span>${textPart}</span> ${linkPart}
                        </div>`;
        }

        // 2. Bottom Actions
        if (hasActions) {
            bottomSectionHtml += `<div class="modal-actions">`;
            if (project.links.site) {
                bottomSectionHtml += `
                            <a href="${project.links.site}" target="_blank" class="btn btn-primary btn-sm">
                                ${iconExternal} <span data-i18n="btn_site">Project Site</span>
                            </a>`;
            }
            if (project.links.github) {
                bottomSectionHtml += `
                            <a href="${project.links.github}" target="_blank" class="btn btn-outline btn-sm">
                                ${iconRepo} <span data-i18n="btn_repo">Source Code</span>
                            </a>`;
            }
            bottomSectionHtml += `</div>`;
        }

        bottomSectionHtml += `</div>`;
    }

    // Inject Content
    contentEl.innerHTML = `
                <div class="modal-section">
                    <p class="modal-text">${aboutText}</p>
                </div>
                ${combinedFeaturesHtml}
                ${stackHtml}
                ${galleryHtml}
                ${bottomSectionHtml}
            `;

    // Translate Content
    if (typeof dictionary !== 'undefined') {
        contentEl.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dictionary[lang] && t(key)) {
                el.textContent = t(key);
            }
        });
    }

    // Show Modal
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

export function closeDemoModal() {
    const modal = document.getElementById('demo-modal');
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    currentOpenProjectId = null;
}

export function reRenderModalIfOpen() {
    if (currentOpenProjectId) {
        openDemoModal(currentOpenProjectId);
    }
}

// ==========================================
// LIGHTBOX LOGIC
// ==========================================

export function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (lightbox && img) {
        img.src = src;
        lightbox.classList.add('open');
    }
}

export function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('open');
        setTimeout(() => {
            const img = document.getElementById('lightbox-img');
            if (img) img.src = "";
        }, 300);
    }
}

// ==========================================
// EVENT LISTENERS & GLOBAL ATTACHMENTS
// ==========================================

export function initModalListeners() {
    // Handle Escape Key (Prioritize Lightbox over Modal)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const lightbox = document.getElementById('lightbox');
            if (lightbox && lightbox.classList.contains('open')) {
                closeLightbox();
            } else {
                closeDemoModal();
            }
        }
    });

    // Close modal on outside click
    window.handleOutsideClick = function (event) {
        if (event.target.id === 'demo-modal') {
            closeDemoModal();
        }
    };
}

// Expose functions to the global window object so HTML inline onclicks still work
window.openDemoModal = openDemoModal;
window.closeDemoModal = closeDemoModal;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;