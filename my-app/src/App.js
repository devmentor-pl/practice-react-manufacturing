import React, { useState } from "react";
import "./App.css";
import CommentForm from "./components/CommentFom";

function App() {
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <div>
      <h1>Komentarze</h1>
      <CommentForm onAddComment={handleAddComment} />
      <ul>
        {comments.map((c) => (
          <li key={c.id}>
            <strong>{c.author}:</strong> {c.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
