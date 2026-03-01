export function initNavbarBehavior() {
    const resumeSection = document.getElementById('resume-section');
    const navHome = document.getElementById('nav-home');
    const navResume = document.getElementById('nav-resume');
    const navSkills = document.getElementById('nav-skills');
    const navbar = document.querySelector('.navbar');

    /* Smart Navbar Logic (Hide on scroll down, show on scroll up) */
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

    if (!resumeSection) return;

    /* Helper: Scroll to Resume Section */
    const scrollToResume = () => {
        const headerOffset = 80;
        const elementPosition = resumeSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    };

    /* Click Handlers */
    if (navHome) {
        navHome.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            history.pushState(null, null, './');
        });
    }

    if (navResume) {
        navResume.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.switchView) window.switchView('plain');
            scrollToResume();
            history.pushState(null, null, '?tab=resume');
        });
    }

    if (navSkills) {
        navSkills.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.switchView) window.switchView('visual');
            if (window.openTab) window.openTab('skills');
            scrollToResume();
            history.pushState(null, null, '?tab=skills');
        });
    }

    /* Scroll Spy (Highlight active section) */
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const triggerPoint = resumeSection.offsetTop - 150;

        [navHome, navResume, navSkills].forEach(nav => nav?.classList.remove('active'));

        if (scrollY < triggerPoint) {
            if (navHome) navHome.classList.add('active');
        } else {
            const isVisualMode = document.getElementById('view-visual')?.style.display !== 'none';
            if (isVisualMode) {
                const isSkillsTabActive = document.querySelector('.tab-btn[onclick="openTab(\'skills\')"]')?.classList.contains('active');
                if (isSkillsTabActive) {
                    if (navSkills) navSkills.classList.add('active');
                } else {
                    if (navResume) navResume.classList.add('active');
                }
            } else {
                if (navResume) navResume.classList.add('active');
            }
        }
    });
}