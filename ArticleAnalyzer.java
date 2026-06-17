import java.util.*;
import java.util.stream.*;

public class ArticleAnalyzer {

    record WordCount(String word, int count) {
    }

    static Map<String, Object> analyzeArticle(String text, int topN) {
        // Strip punctuation and split into lowercase tokens (letters/numbers only)
        String[] words = text.toLowerCase().split("[^a-z0-9]+");

        // Filter out empty strings that can appear at the start/end after split
        List<String> wordList = Arrays.stream(words)
                .filter(w -> !w.isEmpty())
                .toList();

        int totalWords = wordList.size();

        // Count word frequencies
        Map<String, Integer> freqMap = new LinkedHashMap<>();
        int totalChars = 0;

        for (String word : wordList) {
            totalChars += word.length();
            freqMap.merge(word, 1, Integer::sum);
        }

        int uniqueWords = freqMap.size();
        double averageWordLength = totalWords > 0
                ? Math.round((double) totalChars / totalWords * 100.0) / 100.0
                : 0.0;

        // Sort by count descending, then alphabetically for ties, take top N
        List<WordCount> topNWords = freqMap.entrySet().stream()
                .sorted(Map.Entry.<String, Integer>comparingByValue(Comparator.reverseOrder())
                        .thenComparing(Map.Entry.comparingByKey()))
                .limit(topN)
                .map(e -> new WordCount(e.getKey(), e.getValue()))
                .toList();

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("totalWords", totalWords);
        result.put("uniqueWords", uniqueWords);
        result.put("averageWordLength", averageWordLength);
        result.put("top" + topN + "Words", topNWords);
        return result;
    }

    public static void main(String[] args) {
        // Bonus 2: Accept command-line input
        // Run with: java ArticleAnalyzer "Your text here" 5
        String text = args.length > 0 ? args[0]
                : "The demand for individuals with tech skills is increasing. The good " +
                        "news is that you do not have to study IT to learn coding! We help you enter the Tech World – "
                        +
                        "independent of your prior knowledge. Our Digital Shaper Program combines online learning, project "
                        +
                        "work and community events to make learning as fun and easy as possible. As we believe that " +
                        "education should be free for everyone we are pleased to educate Techies in our four courses: "
                        +
                        "Web Development, Data Science, Artificial Intelligence and UX-Design. We believe that these " +
                        "tracks are perfect to get started and enter the tech world. Sign up for our program beginning "
                        +
                        "of each semester.";

        int topN = args.length > 1 ? Integer.parseInt(args[1]) : 5;

        Map<String, Object> result = analyzeArticle(text, topN);

        System.out.println("Article Analysis Results:");
        for (Map.Entry<String, Object> entry : result.entrySet()) {
            if (entry.getValue() instanceof List<?> list) {
                System.out.println("  " + entry.getKey() + ":");
                for (Object item : list) {
                    System.out.println("    " + item);
                }
            } else {
                System.out.println("  " + entry.getKey() + ": " + entry.getValue());
            }
        }
    }
}
