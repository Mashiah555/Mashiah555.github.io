import { siteConfig } from '../data/config.js';
import { resumeData } from '../data/data.js';
import { t } from '../core/i18n.js';

export function renderProjectsPage() {
    const container = document.getElementById('projects-grid');
    if (!container || !resumeData.projects) return;

    const lang = localStorage.getItem('lang') || 'he';

    // Button Icons
    const iconExternal = siteConfig.assets.icon_external;
    const iconExpand = siteConfig.assets.icon_expand;
    const iconRepo = siteConfig.assets.icon_repo;

    const html = resumeData.projects.map(project => {
        const cardOnClick = `openDemoModal('${project.id}')`; // Relies on window.openDemoModal

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
            <button onclick="event.stopPropagation(); openDemoModal('${project.id}')" class="btn btn-primary btn-sm">
            ${iconExpand}<span data-i18n="btn_demo">${t('btn_demo')}</span></button>`;

        if (project.links.site?.trim()) {
            buttonsHtml += `<a href="${project.links.site}" target="_blank" class="btn btn-outline btn-sm" onclick="event.stopPropagation()">${iconExternal}<span data-i18n="btn_site">${t('btn_site')}</span></a>`;
        }

        if (project.links.github?.trim()) {
            buttonsHtml += `<a href="${project.links.github}" target="_blank" class="btn btn-outline btn-sm" onclick="event.stopPropagation()">${iconRepo}<span data-i18n="btn_repo">${t('btn_repo')}</span></a>`;
        }

        return `
            <div class="project-card" onclick="${cardOnClick}" role="button" tabindex="0">
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