import "../styles/home.css";
import PostCard from "../components/post-card.jsx";
import userIMG1 from "../assets/user-img1.png";
import postIMG1 from "../assets/post-img1.png";
import NewPostInput from "../components/new-post-input.jsx";

function Home() {
  return (
    <>
      <div className="feed-container">
        <NewPostInput />
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
          postRedFlags={5}
          postGreenFlags={10}
          postComments={15}
        />{" "}
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
        />{" "}
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
export default Home;
