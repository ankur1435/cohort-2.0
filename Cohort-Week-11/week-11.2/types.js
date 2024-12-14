const zod = require('zod');

const createUser = zod.object({
    username: zod.string(),
    password: zod.string().min(8)
});

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
});

const updateTodo = zod.object({
    id: zod.string()
});

module.exports = {
    createUser: createUser,
    createTodo: createTodo,
    updateTodo: updateTodo
}