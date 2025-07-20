import { useEffect, useRef } from "react";
import "../styles/chat.css";
import "../styles/home.css";
import MessagesUserCard from "../components/messages-user-card.jsx";
import userIMG1 from "../assets/user-img1.png";
import MessageSent from "../components/message-sent.jsx";
import MessageRecieve from "../components/message-recieve.jsx";
import MessageInput from "../components/message-type-input.jsx";
import { useState } from "react";

function Chat() {
  const chatAreaRef = useRef(null);
  const [freinds, setFreinds] = useState([
    { username: "zodiac911", userIMG: userIMG1, active: true },
    { username: "jhon_pork", userIMG: userIMG1, active: false },
    { username: "db_cooper", userIMG: userIMG1, active: false },
    { username: "teebag", userIMG: userIMG1, active: false },
    { username: "heisenburg", userIMG: userIMG1, active: false },
    { username: "pinkman", userIMG: userIMG1, active: false },
    { username: "chemso", userIMG: userIMG1, active: false },
  ]);
  function onActive(i) {
    const tmp = [...freinds];
    tmp.forEach((friend, index) => {
      if (index === i) {
        friend.active = true;
      } else {
        friend.active = false;
      }
    });
    setFreinds(tmp);
  }

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, []); // This runs once after initial render

  // You may want to scroll on every render/update as well (if new messages are dynamic)
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  });

  return (
    <>
      <div className="content-container chat-content-container">
        <div className="chat-users-container">
          {freinds.map((friend, index) => (
            <MessagesUserCard
              key={index}
              username={friend.username}
              userIMG={friend.userIMG}
              active={friend.active}
              onActive={onActive}
              index={index}
            />
          ))}
        </div>
        <div className="chat-container">
          <div className="chat-area" ref={chatAreaRef}>
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
            />
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
