import { sentimentAnalysisText } from "../sentimentAnalysisText/sentimentAnalysisText.js";
import { Request, Response, Router } from "express";

interface ReqBodyAnalysisText {
	text: string;
}

type ReqAnalysisText = Request<never, never, ReqBodyAnalysisText>;

export const sentAnalysisRouter = Router();

sentAnalysisRouter.get("/", (req: ReqAnalysisText, res: Response) => {
	const text = req.body.text;
	const score = sentimentAnalysisText(text);
	res.status(200).json({ grade: score });
});
