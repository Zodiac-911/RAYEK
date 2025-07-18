import "../styles/notifications.css";

function NotificationsCard({ userIMG, username, feedback }) {
  return (
    <>
      <div className="notification-card">
        <img src={userIMG} />
        <p>
          <span>{username}</span> gives a <span>{feedback}</span> to your post
        </p>
      </div>
    </>
  );
}
export default NotificationsCard;
