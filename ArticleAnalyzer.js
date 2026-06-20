/**
 * Analyzes an article excerpt and returns key text metrics.
 *
 * @param {string} text - The article text to analyze
 * @param {number} topN - Number of top words to return (default: 5)
 * @returns {Object} Analysis results
 */
function analyzeArticle(text, topN = 5) {
  // Strip punctuation and split into lowercase words (letters/numbers only)
  const words = text
    .toLowerCase()
    .match(/[a-z0-9]+/g) || [];

  const totalWords = words.length;

  // Count word frequencies using a Map
  const wordFrequencies = new Map();
  let totalCharacters = 0;

  for (const word of words) {
    totalCharacters += word.length;
    wordFrequencies.set(word, (wordFrequencies.get(word) || 0) + 1);
  }

  const uniqueWords = wordFrequencies.size;
  const averageWordLength = totalWords > 0
    ? Math.round((totalCharacters / totalWords) * 100) / 100
    : 0;

  // Sort by count descending, then alphabetically for ties
  const topNWords = [...wordFrequencies.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, topN)
    .map(([word, count]) => ({ word, count }));

  return {
    totalWords,
    uniqueWords,
    averageWordLength,
    [`top${topN}Words`]: topNWords,
  };
}

// --- Bonus 2: Accept command-line input ---
// Run with: node articleAnalyzer.js "Your text here" 5
const args = process.argv.slice(2);

const inputText = args[0] || `The demand for individuals with tech skills is increasing. The good \
news is that you do not have to study IT to learn coding! We help you enter the Tech World – \
independent of your prior knowledge. Our Digital Shaper Program combines online learning, project \
work and community events to make learning as fun and easy as possible. As we believe that \
education should be free for everyone we are pleased to educate Techies in our four courses: \
Web Development, Data Science, Artificial Intelligence and UX-Design. We believe that these \
tracks are perfect to get started and enter the tech world. Sign up for our program beginning \
of each semester.`;

const topN = args[1] ? parseInt(args[1], 10) : 5;

const result = analyzeArticle(inputText, topN);
console.log("Article Analysis Results:");
console.log(JSON.stringify(result, null, 2));