// src/App.jsx
import { useEffect, useState } from "react";
import "./app.css";
import TodoForm from "./Components/organisms/TodoForm";
import TodoList from "./Components/organisms/TodoList";
import FilterGroup from "./Components/molecules/FilterGroup";
import Button from "./Components/atoms/Button";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("light");

useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);


  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toLocaleString(),
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h1>ToDo List</h1>
         <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "🌙 Tema scuro" : "☀️ Tema chiaro"}
      </button>
      <TodoForm onAdd={addTask} />
      <FilterGroup current={filter} onChange={setFilter} />
      <TodoList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
      <p>{tasks.filter(t => !t.completed).length} task rimanenti</p>
    </div>
  );
}

export default App;