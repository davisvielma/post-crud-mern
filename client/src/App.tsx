import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import PostForm from "./components/posts/PostForm";
import PostRead from "./components/posts/PostRead";
import Navbar from "./components/navbar/Navbar";
import Posts from "./components/posts/Posts";

function App() {
	return (
		<section className="bg-[#f6f8fc] h-screen overflow-y-auto">
			<main className="max-w-[1300px] mx-auto">
				<Navbar />
				<Routes>
					<Route path="/" Component={Posts} />
					<Route path="/new-post" Component={PostForm} />
					<Route path="/update/:id" Component={PostForm} />
					<Route path="/post/:id" Component={PostRead} />
				</Routes>
				<ToastContainer />
			</main>
		</section>
	);
}

export default App;
