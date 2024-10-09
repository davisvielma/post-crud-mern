import { ChangeEvent, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import PostList from "./PostList";
import usePostsStore from "./../../store/posts.store";
import useSearchStore from "./../../store/search.store";
import { filterBySearch } from "../../utils";
import { getPosts } from "../../services/posts.service";

const Posts = () => {
	const { posts, setPosts } = usePostsStore();
	const { search, setSearch } = useSearchStore();

	const postsSearch = filterBySearch(posts, search);

	const loadPosts = async () => {
		const { data } = await getPosts();
		setPosts(data.posts.reverse());
		console.log(`${data.status}: ${data.message}`);
	};

	useEffect(() => {
		loadPosts();
	}, []);

	const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value.toLowerCase());
	};

	return (
		<section className="px-4 py-5">
			<form className="mb-6">
				<div className="bg-white p-2 mx-auto flex rounded-2xl text-lg max-w-lg md:max-w-2xl lg:max-w-4xl">
					<input
						className="outline-none flex-1"
						type="text"
						placeholder="Buscar posts"
						name="posts"
						autoComplete="off"
						onChange={handleChangeSearch}
					/>
					<button
						type="button"
						className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors"
					>
						<FaSearch color="white" size="1.3em" />
					</button>
				</div>
			</form>
			<PostList posts={postsSearch} loadPosts={loadPosts} />
		</section>
	);
};

export default Posts;
