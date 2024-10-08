import { IPost } from "./models/Post.models";

export interface ServiceResponse {
	success: boolean;
	message: string;
	posts: IPost[];
}

export interface ControllerResponse extends ServiceResponse {
	status: number;
}
