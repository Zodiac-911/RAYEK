import usePocketBase from "../../hooks/usePocketBase";
import { Navigate, Outlet } from "react-router-dom";

export const GuestGuard = () => {
	const { user, isLoading } = usePocketBase();

	if (isLoading) {
		console.log("Loading...");
		return <div>Loading...</div>;
	}

	if (user) {
		console.log("User is authenticated:", user);
		return <Navigate to="/" />;
	}

	console.log("User is not authenticated");
	return <Outlet />;
};
