import "../styles/profile.css";
import { useState } from "react";
import { FaUserPlus, FaCheck } from "react-icons/fa";

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsFollowing(!isFollowing);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <button
      className={`follow-btn ${isFollowing ? "following" : ""} ${
        isAnimating ? "animating" : ""
      }`}
      onClick={handleClick}
    >
      <span className="btn-content">
        {isFollowing ? (
          <>
            <FaCheck className="icon" />
            <span>Following</span>
          </>
        ) : (
          <>
            <FaUserPlus className="icon" />
            <span>Follow</span>
          </>
        )}
      </span>
      <span className="btn-background"></span>
    </button>
  );
};

export default FollowButton;
