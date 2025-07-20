import "../styles/chat.css";

function MessagesUserCard({ username, userIMG, active, onActive, index }) {
  return (
    <div
      onClick={() => onActive(index)}
      className={`messages-user-card ${active ? "active" : ""}`}
    >
      <img src={userIMG} alt="" />
      <span>{username}</span>
    </div>
  );
}
export default MessagesUserCard;
