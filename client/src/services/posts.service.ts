import axios from "axios";

import { VITE_BACKEND_URL } from "./../config";
import { Post } from "../types";

export const getPosts = async () => {
	return await axios.get(`${VITE_BACKEND_URL}/api/posts`);
};

export const getOnePost = async (id: string) => {
	return await axios.get(`${VITE_BACKEND_URL}/api/posts/${id}`);
};

export const createPosts = async (post: Post) => {
	return await axios.post(`${VITE_BACKEND_URL}/api/posts`, post);
};

export const updatePosts = async (id: string, post: Post) => {
	return await axios.put(`${VITE_BACKEND_URL}/api/posts/${id}`, post);
};

export const deletePost = async (id: string) => {
	return await axios.delete(`${VITE_BACKEND_URL}/api/posts/${id}`);
};
