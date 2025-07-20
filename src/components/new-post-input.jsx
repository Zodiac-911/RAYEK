import { useRef, useState } from "react";
import { FaImage, FaTimes } from "react-icons/fa";
import "../styles/new-post-input.css";

function NewPostInput() {
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [postText, setPostText] = useState("");
  // Auto-resize textarea
  const adjustTextareaHeight = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove selected image
  const removeImage = () => {
    setImagePreview(null);
    fileInputRef.current.value = "";
  };

  return (
    <div className="newpost-container">
      <div className="post-content">
        <textarea
          maxLength={400}
          ref={textareaRef}
          placeholder="Add Rayek!"
          className="auto-expand-textarea"
          rows={1}
          value={postText}
          onInput={adjustTextareaHeight}
          onChange={(e) => {
            if (e.target.value.length <= 400) {
              setPostText(e.target.value);
            }
          }}
        />

        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
            <button className="remove-image" onClick={removeImage}>
              <FaTimes />
            </button>
          </div>
        )}
      </div>

      <div className="post-actions">
        <div className="action-buttons">
          <button
            type="button"
            className="image-upload-btn"
            onClick={() => fileInputRef.current.click()}
          >
            <FaImage size={40} />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: "none" }}
            />
          </button>
          <button className="publish-btn">Publish</button>
        </div>
      </div>
    </div>
  );
}

export default NewPostInput;
