import React from 'react'
import Form from './components/Form'
import List from './components/List'
import './index.css'
import { useEffect, useState } from 'react'
import { type Task } from './utils/types'


function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Task) => {
    setTasks([...tasks, task])
  }
  
  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted }
        }
        return task
      })
    )
  }

  return (
    <section>
      <h1 className='logo'>Artemis<br></br>Task Manager</h1>
      <Form addTask={addTask}/>
      <List />
    </section>
  )
}

export default App
