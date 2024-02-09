const Todo = require("../model/Todo")

exports.getTodo = async (req, res) => {
    try {
        const result = await Todo.find()
        res.status(200).json({
            message: "get sucess", result
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
exports.addTodo = async (req, res) => {
    try {
        await Todo.create(req.body)
        res.status(201).json({
            message: "add sucess"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
exports.updateTodo = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    try {
        res.status(200).json({
            message: "update sucess"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
exports.deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    try {
        res.status(200).json({
            message: "delete sucess"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}