let TodoList = {
  tasks: [],
  addTask(task) {
    if (task) {
      TodoList.tasks.push({
        text: task,
        done: false
      })
    }
  },
  toggleTask(index) {
    TodoList.tasks[index].done = !TodoList.tasks[index.done]
  }
}

let TodoApp = {
  view() {
    return m('div', [
      m('h2', 'Mithril Task Manager'),
      m('input[type=text]', {
        oninput: (e) => this.task = e.target.value,
        value: this.task
      }),
      m('button', {
        onClick: () => {
          TodoList.addTask(this.task)
          this.task = ''
        }
      }, 'Add Task'),
      m('ul', TodoList.tasks.map((task, index) =>
        m('li', { class: task.done ? 'done' : '' }, [
          m('span', task.text),
          m('button', {
            onclick: () =>
              TodoList.toggleTask(index)
          }, task.done ? 'Undo' : 'Done')
        ])
      ))
    ])
  }
}

m.mount(document.body, TodoApp)