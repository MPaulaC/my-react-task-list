import  { useState } from "react";

const TaskForm = ({ createTask }) => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [isCompleted, setIsCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación
        if (taskName.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
            return;
        }

        // Lógica para guardar la tarea en el estado usando la función createTask
        const newTask = {
            id: Date.now(),
            name: taskName,
            description: taskDescription,
            completed: isCompleted,
        };

        createTask(newTask);

        // Reiniciar el formulario
        setTaskName("");
        setTaskDescription("");
        setIsCompleted(false); // Reiniciar el estado del cuadro de verificación
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre de la tarea:</label>
                <input
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                />
            </div>
            <div>
                <label>Descripción de la tarea:</label>
                <textarea
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                />
            </div>
            
            <button type="submit">Guardar</button>
        </form>
    );
};

export default TaskForm;
