import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setshowAddTask] = useState
  (false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Go For Groceries',
      day: 'Jan 25th at 1:30pm',
      reminder: true, 
    },
    {
      id: 2,
      text: 'Hair cut for Sheeba',
      day: 'jan 26th at 4:00pm',
      reminder: true, 
    },
  ])


//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 
  10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])

} 




// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

//Toggle Reminser
const toggleReminder = (id) =>{
  setTasks(
  tasks.map((task) =>
  task.id === id ? { ...task, reminder:
    !task.reminder } : task 
    )
  )
}



  return (
    <div className='container'>
    <Header onAdd={() => setshowAddTask
    (!showAddTask)} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? ( 
      <Tasks tasks={tasks} onDelete=
    {deleteTask} onToggle={toggleReminder} />):(
      'No Task To Show'
    )}
    </div>
  );
}

export default App;

