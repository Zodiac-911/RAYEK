import "../styles/profile.css";

function ProfileImage({ profileIMG }) {
  return (
    <>
      <div className="profile-image-holder">
        <img className="profile-img" src={profileIMG} alt="" />
      </div>
    </>
  );
}
export default ProfileImage;
