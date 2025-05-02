import React from 'react'
import { type Task } from '../utils/types'

type ListProps = {
  tasks: Task[];
  toggleTask: (id: string) => void;
}

const List = ({ tasks, toggleTask }: ListProps) => (
  <ul>
    {tasks.map(task => (
      <li key={task.id}>
        <p>{task.description}</p>
        <input
          type='checkbox'
          checked={task.isCompleted}
          onChange={() => toggleTask(task.id)}
        />
      </li>
    ))}
  </ul>
)

export default List
