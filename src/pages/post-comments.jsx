import React, { useState } from "react";
import "../styles/post-comments.css";
import PostCard from "../components/post-card";

function PostComments() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newComment = {
      id: Date.now(),
      username: "User123", // Replace with dynamic user
      avatar: "https://i.pravatar.cc/40", // Placeholder avatar
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      content: text,
    };

    setComments([newComment, ...comments]);
    setText("");
  };

  return (
    <>
      <PostCard />
      <div className="comments-holder">
        <form onSubmit={handleSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Post</button>
        </form>

        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <img src={comment.avatar} alt="avatar" className="avatar" />
              <div className="comment-content">
                <div className="comment-header">
                  <span className="username">{comment.username}</span>
                  <span className="time">{comment.time}</span>
                </div>
                <p>{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PostComments;
