const mongoose = require("mongoose");
require('dotenv').config();
const db = process.env.Mongo;

mongoose.connect(db)
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch(err => {
        console.error("Mongo Connection error: ", err);
    });

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