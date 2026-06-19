function analyzeArticle(text) {

  // Convert text to lowercase
  text = text.toLowerCase();

  // Remove punctuation and replace it with spaces
  text = text.replace(/[^a-z0-9\s]/g, " ");

  // Split text into words and normalize whitespace
  let words = text.split(/\s+/);

  let totalWords = words.length;
  let wordCount = {};
  let totalLength = 0;

  // Count words and total character length
  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    totalLength = totalLength + word.length;

    if (wordCount[word]) {
      wordCount[word] = wordCount[word] + 1;
    } else {
      wordCount[word] = 1;
    }
  }

  // Count unique words
  let uniqueWords = 0;

  for (let key in wordCount) {
    uniqueWords++;
  }

  // Calculate average word length
  let averageWordLength = 0;

  if (totalWords > 0) {
    averageWordLength = totalLength / totalWords;
    averageWordLength = Number(averageWordLength.toFixed(2));
  }

  // Convert object into array
  let wordArray = [];

  for (let key in wordCount) {
    wordArray.push({
      word: key,
      count: wordCount[key]
    });
  }

  // Sort words by frequency (highest first)
  for (let i = 0; i < wordArray.length; i++) {
    for (let j = i + 1; j < wordArray.length; j++) {
      if (wordArray[j].count > wordArray[i].count) {
        let temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp;
      }
    }
  }

  // Get top 5 words
  let top5Words = [];

  for (let i = 0; i < 5 && i < wordArray.length; i++) {
    top5Words.push(wordArray[i]);
  }

  // Return results
  return {
    totalWords: totalWords,
    uniqueWords: uniqueWords,
    averageWordLength: averageWordLength,
    top5Words: top5Words
  };
}
module.exports = analyzeArticle;