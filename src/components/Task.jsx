
import PropTypes from "prop-types";
import { useState } from "react";

export default function Task(props) {
    const { name, completed } = props;
    const [isCompleted, setIsCompleted] = useState(completed);

    const handleCheckboxClick = () => {
        setIsCompleted(!isCompleted);
        const updatedTasks = JSON.parse(localStorage.getItem("tasks")).map((task) => {
            if (task.id === props.id) {
                task.completed = !isCompleted;
            }
            return task;
        });
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    return (
        <div>
            <input type="checkbox" onChange={handleCheckboxClick} checked={isCompleted} />
            <span>{name}</span>
        </div>
    );
}


//codigo solución que encontré para el error que me daba para la validación de props
Task.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
};
