const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000
//middlewares
app.use(bodyParser.json());

app.post('/backend-api/', (req, res) => {
    const msg = req.query.msg;
    console.log(msg);  
    res.send('Done');
})

app.get('/', function(req, res) {
    console.log(req.body);
    res.send('Hello World! This is my own server');
})

app.listen(port, function() {
    console.log(`Server is listening on port ${port}`)
})