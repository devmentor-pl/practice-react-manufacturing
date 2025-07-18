import React, { useState } from "react";

const CommentForm = ({ onAddComment }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!author.trim() || !content.trim()) {
      alert("Uzupełnij oba pola!");
      return;
    }

    const newComment = {
      id: Date.now(),
      author,
      content,
      status: "pending",
    };

    onAddComment(newComment);

    setAuthor("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="author">Autor:</label>
        <br />
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="content">Treść komentarza:</label>
        <br />
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button type="submit">Dodaj komentarz</button>
    </form>
  );
};

export default CommentForm;
