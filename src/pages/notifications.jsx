import "../styles/notifications.css";
import NotificationsCard from "../components/notification-card.jsx";
import userIMG1 from "../assets/user-img1.png";

function Notifications() {
  return (
    <>
      <div className="content-container notification-container">
        <NotificationsCard
          userIMG={userIMG1}
          username={"Zoubir18"}
          feedback={"redflag"}
        />
        <NotificationsCard
          userIMG={userIMG1}
          username={"Zoubir18"}
          feedback={"redflag"}
        />
        <NotificationsCard
          userIMG={userIMG1}
          username={"Zoubir18"}
          feedback={"redflag"}
        />
        <NotificationsCard
          userIMG={userIMG1}
          username={"Zoubir18"}
          feedback={"redflag"}
        />
        <NotificationsCard
          userIMG={userIMG1}
          username={"Zoubir18"}
          feedback={"redflag"}
        />
      </div>
    </>
  );
}
export default Notifications;
