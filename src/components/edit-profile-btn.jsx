import "../styles/profile.css";
import { FaPen } from "react-icons/fa6";

function EditProfileBtn() {
  return (
    <>
      <button className="edit-profile-btn">
        <FaPen size={16} />
        <span>Edit Profile</span>
      </button>
    </>
  );
}
export default EditProfileBtn;
