import React, { useState } from 'react'

const Form = () => {
  const [text, setText] = useState('')
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!text) {
      alert('Please enter a Task')
      return
    }
    setText('')
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button
        type='submit'
      >
        Add Task
      </button>
    </form>
  )
}

export default Form
