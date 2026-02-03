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
            iconSrc: "resources/images/default.png",
            company: { he: "צה״ל (עתודה אקדמית)", en: "IDF (Academic Reserve)" },
            role: { he: "מפתח Full Stack", en: "Full Stack Developer" },
            dates: { he: "2023 - היום", en: "2023 - Present" },
            description: {
                he: "פיתוח מערכות מבצעיות מקצה לקצה, עבודה עם צוותי מוצר ושיפור ביצועים במערכות קריטיות.",
                en: "Developing end-to-end operational systems, collaborating with product teams, and optimizing critical system performance."
            }
        },
        {
            iconSrc: "resources/images/default.png",
            company: { he: "C-ATA (סיעתא)", en: "C-ATA" },
            role: { he: "מרכיב מוצר", en: "Product Assembler" },
            dates: { he: "2023 - 2024", en: "2023 - 2024" },
            description: {
                he: "פיתוח מערכות מבצעיות מקצה לקצה, עבודה עם צוותי מוצר ושיפור ביצועים במערכות קריטיות.",
                en: "Developing end-to-end operational systems, collaborating with product teams, and optimizing critical system performance."
            }
        }
    ],

    // --- EDUCATION ---
    education: [
        {
            iconSrc: "resources/images/default.png",
            degree: { he: "B.Sc. במדעי המחשב", en: "B.Sc. Computer Science" },
            school: { he: "המרכז האקדמי לב (JCT)", en: "Jerusalem College of Technology (JCT)" },
            dates: { he: "2021 - 2024", en: "2021 - 2024" },
            description: {
                he: "התמחות במערכות מידע ובינה מלאכותית. מצטיין דיקן.",
                en: "Specialization in Information Systems and AI. Dean's List."
            }
        }
    ]
};