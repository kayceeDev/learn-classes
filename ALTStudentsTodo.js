const {Todo} =  require('./Todo')


const ALTSchoolTodoList = new Todo("ALTStudent", 3)

ALTSchoolTodoList.AddTodo("Learn javaScript")
ALTSchoolTodoList.AddTodo("Learn HTML")
ALTSchoolTodoList.AddTodo("Learn CSS")


module.exports = ALTSchoolTodoList
