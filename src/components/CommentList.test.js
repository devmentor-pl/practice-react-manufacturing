import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CommentList from "./CommentList";

describe("CommentList", () => {
  it("usuwa komentarz po kliknięciu przycisku 'Usuń'", () => {
    const mockDelete = jest.fn();

    const comments = [
      { id: 1, author: "Anna", content: "Pierwszy komentarz" },
      { id: 2, author: "Tomek", content: "Drugi komentarz" },
    ];

    render(<CommentList comments={comments} onDeleteComment={mockDelete} />);

    const deleteButtons = screen.getAllByText("Usuń");
    fireEvent.click(deleteButtons[0]);

    expect(mockDelete).toHaveBeenCalledWith(1);
    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
});
