const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rohitpithani13:rohit%40026@todo-app.sfbac.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}

