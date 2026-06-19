import fs from "fs";
import analyzeArticle from "./articleAnalyzer.js";

let text = fs.readFileSync("article.txt", "utf8");

let result = analyzeArticle(text);

console.log(result);