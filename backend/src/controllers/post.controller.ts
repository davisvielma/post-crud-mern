import { Response, Request } from "express";

import { postsService } from "./../services";
import { ControllerResponse } from "./../types";
import { createControllerResponse } from "./../utils/response.utils";
import { verifyID } from "../utils/mongo.utils";

const createPost = async (req: Request, res: Response) => {
	const { title, description } = req.body;
	const emptyFields = postsService.verifyCreateFields(title, description);

	if (!emptyFields.success) {
		const response: ControllerResponse = createControllerResponse(
			false,
			400,
			emptyFields.message,
			[]
		);

		res.status(400).json(response);
		return;
	}

	try {
		const post = await postsService.create(title, description);
		if (!post.success) {
			const response = createControllerResponse(false, 409, post.message);
			res.status(409).json(response);
			return;
		}

		const response = createControllerResponse(
			true,
			201,
			post.message,
			post.posts
		);
		res.status(201).json(response);
		return;
	} catch (error) {
		const response = createControllerResponse(
			false,
			500,
			"Internal Server Error"
		);
		res.status(500).json(response);
		return;
	}
};

const getAllPosts = async (req: Request, res: Response) => {
	try {
		const posts = await postsService.findAll();
		const response = createControllerResponse(
			true,
			200,
			posts.message,
			posts.posts
		);
		res.status(200).json(response);
		return;
	} catch (error) {
		const response = createControllerResponse(
			false,
			500,
			"Internal Server Error"
		);
		res.status(500).json(response);
		return;
	}
};

const getOnePost = async (req: Request, res: Response) => {
	const { id } = req.params;

	if (!verifyID(id)) {
		const response = createControllerResponse(false, 400, "Error in ID");
		res.status(400).json(response);
		return;
	}

	try {
		const postExists = await postsService.findOneByID(id);
		if (!postExists.success) {
			const response = createControllerResponse(false, 404, postExists.message);
			res.status(404).json(response);
			return;
		}

		const response = createControllerResponse(
			true,
			200,
			postExists.message,
			postExists.posts
		);
		res.status(200).json(response);
		return;
	} catch (error) {
		const response = createControllerResponse(
			false,
			500,
			"Internal Server Error"
		);
		res.status(500).json(response);
		return;
	}
};

const updatePost = async (req: Request, res: Response) => {
	const fieldVerifed = postsService.verifyUpdateFields(
		req.body.title,
		req.body.description
	);
	if (!fieldVerifed.success) {
		const response = createControllerResponse(false, 400, fieldVerifed.message);
		res.status(400).json(response);
		return;
	}

	const { id } = req.params;

	if (!verifyID(id)) {
		const response = createControllerResponse(false, 400, "Error in ID");
		res.status(400).json(response);
		return;
	}

	try {
		const postExists = await postsService.findOneByID(id);
		if (!postExists.success) {
			const response = createControllerResponse(false, 404, postExists.message);
			res.status(404).json(response);
			return;
		}

		const postUpdated = await postsService.updateOneByID(id, req.body);
		if (!postUpdated.success) {
			const response = createControllerResponse(
				false,
				409,
				postUpdated.message
			);
			res.status(409).json(response);
			return;
		}

		const response = createControllerResponse(
			true,
			200,
			postUpdated.message,
			postUpdated.posts
		);
		res.status(200).json(response);
		return;
	} catch (error) {
		const response = createControllerResponse(
			false,
			500,
			"Internal Server Error"
		);
		res.status(500).json(response);
		return;
	}
};

const deletePost = async (req: Request, res: Response) => {
	const { id } = req.params;

	if (!verifyID(id)) {
		const response = createControllerResponse(false, 400, "Error in ID");
		res.status(400).json(response);
		return;
	}

	try {
		const postExists = await postsService.findOneByID(id);
		if (!postExists.success) {
			const response = createControllerResponse(false, 404, postExists.message);
			res.status(404).json(response);
			return;
		}

		const postDeleted = await postsService.deleteOneByID(id);
		if (!postDeleted.success) {
			const response = createControllerResponse(
				false,
				409,
				postDeleted.message
			);
			res.status(409).json(response);
			return;
		}

		const response = createControllerResponse(
			true,
			200,
			postDeleted.message,
			postDeleted.posts
		);
		res.status(200).json(response);
		return;
	} catch (error) {
		const response = createControllerResponse(
			false,
			500,
			"Internal Server Error"
		);
		res.status(500).json(response);
		return;
	}
};

export const postsConstroller = {
	createPost,
	getAllPosts,
	getOnePost,
	updatePost,
	deletePost,
};
