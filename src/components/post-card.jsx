import "../styles/post-card.css";
import { TfiMoreAlt } from "react-icons/tfi";
import { TbFlagFilled } from "react-icons/tb";
import { TbFlag3Filled } from "react-icons/tb";
import { RiMessageFill } from "react-icons/ri";

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
  return (
    <>
      <div className="post-container">
        <div className="post-header-holder">
          <div className="post-header">
            {" "}
            <img src={userIMG} alt="user image" />
            <div>
              <h3>{username}</h3>
              <p>{postTime}</p>
            </div>
          </div>
        </div>
        <div className="post-content">
          <p>{postText}</p>
          <img src={postIMG} />
        </div>
        <div className="post-bottom">
          <button className="gf-btn">
            <TbFlagFilled className="cmnt-gf" />{" "}
            <span>
              <span className="text-hide">Green Flags | </span>
              <span className="post-btm-counter">{postGreenFlags}</span>
            </span>
          </button>
          <button className="rf-btn">
            <TbFlag3Filled className="cmnt-rf" />{" "}
            <span>
              <span className="text-hide">Red Flags | </span>
              <span className="post-btm-counter">{postRedFlags}</span>
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
    </>
  );
}
export default PostCard;
