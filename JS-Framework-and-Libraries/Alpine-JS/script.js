function todoApp() {
  return {
    newTask: '',
    tasks: [],
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push(this.newTask.trim())
        this.newTask = ''
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    }
  }
}