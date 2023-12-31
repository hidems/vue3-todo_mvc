export const STORAGE_KEY = 'todos-vuejs'

// for testing
if (navigator.webdriver) {
  window.localStorage.clear()
}

export const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo)
  },

  removeTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  editTodo(state, { todo, text = todo.text, done = todo.done, star = todo.star }) {
    const index = state.todos.indexOf(todo)

    state.todos.splice(index, 1, {
      ...todo,
      text,
      done,
      star
    })
  }
}