import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from './actions'

interface Task {
  id: string
  text: string
  completed: boolean
}

const initialState: Task[] = []

const tasksReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload]

    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, completed: !task.completed } : task
      )

    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id)

    default:
      return state
  }
}

export default tasksReducer
