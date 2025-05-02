import React from 'react'
import Form from './components/Form'
import List from './components/List'
import './index.css'
import { useEffect, useState } from 'react'
import { type Task } from './utils/types'


function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  
  return (
    <>
      <h1>Task Manager</h1>
      <Form />
      <List />
      <div>
        <h1 className='logo'>Artemis<br></br>Task Manager</h1>
      </div>
    </>
  )
}

export default App
