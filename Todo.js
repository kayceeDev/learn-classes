// classes

class Todo {
  constructor(type, section) {
    this.todoArr = [];
    this.type = type;
    this.section = section;
  }

  get TodoList() {
    return `${this.todoArr} ${this.type} ${this.section}`;
  }

  AddTodo(todo) {
    this.todoArr.push(todo);
  }

  editTodo(todoEdit, newTodo) {
    // map over the array with index.
    this.todoArr.map((item, index) => {
      if (item === todoEdit) {
        this.todoArr[index] = newTodo;
        return
      }
    });
  }
}

module.exports = {
  Todo,
};
