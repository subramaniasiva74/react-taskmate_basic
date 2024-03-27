import { useState } from "react";
import "./App.css";
import { List } from "./components/List";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn react", completed: false },
    { id: 2, name: "Learn express", completed: false },
    { id: 3, name: "Learn AWS cloud", completed: false },
  ]);

  function handleDelete(id) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  }

  return (
    <div className="App">
      <h1 className="title">Task List</h1>
      <ul>
        {tasks.map((task) => {
          return task.completed !== true ? (
            <List key={task.id} task={task} deleteFunction={handleDelete} />
          ) : null;
        })}
      </ul>
    </div>
  );
}

export default App;
