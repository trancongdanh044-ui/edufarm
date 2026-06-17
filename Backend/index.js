const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

//Route
const authRoute = require("./routes/auth.route");
const postRoute = require("./routes/common/post.route");
const imgPageRoute = require("./routes/admin/images_page.route");
const actRoute = require('./routes/admin/activities.route');

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
//Commom
app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);
app.use('/api/activities', actRoute);

//Admin
app.use('/api/imagespage', imgPageRoute);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});