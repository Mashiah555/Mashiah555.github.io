// Advanced Intent Mapping using Regex patterns
export const promptIntents = [
    {
        patterns: [/\b(hi|hello|hey|greetings|howdy)\b/i, /(היי|הי|שלום|אהלן)/],
        responses: {
            en: "Hi there! I'm Zing. Ask me about Yuval's projects, skills, or experience!",
            he: "היי! אני Zing. מוזמנים לשאול אותי על הפרויקטים, הכישורים או הניסיון של יובל!"
        },
        navigateTo: null
    },
    {
        patterns: [/\b(skills|tech|stack|languages?|c#|\.net|python|flutter|js|javascript|html)\b/i, /(כישורים|יכולות|טכנולוגיות|שפות|פיתוח|שפה)/],
        responses: {
            en: "Yuval's core stack includes C#, .NET MAUI, Flutter, and Python. He frequently utilizes GitHub Actions for CI workflows, and Supabase or Google Firestore for database management.",
            he: "הטכנולוגיות המרכזיות של יובל כוללות C#, .NET MAUI, Flutter ו-Python. הוא משתמש ב-GitHub Actions ל-CI/CD, וב-Supabase או Firestore לניהול מסדי נתונים."
        },
        navigateTo: "resume-section"
    },
    {
        patterns: [/\b(mobile|flutter|flame|apps?|narrow down|parking|game|board game)\b/i, /(מובייל|אפליקציה|אפליקציות|פלאטר|משחק|משחקים)/],
        responses: {
            en: "Yuval has built several mobile applications using Flutter! These include 'Narrow Down' (a board game clone using Riverpod), a mini-games hub featuring a 'Parking Jam' clone built with Flame, and a local English-learning app for children integrated with the Gemma 4 model.",
            he: "יובל בנה מספר אפליקציות מובייל באמצעות Flutter! אלו כוללות את 'Narrow Down' (משחק לוח), אוסף מיני-משחקים הכולל את 'Parking Jam', ואפליקציה מקומית ללימוד אנגלית לילדים המשולבת עם מודל Gemma 4."
        },
        navigateTo: "resume-section"
    },
    {
        patterns: [/\b(web|flask|lev katan|charity|ceo|firebase)\b/i, /(ווב|אתר|לב קטן|תרומות|רשת)/],
        responses: {
            en: "In the web domain, Yuval developed 'Lev Katan', a charity management web app built with Flask and Supabase. He also engineered a web game called 'The Road to CEO', deployed via Firebase CLI.",
            he: "בתחום הווב, יובל פיתח את 'לב קטן', אפליקציית רשת לניהול תרומות שנבנתה עם Flask ו-Supabase. הוא גם תכנת משחק רשת בשם 'The Road to CEO' שהועלה דרך Firebase CLI."
        },
        navigateTo: null
    },
    {
        patterns: [/\b(lobby|stream|maui|\.net|calendar|news)\b/i, /(לובי|סטרים|לוח שנה|חדשות)/],
        responses: {
            en: "Yuval developed 'Lobby Stream', a .NET MAUI application that features a dynamic news feed and a custom Hebrew calendar implementation.",
            he: "יובל פיתח את 'Lobby Stream', אפליקציית .NET MAUI הכוללת רכיב חדשות דינמי ולוח שנה עברי מותאם אישית."
        },
        navigateTo: null
    },
    {
        patterns: [/\b(chrome|extension|bookmarks|algorithm|exam|optimization|schedule)\b/i, /(תוסף|כרום|סימניות|אלגוריתם|מבחנים|אופטימיזציה|שיבוץ)/],
        responses: {
            en: "Beyond standard apps, Yuval built 'Quick Bookmarks', a custom Google Chrome extension with enhanced grid views. He also engineered a complex Python-based academic exam optimization algorithm to manage university schedules.",
            he: "יובל בנה את 'Quick Bookmarks', תוסף לכרום לניהול סימניות עם תצוגת רשת משופרת. בנוסף, הוא פיתח אלגוריתם מורכב ב-Python לשיבוץ ואופטימיזציה של לוח מבחנים אקדמי."
        },
        navigateTo: null
    },
    {
        patterns: [/\b(student|education|university|degree|ba|cs|computer science)\b/i, /(סטודנט|השכלה|אוניברסיטה|תואר|מדעי המחשב)/],
        responses: {
            en: "Yuval is currently a third-year Computer Science BA student, rapidly approaching graduation!",
            he: "יובל הוא כרגע סטודנט שנה שלישית לתואר ראשון במדעי המחשב, ומתקרב לסיום הלימודים!"
        },
        navigateTo: "education"
    },
    {
        patterns: [/\b(who are you|zing|how do you work|what can you do|what you can do|bot|ai|engine)\b/i, /(מי אתה|זינג|בוט|איך אתה עובד|מה אתה עושה|מה אתה יכול לעשות|מה אתה יודע לעשות)/],
        responses: {
            en: "I am Zing! I am a custom N-gram engine built entirely from scratch in JavaScript by Yuval to live natively on this portfolio.",
            he: "אני Zing! אני מנוע N-gram שנבנה מאפס ב-JavaScript על ידי יובל, כדי לחיות באופן טבעי בתיק העבודות הזה."
        },
        navigateTo: null
    }
];

// Localized fallback message
export const fallbackResponses = {
    en: "Could you rephrase that? I want to make sure I give you the right info about his work.",
    he: "אפשר לנסח מחדש? אני רוצה לוודא שאני נותן את המידע הנכון על הפרויקטים שלו."
};

// Localized welcome messages
export const welcomeMessages = {
    en: [
        "Hi! I'm Zing, Yuval's AI assistant. How can I help you today?",
        "Welcome! Feel free to ask me anything about Yuval's projects or skills.",
        "Hello! Looking for something specific in the portfolio? Ask away!"
    ],
    he: [
        "היי! אני Zing, עוזר ה-AI של יובל. איך אפשר לעזור?",
        "ברוכים הבאים! מוזמנים לשאול אותי כל דבר על הפרויקטים והכישורים של יובל.",
        "שלום! מחפשים משהו ספציפי בתיק העבודות? אשמח לעזור!"
    ]
};

// Centralized dictionary for suggestion chips
export const suggestionsConfig = {
    en: [
        "What are your skills?",
        "Tell me about Lobby Stream",
        "What is your education?"
    ],
    he: [
        "מה הכישורים שלך?",
        "ספר לי על Lobby Stream",
        "מה ההשכלה שלך?"
    ]
};

export const trainingData = `
    hello there how are you doing today I am doing great thank you for asking 
    it is a good day to write some code and build some applications
    welcome to the portfolio feel free to look around and explore the projects
    I am an artificial intelligence assistant designed to answer questions 
    let me know if you need any help navigating the website or reading the resume

    software engineering is all about solving complex problems with clean architecture 
    building cross platform applications requires a solid understanding of state management 
    for mobile development utilizing flutter and dart allows for beautiful native interfaces 
    managing complex application state is much easier when using tools like riverpod
    when developing games incorporating the flame engine provides great control over the game loop
    creating a sliding block puzzle or a board game clone is a fun way to test logic skills

    backend development often involves setting up databases and building api endpoints 
    deploying web applications using python and flask is a lightweight and efficient approach
    connecting a frontend to a supabase database allows for real time data syncing 
    automating the deployment pipeline is critical for modern development workflows
    configuring github actions for continuous integration saves a lot of manual work
    using firebase for automated deployments makes shipping web projects incredibly fast

    desktop application development requires careful layout management and event handling
    building with c sharp and dot net maui is a powerful way to target windows and android 
    creating dynamic user interface components like a custom hebrew calendar takes precision 
    writing custom google chrome extensions with javascript improves browser productivity 
    designing custom context menus and right click actions enhances the user experience

    academic projects often involve complex algorithms and optimization engines 
    calculating university exam schedules requires handling many constraints and retakes 
    running artificial intelligence models locally on windows ensures privacy and speed
    developing an application for children to learn english requires a friendly interface
    always remember to test your code and keep your object oriented foundation strong
`;