import { getAge, getCurrentYear } from '../core/utils.js';

/* =========================================
   DICTIONARY (Hebrew & English)
   ========================================= */
export const dictionary = {
    he: {
        lang: "he",

        // --- Navigation ---
        nav_home: "בית",
        nav_resume: "קורות חיים",
        nav_projects: "פרויקטים",
        nav_skills: "כישורים",
        toggle_lang: "EN",
        tooltip_lang: "Switch language to English\nשינוי השפה לאנגלית",
        light_theme: "☀️ בהיר",
        dark_theme: "🌙 כהה",
        auto_theme: "💻 מערכת",

        // --- Hero Section ---
        greeting: "יובל משיח",
        hero_role: "מתכנת Full-Stack",
        hero_student: `סטודנט בן ${getAge()} למדעי המחשב`,
        hero_location: "פתח תקווה, ישראל",
        btn_projects: "הפרויקטים שלי",
        btn_skills: "כל הכישורים",

        // --- Categories ---
        cat_languages: "שפות תכנות",
        cat_frameworks: "מערכות עבודה וכלים",
        cat_platforms: "פלטפורמות ובסיסי נתונים",
        cat_practices: "ארכיטקטורות ומתודולוגיות",

        // --- Descriptions ---
        // Languages
        desc_python: "נתונים ואוטומציה",
        desc_csharp: "לוגיקת Backend מודרנית",
        desc_cpp: "מערכות ביצועים גבוהים",
        desc_java: "תוכנות ארגוניות",
        desc_dart: "פיתוח ממשקי משתמש",
        desc_js: "אינטראקטיביות Web",
        desc_html: "מבני תוכן Web",
        desc_css: "עיצוב Web",
        desc_shell: "Bash ו-PowerShell",

        // Frameworks & Tools
        desc_maui: "אפליקציות Multi-Platform",
        desc_fastapi: "תשתית ביצועים גבוהים",
        desc_flutter: "פיתוח Multi-Platform",
        desc_ollama: "הרצת LLM מקומית",
        desc_langchain: "פיתוח מבוסס LLM",
        desc_n8n: "אוטומציה של תהליכים",
        desc_git: "ניהול גרסאות",

        // Platforms & Databases
        desc_azure: "פתרונות ענן",
        desc_docker: "ניהול קונטיינרים",
        desc_gconsole: "ניהול משאבי ענן",
        desc_firebase: "Backend ענן",
        desc_mongo: "מסד נתונים NoSQL",
        desc_sqlite: "מסד נתונים מקומי",
        desc_huggingface: "מערכות נתונים ומודלי AI",

        // Architectures & Practices
        desc_agile: "פיתוח איטרטיבי",
        desc_a2a: "תקשורת בין אפליקציות",
        desc_mvvm: "ממשק משתמש מונחה נתונים",
        desc_mvp: "הפרדת לוגיקה מתצוגה",
        desc_mcp: "פרוטוקול תקשורת",
        desc_mvc: "ארכיטקטורת ממשק",
        desc_microservices: "שירותים עצמאיים",
        desc_microfront: "רכיבי Frontend עצמאיים",
        desc_event: "ניהול מצבים מונחי אירועים",

        // --- Resume Section ---
        // Controls
        view_visual: "מעוצב",
        view_plain: "פשוט",
        view_preview: "תצוגה מקדימה",
        btn_download: "הורדת קו\"ח",
        opt_he: "עברית (PDF)",
        opt_en: "אנגלית (PDF)",
        project_hyperlink: "לחצו כאן לצפייה בפרויקטים שלי",

        // Tabs
        tab_exp: "ניסיון",
        tab_skills: "כישורים",
        tab_edu: "השכלה",

        // --- Projects Page ---
        projects_title: "הפרויקטים שלי",
        projects_subtitle: "אוסף של עבודות ופיתוחים נבחרים",
        btn_site: "לאתר הפרויקט",
        btn_demo: "מידע נוסף",
        btn_repo: "קוד המקור",
        // Project Modal
        modal_features: "תכונות מרכזיות",
        modal_aspects: "מאפייני מערכת",
        modal_tech: "טכנולוגיות",
        modal_gallery: "גלריה",

        // --- Chatbot Widget ---
        view_on_page: "לצפייה בדף",
        chat_header: "עוזר ה-AI של יובל",
        send_button: "שלח",
        type_message: "הקלד הודעה...",

        // --- Footer ---
        footer_rights: `© ${getCurrentYear()} יובל משיח. כל הזכויות שמורות.`
    },

    en: {
        lang: "en",

        // --- Navigation ---
        nav_home: "Home",
        nav_resume: "Resume",
        nav_projects: "Projects",
        nav_skills: "Skills",
        toggle_lang: "עב",
        tooltip_lang: "Switch language to Hebrew\nשינוי השפה לעברית",
        light_theme: "☀️ Light",
        dark_theme: "🌙 Dark",
        auto_theme: "💻 System",

        // --- Hero Section ---
        greeting: "Yuval Mashiah",
        hero_role: "Full-Stack Developer",
        hero_student: `${getAge()} years old B.Sc. student in Computer Science`,
        hero_location: "Petah Tikva, Israel",
        btn_projects: "My Projects",
        btn_skills: "Full Skill Stack",

        // --- Categories ---
        cat_languages: "Languages",
        cat_frameworks: "Frameworks & Tools",
        cat_platforms: "Platforms & Databases",
        cat_practices: "Architectures & Practices",

        // --- Descriptions ---
        // Languages
        desc_python: "Data & Automation",
        desc_csharp: "Modern Backend Logic",
        desc_cpp: "High Performance",
        desc_java: "Enterprise Programs",
        desc_dart: "UI Development",
        desc_js: "Web Interactivity",
        desc_html: "Web Structure",
        desc_css: "Web Styling",
        desc_shell: "Bash & PowerShell",

        // Frameworks & Tools
        desc_maui: "Multi-Platform App UI",
        desc_fastapi: "High-Performance",
        desc_flutter: "Multi-Platform Apps",
        desc_ollama: "Local LLM Runner",
        desc_langchain: "LLM App Framework",
        desc_n8n: "Workflow Automation",
        desc_git: "Version Control",

        // Platforms & Databases
        desc_azure: "Cloud Solutions",
        desc_docker: "Containerization",
        desc_gconsole: "Cloud Management",
        desc_firebase: "Cloud Backend",
        desc_mongo: "NoSQL Database",
        desc_sqlite: "Serverless SQL",
        desc_huggingface: "AI Models & Datasets",

        // Architectures & Practices
        desc_agile: "Iterative Development",
        desc_a2a: "App-to-App Integration",
        desc_mvvm: "Data-Driven UI Pattern",
        desc_mvp: "Logic-View Separation",
        desc_mcp: "Communication Protocol",
        desc_mvc: "UI Architecture Pattern",
        desc_microservices: "Independent Services",
        desc_microfront: "Independent Frontend Components",
        desc_event: "Event-Driven State",

        // --- Resume Section ---
        // Controls
        view_visual: "Visual",
        view_plain: "Plain",
        view_preview: "Preview",
        btn_download: "Download CV",
        opt_he: "Hebrew (PDF)",
        opt_en: "English (PDF)",
        project_hyperlink: "Click here to view my projects",

        // Tabs
        tab_exp: "Experience",
        tab_skills: "Skills",
        tab_edu: "Education",

        // --- Projects Page ---
        projects_title: "My Projects",
        projects_subtitle: "A collection of selected work cases",
        btn_site: "Project Site",
        btn_demo: "See More",
        btn_repo: "Source Code",
        // Project Modal
        modal_features: "Key Features",
        modal_aspects: "System Aspects",
        modal_tech: "Technologies",
        modal_gallery: "Gallery",

        // --- Chatbot Widget ---
        view_on_page: "View on Page",
        chat_header: "Yuval's AI Assistant",
        send_button: "Send",
        type_message: "Type a message...",

        // --- Footer ---
        footer_rights: `© ${getCurrentYear()} Yuval Mashiah. All rights reserved.`
    }
};
