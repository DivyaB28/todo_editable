import { useState } from "react";

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <Task todo={item} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo = {}, onChange = () => {}, onDelete = () => {} }) {
  const { title = "", done = false, id } = todo;
  const [isEditable, setIsEditable] = useState(false);
  let renderTodoContent;

  if (isEditable) {
    renderTodoContent = (
      <>
        <input
          value={title}
          onChange={(e) => {
            // console.log(e.target.value, todo);
            setTimeout(
              onChange({
                ...todo,
                title: e.target.value,
              }),
              2000
            );
          }}
        />
        <button
          className="button__edit"
          type="button"
          aria-label="edit todo"
          onClick={() => setIsEditable(false)}
        />
      </>
    );
  } else {
    renderTodoContent = (
      <span className={done ? "checked" : "notChecked"}>
        {title}
        <button
          className="button__edit"
          type="button"
          aria-label="edit todo"
          onClick={() => setIsEditable(true)}
        />
      </span>
    );
  }

  return (
    <div className="task_todo">
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={(e) => {
            onChange({
              ...todo,
              done: e.target.checked,
            });
          }}
        />
        {renderTodoContent}
      </label>
      <button
        className="button__delete"
        aria-label="delete todo"
        type="button"
        onClick={() => onDelete(id)}
      />
    </div>
  );
}
