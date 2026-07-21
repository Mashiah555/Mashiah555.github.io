import { assetsConfig } from '../data/configs.js';
import { skillData, resumeData } from '../data/data.js'

/* --- RENDER HERO PREVIEW SKILLS --- */
export function renderHeroSkills() {
    const lang = localStorage.getItem('lang') || 'he';
    const container = document.getElementById('hero-skills-container');
    if (!container || typeof skillData === 'undefined' || typeof resumeData === 'undefined') return;

    const skills = skillData.topSkills;

    const html = skills.map(skill => `
        <div class="skill-card compact">
            <img src="${assetsConfig.skill_icon_base}${skill.icon}" class="skill-icon" alt="${skill.name}">
            <div class="skill-text">
                <strong>${skill.name}</strong>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}
