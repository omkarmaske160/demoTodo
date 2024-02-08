const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task: {
        required: true,
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model("todo", todoSchema)