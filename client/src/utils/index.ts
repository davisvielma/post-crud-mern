import { Post } from "../types";

export const filterBySearch = (array: Array<Post>, key: string) => {
	return array.filter(
		(element) =>
			element.title.toLowerCase().includes(key) ||
			element.description.toLowerCase().includes(key)
	);
};

export const formatDate = (date: string) => {
	const time = new Intl.DateTimeFormat("es", {
		timeStyle: "medium",
		dateStyle: "medium",
	});

	return time.format(new Date(date));
};
