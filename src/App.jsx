import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const initialTasks = [
      { id: 1, name: "barrer la casa", completed: false },
      { id: 2, name: "bailar salsa", completed: false },
      { id: 3, name: "comer doritos", completed: true },
    ];

    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify(initialTasks));
    }
  }, []);

  return (
    <div>
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
