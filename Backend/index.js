const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

//Route
const authRoute = require("./routes/auth.route");
const postRoute = require("./routes/common/post.route");

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Route test
app.get("/", (req, res) => {
    res.json({
        message: "Server đang hoạt động"
    })
});

//API
console.log(authRoute);
console.log(postRoute);

app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});