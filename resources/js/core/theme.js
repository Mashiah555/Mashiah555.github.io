export function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const btn = document.getElementById('btn-theme');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

export function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
}

export function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    const btnTheme = document.getElementById('btn-theme');
    if (btnTheme) btnTheme.addEventListener('click', toggleTheme);
}