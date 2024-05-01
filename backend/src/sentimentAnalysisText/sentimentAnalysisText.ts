import natural from "natural";
import stopword from "stopword";

type GradeSentiment = "Negative" | "Neutral" | "Positive";

export const sentimentAnalysisText = (text: string): GradeSentiment => {
	const lowerCaseData = convertToLowerCase(text);
	const onlyAlpha = removeNonAlpha(lowerCaseData);
	const tokenizedData = new natural.WordTokenizer().tokenize(onlyAlpha);
	const filteredData = stopword.removeStopwords(tokenizedData);
	const sentimentAnalyzer = new natural.SentimentAnalyzer(
		"English",
		natural.PorterStemmer,
		"afinn",
	);
	const analysisScore = sentimentAnalyzer.getSentiment(filteredData);

	if (analysisScore >= 1) return "Positive";
	if (analysisScore <= -1) return "Negative";
	return "Neutral";
};

const convertToLowerCase = (text: string) => {
	return text.toLowerCase();
};

const removeNonAlpha = (text: string) => {
	return text.replace(/[^a-zA-Z\s]+/g, "");
};
