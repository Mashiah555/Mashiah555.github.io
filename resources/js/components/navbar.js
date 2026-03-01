export function initNavbarBehavior() {
    const resumeSection = document.getElementById('resume-section');
    const navHome = document.getElementById('nav-home');
    const navResume = document.getElementById('nav-resume');
    const navSkills = document.getElementById('nav-skills');
    const navbar = document.querySelector('.navbar');

    /* ==========================================
       1. SMART NAVBAR LOGIC (Always runs)
       ========================================== */
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        const currentScrollY = window.scrollY;

        if (currentScrollY < 0) return;

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            navbar.classList.add('navbar--hidden');
        } else {
            navbar.classList.remove('navbar--hidden');
        }
        lastScrollY = currentScrollY;
    });

    /* ==========================================
       2. CLICK HANDLERS
       ========================================== */
    // Helper to check if we are actually on the home page
    const isIndexPage = !!resumeSection;

    if (navHome) {
        navHome.addEventListener('click', (e) => {
            // Only intercept the click if we are already on the home page
            if (isIndexPage) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                history.pushState(null, null, './');
            }
        });
    }

    if (navResume) {
        navResume.addEventListener('click', (e) => {
            e.preventDefault();
            if (isIndexPage) {
                const plainBtn = document.getElementById('btn-view-plain');
                if (plainBtn) plainBtn.click();

                const headerOffset = 80;
                const elementPosition = resumeSection.getBoundingClientRect().top;
                window.scrollTo({ top: elementPosition + window.scrollY - headerOffset, behavior: "smooth" });

                // Update URL without reloading
                history.pushState(null, null, '?view=plain');
            } else {
                // We are on projects.html! Send them to index with the instruction to open Plain view.
                window.location.href = 'index.html?view=plain#resume-section';
            }
        });
    }

    if (navSkills) {
        navSkills.addEventListener('click', (e) => {
            e.preventDefault();
            if (isIndexPage) {
                const visualBtn = document.getElementById('btn-view-visual');
                if (visualBtn) visualBtn.click();

                const skillsTabBtn = document.querySelector('.tab-btn[data-action="switchTab"][data-target="skills"]');
                if (skillsTabBtn) skillsTabBtn.click();

                const headerOffset = 80;
                const elementPosition = resumeSection.getBoundingClientRect().top;
                window.scrollTo({ top: elementPosition + window.scrollY - headerOffset, behavior: "smooth" });

                // Update URL without reloading
                history.pushState(null, null, '?view=visual&tab=skills');
            } else {
                // We are on projects.html! Send them to index with the instruction to open Visual view -> Skills tab.
                window.location.href = 'index.html?view=visual&tab=skills#resume-section';
            }
        });
    }

    /* ==========================================
       3. SCROLL SPY (Highlight active section)
       ========================================== */
    // Only run the scroll spy if we are on the Home page
    if (isIndexPage) {
        const updateActiveNav = () => {
            const scrollY = window.scrollY;
            const triggerPoint = resumeSection.offsetTop - 150;

            // Remove active class from all nav items
            [navHome, navResume, navSkills].forEach(nav => nav?.classList.remove('active'));

            // Apply active class based on scroll position
            if (scrollY < triggerPoint) {
                if (navHome) navHome.classList.add('active');
            } else {
                const isVisualMode = document.getElementById('view-visual')?.style.display !== 'none';
                if (isVisualMode) {
                    const isSkillsTabActive = document.querySelector('.tab-btn[data-action="switchTab"][data-target="skills"]')?.classList.contains('active');
                    if (isSkillsTabActive) {
                        if (navSkills) navSkills.classList.add('active');
                    } else {
                        if (navResume) navResume.classList.add('active');
                    }
                } else {
                    if (navResume) navResume.classList.add('active');
                }
            }
        };

        // Attach to scroll event
        window.addEventListener('scroll', updateActiveNav);

        // CRITICAL FIX: Run it once immediately on page load!
        updateActiveNav();
    }
}