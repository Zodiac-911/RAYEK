import "../styles/chat.css";
import { IoSend } from "react-icons/io5";

function MessageInput() {
  return (
    <>
      <div className="msg-input-holder">
        <input type="text" placeholder="Type a message ..." />
        <button>
          <IoSend color="white" size={20} />
        </button>
      </div>
    </>
  );
}
export default MessageInput;
