import React from "react";

const CommentList = ({ comments, onDeleteComment }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id} style={{ marginBottom: "1em" }}>
          <strong>{comment.author}:</strong> {comment.content}
          <button
            style={{ marginLeft: "1em" }}
            onClick={() => onDeleteComment(comment.id)}
          >
            Usuń
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
