const { getTodo, addTodo, updateTodo, deleteTodo } = require("../controller/todoController")

const router = require("express").Router()
router
    .get("/todo", getTodo)
    .post("/add-todo", addTodo)
    .put("/update-todo/:id", updateTodo)
    .delete("/delete-todo/:id", deleteTodo)

module.exports = router