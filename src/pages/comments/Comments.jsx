// CommentsPage.jsx
import React, { useState } from "react";
import "./Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([
    { author: "Alice", text: "This is such a helpful post!" },
    { author: "Bob", text: "Thanks for sharing!" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { author: "Anonymous", text: newComment }]);
      setNewComment("");
    }
  };

  return (
    <div className="comments-page">
      <h2 className="comments-title">Comments</h2>

      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit" className="btn-submit">
          Submit Comment
        </button>
      </form>

      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment-card">
            <div className="comment-author">{comment.author}</div>
            <div className="comment-text">{comment.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
