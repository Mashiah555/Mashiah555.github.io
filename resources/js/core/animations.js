let observer = null;

export function initScrollAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Create the observer only once
    if (!observer) {
        observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    obs.unobserve(entry.target); // Stop observing once animated
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        });
    }

    // Find all un-animated reveal elements and observe them
    const revealElements = document.querySelectorAll('.reveal:not(.active)');
    revealElements.forEach(el => observer.observe(el));
}