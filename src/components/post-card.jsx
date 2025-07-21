import { useState } from "react";
import { TbFlagFilled, TbFlag3Filled } from "react-icons/tb";
import { RiMessageFill } from "react-icons/ri";
import "../styles/post-card.css";

function PostCard({
  userIMG,
  username,
  postIMG,
  postText,
  postTime,
  postRedFlags,
  postGreenFlags,
  postComments,
}) {
  const [activeButtons, setActiveButtons] = useState({
    greenFlag: false,
    redFlag: false,
  });

  const toggleButton = (buttonType) => {
    setActiveButtons((prev) => ({
      greenFlag: buttonType === "greenFlag" ? !prev.greenFlag : false,
      redFlag: buttonType === "redFlag" ? !prev.redFlag : false,
    }));
  };

  return (
    <div className="post-container">
      <div className="post-header-holder">
        <div className="post-header">
          <img src={userIMG} alt="user" />
          <div>
            <h3>{username}</h3>
            <p>{postTime}</p>
          </div>
        </div>
      </div>
      <div className="post-content">
        <p>{postText}</p>
        {postIMG && <img src={postIMG} alt="post" />}
      </div>
      <div className="post-bottom">
        <button
          className={`gf-btn ${activeButtons.greenFlag ? "active" : ""}`}
          onClick={() => toggleButton("greenFlag")}
        >
          <TbFlagFilled className="cmnt-gf" />
          <span>
            <span className="text-hide">Green Flags | </span>
            <span className="post-btm-counter">
              {activeButtons.greenFlag ? postGreenFlags + 1 : postGreenFlags}
            </span>
          </span>
        </button>
        <button
          className={`rf-btn ${activeButtons.redFlag ? "active" : ""}`}
          onClick={() => toggleButton("redFlag")}
        >
          <TbFlag3Filled className="cmnt-rf" />
          <span>
            <span className="text-hide">Red Flags | </span>
            <span className="post-btm-counter">
              {activeButtons.redFlag ? postRedFlags + 1 : postRedFlags}
            </span>
          </span>
        </button>
        <button className="cmnt-btn">
          <RiMessageFill className="cmnt" />
          <span>
            <span className="text-hide">Comments | </span>
            <span className="post-btm-counter">{postComments}</span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default PostCard;
