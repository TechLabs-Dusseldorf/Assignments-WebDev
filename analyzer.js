/**
 * Analyzes an article's text and returns word-level statistics.
 *
 * @param {string} text - The article text to analyze.
 * @param {number} [topN=5] - How many of the most frequent words to return (Bonus 1).
 * @returns {{
 *   totalWords: number,
 *   uniqueWords: number,
 *   averageWordLength: number,
 *   top5Words: Array<{ word: string, count: number }>
 * }}
 */
function analyzeArticle(text, topN = 5) {
    // 1. Normalize case so "Tech" and "tech" are treated as the same word
    const lowerCaseText = text.toLowerCase();

    // 2. Strip punctuation, keeping only letters, numbers, and whitespace
    const lettersAndNumbersOnly = lowerCaseText.replace(/[^a-z0-9\s]/g, ' ');

    // 3. Normalize whitespace and split into individual words
    const words = lettersAndNumbersOnly.split(/\s+/).filter(Boolean);

    const totalWords = words.length;

    // 4. Count how often each word appears, and track total character length
    const wordCounts = new Map();
    let totalCharacters = 0;

    for (const word of words) {
        wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
        totalCharacters += word.length;
    }

    const uniqueWords = wordCounts.size;

    const averageWordLength = totalWords === 0
        ? 0
        : Number((totalCharacters / totalWords).toFixed(2));

    // 5. Sort words by frequency (highest first) and keep the top N
    const topWords = Array.from(wordCounts, ([word, count]) => ({ word, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, topN);

    return {
        totalWords,
        uniqueWords,
        averageWordLength,
        top5Words: topWords,
    };
}

module.exports = analyzeArticle;

// Bonus 2: run this file directly from the command line, e.g.
//   node articleAnalyzer.js "Some article text here" 3
if (require.main === module) {
    const inputText = process.argv[2];
    const topN = process.argv[3] ? Number(process.argv[3]) : 5;

    if (!inputText) {
        console.error('Usage: node articleAnalyzer.js "<article text>" [topN]');
        process.exit(1);
    }

    console.log(analyzeArticle(inputText, topN));
}