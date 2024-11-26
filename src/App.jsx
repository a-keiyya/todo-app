import Header from "../src/components/Header";
import { tasks } from "../data";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([...tasks]);
  const [task, setTask] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (task.trim()) {
      const newTask = {
        id: Date.now(),
        title: task,
        completed: isCompleted,
      };

      setTodos((prevTodos) => [...prevTodos, newTask]);

      setTask(" ");
    }
  }

  function handleCheckboxChange(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <main>
      <div className="container w-1/3 mx-auto flex flex-col items-center justify-center gap-7 py-16">
        <Header />
        {/* Input */}
        <form
          onKeyDown={(e) => (e.keyCode === 13 ? handleSubmit(e) : null)}
          className="flex bg-veryLightGray p-3 rounded-md gap-4 w-full"
        >
          <input
            type="checkbox"
            name=""
            id=""
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
          <input
            type="text"
            className="outline-none border-0 w-full bg-veryLightGray text-veryDarkGrayishBlue"
            placeholder="Create a new todo..."
            onChange={(e) => setTask(e.target.value)}
          />
        </form>
        {/* Todos */}
        <ul className="bg-veryLightGray shadow-lg rounded-md w-full p-3 space-y-3 text-base">
          {/* Todo */}
          {todos.map((todo) => (
            <li
              className="flex items-center justify-start w-full  gap-3  border-b border-dotted  border-b-veryLightGrayishBlue"
              key={todo.id}
            >
              <input
                type="checkbox"
                name=""
                id=""
                onChange={() => handleCheckboxChange(todo.id)}
              />
              <p
                className={
                  todo.completed
                    ? "line-through text-darkGrayishBlue"
                    : "text-veryDarkGrayishBlue"
                }
              >
                {todo.title}
              </p>
            </li>
          ))}

          {/* Dashboard */}
          <div className="flex items-center justify-between text-darkGrayishBlue text-sm">
            <p>5 items left</p>
            <div className="flex gap-3">
              <button className="text-brightBlue">All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
            <button>Clear Completed</button>
          </div>
        </ul>
      </div>
    </main>
  );
}

export default App;
