import "./App.css";

import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <main>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </main>
    </div>
  );
}

export default App;
