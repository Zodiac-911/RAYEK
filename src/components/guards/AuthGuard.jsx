import { Navigate, Outlet } from "react-router-dom";
import usePocketBase from "../../hooks/usePocketBase";

export const AuthGuard = () => {
	const { user, isLoading } = usePocketBase();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		return <Navigate to="/login" />;
	}

	return <Outlet />;
};
