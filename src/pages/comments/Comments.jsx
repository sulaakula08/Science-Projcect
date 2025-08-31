// CommentsPage.jsx
import React, { useState } from "react";
import "./Comments.css";

const Comments = () => {
  const [comments, setComments] = useState([
    { 
      id: 1,
      author: "Alice Johnson", 
      text: "This is such a helpful resource for IB Lab Reports! The explanations are clear and easy to follow.",
      timestamp: "2024-01-15T10:30:00",
      rating: 5
    },
    { 
      id: 2,
      author: "Bob Smith", 
      text: "Thanks for sharing this comprehensive guide. It really helped me understand the scientific method better.",
      timestamp: "2024-01-14T15:45:00",
      rating: 4
    },
    { 
      id: 3,
      author: "Carol Davis", 
      text: "The AI assistant feature is amazing! It helped me structure my lab report perfectly.",
      timestamp: "2024-01-13T09:20:00",
      rating: 5
    }
  ]);
  const [newComment, setNewComment] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && newAuthor.trim()) {
      const comment = {
        id: Date.now(),
        author: newAuthor,
        text: newComment,
        timestamp: new Date().toISOString(),
        rating: rating
      };
      setComments([comment, ...comments]);
      setNewComment("");
      setNewAuthor("");
      setRating(5);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="comments-page">
      <div className="comments-header">
        <h1 className="comments-title">Community Feedback</h1>
        <p className="comments-subtitle">Share your thoughts and help improve our science resources</p>
      </div>

      <div className="comments-content">
        <div className="comment-form-section">
          <h2 className="form-title">Add Your Comment</h2>
          <form className="comment-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="author">Your Name</label>
                <input
                  id="author"
                  type="text"
                  placeholder="Enter your name..."
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <select
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                >
                  <option value={5}>5 Stars - Excellent</option>
                  <option value={4}>4 Stars - Very Good</option>
                  <option value={3}>3 Stars - Good</option>
                  <option value={2}>2 Stars - Fair</option>
                  <option value={1}>1 Star - Poor</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="comment">Your Comment</label>
              <textarea
                id="comment"
                placeholder="Share your thoughts, suggestions, or questions..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                required
                rows={4}
              />
            </div>
            <button type="submit" className="btn-submit">
              Submit Comment
            </button>
          </form>
        </div>

        <div className="comments-list-section">
          <h2 className="list-title">Recent Comments ({comments.length})</h2>
          <div className="comments-list">
            {comments.map((comment) => (
              <div key={comment.id} className="comment-card">
                <div className="comment-header">
                  <div className="comment-author">{comment.author}</div>
                  <div className="comment-rating">{renderStars(comment.rating)}</div>
                </div>
                <div className="comment-text">{comment.text}</div>
                <div className="comment-timestamp">{formatDate(comment.timestamp)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
