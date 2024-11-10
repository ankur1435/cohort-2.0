const express = require('express');

const app = express();

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.use(function(req, res, next) {
    const userId = req.headers["user-id"];
    if(numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
        if(numberOfRequestsForUser[userId] > 5){
            res.status(404).send("No entry");
        } else {
            next();
        }
    } else {
        numberOfRequestsForUser[userId] = 1;
        next();
    }
})

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
})

app.listen(3000);