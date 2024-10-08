import mongoose from "mongoose";

import { MONGO_URI } from "./../config";

export const connectDB = async () => {
	try {
		if (!mongoose.connection.readyState) {
			console.log("Conectando a la BD...");
			await mongoose.connect(MONGO_URI as string);
		}

		console.log("Conexion exitosa a la BD");
	} catch (error) {
		console.log("Error al conectar a la BD");
		process.exit(1);
	}
};
