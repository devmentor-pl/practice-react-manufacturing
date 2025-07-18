import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CommentForm from "./CommentForm";

describe("CommentForm", () => {
  it("renderuje pola formularza", () => {
    render(<CommentForm onAddComment={() => {}} />);

    expect(screen.getByLabelText(/Autor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Treść/i)).toBeInTheDocument();
    expect(screen.getByText(/Dodaj komentarz/i)).toBeInTheDocument();
  });

  it("wysyła dane po kliknięciu przycisku", () => {
    const mockAdd = jest.fn();
    render(<CommentForm onAddComment={mockAdd} />);

    const authorInput = screen.getByLabelText(/Autor/i);
    const contentTextarea = screen.getByLabelText(/Treść/i);
    const submitButton = screen.getByText(/Dodaj komentarz/i);

    fireEvent.change(authorInput, { target: { value: "Karolina" } });
    fireEvent.change(contentTextarea, {
      target: { value: "To testowy komentarz" },
    });
    fireEvent.click(submitButton);

    expect(mockAdd).toHaveBeenCalledTimes(1);
    expect(mockAdd.mock.calls[0][0]).toMatchObject({
      author: "Karolina",
      content: "To testowy komentarz",
    });
  });

  it("czyści formularz po wysłaniu", () => {
    render(<CommentForm onAddComment={() => {}} />);

    const authorInput = screen.getByLabelText(/Autor/i);
    const contentTextarea = screen.getByLabelText(/Treść/i);
    const submitButton = screen.getByText(/Dodaj komentarz/i);

    fireEvent.change(authorInput, { target: { value: "Test" } });
    fireEvent.change(contentTextarea, { target: { value: "Komentarz" } });
    fireEvent.click(submitButton);

    expect(authorInput.value).toBe("");
    expect(contentTextarea.value).toBe("");
  });
});
