import { type Task } from '../utils/types'

type ListProps = {
  tasks: Task[]
  deleteTask: (id: string) => void
}

const List = ({ tasks, deleteTask }: ListProps) => (
  <ul>
    {tasks.map(task => (
      <li key={task.id}>
        <p>{task.description}</p>
        <button onClick={() => deleteTask(task.id)}>Delete Task</button>
      </li>
    ))}
  </ul>
)

export default List
