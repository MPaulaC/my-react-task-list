import PropTypes from "prop-types";
import { useState } from "react";
import useTasks from "../hooks/useTasks";

export default function Task(props) {
    const { id, name, completed } = props;
    const [isCompleted, setIsCompleted] = useState(completed);
    const { updateTask, deleteTask } = useTasks();
    const [newTaskName, setNewTaskName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    const handleCheckboxClick = () => {
        setIsCompleted(!isCompleted);
        updateTask(id, { completed: !isCompleted });
    };

    const handleDeleteClick = () => {
        deleteTask(id);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        if (newTaskName.trim() !== "") {
            updateTask(id, { name: newTaskName.trim() });
        }
        setIsEditing(false);
    };

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <input
                    type="checkbox"
                    onChange={handleCheckboxClick}
                    checked={isCompleted}
                />
                {isEditing ? (
                    <div>
                        <input
                            type="text"
                            value={newTaskName}
                            onChange={(e) => setNewTaskName(e.target.value)}
                        />
                        <button onClick={handleSaveClick}>Guardar</button>
                    </div>
                ) : (
                    <div>
                        <span>{name}</span>
                        <button onClick={handleEditClick}>Editar</button>
                    </div>
                )}
                <button onClick={handleDeleteClick}>Borrar</button>
            </div>
        </div>
    );
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
};
