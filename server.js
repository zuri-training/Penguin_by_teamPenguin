require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const connectEnsureLogin = require('connect-ensure-login');
const { User } = require("./models/userModel");

const app = express();

app.set("view engine", "ejs");

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

// Get Category Model 
let Category = require('./models/category');

// Get all categories to pass to header.ejs
Category.find(function (err, categories) {
    if (err) {
        console.log(err);
    } else {
        app.locals.categories = categories;
    }
});


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

// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/google/",
//     userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     console.log(profile);
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));


// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/views/Home/home.html");
// });

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
  );

  app.get('/auth/google/secret',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get("/signup", (req, res) => {
  res.render("Sign-Up/SignUp", {error: " "});
});

app.get("/login", (req, res) => {
  res.render("Sign-in/SignIn", {error: " "});
});

app.get("/categories", (req, res) => {
  res.sendFile(__dirname + "/views/Category/Category.html");
});

// app.get("/products", (req, res) => {
//   res.sendFile(__dirname + "/views/product/product.html");
// });

// app.get("/search", (req, res) => {
//   res.sendFile(__dirname + "/views/search/search.html");
// });

app.post("/like",(req, res)=> {
  if (req.isAuthenticated()) {
    res.sendFile(__dirname + "/views/How-To/How-To.html");
  } else {
    res.redirect("/login");
  }
})
  
app.post("/signup", (req, res) => {
  const { name, email, pwd, rpwd } = req.body;
  if (name === "" || email === "" || pwd === "" || rpwd === "") {
    res.render("Sign-Up/SignUp", {error: "Empty Field(s)"});
  } else {
    User.findOne({email:email}, (err,result) => {
      if (result) {
       res.render("Sign-Up/SignUp", {error: "User Already Exist"});
      } else {      
        if (pwd === rpwd) {
          User.register( { username: email, fullName: name, email: email }, pwd );
          res.redirect("/login");
        } else {
         res.render("Sign-Up/SignUp", {error: "Password does not match"});
        }
      }
    })
  }
});

app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      console.log(err.message);
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (! user) {
      return res.render("Sign-in/SignIn", {error: "Email/Password not correct"});
    }
    req.login(user, function(err){
      if(err){
        console.log(err.message);
        return next(err);
      }
      return res.redirect("/");        
    });
  })(req, res, next);
});

//routes
const productRoutes = require("./routes/products");

//product routes
app.use("/", productRoutes);

app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
