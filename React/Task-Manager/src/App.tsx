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
  
  return (
    <section>
      <h1 className='logo'>Artemis<br></br>Task Manager</h1>
      <Form />
      <List />
    </section>
  )
}

export default App
