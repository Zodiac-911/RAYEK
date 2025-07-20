import { useState } from "react";
import "../styles/edit-profile.css";
import { FiEdit2 } from "react-icons/fi";

function ChangeUsernameInput() {
  const [username, setUsername] = useState("");

  return (
    <>
      <div className="username-edit-container">
        <div className="input-group">
          <span className="input-label">Edit username</span>
          <div className="input-wrapper">
            <input
              type="text"
              className="username-input"
              placeholder="Enter new username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FiEdit2 className="edit-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
export default ChangeUsernameInput;
