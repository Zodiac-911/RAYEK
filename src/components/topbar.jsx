import { useState, useEffect } from "react";
import "../styles/topbar.css";
import logo from "../assets/rayek-logo.png";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { BiSolidChat } from "react-icons/bi";
import { RiHome6Fill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import LdBtn from "./light-dark-button.jsx";

function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleRouteChange = () => {
      setActiveLink(window.location.pathname);
    };

    handleRouteChange(); // Set initial active link
    window.addEventListener("popstate", handleRouteChange);
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`topbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo-container">
        <img src={logo} alt="RAYEK" className="logo" />
        <span className="logo-glow"></span>
      </Link>

      <div className="navbar">
        <Link
          to="/"
          className={`nav-link ${activeLink === "/" ? "active" : ""}`}
          onClick={() => setActiveLink("/")}
        >
          <RiHome6Fill className="navbar-icons" />
          <span className="nav-text">Home</span>
          <span className="nav-hover-effect"></span>
        </Link>

        <Link
          to="/chat"
          className={`nav-link ${activeLink === "/chat" ? "active" : ""}`}
          onClick={() => setActiveLink("/chat")}
        >
          <BiSolidChat className="navbar-icons" />
          <span className="nav-text">Chat</span>
          <span className="nav-hover-effect"></span>
        </Link>

        <Link
          to="/profile"
          className={`nav-link ${activeLink === "/profile" ? "active" : ""}`}
          onClick={() => setActiveLink("/profile")}
        >
          <BsPersonFill className="navbar-icons" />
          <span className="nav-text">Profile</span>
          <span className="nav-hover-effect"></span>
        </Link>

        <Link
          to="/notifications"
          className={`nav-link ${
            activeLink === "/notifications" ? "active" : ""
          }`}
          onClick={() => setActiveLink("/notifications")}
        >
          <IoNotifications className="navbar-icons" />
          <span className="nav-text">Notifications</span>
          <span className="nav-hover-effect"></span>
        </Link>

        <div className="theme-toggle-wrapper">
          <LdBtn />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
