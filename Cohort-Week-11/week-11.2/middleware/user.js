const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    console.log(req.headers);
    console.log(token);
    const jwtToken = token; 
    try{ 
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if(decodedValue.username) {
            req.username = decodedValue.username;
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            });
        }
    } catch(e) {
        res.json({
            msg: "Incorrect Token",
        });
    }
}

module.exports = userMiddleware;