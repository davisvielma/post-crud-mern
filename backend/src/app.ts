import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import { PORT } from "./config";
import routes from "./routes";
import swaggerSpec from "./swagger";

export class App {
	private app: express.Application;

	constructor() {
		this.app = express();
		this.configuracion();
		this.middlewares();
		this.routes();
	}

	configuracion() {
		this.app.set("port", PORT || 3000);
	}

	middlewares() {
		this.app.use(morgan("dev"));
		this.app.use(cors());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(express.json());
		this.app.use(
			"/api/docs",
			swaggerUI.serve,
			swaggerUI.setup(swaggerJsDoc(swaggerSpec))
		);
	}

	routes() {
		this.app.use("/api", routes);
	}

	listen() {
		this.app.listen(this.app.get("port"), () => {
			console.log(`Server en el puerto ${this.app.get("port")}`);
		});
	}
}
