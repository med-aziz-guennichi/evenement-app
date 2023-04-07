const { register, Login } = require("../controller/user");
const passport = require("passport");
const route = require("express").Router();

/* auth */
route.post("/register", register);
route.post("/login", Login);

// google

route.get("/login/success", (req, res) => {
  try {
    const user = req.user;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
});

// route.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     error: true,
//     message: "Log in faled",
//   });
// });

route.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: process.env.CLIENT_URL,
  })
);

route.get("/google", passport.authenticate("google", ["profile", "email"]));

module.exports = route;
