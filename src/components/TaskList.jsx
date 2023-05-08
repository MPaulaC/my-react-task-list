import Task from "./Task";
import PropTypes from "prop-types";
import  { useState, useEffect } from "react";

export default function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);



    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} id={task.id} name={task.name} completed={task.completed} />
            ))}
        </div>
    );
}



//codigo solución que encontré para el error que me daba para la validación de props
TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
};