import { siteConfig } from '../data/config.js';
import { projectData } from '../data/data.js';
import { t } from '../core/i18n.js';

export function renderProjectsPage() {
    const container = document.getElementById('projects-grid');
    if (!container || !projectData) return;

    const lang = localStorage.getItem('lang') || 'he';

    // Button Icons
    const iconExternal = siteConfig.assets.icon_external;
    const iconExpand = siteConfig.assets.icon_expand;
    const iconRepo = siteConfig.assets.icon_repo;

    const html = projectData.map((project, index) => {
        // Image handling
        const imgDisplay = project.image
            ? `<img src="${project.image}" alt="${project.title}" class="project-img">`
            : `<div style="font-size: 3rem;">💻</div>`;

        // Tech Stack Tags
        const tagsHtml = project.stack.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        // Buttons
        let buttonsHtml = `
            <button data-action="openModal" data-id="${project.id}" class="btn btn-primary btn-sm">
            ${iconExpand}<span data-i18n="btn_demo">${t('btn_demo')}</span></button>`;

        if (project.links.site?.trim()) {
            buttonsHtml += `<a href="${project.links.site}" target="_blank" class="btn btn-outline btn-sm">${iconExternal}<span data-i18n="btn_site">${t('btn_site')}</span></a>`;
        }

        if (project.links.github?.trim()) {
            buttonsHtml += `<a href="${project.links.github}" target="_blank" class="btn btn-outline btn-sm">${iconRepo}<span data-i18n="btn_repo">${t('btn_repo')}</span></a>`;
        }

        // --- Animate the first 3 cards ---
        let animationClasses = '';
        if (index < 3) {
            // Stagger delays: 0ms, 100ms, 200ms
            animationClasses = `reveal reveal-up delay-${index * 100}`;
        }

        return `
            <div class="project-card ${animationClasses}" data-action="openModal" data-id="${project.id}" role="button" tabindex="0">
                <div class="project-image-container">${imgDisplay}</div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description[lang]}</p>
                    <div class="project-tags">${tagsHtml}</div>
                    <div class="project-footer">${buttonsHtml}</div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}