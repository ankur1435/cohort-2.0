const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/health-checker', function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(username != "rohit" || password != "pass") {
        res.status(404).json({"msg" : "Somethings up with your inputs"})
        return;
    }

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(404).json({"msg" : "Somethings up with your inputs"})
        return;
    }

    res.json({
        msg: "Your kidney is fine!"
    })
})  

app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
})  