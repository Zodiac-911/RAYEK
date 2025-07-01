import "../styles/profile.css";

function ProfileDetailsCounter({ username, followers }) {
  return (
    <>
      <div className="profile-details-counter">
        <h3>{username}</h3>
        <p>
          Followers <span>{followers}</span>
        </p>
      </div>
    </>
  );
}
export default ProfileDetailsCounter;
