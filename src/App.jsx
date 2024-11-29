import Header from "../src/components/Header";
import { tasks } from "../data";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([...tasks]);
  const [task, setTask] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setCount(todos.length);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    if (task.trim()) {
      const newTask = {
        id: Date.now(),
        title: task,
        completed: isCompleted,
      };

      setTodos((prevTodos) => [...prevTodos, newTask]);
      setTask("");
      setIsCompleted(false);
    }
  }

  function handleCheckboxChange(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function clearCompleted() {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => !todo.completed);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
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
            onChange={(e) => setIsCompleted(e.target.checked)}
          />
          <input
            type="text"
            className="outline-none border-0 w-full bg-veryLightGray text-veryDarkGrayishBlue"
            placeholder="Create a new todo..."
            onChange={(e) => setTask(e.target.value)}
            value={task} // Ensuring task state is tied to the input value
          />
        </form>
        {/* Todos */}
        <ul className="bg-veryLightGray shadow-lg rounded-md w-full p-3 space-y-3 text-base">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-start w-full gap-3 border-b border-dotted border-b-veryLightGrayishBlue"
            >
              <input
                type="checkbox"
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
          <div className="flex items-center justify-between text-darkGrayishBlue text-sm">
            <p>{count} items left</p>
            <div className="flex gap-3">
              <button className="text-brightBlue">All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
            <button onClick={clearCompleted}>Clear Completed</button>
          </div>
        </ul>
      </div>
    </main>
  );
}

export default App;
