const express = require("express")
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/sum', function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
});

app.get('/principal', function(req, res) {
    const principal = parseInt(req.query.principal);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);
    const interest = (principal * rate * time) / 100;
    const total = principal + interest;
    res.send({
        Total: total,
        Interest: interest
    });
});

app.listen(3000);
console.log(`Server is running on port 3000`);