import { FaCheck } from "react-icons/fa";
import "../styles/edit-profile.css";
import { useState } from "react";

function AvataUploadBTN({ userIMG }) {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="avatar-section">
        <div className="avatar-preview">
          <img
            src={avatarPreview ? avatarPreview : userIMG}
            alt="Avatar preview"
            className="avatar-image"
          />
        </div>

        <div className="upload-controls">
          <label htmlFor="avatar-upload" className="upload-button">
            <span>Change Avatar</span>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden-input"
            />
          </label>
          {uploadSuccess && (
            <div className="success-message">
              <FaCheck className="check-icon" />
              <span>Uploaded!</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AvataUploadBTN;
