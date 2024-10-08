import path from "path";

const swaggerSpec = {
	definition: {
		openapi: "3.0.0",
		info: {
			version: "1.0.0",
			title: "API REST - CRUD",
			description: "Realiza las operaciones basicas CRUD para un Post",
		},
	},
	apis: [
		`${path.join(__dirname, "./../routes/*js")}`,
		`${path.join(__dirname, "./../routes/*ts")}`,
	],
};

export default swaggerSpec;
