import "../styles/chat.css";

function MessageSent({ message }) {
  return (
    <>
      <div className="message-sent">{message}</div>
    </>
  );
}
export default MessageSent;
