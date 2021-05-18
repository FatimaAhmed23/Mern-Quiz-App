const express = require("express")
const cors = require("cors")
const passport = require("passport");
let test = require("./api/test.routes.js");
let user = require("./api/user.routes.js");
let secure = require("./api/secure_user.routes.js");
const bodyParser = require("body-parser");
const path = require("path")

const UserModel = require("./models/user_model");

require("./auth/auth");
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/system/", test);
app.use("/user/", user);
app.use(
  "/user/auth/",
  passport.authenticate("jwt", { session: false }),
  secure
);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use("*",(req,res) => res.status(404).json({error : "not found"}))

module.exports = app