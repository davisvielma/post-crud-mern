import { Schema, model, Document } from "mongoose";

export interface IPost extends Document {
	title: string;
	description: string;
}

const PostSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

export const PostModel = model<IPost>("Post", PostSchema);
