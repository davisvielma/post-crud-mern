import { useEffect } from "react";
import { useParams } from "react-router-dom";

import usePostStore from "../../store/post.store";
import { getOnePost } from "../../services/posts.service";
import { formatDate } from "../../utils";
import { Post } from "../../types";

const initialPost: Post = {
	title: "",
	description: "",
};

const PostRead = () => {
	const params = useParams();

	const { post, setPost } = usePostStore();

	useEffect(() => {
		(async () => {
			setPost(initialPost);
			const { data } = await getOnePost(params.id as string);
			setPost(data.posts[0]);
		})();
	}, []);

	return (
		<section>
			<div className="px-11 py-8 shadow-lg rounded-lg bg-slate-200 mx-auto max-w-screen-sm lg:max-w-screen-md">
				<h3 className="font-bold text-center text-5xl underline">
					{post.title}
				</h3>
				<p className="my-10 text-lg text-justify">{post.description}</p>
				<div className="text-inherit">
					<p>
						<span className="font-semibold underline mx-2">Creado:</span>
						{post.createdAt && formatDate(post.createdAt)}
					</p>
					<p>
						<span className="font-semibold underline mx-2">Actualizado:</span>
						{post.updatedAt && formatDate(post.updatedAt)}
					</p>
				</div>
			</div>
		</section>
	);
};

export default PostRead;
