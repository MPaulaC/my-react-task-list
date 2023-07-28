import { useEffect, useState } from "react";
import Header from "./Header";
import Task from "./Task";
import useTasks from "../hooks/useTasks";
import "./TaskList.css"; 

export default function TaskList() {
    const { tasks, createTask, deleteTask, updateTask } = useTasks();
    const [newTaskName, setNewTaskName] = useState("");
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        setTaskList(tasks);
    }, [tasks]);

    const handleCreateTask = () => {
        if (newTaskName.trim() !== "") {
            createTask(newTaskName.trim());
            setNewTaskName("");
        }
    };

    return (
        <div className="task-list-page">
            <div className="background"></div>
            <div className="task-list-container">
                <Header />
                <div className="center-container">
                    <h3 className="section-title">Tasks</h3>
                    <div className="input-container">
                        <input
                            type="text"
                            value={newTaskName}
                            onChange={(e) => setNewTaskName(e.target.value)}
                            placeholder="Ingresa una nueva tarea"
                            className="create-task-input"
                        />
                        <button onClick={handleCreateTask} className="create-task-button">
                            Crear tarea
                        </button>
                    </div>
                </div>
                <div className="tasks-container">
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
                </div>
            </div>
        </div>
    );
}
