import React, { useState } from 'react'
import { type Task } from '../utils/types'

type FormProps = {
  addTask: (task: Task) => void
}

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text.trim()) return alert('Please enter a task')

    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    })

    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button type='submit'>Add Task</button>
    </form>
  )
}

export default Form

