//

const express = require("express");
const app = express();
const path = require("path");

//
const mainRoutes = require("./routes/main.js");

//
app.use(express.static(path.join(__dirname, "./public")));
app.set("view engine", "ejs");

//

app.use("/", mainRoutes);

app.listen(3050, () => {
  console.log("Marcelo esta con nosotros 👻 3050 ");
});

//

//

//

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/cart.html"));
});

app.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/product.html"));
});
