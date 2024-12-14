const { Router } = require('express');
const router = Router();
const { User, Todo } = require('../db');
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../config');
const jwt = require('jsonwebtoken');
const { createUser, createTodo, updateTodo } = require('../types');
const userMiddleware = require('../middleware/user');
const cors = require("cors");

router.use(cors({ origin: 'http://localhost:5173' }));

router.post("/signUp", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createUser.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(400).json({ msg: "Invalid input" });
    }
    const { username, password } = createPayload;
    try {
        const existingUser = await User.findOne({ username });
        if (!existingUser) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ username, password: hashedPassword });
            res.json({ message: "User created successfully", details: newUser });
        } else {
            res.status(409).json({ msg: "User already exists" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Error creating user" });
    }
});

router.post("/signIn", async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createUser.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(400).json({ msg: "Invalid input" });
    }
    const { username, password } = createPayload;
    try {
        const user = await User.findOne({ username });
        console.log("User found: ", user);
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                const token = await jwt.sign({ username }, JWT_SECRET);
                res.json({ token });
            } else {
                res.status(401).json({ msg: "Incorrect email or password" });
            }
        } else {
            res.status(401).json({ msg: "No account found! Please create a new one." });
        }
    } catch (error) {
        console.log("Error during sign-in: ", error);
        res.status(500).json({ msg: "Internal server error" });
    }
});

router.get("/users", async (req, res) => {
    const response = await User.find({});
    res.json({
        users: response,
    });
});

router.post("/todo", userMiddleware, async(req, res) => {
    const createTodoPayLoad = req.body;
    const parsedTodoPayLoad = createTodo.safeParse(createTodoPayLoad);
    if(!parsedTodoPayLoad.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }
    const { title, description } = parsedTodoPayLoad.data;
    const newTodo = await Todo.create({
        title,
        description,
    });
    await User.updateOne(
        { username: req.username },
        { $push: { todos: newTodo._id } }
    );
    console.log(newTodo);
    res.json({
        todos: newTodo,
    });
});

router.get('/userTodo', userMiddleware, async (req, res) => {
    const username = req.username;
    const user = await User.findOne({
        username: req.username
    });
    
    const todos = await Todo.find({
        _id: {
            "$in": user.todos
        }
    });
    res.json({
        todos: todos
    })
});

router.put("/completed", async(req, res) => {
    console.log("Incoming payload:", req.body);
    const updateTodoPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updateTodoPayload);
    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }
    await Todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    });
});

router.delete('/deleteTodo', userMiddleware, async (req, res) => {
    try {
        const { id } = req.body;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        
        if (!deletedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        
        }
        await User.updateOne(
            { username: req.username },
            { $pull: { todos: id } }
        );
        res.json({ msg: "Todo deleted successfully" });
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ msg: "Error deleting todo" });
    }
});

module.exports = router;