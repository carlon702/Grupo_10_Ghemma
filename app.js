//

const express = require("express");
const app = express();
const path = require("path");

//
const mainRoutes = require("./routes/main.js");
const userRoutes = require("./routes/user.js");
const productsRoutes = require('./routes/products.js');

//
app.use(express.static(path.join(__dirname, "./public")));
app.set("view engine", "ejs");

//

app.use("/", mainRoutes);

app.use('/products', productsRoutes);

app.listen(3050, () => {
  console.log("Marcelo esta con nosotros 👻 3050 ");
});

//

//

//

app.get("/login", userRoutes);


app.get("/register", userRoutes);

