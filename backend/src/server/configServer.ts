import cors, { CorsOptions } from "cors";
import express, { Application } from "express";

const configServer = (port: number): Application => {
	const app: Application = express();

	const corsOptions: CorsOptions = {
		origin: `http://localhost:${port}`,
	};

	app.use(cors(corsOptions));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	return app;
};

export default configServer;
