const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000

app.get('/files', function(req, res) {
    fs.readdir(path.join(__dirname, './files/'), (err, files) => {
        if (err) {
            return res.status(500).json({
                error :'Failed to retrieve files' 
            });
        }
        res.json(files);
    });
});

app.get('/files/:filename', function(req, res) {
    const filepath = path.join(__dirname, './files/', req.params.filename);
    fs.readFile(filepath, 'utf-8', (err, data) => {
        if(err) {
            return res.status(404).send("File not found");
        }
        res.send(data);
    });
});

app.listen(port, function() {
    console.log(`Server is listening on port ${port}`);
}) 