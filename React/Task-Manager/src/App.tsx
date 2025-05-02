import React from 'react'
import Form from './components/Form'
import List from './components/List'
import './index.css'
import { useEffect, useState } from 'react'
import { type Task } from './utils/types'

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks')
  return storedTasks ? JSON.parse(storedTasks) : []
}

function updateStorage(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks())

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
  useEffect(() => {
    updateStorage(tasks)
  }, [tasks])

  return (
    <div>
      <h1 className='logo'>Artemis<br></br>Task Manager</h1>
      <Form addTask={addTask}/>
      <List tasks={tasks} toggleTask={toggleTask}/>
    </div>
  )
}

export default App
