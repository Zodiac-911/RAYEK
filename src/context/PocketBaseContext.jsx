import { createContext } from "react";

export const PocketBaseContext = createContext({
	pb: null,
	isLoading: true,
	user: null,
	setUser: () => {},
});
