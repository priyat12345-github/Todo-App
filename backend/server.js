const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const todosModule = require('./todos');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// GET all todos
app.get('/api/todos', (req, res) => {
  res.json(todosModule.getTodos());
});

// POST a new todo
app.post('/api/todos', (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ message: "Task is required" });
  const newTodo = todosModule.addTodo(task);
  res.json(newTodo);
});

// DELETE a todo
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todosModule.deleteTodo(id);
  res.json({ message: "Deleted" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
