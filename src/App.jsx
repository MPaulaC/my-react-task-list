//import Header from "./components/Header";
import TaskList from "./components/TaskList";
import useTasks from "./hooks/useTasks";

function App() {
  const { tasks, createTask, deleteTask, updateTask } = useTasks();

  return (
    <div>
      
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} createTask={createTask} />
    </div>
  );
}

export default App;
