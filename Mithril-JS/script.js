let TodoList = {
  tasks: [],
  addTask(task) {
    if (task) {
      TodoList.tasks.push({ text: task, done: false})
    }
  },
  toggleTask(index) {
    TodoList.tasks[index].done = !TodoList.tasks[index.done]
  }
}