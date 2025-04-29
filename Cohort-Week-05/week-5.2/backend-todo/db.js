const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://testJWT:mOmFoRsXuvUBBBPU@cluster0.vm6rb5d.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String, 
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model("todos", todoSchema);// Model Name ("todos") is used by Mongoose to understand what collection it should be working with in MongoDB.
// Variable Name (todo) is how you refer to the model in your code when interacting with it.

module.exports = {
    todo
}

