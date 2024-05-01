import { ROUTES } from "./routers/routes.js";
import { sentAnalysisRouter } from "./routers/sentAnalysisRouter.js";
import configServer from "./server/configServer.js";

const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8082;
const app = configServer(port);

app.use(ROUTES.SENT_ANALYSIS, sentAnalysisRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
