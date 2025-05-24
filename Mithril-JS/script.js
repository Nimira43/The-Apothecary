let TodoList = {
  tasks: [],
  addTask(task) {
    if (task) {
      TodoList.tasks.push({
        text: task,
        done: false
      })
      m.redraw()
    }
  },
  toggleTask(index) {
    TodoList.tasks[index].done = !TodoList.tasks[index].done
    m.redraw()
  }
}

let TodoApp = {
  task: '',
  view() {
    return m('div', [
      m('h2', 'Mithril Task Manager'),
      m('input[type=text]', {
        oninput: (e) => TodoApp.task = e.target.value,
        value: TodoApp.task
      }),
      m('button', {
        onclick: () => {
          TodoList.addTask(TodoApp.task)
          TodoApp.task = ''
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

// https://mithril.network/doc/