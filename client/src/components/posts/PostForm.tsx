import { ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import usePostStore from "../../store/post.store";
import { Post } from "../../types";
import {
	createPosts,
	getOnePost,
	updatePosts,
} from "../../services/posts.service";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialPost: Post = {
	title: "",
	description: "",
};

const PostForm = () => {
	const navigate = useNavigate();
	const params = useParams();

	const { post, setPost } = usePostStore();

	useEffect(() => {
		if (params.id) {
			(async () => {
				const { data } = await getOnePost(params.id as string);
				setPost(data.posts[0]);
			})();
		} else {
			setPost(initialPost);
		}
	}, []);

	const handleChange = (e: InputChange) => {
		setPost({ ...post, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!post.title || !post.description) {
			toast.warning("Todos los campos son obligatorios");
			return;
		}

		if (params.id) {
			const { data } = await updatePosts(params.id, post);
			console.log(`${data.status}: ${data.message}`);
		} else {
			const { data } = await createPosts(post);
			console.log(`${data.status}: ${data.message}`);
		}

		toast.success("Post guardado correctamente");
		handleReset();
		navigate("/");
	};

	const handleReset = () => {
		setPost(initialPost);
	};

	return (
		<section>
			<form
				className="px-11 py-8 shadow-lg rounded-lg bg-slate-200 mx-auto max-w-screen-sm lg:max-w-screen-md"
				onSubmit={handleSubmit}
			>
				<h2 className="font-bold text-center text-2xl">
					{params.id ? "Editar" : "Agregar"} post
				</h2>
				<hr className="mt-1 mb-4 h-0.5 bg-black" />
				<input
					type="text"
					placeholder="Escribe el titulo"
					name="title"
					autoComplete="off"
					className="p-3 w-full mb-4 rounded-md"
					onChange={handleChange}
					value={post.title}
				/>
				<textarea
					placeholder="Escribe la descripcion"
					name="description"
					className="p-3 w-full mb-2 rounded-md"
					rows={5}
					onChange={handleChange}
					value={post.description}
				></textarea>
				<div className="flex flex-row justify-evenly mt-4">
					<button
						className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-3 py-2 rounded-md"
						type="submit"
					>
						Guardar
					</button>
					<button
						className="bg-red-500 hover:bg-red-400 text-white font-semibold px-3 py-2 rounded-md"
						type="reset"
						onClick={handleReset}
					>
						Borrar
					</button>
				</div>
			</form>
		</section>
	);
};

export default PostForm;
