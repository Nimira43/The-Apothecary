import React from 'react'
import { type Task } from '../utils/types'

type ListProps = {
  tasks: Task[]
  toggleTask: ({ id }: { id: string }) => void
}

const List = ({ tasks, toggleTask }: ListProps) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <p>{task.description}</p>
            <input
              type='checkbox'
              checked={task.isCompleted}
              onChange={() => {
                toggleTask({ id: task.id })
              }}
            />
          </li>
        )
      })}
    </ul>
  )
}
export default List
