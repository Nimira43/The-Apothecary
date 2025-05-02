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
    
  )
}

export default Form
