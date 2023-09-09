import React, { useState } from "react";
import Task from "./Task";
import useTaskManager from "./useTaskManager";
import {
  Box,
  Button,
  FormControl,
  Input,
  Textarea,
  Stack,
} from "@chakra-ui/react";

function TaskList() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const handleNewTaskDescription = (event) => {
    setNewTaskDescription(event.target.value);
  };

  const handleNewTaskNameChange = (event) => {
    setNewTaskName(event.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskName.length > 3) {
      const newTask = {
        name: newTaskName,
        description: newTaskDescription,
        completed: false,
      };
      createTask(newTask);
      setNewTaskName("");
      setNewTaskDescription("");
    } else {
      alert("El nombre de la tarea debe tener más de 3 caracteres.");
    }
  };

  const handleTaskCompletion = (taskIndex) => {
    const task = tasks[taskIndex];
    const updatedTask = { completed: !task.completed };
    updateTask(taskIndex, updatedTask);
  };

  const handleTaskDeletion = (taskIndex) => {
    deleteTask(taskIndex);
  };

  const handleTaskUpdate = (taskIndex, updatedTask) => {
    updateTask(taskIndex, updatedTask);
  };

  return (
    <Box>
      <form action="">
        <Stack direction="column" spacing={2}>
          <FormControl>
            <Input
              type="text"
              placeholder="Nombre de la tarea"
              value={newTaskName}
              onChange={handleNewTaskNameChange}
            />
          </FormControl>
          <FormControl>
            <Textarea
              placeholder="Descripción de la tarea"
              value={newTaskDescription}
              onChange={handleNewTaskDescription}
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleAddTask}>
            Agregar
          </Button>
        </Stack>
      </form>
      {tasks.map((task, index) => (
        <Task
          key={index}
          name={task.name}
          description={task.description}
          completed={task.completed}
          onCompletion={() => handleTaskCompletion(index)}
          onDelete={() => handleTaskDeletion(index)}
          onUpdate={(updatedTask) => handleTaskUpdate(index, updatedTask)}
        />
      ))}
    </Box>
  );
}

export default TaskList;
