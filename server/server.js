const express = require("express");
require("dotenv").config();
const userRoute = require("./router/user");
const mongoose = require("mongoose");
const cors = require("cors");
const userInfoRoute = require("./router/userInfo");
const multer = require("multer");
const passport = require("passport");
const cookieSession = require("cookie-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const CategoryRoute = require("./router/category");
const evenementRoute = require("./router/evenment");
const cookieParser = require("cookie-parser");
const messageRoute = require("./router/message");

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("mongo db connected");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 8800;

app.use(cookieParser());

app.use(
  cookieSession({
    name: "session",
    keys: ["aziz"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// upload image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("Image uploaded successfully!");
  } catch (error) {
    res.status(500).json("Error. Image not uploaded!");
  }
});

// routers

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
      scope: ["profile", "email"],
      response_type: "application/json",
    },
    function (accessToken, refreshToken, profile, cb) {
      cb(null, refreshToken);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// router
app.use("/auth", userRoute);
app.use("/user", userInfoRoute);
app.use("/category", CategoryRoute);
app.use("/even", evenementRoute);
app.use("/message", messageRoute);
app.listen(port, () => console.log("server is ready"));
