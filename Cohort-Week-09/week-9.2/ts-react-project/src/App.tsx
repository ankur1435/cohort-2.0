import './App.css'

function App() {

  return (
    <>
      <Todo
        title="hii there"
        description="asd"
        done={false}
      />
    </>
  )
}

interface TodoProp {
  title: string,
  description: string,
  done: boolean
}

function Todo(props: TodoProp) {
  return <div>
    <h1>
      {props.title}
    </h1>
    <h2>
      {props.description}
    </h2>
  </div>
}

export default App
