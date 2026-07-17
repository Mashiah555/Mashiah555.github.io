import { Trigram } from './ngram.js';

export class Agent {
    constructor(name) {
        this.name = name;
        this.brain = new Trigram();

        // Hardcoded answers for portfolio comprehension
        this.knowledgeBase = {
            "lobby stream": "Lobby Stream is a .NET MAUI application I developed. It features a Hebrew calendar display and dynamic news feed components.",
            "lev katan": "Lev Katan is a charity web application I built using Flask and Supabase. It manages operations for a baby products lending association.",
            "quick bookmarks": "Quick Bookmarks is a custom Google Chrome extension I engineered, featuring an enhanced grid view and right-click folder customization.",
            "narrow down": "Narrow Down is a Flutter board game application clone I developed, utilizing the Riverpod state management framework.",
            "skills": "I actively develop applications using C#, .NET MAUI, Flutter, and Python. I often use GitHub Pages, Supabase, and GitHub Actions for deployment."
        };
    }

    learn(text) {
        this.brain.train(text);
    }

    _understandIntent(query) {
        const queryLower = query.toLowerCase();
        for (const [key, answer] of Object.entries(this.knowledgeBase)) {
            if (queryLower.includes(key)) {
                return answer;
            }
        }
        return null;
    }

    respond(query) {
        // Try to understand the question and give a factual answer
        const factualResponse = this._understandIntent(query);
        if (factualResponse) {
            return factualResponse;
        }

        // Fallback to generating text using the Trigram model
        const words = this.brain._preprocess(query);
        if (words.length >= 2) {
            const startContext = words.slice(-2); // Grab the last two words
            return this.brain.generate(startContext);
        } else {
            return "Could you tell me more about that?";
        }
    }

    introduce() {
        return `Hi, I'm ${this.name}! \nAsk me anything about Yuval.`
    }
}