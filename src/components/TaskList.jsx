import Task from "./Task";
import PropTypes from "prop-types";

export default function TaskList(props) {
    const { tasks} = props;

    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} name={task.name} completed={task.completed} />
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