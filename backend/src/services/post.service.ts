import { ServiceResponse } from "./../types";
import { createServiceResponse } from "./../utils/response.utils";
import { PostModel } from "./../models";
import { IPost } from "./../models/Post.models";

const verifyCreateFields = (title: string, description: string) => {
	if (!title || !description) {
		return createServiceResponse(false, "Todos Los campos son requeridos");
	}

	return createServiceResponse(true, "Campos llenos correctamente");
};

const verifyUpdateFields = (title: string, description: string) => {
	if (!title && !description) {
		return createServiceResponse(false, "Los campos estan vacios");
	}

	return createServiceResponse(true, "Campos llenos correctamente");
};

const create = async (title: string, description: string) => {
	try {
		const post: IPost = new PostModel({
			title,
			description,
		});

		const postSaved = await post.save();

		if (!postSaved) {
			return createServiceResponse(false, "El post no pudo ser creado");
		}

		return createServiceResponse(true, "Post creado correctante", [postSaved]);
	} catch (error) {
		throw error;
	}
};

const findAll = async () => {
	try {
		const posts = await PostModel.find();
		return createServiceResponse(true, "Todos los posts encontrados", posts);
	} catch (error) {
		throw error;
	}
};

const findOneByID = async (id: string) => {
	try {
		const post = await PostModel.findById(id);

		if (!post) {
			return createServiceResponse(false, "Post no encontrado");
		}

		return createServiceResponse(true, "Post encontrado", [post]);
	} catch (error) {
		throw error;
	}
};

const updateOneByID = async (id: string, body: Object) => {
	try {
		const postUpdated = await PostModel.findByIdAndUpdate(id, body, {
			new: true,
			upsert: true,
		});

		if (!postUpdated) {
			return createServiceResponse(false, "Post no ha sido actualizado");
		}

		return createServiceResponse(true, "Post actualizado", [postUpdated]);
	} catch (error) {
		throw error;
	}
};

const deleteOneByID = async (id: string) => {
	try {
		const postDeleted = await PostModel.findByIdAndDelete(id);

		if (!postDeleted) {
			return createServiceResponse(false, "Post no ha sido eliminado");
		}

		return createServiceResponse(true, "Post eliminado", [postDeleted]);
	} catch (error) {
		throw error;
	}
};

export const postsService = {
	verifyCreateFields,
	verifyUpdateFields,
	create,
	findAll,
	findOneByID,
	updateOneByID,
	deleteOneByID,
};
