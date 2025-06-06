import React from 'react'
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr"

const Calender = () => {
  return (
    <div className='calendar-app'>
      <div calendar>
        <h1 className='heading text-5xl'>Calendar</h1>
        <div className='navigate-date'>
          <h2 className='month text-3xl'>June</h2>
          <h2 className='year text-3xl'>2025</h2>
          <div className='buttons'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Calender
