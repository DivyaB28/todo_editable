import React, { useEffect, useState } from "react";
import "./scss/App.css";
import AddTodo from "./components/AddTodo";
import TaskList from "./components/TaskList";

const COUNT_ID = 3;
const INITIAL_TODO_LIST = [
  {
    id: 1,
    title: "Buy groceries",
    done: true,
  },
  {
    id: 2,
    title: "Read book",
    done: false,
  },
  {
    id: 3,
    title: "Clean home",
    done: false,
  },
];
function App() {
  function loadData() {
    return JSON.parse(window.localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(loadData());

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, []);

  function handleAddTodo(title) {
    if (title !== "") {
      setTodos([
        ...todos,
        {
          id: COUNT_ID + 1,
          title,
          done: false,
        },
      ]);
    }
  }

  function handleOnChange(todoUpdated) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoUpdated.id) {
          return todoUpdated;
        } else {
          return todo;
        }
      })
    );
  }

  function handleOnDelete(deletId) {
    setTodos(todos.filter((todo) => todo.id !== deletId));
  }

  return (
    <React.Fragment>
      <header>
        <h1>myTodo</h1>
      </header>
      <main>
        <AddTodo onAddTodoList={handleAddTodo} />
        <TaskList
          todos={todos}
          onChangeTodo={handleOnChange}
          onDeleteTodo={handleOnDelete}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
