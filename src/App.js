import React, { useState } from "react";
import "./App.css";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";

function App() {
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };

  const handleDeleteComment = (id) => {
    setComments((prev) => prev.filter((comment) => comment.id !== id));
  };
  return (
    <div>
      <h1>Komentarze</h1>
      <CommentForm onAddComment={handleAddComment} />
      <CommentList comments={comments} onDeleteComment={handleDeleteComment} />
    </div>
  );
}

export default App;
