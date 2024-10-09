import { Post } from "../../types";
import PostItem from "./PostItem";

interface Props {
	posts: Array<Post>;
	loadPosts: () => void;
}

const PostList = ({ posts, loadPosts }: Props) => {
	if (posts.length === 0) {
		return (
			<section className="text-center py-4">
				<h2 className="font-bold text-5xl">No hay posts</h2>
			</section>
		);
	}

	return (
		<section className="p-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{posts.map((post) => (
				<PostItem key={post._id} post={post} loadPosts={loadPosts} />
			))}
		</section>
	);
};

export default PostList;
