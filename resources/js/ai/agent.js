import { Trigram } from './ngram.js';
import { promptIntents } from '../data/ai_data.js';

export class Agent {
    constructor(name) {
        this.name = name;
        this.brain = new Trigram();
    }

    learn(text) {
        this.brain.train(text);
    }

    _understandIntent(query) {
        // Test the user's query against all regex patterns
        for (const intent of promptIntents) {
            for (const pattern of intent.patterns) {
                if (pattern.test(query)) {
                    return intent;
                }
            }
        }
        return null; // Return null if no patterns match
    }

    respond(query) {
        // Try to understand the question and give a factual answer
        const intentMatch = this._understandIntent(query);
        if (intentMatch) {
            return {
                text: intentMatch.response,
                navigateTo: intentMatch.navigateTo
            };
        }

        // Fallback to generating text using the Trigram model
        const words = this.brain._preprocess(query);
        if (words.length >= this.brain.n - 1) {
            const startContext = words.slice(-this.brain.n + 1); // Grab the last two words
            return {
                text: this.brain.generate(startContext),
                navigateTo: null
            };
        } else {
            return {
                text: "Could you rephrase that? I want to make sure I give you the right info about Yuval's work.",
                navigateTo: null
            };
        }
    }

    introduce() {
        return `Hi, I'm ${this.name}! \nAsk me anything about Yuval.`
    }
}