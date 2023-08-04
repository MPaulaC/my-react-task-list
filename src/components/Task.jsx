
import PropTypes from "prop-types";

export default function Task(props) {
    const { id, name, completed, deleteTask, updateTask } = props;

    const handleCheckboxClick = () => {
        updateTask(id, { completed: !completed });
    };

    const handleDeleteClick = () => {
        deleteTask(id);
    };

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <label>
                    <input
                        type="checkbox"
                        onChange={handleCheckboxClick}
                        checked={completed}
                    />
                    <span style={{ textDecoration: completed ? "line-through" : "none" }}>
                        {name}
                    </span>
                </label>
                <button onClick={handleDeleteClick}>Borrar</button>
            </div>
        </div>
    );
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    deleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
};
