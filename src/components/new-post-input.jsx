import { useRef, useEffect } from "react";
import "../styles/new-post-input.css";

function NewPostInput() {
  const textareaRef = useRef(null);

  // Auto-resize textarea on input
  useEffect(() => {
    const textarea = textareaRef.current;

    const adjustHeight = () => {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set to scroll height
    };

    // Initial adjustment
    adjustHeight();

    // Add event listener
    textarea.addEventListener("input", adjustHeight);

    // Cleanup
    return () => {
      textarea.removeEventListener("input", adjustHeight);
    };
  }, []);

  return (
    <div className="newpost-container">
      <textarea
        ref={textareaRef}
        placeholder="Add Rayek !"
        className="auto-expand-textarea"
        rows={1} // Start with single line
      />
      <button>Publish</button>
    </div>
  );
}

export default NewPostInput;
