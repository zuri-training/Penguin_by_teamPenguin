require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const connectEnsureLogin = require('connect-ensure-login');
const { User } = require("./models/userModel");

const app = express();

app.use(
  session({
    secret: "This is a secret.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, (err, user) => {
    done(err,user);
  })
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/" || "/home", (req, res) => {
  if (req.isAuthenticated()) {
    res.sendFile(__dirname + "/views/Home/home.html");
  } else {
    res.redirect("/login");
  }
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
  );

  app.get('/auth/google/', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/views/Sign-Up/SignUp.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/views/Sign-in/SignIn.html");
});

app.get("/categories", (req, res) => {
  res.sendFile(__dirname + "/views/Category/Category.html");
});

app.get("/products", (req, res) => {
  res.sendFile(__dirname + "/views/product/product.html");
});

app.get("/search", (req, res) => {
  res.sendFile(__dirname + "/views/search/search.html");
});
  
app.post("/signup", (req, res) => {
  const { name, email, pwd, rpwd } = req.body;
  if (name === "" || email === "" || pwd === "" || rpwd === "") {
    return res.status(200).json({ message: "empty Fields" });
  } else {
    User.findOne({email:email}, (err,result) => {
      if (result) {
        return res.status(200).json({ message: "User Exist" });
      } else {      
        if (pwd === rpwd) {
          User.register( { username: email, fullName: name, email: email }, pwd );
          res.redirect("/login");
        } else {
          return res.status(201).json({ message: "Password does not match" });
        }
      }
    })
  }
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
