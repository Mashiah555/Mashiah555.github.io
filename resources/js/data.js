const resumeData = {
    // --- HOME PAGE PREVIEW ---
    topSkills: [
        { id: "csharp", name: "C#", icon: "cs" },
        { id: "maui", name: ".NET", icon: "dotnet" },
        { id: "python", name: "Python", icon: "py" }
    ],

    // --- FULL SKILLS LIST (Categories) ---
    skillsCategories: [
        {
            id: "cat_languages", // Translation key for title
            items: [
                { name: "Python", icon: "py", descKey: "desc_python" },
                { name: "C#", icon: "cs", descKey: "desc_csharp" },
                { name: "C++", icon: "cpp", descKey: "desc_cpp" },
                { name: "Java", icon: "java", descKey: "desc_java" },
                { name: "Dart", icon: "dart", descKey: "desc_dart" },
                { name: "JavaScript", icon: "js", descKey: "desc_js" },
                { name: "HTML", icon: "html", descKey: "desc_html" },
                { name: "CSS", icon: "css", descKey: "desc_css" },
                { name: "Shell Scripting", iconSrc: "https://cdn.simpleicons.org/gnubash", descKey: "desc_shell" } // Custom source example
            ]
        },
        {
            id: "cat_frameworks",
            items: [
                { name: "Git", icon: "git", descKey: "desc_git" },
                { name: ".NET MAUI", icon: "dotnet", descKey: "desc_maui" },
                { name: "FastAPI", icon: "fastapi", descKey: "desc_fastapi" },
                { name: "Flutter", icon: "flutter", descKey: "desc_flutter" },
                { name: "Hugging Face", iconSrc: "https://cdn.simpleicons.org/huggingface", descKey: "desc_huggingface" },
                { name: "Ollama", iconSrc: "https://cdn.simpleicons.org/ollama", descKey: "desc_ollama" },
                { name: "LangChain", iconSrc: "https://cdn.simpleicons.org/langchain", descKey: "desc_langchain" },
                { name: "n8n", iconSrc: "https://cdn.simpleicons.org/n8n", descKey: "desc_n8n" }
            ]
        },
        {
            id: "cat_platforms",
            items: [
                { name: "Azure", icon: "azure", descKey: "desc_azure" },
                { name: "Docker", icon: "docker", descKey: "desc_docker" },
                { name: "Google Cloud", icon: "gcp", descKey: "desc_gconsole" },
                { name: "Firebase", icon: "firebase", descKey: "desc_firebase" },
                { name: "MongoDB", icon: "mongodb", descKey: "desc_mongo" },
                { name: "SQLite", icon: "sqlite", descKey: "desc_sqlite" }
            ]
        },
        {
            id: "cat_practices",
            items: [
                // Items without icons (Text Only)
                { name: "Agile", descKey: "desc_agile" },
                { name: "A2A", descKey: "desc_a2a" },
                { name: "MVVM", descKey: "desc_mvvm" },
                { name: "MVP", descKey: "desc_mvp" },
                { name: "MCP", descKey: "desc_mcp" },
                { name: "MVC", descKey: "desc_mvc" },
                { name: "Microservices", descKey: "desc_microservices" },
                { name: "Microfrontends", descKey: "desc_microfront" },
                { name: "Event Sourcing", descKey: "desc_event" }
            ]
        }
    ],

    // --- EXPERIENCE ---
    experience: [
        {
            company: { he: "C-ATA (סיעתא)", en: "C-ATA" },
            role: { he: "מרכיב מוצר", en: "Product Assembler" },
            dates: { he: "2023 - 2024", en: "2023 - 2024" },
            iconSrc: "resources/images/cata.png",
            link: "https://c-ata.com/",
            description: {
                he: "פיתוח מערכות מבצעיות מקצה לקצה, עבודה עם צוותי מוצר ושיפור ביצועים במערכות קריטיות.",
                en: "Developing end-to-end operational systems, collaborating with product teams, and optimizing critical system performance."
            }
        },
        {
            company: { he: "גולדבוקס", en: "Goldbooks" },
            role: { he: "אריזת וחלוקת ספרי לימוד", en: "Study Books Packaging and Distribution" },
            dates: { he: "2022", en: "2022" },
            iconSrc: "resources/images/goldbooks.png",
            link: "https://www.goldbooks.co.il/",
            description: {
                he: "פיתוח מערכות מבצעיות מקצה לקצה, עבודה עם צוותי מוצר ושיפור ביצועים במערכות קריטיות.",
                en: "Developing end-to-end operational systems, collaborating with product teams, and optimizing critical system performance."
            }
        }
    ],

    // --- EDUCATION ---
    education: [
        {
            degree: { he: "תואר ראשון במדעי המחשב", en: "B.Sc. Computer Science" },
            school: { he: "המרכז האקדמי לב (JCT)", en: "Jerusalem College of Technology (JCT)" },
            dates: { he: "2023 - היום", en: "2023 - Today" },
            iconSrc: "resources/images/jct.jpg",
            link: "http://www.jct.ac.il/",
            description: {
                he: "התמחות במערכות מידע ובינה מלאכותית. מצטיין דיקן.",
                en: "Specialization in Information Systems and AI. Dean's List."
            }
        },
        {
            degree: { he: "לימודי חטיבת ביניים ותיכון", en: "Middle & High School Studies" },
            school: { he: "ישיבת בני עקיבא גבעת שמואל", en: "Bnei Akiva Givat Shmuel High School Yeshiva" },
            dates: { he: "2017 - 2023", en: "2017 - 2023" },
            iconSrc: "resources/images/highschool.png",
            link: "https://yba.org.il/institutes/%D7%99%D7%A9%D7%99%D7%91%D7%AA-%D7%91%D7%A0%D7%99-%D7%A2%D7%A7%D7%99%D7%91%D7%90-%D7%92%D7%91%D7%A2%D7%AA-%D7%A9%D7%9E%D7%95%D7%90%D7%9C/",
            description: {
                he: "התמחות במערכות מידע ובינה מלאכותית. מצטיין דיקן.",
                en: "Specialization in Information Systems and AI. Dean's List."
            }
        }
    ],

    // --- PROJECTS ---
    projects: [
        {
            id: "lobby_stream",
            title: "Lobby Stream",
            description: {
                he: "מערכת לובי המציגה מזג אוויר, חדשות, בידור ועוד בזמן אמת. ניתנת לניהול באמצעות אפליקציית מובייל.",
                en: "A kiosk system displaying real-time weather, news, entertainment and more. Fully customizable via a mobile app."
            },
            stack: ["C#", ".NET MAUI", "Firebase"],
            links: {
                github: "",
                demo: "#lobby_stream",
                site: "https://lobby-stream.web.app/"
            },
            image: "resources/images/lobby_stream.png"
        },
        {
            id: "smart_travel_agent",
            title: "Smart Travel Agent",
            description: {
                he: "סוכן נסיעות חכם המופעל על ידי AI לתכנון טיולים מותאמים אישית, כולל צ'אט AI והתראות בדוא\"ל.",
                en: "AI powered travel planning assistant of personalized trips, including AI chat and email notifications."
            },
            stack: ["Python", "FastAPI", "MongoDB", "Ollama"],
            links: {
                github: "https://github.com/asher603/Smart_Travel_Agent",
                demo: "#smart_travel_agent",
                site: ""
            },
            image: "resources/images/default.png"
        },
        {
            id: "lev_katan",
            title: "Lev Katan",
            description: {
                he: "אתר צדקה למוצרי תינוקות להשאלה חינמית.",
                en: "A Charity website of baby products free to borrow."
            },
            stack: ["HTML", "JS", "Python", "Azure", "Supabase"],
            links: {
                github: "https://github.com/dandanseb/LevKatan",
                demo: "",
                site: "https://dandanseb.github.io/LevKatan"
            },
            image: "resources/images/default.png"
        },
        {
            id: "defence_union",
            title: "Defence Union",
            description: {
                he: "מערכת לניהול ומעקב אחר מתנדבים ושיחות, פותחה באמצעות WPF.",
                en: "A comprehensive system for tracking volunteers and calls, built with WPF C#."
            },
            stack: ["C#", "WPF", "XML"],
            links: {
                github: "",
                demo: "#defence_union",
                site: ""
            },
            image: "resources/images/default.png"
        },
        {
            id: "raycast_engine",
            title: "Raycast Engine",
            description: {
                he: "",
                en: ""
            },
            stack: ["Java"],
            links: {
                github: "",
                demo: "#raycast_engine",
                site: ""
            },
            image: "resources/images/raycast_engine.jpg"
        },
        {
            id: "queue_manager",
            title: "Queue Manager",
            description: {
                he: "מערכת לשיפור שירות הלקוחות בבתי עסק, פותחה ב-Windows Forms.",
                en: "Customer service optimization tool for businesses, built with Windows Forms."
            },
            stack: ["C#", "WinForms", "SQL"],
            links: {
                github: "https://github.com/Mashiah555/Queue-Manager",
                demo: "#queue_manager",
                site: ""
            },
            image: "resources/images/default.png"
        },
        {
            id: "narrow_down",
            title: "Narrow Down",
            description: {
                he: "",
                en: ""
            },
            stack: ["Dart", "Flutter"],
            links: {
                github: "",
                demo: "#narrow_down",
                site: ""
            },
            image: "resources/images/default.png"
        },
        {
            id: "walkie_doggie",
            title: "Walkie Doggie",
            description: {
                he: "אפליקציית מובייל למעקב וטיפול בחיות מחמד משפחתיות.",
                en: "Mobile application to simplify family pet care tracking."
            },
            stack: ["C#", ".NET MAUI", "Firebase"],
            links: {
                github: "https://github.com/Mashiah555/Walkie-Doggie",
                demo: "",
                site: ""
            },
            image: "resources/images/default.png"
        }
    ]
};