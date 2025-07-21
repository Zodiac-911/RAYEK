import { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaArrowRight } from "react-icons/fa";
import "../styles/login.css";
import { Link } from "react-router-dom";
import logo from "../assets/rayek-logo.png";
import LdBtn from "../components/light-dark-button.jsx";
import FlagsBgScroll from "../components/flags-bg-scroll.jsx";
import usePocketBase from "../hooks/usePocketBase.js";
import { toast } from "react-toastify";

function SignUp() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const { pb, setUser } = usePocketBase();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const userData = await pb.collection("users").create({
				email: email,
				name: username,
				password: password,
				passwordConfirm: password,
			});

			console.log("Login successful:", userData);

			const authData = await pb
				.collection("users")
				.authWithPassword(email, password);

			console.log("authData", authData);

			// after the above you can also access the auth data from the authStore
			console.log(pb.authStore.isValid);
			console.log(pb.authStore.token);
			console.log(pb.authStore.record?.id);
			if (authData && pb.authStore.isValid) {
				setUser(pb.authStore.record);
				toast.success("Sign Up successful!");
			} else {
				throw new Error("Sign Up failed");
			}
		} catch (e) {
			console.error("Login failed:", e);
			toast.error("Sign Up failed: " + e.message);
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
					<h1 className="login-title">Create Account</h1>
					<p className="login-subtitle">Join us today</p>

					<form onSubmit={handleSubmit}>
						<div className="input-group">
							<FaUser className="input-icon" />
							<input
								type="text"
								placeholder="Username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>

						<div className="input-group">
							<FaEnvelope className="input-icon" />
							<input
								type="email"
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

						<div className="input-group">
							<FaLock className="input-icon" />
							<input
								type="password"
								placeholder="Confirm Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
							/>
						</div>

						<button type="submit" className="login-button" disabled={isLoading}>
							{isLoading ? (
								<span className="loader"></span>
							) : (
								<>
									Sign Up <FaArrowRight className="button-icon" />
								</>
							)}
						</button>
					</form>
					<p className="login-footer">
						Already have an account? <Link to="/login">Login here</Link>
					</p>
				</div>
			</div>
		</>
	);
}

export default SignUp;
