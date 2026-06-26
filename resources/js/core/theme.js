export function applyTheme(theme) {
    // 1. Save the preference
    localStorage.setItem('theme', theme);

    // 2. Apply it to the DOM
    if (theme === 'system') {
        document.documentElement.removeAttribute('data-theme');
        document.documentElement.style.colorScheme = 'light dark';
    } else {
        document.documentElement.setAttribute('data-theme', theme);
        document.documentElement.style.colorScheme = theme;
    }

    // 3. Update the Main Button Icon
    const btn = document.getElementById('btn-theme');
    if (btn) {
        if (theme === 'light') btn.textContent = '☀️';
        else if (theme === 'dark') btn.textContent = '🌙';
        else btn.textContent = '💻';
    }

    // 4. Update the Active State in the Dropdown Menu
    document.querySelectorAll('.theme-option').forEach(opt => {
        if (opt.getAttribute('data-theme-val') === theme) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });
}

export function initTheme() {
    // Initialize with saved preference, or default to 'system'
    const savedTheme = localStorage.getItem('theme') || 'system';
    applyTheme(savedTheme);

    // Attach click listeners to the dropdown menu items
    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
            const selectedTheme = e.currentTarget.getAttribute('data-theme-val');
            applyTheme(selectedTheme);
        });
    });
}