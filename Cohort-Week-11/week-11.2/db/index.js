const mongoose = require('mongoose');
require('dotenv').config();

const dbUrl = process.env.MongoDB_URL;

mongoose.connect(dbUrl)
    .then(() => {
        console.log("Connected to the MongoDB successfully");
    })
    .catch(err => {
        console.error("Mongo connction error: ", err);
    })


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    todos: [{
        type: mongoose.Types.ObjectId,
        ref: 'Todo'
    }]
});

const Todo = mongoose.model("todos", todoSchema);
const User = mongoose.model("user", userSchema);

module.exports = {
    Todo,
    User,
};  