import "../styles/chat.css";
import "../styles/home.css";
import MessagesUserCard from "../components/messages-user-card.jsx";
import userIMG1 from "../assets/user-img1.png";
import MessageSent from "../components/message-sent.jsx";
import MessageRecieve from "../components/message-recieve.jsx";
import MessageInput from "../components/message-type-input.jsx";

function Chat() {
  return (
    <>
      <div className="content-container chat-content-container">
        <div className="chat-users-container">
          <MessagesUserCard
            userIMG={userIMG1}
            username={"zodiac911"}
            active={true}
            hasNewMessages={true}
          />
          <MessagesUserCard userIMG={userIMG1} username={"jhon_pork"} />
          <MessagesUserCard userIMG={userIMG1} username={"db_cooper"} />
          <MessagesUserCard userIMG={userIMG1} username={"teebag"} />
          <MessagesUserCard userIMG={userIMG1} username={"heisenburg"} />
          <MessagesUserCard userIMG={userIMG1} username={"pinkman"} />
          <MessagesUserCard userIMG={userIMG1} username={"chemso"} />{" "}
          <MessagesUserCard userIMG={userIMG1} username={"zodiac911"} />
          <MessagesUserCard userIMG={userIMG1} username={"jhon_pork"} />
          <MessagesUserCard userIMG={userIMG1} username={"db_cooper"} />
          <MessagesUserCard userIMG={userIMG1} username={"teebag"} />
          <MessagesUserCard userIMG={userIMG1} username={"heisenburg"} />
          <MessagesUserCard userIMG={userIMG1} username={"pinkman"} />
          <MessagesUserCard userIMG={userIMG1} username={"chemso"} />
        </div>
        <div className="chat-container">
          <div className="chat-area">
            <MessageSent message={"Hello"} />
            <MessageRecieve message={"Hi how r u?"} />
            <MessageSent message={"Fine"} />
            <MessageSent message={"Wby??"} />
            <MessageRecieve message={"Better than u🤣🤣"} />
            <MessageSent message={"Funny"} />
            <MessageSent message={"Hahahaha iam lughing so hard"} />
            <MessageSent message={"That why u steel inampolied"} />
            <MessageRecieve
              message={
                "Bro... I seriously don’t know how you manage to be this bad and still talk trash 💀 Like you play with the confidence of someone who’s actually good, but the skills of a disconnected NPC 😭💀"
              }
            />
            <MessageSent
              message={
                "Every time you queue up, I swear the other team starts celebrating early 🎉😂 Like “oh look, it’s zodiac, free win incoming!” 📦💨"
              }
            />{" "}
            <MessageRecieve
              message={
                "Honestly, at this point I think your controller’s playing you 💀🕹️ But hey, at least you’re consistent — consistently carried 😌"
              }
            />
            <MessageSent
              message={
                "You ever consider turning your brain on before making plays? 💭💀"
              }
            />
            <MessageRecieve
              message={
                "Half the time you rush in like it’s a one-man anime arc... and die in 0.3 seconds 😭🔥"
              }
            />
          </div>
          <MessageInput />
        </div>
      </div>
    </>
  );
}
export default Chat;
