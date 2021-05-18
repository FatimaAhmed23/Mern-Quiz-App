const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
let userController = require("./user.controller.js");

router.route("/enterscore").post(passport.authenticate("jwt", { session: false }),userController.EnterScore)
router.route("/getusers").get(passport.authenticate("jwt", { session: false }),userController.getUsers)


router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res, next) => {
    if (req.user != "error"){
      res.json({
        message: "Signup successful",
        email: req.user.email,
        role: req.user.role
      });
  }else{
 res.json({
   error: "User already exists!",
 });
  }
  
  })

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        // const error = new Error("An error occurred.");
        return res.json({ error: "Username or Password is Incorrect"});
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email , role : user.role};
        const token = jwt.sign({ user: body }, "TOP_SECRET");
        
        return res.json({ token: token, email: user.email, role :user.role});
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});


module.exports = router;
