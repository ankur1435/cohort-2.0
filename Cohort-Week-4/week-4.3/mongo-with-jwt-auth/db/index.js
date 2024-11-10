const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect('mongodb+srv://rohitpithani13:rohit%40026@week4.f8glr.mongodb.net/course_selling_app2')
    .then(() => {
        console.log("Connected to MongoDB successfully");
    })
    .catch(err => {
        console.error("MongoDB connection error:", err);
    });


// Define schema
const AdminSchema = new mongoose.Schema({
    // Schema Definition here
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema Definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema Definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}