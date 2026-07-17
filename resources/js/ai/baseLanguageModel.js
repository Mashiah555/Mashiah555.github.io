class BaseLanguageModel {
    train(text) {
        throw new Error("Subclasses must implement train()");
    }

    generate(startWords, maxLength) {
        throw new Error("Subclasses must implement generate()");
    }

    _preprocess(text) {
        // Lowercase and remove punctuation to normalize the data
        return text.toLowerCase()
            .replace(/[^\w\s\']|_/g, "")
            .replace(/\s+/g, " ")
            .trim()
            .split(" ");
    }
}

export default BaseLanguageModel;