import "../styles/profile-gr-page.css";
import "../styles/home.css";
import PostCard from "../components/post-card.jsx";
import userIMG1 from "../assets/user-img1.png";
import postIMG1 from "../assets/post-img1.png";

function ProfileRedFlags({ username }) {
  return (
    <>
      <div className="content-container profile-rf-container">
        <div className="profile-rf-header">
          <h2>
            <span>{username}</span>'s Red Flags
          </h2>
        </div>

        <PostCard
          userIMG={userIMG1}
          username={"John Doe"}
          postTime={"2 hours ago"}
          postText={
            "iPhone is the best phone in the world, there is no doubt about it."
          }
          postIMG={postIMG1}
          postRedFlags={5}
          postGreenFlags={10}
          postComments={15}
        />
        <PostCard
          userIMG={userIMG1}
          username={"John Doe"}
          postTime={"2 hours ago"}
          postText={
            "iPhone is the best phone in the world, there is no doubt about it."
          }
          postIMG={postIMG1}
          postRedFlags={5}
          postGreenFlags={10}
          postComments={15}
        />
        <PostCard
          userIMG={userIMG1}
          username={"John Doe"}
          postTime={"2 hours ago"}
          postText={
            "iPhone is the best phone in the world, there is no doubt about it."
          }
          postIMG={postIMG1}
          postRedFlags={5}
          postGreenFlags={10}
          postComments={15}
        />
      </div>
    </>
  );
}
export default ProfileRedFlags;
