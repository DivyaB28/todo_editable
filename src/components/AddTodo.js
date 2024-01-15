import { useState } from "react";

export default function AddTodo({ onAddTodoList = () => {} }) {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Add todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTodoList(title);
          setTitle("");
        }}
      >
        Add
      </button>
    </>
  );
}
