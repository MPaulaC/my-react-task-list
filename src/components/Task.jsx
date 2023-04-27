
import PropTypes from "prop-types";
export default function Task(props) {
    const { name, completed } = props;

    return (
        <div>
            <input type="checkbox" checked={completed} />
            <span>{name}</span>
        </div>
    );
}

//codigo solución que encontré para el error que me daba para la validación de props
Task.propTypes = {
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
};
