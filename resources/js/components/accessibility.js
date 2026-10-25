/**
 * @fileoverview Accessibility (A11y) Manager.
 * Instantiates a global floating menu applying WCAG compliant modifiers.
 */

class AccessibilityManager {
    constructor() {
        this.STORAGE_KEY = 'a11y_key';
        this.state = {
            zoom: 0, // 0: 100%, 1: 110%, 2: 120%, 3: 130%, 4: 140%, 5: 150%
            contrast: false,
            links: false,
            scrollbar: false,
            imagery: false,
            isOpen: false
        };

        this.init();
    }

    init() {
        this.loadState();
        this.render();
        this.bindEvents();
        this.applyDOMState();
    }

    render() {
        const container = document.createElement('div');
        container.className = 'a11y-widget-container';
        container.setAttribute('aria-label', 'תפריט נגישות');

        container.innerHTML = `
            <div class="a11y-panel" id="a11y-panel" role="dialog" aria-modal="false">
                <div class="a11y-panel-header">
                    <h3>הגדרות נגישות</h3>
                    <button class="a11y-close-btn" id="a11y-close-btn" aria-label="סגור תפריט">&times;</button>
                </div>
                <div class="a11y-panel-body">
                    <button class="a11y-btn" data-a11y-action="zoom" aria-pressed="false">
                        <span>הגדלת טקסט</span>
                        <span id="a11y-zoom-val" class="fw-bold">100%</span>
                    </button>
                    <button class="a11y-btn" data-a11y-action="contrast" aria-pressed="false">
                        <span>ניגודיות גבוהה</span>
                    </button>
                    <button class="a11y-btn" data-a11y-action="links" aria-pressed="false">
                        <span>הדגשת קישורים</span>
                    </button>
                    <button class="a11y-btn" data-a11y-action="scrollbar" aria-pressed="false">
                        <span>פס גלילה רגיל</span>
                    </button>
                    <button class="a11y-btn" data-a11y-action="imagery" aria-pressed="false">
                        <span>הסתרת מדיה ותמונות</span>
                    </button>
                    <button class="a11y-btn a11y-reset-btn" data-a11y-action="reset">
                        <span>איפוס הגדרות ↺</span>
                    </button>

                    <a href="/legals/accessibility.html" class="a11y-policy-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                        </svg>
                        הצהרת נגישות
                    </a>
                </div>
            </div>
        `;

        document.body.appendChild(container);
        this.container = container;
        this.panel = container.querySelector('#a11y-panel');
        this.closeBtn = container.querySelector('#a11y-close-btn');
        this.navBtn = document.getElementById('btn-a11y');

        this.updateUI();
    }

    bindEvents() {
        if (this.navBtn) {
            this.navBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent document click from firing immediately
                this.toggleMenu();
            });
        }

        this.closeBtn.addEventListener('click', () => this.toggleMenu(false));

        document.addEventListener('click', (e) => {
            if (this.state.isOpen && !this.container.contains(e.target) && (!this.navBtn || !this.navBtn.contains(e.target))) {
                this.toggleMenu(false);
            }
        });

        const buttons = this.container.querySelectorAll('.a11y-btn[data-a11y-action]');
        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.a11yAction;
                this.handleAction(action);
            });
        });
    }

    toggleMenu(forceState) {
        this.state.isOpen = forceState !== undefined ? forceState : !this.state.isOpen;
        this.panel.classList.toggle('active', this.state.isOpen);
        if (this.navBtn) this.navBtn.setAttribute('aria-expanded', this.state.isOpen);
    }

    handleAction(action) {
        switch (action) {
            case 'zoom':
                // Modulo 6 ensures cyclic progression through 6 states: 0 to 5
                this.state.zoom = (this.state.zoom + 1) % 6;
                break;
            case 'contrast':
                this.state.contrast = !this.state.contrast;
                break;
            case 'links':
                this.state.links = !this.state.links;
                break;
            case 'scrollbar':
                this.state.scrollbar = !this.state.scrollbar;
                break;
            case 'imagery':
                this.state.imagery = !this.state.imagery;
                break;
            case 'reset':
                this.state.zoom = 0;
                this.state.contrast = false;
                this.state.links = false;
                this.state.scrollbar = false;
                this.state.imagery = false;
                break;
        }

        this.applyDOMState();
        this.updateUI();
        this.saveState();
    }

    applyDOMState() {
        const html = document.documentElement;
        const body = document.body;

        // Reset all possible zoom classes before applying the current state
        html.classList.remove('a11y-zoom-1', 'a11y-zoom-2', 'a11y-zoom-3', 'a11y-zoom-4', 'a11y-zoom-5');
        if (this.state.zoom > 0) html.classList.add(`a11y-zoom-${this.state.zoom}`);

        body.classList.toggle('a11y-high-contrast', this.state.contrast);
        body.classList.toggle('a11y-highlight-links', this.state.links);
        html.classList.toggle('a11y-default-scrollbar', this.state.scrollbar);
        body.classList.toggle('a11y-no-imagery', this.state.imagery);
    }

    updateUI() {
        const btnZoom = this.container.querySelector('[data-a11y-action="zoom"]');
        const zoomVal = this.container.querySelector('#a11y-zoom-val');

        // Exact mapping of state index to display string
        const percentages = ['100%', '110%', '120%', '130%', '140%', '150%'];

        btnZoom.classList.toggle('active', this.state.zoom > 0);
        zoomVal.textContent = percentages[this.state.zoom];

        this.updateButtonState('contrast', this.state.contrast);
        this.updateButtonState('links', this.state.links);
        this.updateButtonState('scrollbar', this.state.scrollbar);
        this.updateButtonState('imagery', this.state.imagery);
    }

    updateButtonState(action, isActive) {
        const btn = this.container.querySelector(`[data-a11y-action="${action}"]`);
        if (btn) {
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive);
        }
    }

    saveState() {
        const storageState = { ...this.state };
        delete storageState.isOpen;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(storageState));
    }

    loadState() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEY);
            if (saved) {
                this.state = { ...this.state, ...JSON.parse(saved) };
            }
        } catch (e) {
            console.error("Accessibility settings could not be loaded.");
        }
    }
}

let a11yInstance = null;

export function initAccessibility() {
    if (!a11yInstance) {
        a11yInstance = new AccessibilityManager();
    }
}