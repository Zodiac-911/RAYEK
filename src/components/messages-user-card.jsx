import "../styles/chat.css";

function MessagesUserCard({ username, userIMG, active }) {
  return (
    <div className={`messages-user-card ${active ? "active" : ""}`}>
      <img src={userIMG} alt="" />
      <span>{username}</span>
    </div>
  );
}
export default MessagesUserCard;
