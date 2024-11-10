const express = require('express');

const app = express();

let errorCount = 0;

app.get('/user', function(req, res) {
    throw new Error("User not found");
    res.status(200).json({ name : 'john' });
});

app.post('/user', function(req, res) {
    res.status(200).json({ msg : "Created dummy user" });
});

app.get('/errorCount', function(req, res) {
    res.status(200).json({ errorCount });
});

app.use(function(err, req, res, next) {
    res.status(404).send();
    errorCount = errorCount + 1;
});

app.listen(3000);