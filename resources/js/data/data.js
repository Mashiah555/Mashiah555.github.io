export const resumeData = {
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
                he: "הרכבת מכשירים המזהים חומרי נפץ, שנמכרו לצה\"ל על מנת לסייע ללוחמים בשדה הקרב.",
                en: "Assembly of explosives identifier devices, sold to the IDF to assist fighters in the battlefield."
            }
        },
        {
            company: { he: "גולדבוקס", en: "Goldbooks" },
            role: { he: "אריזת וחלוקת ספרי לימוד", en: "Study Books Packaging and Distribution" },
            dates: { he: "2022", en: "2022" },
            iconSrc: "resources/images/goldbooks.png",
            link: "https://www.goldbooks.co.il/",
            description: {
                he: "חילקתי ספרי לימוד בבתי ספר, ארזתי ספרים וציוד למשלוחים, וסיפקתי שירות ללקוחות החנות.",
                en: "Distributed textbooks to schools, packed books and equipment for orders, and provided customer service in the store."
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
                he: "סטודנט שנה ג' לתואר ראשון במדעי המחשב, תחת מסלול העתודה האקדמית של צה\"ל.",
                en: " 3rd year Computer Science student, under the IDF Academic Atuda program."
            }
        },
        {
            degree: { he: "לימודי חטיבת ביניים ותיכון", en: "Middle & High School Studies" },
            school: { he: "ישיבת בני עקיבא גבעת שמואל", en: "Bnei Akiva Givat Shmuel High School Yeshiva" },
            dates: { he: "2017 - 2023", en: "2017 - 2023" },
            iconSrc: "resources/images/highschool.png",
            link: "https://yba.org.il/institutes/%D7%99%D7%A9%D7%99%D7%91%D7%AA-%D7%91%D7%A0%D7%99-%D7%A2%D7%A7%D7%99%D7%91%D7%90-%D7%92%D7%91%D7%A2%D7%AA-%D7%A9%D7%9E%D7%95%D7%90%D7%9C/",
            description: {
                he: "סיימתי את לימודי התיכון עם תעודת בגרות טכנולוגית בשל הישגיי במתמטיקה (5 יח\"ל), אנגלית (5 יח\"ל), הנדסת תוכנה (10 יח\"ל), וכימיה (5 יח\ל).",
                en: "Graduated with a technological matriculation certificate for my Math, English, Software Engineering, and Chemistry studies."
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
            about: {
                he: "מערכת ניהול תוכן חכמה למסכים בלובי של בניינים משותפים. המערכת מאפשרת לוועד הבית להציג הודעות, עדכוני חדשות, מזג אוויר ופרסומות מקומיות בזמן אמת. המערכת תומכה בסנכרון אוטומטי מול שירותי צד שלישי.",
                en: "A smart content management system for lobby screens in shared buildings. It allows the house committee to display messages, news updates, weather, and local ads in real-time. The system supports automatic synchronization with third-party services."
            },
            features: {
                he: [
                    "הודעות חברי הועד",
                    "חדשות Ynet",
                    "תחזיות מזג אוויר על בסיס שעתי",
                    "שילוב לוח שנה יהודי לזמני שבתות וחגים",
                    "דבר תורה שבועי לפרשת השבוע",
                    "בדיחות יומיות",
                    "שער החליפין הנוכחי של היורו והדולר",
                    "תוכן בידורי (חידות, פתגמים, הידעת) יומי",
                    "מוזיקת רקע ללובי הבניין"
                ],
                en: [
                    "Committie members announcements",
                    "Ynet live news feed",
                    "Hourly weather forecasts",
                    "Jewish calendar integration for Shabbat and holidays times",
                    "Weekly Torah verses",
                    "Daily jokes",
                    "Currency exchange rates",
                    "Entertainment content (riddles, proverbs, fun facts) updated daily",
                    "Background lobby music"
                ]
            },
            aspects: {
                he: [
                    "ניתן להתאמה אישית באופן מלא דרך היישומון בנייד",
                    "תמיכה במצב מואר ומוחשך",
                    "מבנה תצוגה דינמי בהתאם לגודל המסך",
                    "עיצוב רספונסיבי",
                    "זמין בכל הפלטפורמות (Android, iOS, Windows)"
                ],
                en: [
                    "Fully customizable via mobile app",
                    "Light/Dark mode support",
                    "Dynamic layout",
                    "Responsive design",
                    "Multi-platform application"
                ]
            },
            stack: ["C#", ".NET MAUI", "Firebase"],
            services: ["OpenWeatherMap API", "Ynet API", "Hebcal API", "Currency Exchange API"],
            links: {
                github: "",
                site: "https://lobby-stream.web.app/"
            },
            image: "resources/images/lobby_stream/lobby_stream.png",
            gallery: [
                "resources/images/lobby_stream/lobby_stream.png",
                "resources/images/lobby_stream/lobby_stream_mobile_01.jpg",
                "resources/images/lobby_stream/lobby_stream_mobile_02.jpg",
                "resources/images/lobby_stream/lobby_stream_mobile_03.jpg"
            ]
        },
        {
            id: "smart_travel_agent",
            title: "Smart Travel Agent",
            description: {
                he: "עוזר תכנון נסיעות המופעל על ידי בינה מלאכותית, הכולל נתונים בזמן אמת ומסלולי טיול מותאמים אישית.",
                en: "AI powered travel planning assistant, featuring real-time data and personalized itineraries."
            },
            about: {
                he: "סוכן הנסיעות החכם הוא מערכת תכנון נסיעות מבוססת בינה מלאכותית (AI) המשלבת יישומון מחשב מודרני עם מערכת מבוזרת של מיקרו-שירותים. משתמשים מזינים פרמטרים של טיול כמו יעד, תקציב ותחומי עניין כדי לקבל מסלול טיול מותאם אישית ברמה יומית, שנוצר על ידי בינה מלאכותית. הפלטפורמה כוללת 3 מודלי LLM, שילוב נתוני טיסות ומזג אוויר בזמן אמת, ניתוח תקציב, פוסטרים של נסיעות שנוצרים על ידי בינה מלאכותית וייצוא מקצועי של קבצי PDF.",
                en: "Smart Travel Agent is an AI travel planning system combining a modern desktop application with a distributed microservices backend. Users input trip parameters like destination, budget, and interests to receive a personalized, day-by-day itinerary generated by AI. The platform features a 3-tier LLM fallback system, real-time flight and weather data integration, budget analysis, AI-generated travel posters, and professional PDF exports."
            },
            features: {
                he: ["תכנון טיולים מבוסס AI", "שיפור טיול מותאם אישית", "עוזר צ'אט AI מונחה טיול", "ניתוח תקציב טיול", "חיפוש טיסות בזמן אמת", "תחזית מזג אוויר", "מודל AI ליצירת תמונות טיולים", "ניהול הפרופיל והיסטורית הטיולים"],
                en: ["AI Trip Planning", "Personalized Trip Refinement",
                    "Contextual AI Chat Assistant", "Trip Budget Analysis",
                    "Real-Time Flight Search", "Real-Time Weather Forecast",
                    "AI Image Generation", "Trip PDF Report Export",
                    "Profile Management & Trip History"]
            },
            aspects: {
                he: ["יצוא דו\"ח PDF", "סיכומי אימייל אוטומטיים", "אלגוריתם LLM בעל 3 שכבות", "הגנה מפני הנחיות זדוניות", "תמיכה באירועים ביומן גוגל"],
                en: ["Automated Email Summaries", "3-tier LLM Fallback Algorithm", "Prompt Injection Protection", "Google Calendar Integration"]
            },
            stack: ["Python", "FastAPI", "MongoDB", "Docker"],
            services: ["Ollama", "Gemini API", "HuggingFace ML", "LangChain", "n8n", "Amadeus API", "Open-Meteo API"],
            links: {
                github: "https://github.com/asher603/Smart_Travel_Agent",
                site: "projects/smart-travel-agent.html"
            },
            instructions: {
                he: "כדי להריץ את הפרויקט על המחשב המקומי, עקוב אחר ההוראות בתיעוד המלא.",
                en: "To run the project locally, follow the instructions in the full documentation."
            },
            hyperlink: {
                url: "https://github.com/asher603/Smart_Travel_Agent/blob/main/README.md",
                text: {
                    he: "קרא את התיעוד המלא",
                    en: "Read full documentation"
                }
            },
            image: "resources/images/smart_travel_agent/trip_view.png",
            gallery: [
                "resources/images/smart_travel_agent/auth_screen.png",
                "resources/images/smart_travel_agent/dashboard.png",
                "resources/images/smart_travel_agent/trip_form.png",
                "resources/images/smart_travel_agent/trip_view.png",
                "resources/images/smart_travel_agent/trip_chat.png",
                "resources/images/smart_travel_agent/history_screen.png",
                "resources/images/smart_travel_agent/logo.png"
            ]
        },
        {
            id: "lev_katan",
            title: "Lev Katan",
            description: {
                he: "אתר צדקה למוצרי תינוקות להשאלה חינמית.",
                en: "A Charity website of baby products free to borrow."
            },
            about: {
                he: "מערכת ניהול תוכן חכמה למסכים בלובי של בניינים משותפים. המערכת מאפשרת לוועד הבית להציג הודעות, עדכוני חדשות, מזג אוויר ופרסומות מקומיות בזמן אמת. המערכת תומכה בסנכרון אוטומטי מול שירותי צד שלישי.",
                en: "A smart content management system for lobby screens in shared buildings. It allows the house committee to display messages, news updates, weather, and local ads in real-time. The system supports automatic synchronization with third-party services."
            },
            features: {
                he: ["ממשק ניהול וובי", "עדכוני RSS בזמן אמת", "תמיכה במסכים אנכיים ואופקיים"],
                en: ["Web-based Admin Panel", "Real-time RSS Updates", "Supports Portrait & Landscape"]
            },
            aspects: {
                he: ["תמיכה בריבוי שפות (RTL/LTR)", "מצב כהה (Dark Mode)", "עיצוב רספונסיבי", "תמיכה ב-Accessibility"],
                en: ["Multi-language Support (RTL/LTR)", "Dark Mode Theme", "Responsive Design", "Accessibility Support"]
            },
            stack: ["HTML", "JavaScript", "Python", "Firebase"],
            services: ["Azure DevOps"],
            links: {
                github: "https://github.com/mashiah555/LevKatan",
                site: "https://lev-katan.web.app/"
            },
            instructions: {
                he: "כדי להריץ את הפרויקט על המחשב המקומי, עקוב אחר ההוראות בתיעוד המלא.",
                en: "To run the project locally, follow the instructions in the full documentation."
            },
            hyperlink: {
                url: "https://github.com/asher603/Smart_Travel_Agent/blob/main/README.md",
                text: {
                    he: "קרא את התיעוד המלא",
                    en: "Read full documentation"
                }
            },
            image: "resources/images/lev_katan/catalog.png",
            gallery: [
                "resources/images/lev_katan/login.png",
                "resources/images/lev_katan/catalog.png",
                "resources/images/lev_katan/catalog_dark.png",
                "resources/images/lev_katan/item_popup.png",
                "resources/images/lev_katan/employee_dashboard.png",
                "resources/images/lev_katan/admin_dashboard.png"
            ]
        },
        {
            id: "bookmarks_popup",
            title: "Bookmarks Popup Extension",
            description: {
                he: "הרחבה לדפדפן Chrome המאפשרת שמירת סימניות בחלון מוקפץ.",
                en: "A Chrome browser extension that allows saving bookmarks in a popup window."
            },
            about: {
                he: "מערכת ניהול תוכן חכמה למסכים בלובי של בניינים משותפים. המערכת מאפשרת לוועד הבית להציג הודעות, עדכוני חדשות, מזג אוויר ופרסומות מקומיות בזמן אמת. המערכת תומכה בסנכרון אוטומטי מול שירותי צד שלישי.",
                en: "A smart content management system for lobby screens in shared buildings. It allows the house committee to display messages, news updates, weather, and local ads in real-time. The system supports automatic synchronization with third-party services."
            },
            features: {
                he: ["ממשק ניהול וובי", "עדכוני RSS בזמן אמת", "תמיכה במסכים אנכיים ואופקיים"],
                en: ["Web-based Admin Panel", "Real-time RSS Updates", "Supports Portrait & Landscape"]
            },
            aspects: {
                he: ["תמיכה בריבוי שפות (RTL/LTR)", "מצב כהה (Dark Mode)", "עיצוב רספונסיבי", "תמיכה ב-Accessibility"],
                en: ["Multi-language Support (RTL/LTR)", "Dark Mode Theme", "Responsive Design", "Accessibility Support"]
            },
            stack: ["HTML", "JS", "Chrome"],
            services: ["Google Maps API", "OpenWeatherMap API", "RSS Feeds"],
            links: {
                github: "https://github.com/Mashiah555/bookmarks-popup-extension",
                site: ""
            },
            image: "resources/images/default.png",
            gallery: [
                "resources/images/default.png",
                "resources/images/backup.png"
            ]
        },
        {
            id: "defence_union",
            title: "Defence Union",
            description: {
                he: "מערכת לניהול ומעקב אחר מתנדבים ושיחות, פותחה באמצעות WPF.",
                en: "A comprehensive system for tracking volunteers and calls, built with WPF C#."
            },
            about: {
                he: "מערכת ניהול תוכן חכמה למסכים בלובי של בניינים משותפים. המערכת מאפשרת לוועד הבית להציג הודעות, עדכוני חדשות, מזג אוויר ופרסומות מקומיות בזמן אמת. המערכת תומכה בסנכרון אוטומטי מול שירותי צד שלישי.",
                en: "A smart content management system for lobby screens in shared buildings. It allows the house committee to display messages, news updates, weather, and local ads in real-time. The system supports automatic synchronization with third-party services."
            },
            features: {
                he: ["ממשק ניהול וובי", "עדכוני RSS בזמן אמת", "תמיכה במסכים אנכיים ואופקיים"],
                en: ["Web-based Admin Panel", "Real-time RSS Updates", "Supports Portrait & Landscape"]
            },
            aspects: {
                he: ["תמיכה בריבוי שפות (RTL/LTR)", "מצב כהה (Dark Mode)", "עיצוב רספונסיבי", "תמיכה ב-Accessibility"],
                en: ["Multi-language Support (RTL/LTR)", "Dark Mode Theme", "Responsive Design", "Accessibility Support"]
            },
            stack: ["C#", "WPF", "XML"],
            services: ["Google Maps API", "OpenWeatherMap API", "RSS Feeds"],
            links: {
                github: "",
                site: ""
            },
            image: "resources/images/default.png",
            gallery: [
                "resources/images/default.png",
                "resources/images/backup.png"
            ]
        },
        {
            id: "raycast_engine",
            title: "Raycast Engine",
            description: {
                he: "",
                en: ""
            },
            about: {
                he: "מערכת ניהול תוכן חכמה למסכים בלובי של בניינים משותפים. המערכת מאפשרת לוועד הבית להציג הודעות, עדכוני חדשות, מזג אוויר ופרסומות מקומיות בזמן אמת. המערכת תומכה בסנכרון אוטומטי מול שירותי צד שלישי.",
                en: "A smart content management system for lobby screens in shared buildings. It allows the house committee to display messages, news updates, weather, and local ads in real-time. The system supports automatic synchronization with third-party services."
            },
            features: {
                he: ["ממשק ניהול וובי", "עדכוני RSS בזמן אמת", "תמיכה במסכים אנכיים ואופקיים"],
                en: ["Web-based Admin Panel", "Real-time RSS Updates", "Supports Portrait & Landscape"]
            },
            aspects: {
                he: ["תמיכה בריבוי שפות (RTL/LTR)", "מצב כהה (Dark Mode)", "עיצוב רספונסיבי", "תמיכה ב-Accessibility"],
                en: ["Multi-language Support (RTL/LTR)", "Dark Mode Theme", "Responsive Design", "Accessibility Support"]
            },
            stack: ["Java"],
            services: [],
            links: {
                github: "",
                site: ""
            },
            image: "resources/images/raycast_engine.jpg",
            gallery: [
                "resources/images/raycast_engine.jpg"
            ]
        },
        /*
        {
            id: "queue_manager",
            title: "Queue Manager",
            description: {
                he: "מערכת לשיפור שירות הלקוחות בבתי עסק, פותחה ב-Windows Forms.",
                en: "Customer service optimization tool for businesses, built with Windows Forms."
            },
            about: {
                he: "מערכת ניהול תוכן חכמה למסכים בלובי של בניינים משותפים. המערכת מאפשרת לוועד הבית להציג הודעות, עדכוני חדשות, מזג אוויר ופרסומות מקומיות בזמן אמת. המערכת תומכה בסנכרון אוטומטי מול שירותי צד שלישי.",
                en: "A smart content management system for lobby screens in shared buildings. It allows the house committee to display messages, news updates, weather, and local ads in real-time. The system supports automatic synchronization with third-party services."
            },
            features: {
                he: ["ממשק ניהול וובי", "עדכוני RSS בזמן אמת", "תמיכה במסכים אנכיים ואופקיים"],
                en: ["Web-based Admin Panel", "Real-time RSS Updates", "Supports Portrait & Landscape"]
            },
            aspects: {
                he: ["תמיכה בריבוי שפות (RTL/LTR)", "מצב כהה (Dark Mode)", "עיצוב רספונסיבי", "תמיכה ב-Accessibility"],
                en: ["Multi-language Support (RTL/LTR)", "Dark Mode Theme", "Responsive Design", "Accessibility Support"]
            },
            stack: ["C#", "WinForms", "SQL"],
            services: ["Google Maps API", "OpenWeatherMap API", "RSS Feeds"],
            links: {
                github: "",
                site: ""
            },
            image: "resources/images/default.png",
            gallery: [
                "resources/images/default.png",
                "resources/images/backup.png"
            ]
        },
        {
            id: "narrow_down",
            title: "Narrow Down",
            description: {
                he: "",
                en: ""
            },
            about: {
                he: "מערכת ניהול תוכן חכמה למסכים בלובי של בניינים משותפים. המערכת מאפשרת לוועד הבית להציג הודעות, עדכוני חדשות, מזג אוויר ופרסומות מקומיות בזמן אמת. המערכת תומכה בסנכרון אוטומטי מול שירותי צד שלישי.",
                en: "A smart content management system for lobby screens in shared buildings. It allows the house committee to display messages, news updates, weather, and local ads in real-time. The system supports automatic synchronization with third-party services."
            },
            features: {
                he: ["ממשק ניהול וובי", "עדכוני RSS בזמן אמת", "תמיכה במסכים אנכיים ואופקיים"],
                en: ["Web-based Admin Panel", "Real-time RSS Updates", "Supports Portrait & Landscape"]
            },
            aspects: {
                he: ["תמיכה בריבוי שפות (RTL/LTR)", "מצב כהה (Dark Mode)", "עיצוב רספונסיבי", "תמיכה ב-Accessibility"],
                en: ["Multi-language Support (RTL/LTR)", "Dark Mode Theme", "Responsive Design", "Accessibility Support"]
            },
            stack: ["Dart", "Flutter"],
            services: ["Google Maps API", "OpenWeatherMap API", "RSS Feeds"],
            links: {
                github: "",
                site: ""
            },
            image: "resources/images/default.png",
            gallery: [
                "resources/images/default.png",
                "resources/images/backup.png"
            ]
        },
        {
            id: "walkie_doggie",
            title: "Walkie Doggie",
            description: {
                he: "אפליקציית מובייל למעקב וטיפול בחיות מחמד משפחתיות.",
                en: "Mobile application to simplify family pet care tracking."
            },
            about: {
                he: "מערכת ניהול תוכן חכמה למסכים בלובי של בניינים משותפים. המערכת מאפשרת לוועד הבית להציג הודעות, עדכוני חדשות, מזג אוויר ופרסומות מקומיות בזמן אמת. המערכת תומכה בסנכרון אוטומטי מול שירותי צד שלישי.",
                en: "A smart content management system for lobby screens in shared buildings. It allows the house committee to display messages, news updates, weather, and local ads in real-time. The system supports automatic synchronization with third-party services."
            },
            features: {
                he: ["ממשק ניהול וובי", "עדכוני RSS בזמן אמת", "תמיכה במסכים אנכיים ואופקיים"],
                en: ["Web-based Admin Panel", "Real-time RSS Updates", "Supports Portrait & Landscape"]
            },
            aspects: {
                he: ["תמיכה בריבוי שפות (RTL/LTR)", "מצב כהה (Dark Mode)", "עיצוב רספונסיבי", "תמיכה ב-Accessibility"],
                en: ["Multi-language Support (RTL/LTR)", "Dark Mode Theme", "Responsive Design", "Accessibility Support"]
            },
            stack: ["C#", ".NET MAUI", "Firebase"],
            services: ["Google Maps API", "OpenWeatherMap API", "RSS Feeds"],
            links: {
                github: "https://github.com/Mashiah555/Walkie-Doggie",
                site: ""
            },
            image: "resources/images/default.png",
            gallery: [
                "resources/images/default.png",
                "resources/images/backup.png"
            ]
        }
        */
    ]
};
