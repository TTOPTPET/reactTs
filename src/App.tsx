import { useEffect, useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList/ToDoList";
import RequestButton from "./components/RequestButton/RequestButton";
import { ToDo, ToDoFiltered } from "./models/TodoTypes";
import AddToDoForm from "./components/AddToDoForm/AddToDoForm";

function App() {
  const [todos, setTodos] = useState<ToDoFiltered[]>([]);
  const [offset, setOffset] = useState(0);

  const setStorage = (data: ToDoFiltered[]) => {
    data.forEach((item) => {
      localStorage.setItem(String(item.id), JSON.stringify({ ...item }));
    });
  };

  const getTodos = () => {
    const keys = Object.keys(localStorage);
    const gettedTodos = [];
    for (const key of keys) {
      gettedTodos.push(JSON.parse(localStorage.getItem(key!) || "{}"));
    }
    setTodos(gettedTodos.sort((a, b) => a.id - b.id));
    setOffset(localStorage.length);
  };

  const fetchTodos = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=10&_start=${offset}`
    )
      .then((response) => response.json())
      .then((json: ToDo[]) => {
        const data = json.map((item: ToDoFiltered) => {
          return { title: item.title, completed: item.completed, id: item.id };
        });
        setStorage(data || []);
        getTodos();
      });
  };

  useEffect(() => {
    localStorage.length === 0 ? fetchTodos() : getTodos();
  }, []);

  console.log(offset);

  return (
    <>
      <AddToDoForm getTodos={getTodos} />
      <ToDoList todos={todos} />
      <RequestButton fetchTodos={fetchTodos} todos={todos} />
    </>
  );
}

export default App;
