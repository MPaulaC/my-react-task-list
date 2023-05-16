import { useEffect, useState } from "react";
import Task from "./Task";
import useTasks from "../hooks/useTasks";

export default function TaskList() {
    const { tasks, createTask, deleteTask, updateTask } = useTasks();
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        setTaskList(tasks);
    }, [tasks]);

    const handleCreateTask = () => {
        const newTaskName = prompt("Ingresa la tarea nueva");
        if (newTaskName) {
            createTask(newTaskName);
        }
    };

    return (
        <div>
            {taskList.map((task) => (
                <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    completed={task.completed}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                />
            ))}
            <button onClick={handleCreateTask}>Crear nueva tarea</button>
        </div>
    );
}
