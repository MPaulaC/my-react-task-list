import { useState, useEffect } from "react";

export default function useTasks() {
    const [tasks, setTasks] = useState([]);

    // Cargar las tareas desde el almacenamiento local al cargar la página
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    // Guardar las tareas en el almacenamiento local cada vez que haya cambios en el estado
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const createTask = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const updateTask = (id, updates) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === id ? { ...task, ...updates } : task))
        );
    };

    return { tasks, createTask, deleteTask, updateTask };
}
