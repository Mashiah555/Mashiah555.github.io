import BaseLanguageModel from "./baseLanguageModel.js";

class NGramModel extends BaseLanguageModel {
    constructor(n) {
        super();
        this.n = n;
        // Maps a context string (e.g., 'word1|word2') to an object of next-word counts
        this.ngrams = {};
    }

    train(text) {
        const words = this._preprocess(text);
        if (words.length < this.n) return;

        for (let i = 0; i <= words.length - this.n; i++) {
            // Join the N-1 context words with a pipe to use as an object key
            const context = words.slice(i, i + this.n - 1).join('|');
            const nextWord = words[i + this.n - 1];

            if (!this.ngrams[context]) {
                this.ngrams[context] = {};
            }

            // Increment the count for the next word
            this.ngrams[context][nextWord] = (this.ngrams[context][nextWord] || 0) + 1;
        }
    }

    generate(startContext, maxLength = 15) {
        if (startContext.length !== this.n - 1) {
            return "Error: Start context must be exactly N-1 words.";
        }

        let result = [...startContext];
        let currentContext = [...startContext];

        for (let i = 0; i < maxLength - startContext.length; i++) {
            const contextKey = currentContext.join('|');
            const possibleNextWordsObj = this.ngrams[contextKey];

            // Stop generating if we've reached a dead end in the training data
            if (!possibleNextWordsObj) break;

            // Create a weighted array of possible next words based on their counts
            const possibleNextWords = [];
            for (const [word, count] of Object.entries(possibleNextWordsObj)) {
                for (let c = 0; c < count; c++) {
                    possibleNextWords.push(word);
                }
            }

            // Pick a random word from the weighted array
            const nextWord = possibleNextWords[Math.floor(Math.random() * possibleNextWords.length)];
            result.push(nextWord);

            // Shift the context window forward for the next iteration
            currentContext = result.slice(-(this.n - 1));
        }

        return result.join(" ");
    }
}

export class Bigram extends NGramModel {
    constructor() {
        super(2);
    }
}

export class Trigram extends NGramModel {
    constructor() {
        super(3);
    }
}