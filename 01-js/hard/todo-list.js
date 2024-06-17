/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todoList = []) {
    this.todos = todoList;
  }
  add(todo) {
    this.todos.push(todo);
    return this.todos;
  }
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
      return this.todos;
    }
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
    return this.todos;
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
  } else {
      return null;
  }
  }
  clear() {
    return (this.todos = []);
  }
}

console.log(new Todo(["Task 1", "Task 2"]).remove(0));

module.exports = Todo;
