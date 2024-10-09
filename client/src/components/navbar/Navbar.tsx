import { Link } from "react-router-dom";
import postLogo from "/post.svg";

const Navbar = () => {
	return (
		<nav className="bg-slate-400/50 py-4 px-10 gap-y-3 flex flex-col sm:flex-row justify-between shadow-lg mb-8">
			<Link className="flex flex-row gap-2 items-center" to="/">
				<img className="inline-block h-12 w-12" src={postLogo} />
				<h1 className="font-bold text-2xl">Banco de Posts</h1>
			</Link>
			<div className="ml-auto">
				<ul className="flex flex-row p-2 text-xl font-semibold">
					<li>
						<Link
							className="bg-transparent hover:bg-slate-400/40 transition-all duration-1000 p-4"
							to="/new-post"
						>
							Crear post
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
