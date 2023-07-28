import { useState, useEffect } from "react";

export default function useTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    const createTask = (name) => {
        const newTask = { id: Date.now(), name, completed: false };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }; 

    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const updateTask = (id, updates) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, ...updates };
                }
                return task;
            })
        );
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return { tasks, createTask, deleteTask, updateTask };
}
