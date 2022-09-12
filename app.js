//

const express = require("express");
const app = express();
const path = require("path");

//
app.use(express.static(path.join(__dirname, "./public")));

app.listen(3050, () => {
  console.log("Marcelo esta con nosotros 👻");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/cart.html"));
});
  
app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/product.html"));
  });


<<<<<<< HEAD
=======
app.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/product.html"));
});

//

//
>>>>>>> 48ac4dde298785a5932baff533aabb30cedabd41
