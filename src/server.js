const express = require("express");

const exphbs = require("express-handlebars");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.set("views", "views");

const users = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    email: "info2@coderhouse.com",
    telefono: "1234567890",
  },
  {
    nombre: "Maria",
    apellido: "Fernandez",
    edad: 35,
    email: "maria@coderhouse.com",
    telefono: "1234567890",
  },
  {
    nombre: "Pedro",
    apellido: "Guzman",
    edad: 40,
    email: "pedro@coderhouse.com",
    telefono: "1234567890",
  },
  {
    nombre: "Pablo",
    apellido: "Picapiedras",
    edad: 45,
    email: "pablo@coderhouse.com",
    telefono: "1234567890",
  },
  {
    nombre: "Ana",
    apellido: "Fernandez",
    edad: 50,
    email: "ana@coderhouse.com",
    telefono: "1234567890",
  },
];

// Filmina 17
app.get("/", (req, res) => {
  const random = Math.floor(Math.random() * users.length);
  res.render("datos", users[random]);
});

// Filmina 36
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  users.push(newUser);
  res.send("Usuario creado con éxito");
});

app.get("/list", (req, res) => {
  res.render("users", { users });
});

const port = 8080;

const server = app.listen(port, () => {
  console.log(`Servidor http escuchando en el puerto http://localhost:${port}`);
});

server.on("error", (error) => {
  console.log("Error en servidor", error);
});
