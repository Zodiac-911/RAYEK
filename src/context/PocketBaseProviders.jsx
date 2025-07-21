import PocketBase from "pocketbase";
import { PocketBaseContext } from "./PocketBaseContext";
import { useState } from "react";
import { useEffect } from "react";

async function refreshAuth(pb) {
	if (!pb) return null;
	try {
		const authData = await pb.collection("users").authRefresh();
		if (authData && pb.authStore.isValid) {
			return pb.authStore.record;
		} else {
			throw new Error("Failed to refresh auth");
		}
	} catch (error) {
		console.error("Error refreshing auth:", error);
		return null;
	}
}

export const PocketBaseProvider = ({ children }) => {
	const [pb] = useState(
		new PocketBase(import.meta.env.VITE_POCKETBASE_API_URL)
	);

	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		refreshAuth(pb)
			.then((userData) => {
				if (userData) {
					setUser(userData);
				}
			})
			.catch((error) => {
				console.error("Error refreshing auth:", error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [pb]);

	return (
		<PocketBaseContext.Provider value={{ pb, isLoading, user, setUser }}>
			{children}
		</PocketBaseContext.Provider>
	);
};
