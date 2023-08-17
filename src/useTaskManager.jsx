import { useState, useEffect } from "react";
const useTaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // Se ejecuta cuando el estado `tasks` cambia

  const createTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task, index) => index !== taskId)
    );
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, index) =>
        index === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
  };
};

export default useTaskManager;
