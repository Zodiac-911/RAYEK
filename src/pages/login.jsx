import { useState } from "react";
import { FaUser, FaLock, FaArrowRight } from "react-icons/fa";
import "../styles/login.css";
import { Link } from "react-router-dom";
import logo from "../assets/rayek-logo.png";
import LdBtn from "../components/light-dark-button.jsx";
import FlagsBgScroll from "../components/flags-bg-scroll.jsx";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
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
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
