import { useEffect, useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import './index.css'
import { type Task } from './utils/types'

const loadTasks = (): Task[] => JSON.parse(localStorage.getItem('tasks') || '[]')

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(loadTasks)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (task: Task) => setTasks([...tasks, task])

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div>
      <h1 className='logo'>Artemis Task Manager</h1>
      <Form addTask={addTask} />
      <List tasks={tasks} deleteTask={deleteTask} />
    </div>
  )
}

export default App


