import  { useState } from "react";

function Task({ id, name,description, completed, onCompletion, onDelete, onUpdate }) {
  const [updatedName, setUpdatedName] = useState(name);

  const handleNameChange = (event) => {
    setUpdatedName(event.target.value);
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    if(updatedName.length>3){
      const updatedTask = { id, name: updatedName, completed };
      onUpdate(updatedTask);
    }else{alert("El nombre de la tarea debe tener más de 3 caracteres.");}
    
  };

  return (
    <div>
      <form action="">
      <label>
        <input type="checkbox" checked={completed} onChange={onCompletion} />
        <span style={{ textDecoration: completed ? "line-through" : "none" }}>{name}</span>
        <span> - </span>
        <span>{description}</span>
      </label>
      <input type="text" value={updatedName} onChange={handleNameChange} />
      <button onClick={handleUpdateTask}>Actualizar</button>
      <button onClick={onDelete}>Eliminar</button>
      </form>
    </div>
  );
}

export default Task;
