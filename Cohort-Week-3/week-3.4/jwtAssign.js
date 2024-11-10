const jwt = require('jsonwebtoken');

const value = {
    name: "Rohit",
    accountNumber: 123123123
}

const token = jwt.sign(value, "secret");
console.log(token);