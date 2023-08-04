import React from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import useTasks from "./hooks/useTasks";

function App() {
  const { tasks, createTask, deleteTask, updateTask } = useTasks();

  const handleCreateTask = (newTask) => {
    createTask(newTask);
  };

  return (
    <React.StrictMode>
      <div>
        <TaskForm createTask={handleCreateTask} />

        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            completed={task.completed}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </React.StrictMode>
  );
}

export default App;
