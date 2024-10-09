import { create } from "zustand";

import { Post } from "../types";

interface PostState {
	post: Post;
	setPost: (post: Post) => void;
}

const initiaPost: Post = {
	title: "",
	description: "",
};

const usePostStore = create<PostState>((set) => ({
	post: initiaPost,
	setPost: (post: Post): void => set({ post }),
}));

export default usePostStore;
