import { ADD_TASK, TOGGLE_TASK, DELETE_TASK } from './actions'

export const addTask = (text: string) => ({
  type: ADD_TASK,
  payload: { id: Date.now().toString(), text, completed: false },
})

export const toggleTask = (id: string) => ({
  type: TOGGLE_TASK,
  payload: { id },
})

export const deleteTask = (id: string) => ({
  type: DELETE_TASK,
  payload: { id },
})
