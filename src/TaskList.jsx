import React, { useState } from "react";
import Task from "./Task";
import useTaskManager from "./useTaskManager";

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
    if(newTaskName.length>3){
      const newTask = { name: newTaskName,description: newTaskDescription, completed: false };
      createTask(newTask);
      setNewTaskName("");
      setNewTaskDescription("");
    }else{alert("El nombre de la tarea debe tener más de 3 caracteres.");}
    
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
    <div>
      <form action="">
      <div>
        <input
          type="text"
          value={newTaskName}
          onChange={handleNewTaskNameChange}
        />
        <input 
          type="text"
          value={newTaskDescription}
          onChange={handleNewTaskDescription}
           />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
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
      
    </div>
  );
}

export default TaskList;
