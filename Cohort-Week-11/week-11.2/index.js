const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require("./routes/user");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use("/user", userRouter);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});