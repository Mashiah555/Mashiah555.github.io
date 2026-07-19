// Advanced Intent Mapping using Regex patterns
export const promptIntents = [
    {
        // Matches greetings
        patterns: [/\b(hi|hello|hey|greetings|you can do|can you do)\b/i],
        response: "Hi there! I'm Zing, Yuval's custom-built AI. Ask me about his projects, skills, or experience!",
        navigateTo: null
    },
    {
        // Matches questions about skills, tech stack, or specific languages
        patterns: [/\b(skills|tech|stack|languages?|c#|\.net|python|flutter|js|javascript|html)\b/i],
        response: "Yuval's core stack includes C#, .NET MAUI, Flutter, and Python. He frequently utilizes GitHub Actions for CI workflows, and Supabase or Google Firestore for database management.",
        navigateTo: "resume-section"
    },
    {
        // Matches questions about mobile development, Flutter, or Flame
        patterns: [/\b(mobile|flutter|flame|apps?|narrow down|parking|game|board game)\b/i],
        response: "Yuval has built several mobile applications using Flutter! These include 'Narrow Down' (a board game clone using Riverpod), a mini-games hub featuring a 'Parking Jam' clone built with Flame, and a local English-learning app for children integrated with the Gemma 4 model.",
        navigateTo: "resume-section"
    },
    {
        // Matches questions about web development, Flask, or specific web projects
        patterns: [/\b(web|flask|lev katan|charity|ceo|firebase)\b/i],
        response: "In the web domain, Yuval developed 'Lev Katan', a charity management web app built with Flask and Supabase. He also engineered a web game called 'The Road to CEO', deployed via Firebase CLI.",
        navigateTo: null
    },
    {
        // Matches questions about .NET MAUI or Lobby Stream
        patterns: [/\b(lobby|stream|maui|\.net|calendar|news)\b/i],
        response: "Yuval developed 'Lobby Stream', a .NET MAUI application that features a dynamic news feed and a custom Hebrew calendar implementation.",
        navigateTo: null
    },
    {
        // Matches questions about tools, extensions, or algorithms
        patterns: [/\b(chrome|extension|bookmarks|algorithm|exam|optimization|schedule)\b/i],
        response: "Beyond standard apps, Yuval built 'Quick Bookmarks', a custom Google Chrome extension with enhanced grid views. He also engineered a complex Python-based academic exam optimization algorithm to manage university schedules.",
        navigateTo: null
    },
    {
        // Matches questions about education or academics
        patterns: [/\b(student|education|university|degree|ba|cs|computer science)\b/i],
        response: "Yuval is currently a third-year Computer Science BA student, rapidly approaching graduation!",
        navigateTo: null
    },
    {
        // Matches questions about Zing itself
        patterns: [/\b(who are you|zing|how do you work|bot|ai|engine)\b/i],
        response: "I am Zing! I am a custom N-gram engine built entirely from scratch in JavaScript by Yuval to live natively on this portfolio page.",
        navigateTo: "education"
    }
];

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