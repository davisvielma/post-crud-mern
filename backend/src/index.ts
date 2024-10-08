import { App } from "./app";
import { connectDB } from "./database";

(async () => {
	await connectDB();

	const app = new App();
	app.listen();
})();
