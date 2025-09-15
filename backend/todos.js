let todos = [];
let id = 1;

module.exports = {
  getTodos: () => todos,
  addTodo: (task) => {
    const newTodo = { id: id++, task };
    todos.push(newTodo);
    return newTodo;
  },
  deleteTodo: (id) => {
    todos = todos.filter(todo => todo.id !== id);
  }
};
