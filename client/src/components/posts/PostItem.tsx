import { useNavigate } from "react-router-dom";

import { Post } from "../../types";
import { formatDate } from "../../utils";
import { deletePost } from "../../services/posts.service";

interface Props {
	post: Post;
	loadPosts: () => void;
}

const MAX_CHARACTER = 100;

const PostItem = ({ post, loadPosts }: Props) => {
	const navigate = useNavigate();

	const handleDelete = async (id: string) => {
		const { data } = await deletePost(id);
		console.log(`${data.status}: ${data.message}`);
		loadPosts();
	};

	const isFormattable = (txt: string) => {
		return txt.length > MAX_CHARACTER;
	};

	const formatDescription = isFormattable(post.description);

	return (
		<article className="rounded-md shadow-lg shadow-slate-400 border-2 border-transparent hover:border-slate-400 group p-2">
			<h3 className="font-semibold text-lg text-center capitalize">
				{post.title}
			</h3>
			<p className="text-lg text-justify px-2 my-3">
				{formatDescription
					? post.description.slice(0, MAX_CHARACTER).concat("...")
					: post.description}

				{formatDescription && (
					<span
						className="text-base font-semibold text-blue-700 hover:text-base cursor-pointer ml-2 hover:underline"
						onClick={() => navigate(`/post/${post._id}`)}
					>
						Ver mas
					</span>
				)}
			</p>
			<div className="text-sm font-light text-inherit mb-2">
				<p>Creado: {post.createdAt && formatDate(post.createdAt)}</p>
				<p>Actualizado: {post.updatedAt && formatDate(post.updatedAt)}</p>
			</div>
			<div className="flex flex-row justify-end gap-2">
				<button
					className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-3 py-2 rounded-md mx-1"
					onClick={() => navigate(`/update/${post._id}`)}
				>
					Modificar
				</button>
				<button
					onClick={() => post._id && handleDelete(post._id)}
					className="bg-red-500 hover:bg-red-400 text-white font-semibold px-3 py-2 rounded-md mx-1"
				>
					Eliminar
				</button>
			</div>
		</article>
	);
};

export default PostItem;
