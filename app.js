//

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const session = require("express-session");
const cookieParser = require("cookie-parser");

//
const mainRoutes = require("./routes/main.js");
const userRoutes = require("./routes/user.js");
const productsRoutes = require("./routes/products.js");

// Routes API
const usersApiRoutes = require("./routes/api/usersRoutes.js");
const productsApiRoutes = require("./routes/api/productsRoutes.js")
const categorysApiRoutes = require('./routes/api/categorysRoutes')
const productsByCategory = require('./routes/api/productsByCategoryRoutes')

//  require global middlewares
const profileImageLocals = require("./middleware/profileImageLocals");

//

// view engine

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "./public")));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cookieParser());

app.use(
  session({
    secret: "dia 153 marcelo todavia no aparece",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(profileImageLocals);

//

app.use("/", mainRoutes);

app.use("/products", productsRoutes);

app.use("/user", userRoutes);


// Rutas API

app.use("/api/users", usersApiRoutes);
app.use("/api/products", productsApiRoutes);
app.use('/api/categorys', categorysApiRoutes)
app.use('/api/pxc', productsByCategory)

app.use(function (req, res) {
  res.status(404).render("404");
});

app.listen(3050, () => {
  console.log(`
  Marcelo esta con nosotros 👻 3050
  http://localhost:3050`);
});