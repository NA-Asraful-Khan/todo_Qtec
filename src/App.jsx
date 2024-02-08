import { CustomForm } from "./components/CustomForm"

function App() {
  const addTask = (task)=>{
    console.log(task)
  }
 
  return (
    <div className="container"> 
    <header>
      <h1>My Task List</h1>
    </header>
        <CustomForm addTask = {addTask}></CustomForm>
    </div>
  )
}

export default App
