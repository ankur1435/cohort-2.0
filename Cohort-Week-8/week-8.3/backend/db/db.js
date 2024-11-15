const mongoose = require("mongoose");
require('dotenv').config();

const dbUrl = process.env.MongoDB_URL;

mongoose.connect(dbUrl)
    .then(() => {
        console.log("Connected to the MongoDB successfully");
    })
    .catch(err => {
        console.error("Mongo connection error: ", err);
    })

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const User = mongoose.model("user", userSchema);

module.exports = {
    User
}