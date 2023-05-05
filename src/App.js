import { useState } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "first todo",
      status: false,
    },
    {
      id: 2,
      title: "second todo",
      status: false,
    },
    {
      id: 3,
      title: "third todo",
      status: true,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header py-3 bg-dark">
        <Header></Header>
      </header>
      <main className="App-main">
        <AddTodo tasks={tasks} setTask={setTask}></AddTodo>
        <TodoList tasks={tasks} setTask={setTask}></TodoList>
      </main>
    </div>
  );
}

export default App;
