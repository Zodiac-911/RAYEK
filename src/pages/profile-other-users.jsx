import "../styles/profile.css";
import ProfileImage from "../components/profile-image.jsx";
import userIMG from "../assets/user-img1.png";
import ProfileDetailsCounter from "../components/profile-details-counter.jsx";
import { Link } from "react-router-dom";
import FollowButton from "../components/follow-btn.jsx";
import { FiMessageSquare } from "react-icons/fi";

function ProfileOtherUsers() {
  return (
    <>
      <div className="content-container profile-content-container">
        <div className="avatar-follow">
          <ProfileImage profileIMG={userIMG} />

          <FollowButton />
        </div>{" "}
        <Link to="/chat" className="message-btn">
          <FiMessageSquare className="message-icon" />
          <span>Send Message</span>
        </Link>
        <ProfileDetailsCounter username={"zodiac911"} followers={"99k"} />
      </div>

      <div className="profile-rf-gf-holder">
        <Link className="profile-gf-rf-btn profile-gf" to="/greenflags">
          GreenFlags
        </Link>
        <Link className="profile-gf-rf-btn profile-rf" to="/redflags">
          GreenFlags
        </Link>
      </div>
    </>
  );
}
export default ProfileOtherUsers;
