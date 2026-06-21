function analyzeArticle(text) {
  // Clean the Text + split it in words + remove spaces and symbols
  const cleanText = text.toLowerCase().replace(/[^\w\s]|_/g, "");
  const words = cleanText.trim().split(/\s+/);

  // If the text empty put 0 for all values
  if (words.length === 0 || words[0] === "") {
    return { totalWords: 0, uniqueWords: 0, averageWordLength: 0, top5Words: [] };
  }

  // Words length + frequency 
  const wordCounts = {};
  let totalLength = 0;

  words.forEach(word => {
    totalLength += word.length;
    // If a word existed add 1 to the value if not put 1 
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });


  const totalWords = words.length;
  const uniqueWords = Object.keys(wordCounts).length;
  const averageWordLength = parseFloat((totalLength / totalWords).toFixed(2));

  // Put top 5 words in an array 
  const sortedWords = Object.keys(wordCounts).map(word => {
    return { word: word, count: wordCounts[word] };
  });

  // Sort in descending order
  sortedWords.sort((a, b) => b.count - a.count);

  // Cut the first 5 
  const top5Words = sortedWords.slice(0, 5);

  // Result
  return {
    totalWords,
    uniqueWords,
    averageWordLength,
    top5Words
  };
}

// TEST

const testText = `The demand for individuals with tech skills is increasing.
The good news is that you do not have to study IT to learn coding! We help you enter the Tech World
– independent of your prior knowledge. Our Digital Shaper Program combines online learning,
project work and community events to make learning as fun and easy as possible.
As we believe that education should be free for everyone we are pleased to educate Techies in our
four courses: Web Development, Data Science, Artificial Intelligence and UX-Design. We believe that
these tracks are perfect to get started and enter the tech world. Sign up for our program beginning
of each semester.`;

console.log(analyzeArticle(testText));