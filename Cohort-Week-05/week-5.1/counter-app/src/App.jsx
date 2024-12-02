import { useState } from "react";

// todo application
function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7 to 9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA from 9 to 11",
    completed: true
  }, {
    title: "Study DSA",
    description: "Study DSA from 9 to 11",
    completed: true
  }
]);

  function addTodo() {
    setTodos([...todos, {
      title: "New todo",
      description: "Description of new todo"
    }])
  }

  
  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>

      {todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    
    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
 