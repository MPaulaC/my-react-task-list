import  { useState } from "react";
import {
  Box,
  Checkbox,
  Input,
  Button,
  FormControl,
} from "@chakra-ui/react";

function Task({ id, name, description, completed, onCompletion, onDelete, onUpdate }) {
  const [updatedName, setUpdatedName] = useState(name);

  const handleNameChange = (event) => {
    setUpdatedName(event.target.value);
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    if (updatedName.length > 3) {
      const updatedTask = { id, name: updatedName, completed };
      onUpdate(updatedTask);
    } else {
      alert("El nombre de la tarea debe tener más de 3 caracteres.");
    }
  };

  return (
    <Box>
      <Checkbox isChecked={completed} onChange={onCompletion} />
      <Box textDecoration={completed ? "line-through" : "none"}>
        {name} - {description}
      </Box>
      <FormControl>
        <Input type="text" value={updatedName} onChange={handleNameChange} />
      </FormControl>
      <Button onClick={handleUpdateTask}>Actualizar</Button>
      <Button onClick={onDelete}>Eliminar</Button>
    </Box>
  );
}

export default Task;
