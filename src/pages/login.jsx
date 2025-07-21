import { useState } from "react";
import { FaUser, FaLock, FaArrowRight } from "react-icons/fa";
import "../styles/login.css";
import { Link } from "react-router-dom";
import logo from "../assets/rayek-logo.png";
import LdBtn from "../components/light-dark-button.jsx";
import FlagsBgScroll from "../components/flags-bg-scroll.jsx";
import usePocketBase from "../hooks/usePocketBase.js";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const { pb, setUser } = usePocketBase();

	useEffect(() => {
		console.log("PocketBase instance:", pb);
	}, [pb]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const authData = await pb
				.collection("users")
				.authWithPassword(email, password);

			console.log("authData", authData);
			if (authData && pb.authStore.isValid) {
				console.log("Login successful:", authData);
				setUser(pb.authStore.record);
				toast.success("Login successful!");
			} else {
				throw new Error("Login failed");
			}
		} catch (e) {
			console.error("Login failed:", e);
			toast.error("Login failed: " + e.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<FlagsBgScroll />
			<div className="login-container ">
				<LdBtn />
				<div className="login-card">
					<img className="logo-si" src={logo} alt="" />
					<h1 className="login-title">Welcome Back</h1>
					<p className="login-subtitle">Please enter your credentials</p>

					<form onSubmit={handleSubmit}>
						<div className="input-group">
							<FaUser className="input-icon" />
							<input
								type="text"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>

						<div className="input-group">
							<FaLock className="input-icon" />
							<input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>

						<button type="submit" className="login-button" disabled={isLoading}>
							{isLoading ? (
								<span className="loader"></span>
							) : (
								<>
									Login <FaArrowRight className="button-icon" />
								</>
							)}
						</button>
					</form>
					<p className="login-footer">
						Don't have an account? <Link to="/signup">Sign up here</Link>
					</p>
				</div>
			</div>
		</>
	);
}

export default Login;
