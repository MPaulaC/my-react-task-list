import Header from "./components/Header";
import TaskList from "./components/TaskList";

const tasks = [
  { id: 1, name: "barrer la casa", completed: false },
  { id: 2, name: "bailar salsa", completed: false },
  { id: 3, name: "comer doritos", completed: true },
];

function App() {
  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;

 
    
  



