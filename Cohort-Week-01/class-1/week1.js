const fs = require("fs");

function putCopyrightToFile(cb) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
            data = data + "Copyright 2024 Anonymous\n";
            fs.writeFile("a.txt", data, function () {
            cb();
        });
    });
}

putCopyrightToFile(function() {
    console.log("Copyright has been put");
});
   