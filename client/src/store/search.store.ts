import { create } from "zustand";

interface SearchState {
	search: string;
	setSearch: (search: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
	search: "",
	setSearch: (search: string): void => set({ search }),
}));

export default useSearchStore;
