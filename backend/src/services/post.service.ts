import { ServiceResponse } from "./../types";
import { createServiceResponse } from "./../utils/response.utils";
import { PostModel } from "./../models";
import { IPost } from "./../models/Post.models";

const verifyCreateFields = (title: string, description: string) => {
	if (!title || !description) {
		return createServiceResponse(false, "All fields are required");
	}

	return createServiceResponse(true, "Fields fine");
};

const verifyUpdateFields = (title: string, description: string) => {
	if (!title && !description) {
		return createServiceResponse(false, "Error all fields are empty");
	}

	return createServiceResponse(true, "Field fine");
};

const create = async (title: string, description: string) => {
	try {
		const post: IPost = new PostModel({
			title,
			description,
		});

		const postSaved = await post.save();

		if (!postSaved) {
			return createServiceResponse(false, "Post not created");
		}

		return createServiceResponse(true, "Post Created", [postSaved]);
	} catch (error) {
		throw error;
	}
};

const findAll = async () => {
	try {
		const posts = await PostModel.find();
		return createServiceResponse(true, "Posts all found", posts);
	} catch (error) {
		throw error;
	}
};

const findOneByID = async (id: string) => {
	try {
		const post = await PostModel.findById(id);

		if (!post) {
			return createServiceResponse(false, "Post not found");
		}

		return createServiceResponse(true, "Post Found", [post]);
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
			return createServiceResponse(false, "Post not updated");
		}

		return createServiceResponse(true, "Post updated", [postUpdated]);
	} catch (error) {
		throw error;
	}
};

const deleteOneByID = async (id: string) => {
	try {
		const postDeleted = await PostModel.findByIdAndDelete(id);

		if (!postDeleted) {
			return createServiceResponse(false, "Post could not be deleted");
		}

		return createServiceResponse(true, "Post remove", [postDeleted]);
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
