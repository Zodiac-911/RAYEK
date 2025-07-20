import userIMG1 from "../assets/user-img1.png";
import "../styles/edit-profile.css";
import "../styles/home.css";
import AvataUploadBTN from "../components/avatar-upload-btn.jsx";
import ChangeUsernameInput from "../components/change-username-input.jsx";
import { FaSave } from "react-icons/fa";
import { useState } from "react";

function EditProfile() {
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2000);
    }, 1500);
  };

  return (
    <div className="content-container edit-profile-container">
      <AvataUploadBTN userIMG={userIMG1} />
      <ChangeUsernameInput />

      <button
        className={`save-btn ${isSaving ? "saving" : ""} ${
          isSaved ? "saved" : ""
        }`}
        onClick={handleSave}
        disabled={isSaving}
      >
        {isSaved ? (
          <span className="save-text">Saved!</span>
        ) : (
          <>
            <FaSave className="save-icon" />
            <span className="save-text">
              {isSaving ? "Saving..." : "Save Changes"}
            </span>
          </>
        )}
      </button>
    </div>
  );
}

export default EditProfile;
