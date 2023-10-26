import { useState } from "react";

const initialItems = [
  {
    id: 1,
    description: "Do miniproject ",
    isDone: false,
  },
  {
    id: 1,
    description: "Create react app ",
    isDone: true,
  },
];
export default function MainScreen() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <TaskList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>My ToDo</h1>;
}
function Form() {
  const [task, setTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!task) return;
    const netTask = {
      task: task,
      isDone: false,
      id: Date.now(),
    };
  }
  return (
    <div className="add-form">
      <h3>Add Your Tasks</h3>
      <input
        type="text"
        placeholder="add task.."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}
function TaskList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.isDone ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      you completed x tasks on your list, and you aldedy{" % "} completed
    </footer>
  );
}
