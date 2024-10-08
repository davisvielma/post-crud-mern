import { ServiceResponse, ControllerResponse } from "./../types";
import { IPost } from "./../models/Post.models";

const createServiceResponse = (
	success: boolean,
	message: string,
	posts: IPost[] = []
): ServiceResponse => {
	return {
		success,
		message,
		posts,
	};
};

const createControllerResponse = (
	success: boolean,
	status: number,
	message: string,
	posts: IPost[] = []
): ControllerResponse => {
	return {
		success,
		status,
		message,
		posts,
	};
};

export { createServiceResponse, createControllerResponse };
