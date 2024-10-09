import { create } from "zustand";

import { Post } from "../types";

interface PostsState {
	posts: Array<Post>;
	setPosts: (posts: Array<Post>) => void;
}

const usePostsStore = create<PostsState>((set) => ({
	posts: [],
	setPosts: (posts: Array<Post>): void => set({ posts }),
}));

export default usePostsStore;
