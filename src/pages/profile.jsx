import "../styles/profile.css";
import ProfileImage from "../components/profile-image.jsx";
import userIMG from "../assets/user-img1.png";
import ProfileDetailsCounter from "../components/profile-details-counter.jsx";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className="content-container profile-content-container">
        <ProfileImage profileIMG={userIMG} />
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
export default Profile;
