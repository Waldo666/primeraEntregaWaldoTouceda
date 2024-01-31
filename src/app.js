const express = require("express");
const app = express();
const PUERTO = 8080;
const productsRouter = require("./routes/products.router");
const cartsRouter = require("./routes/carts.router");


app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use("/api/products", productsRouter);

app.use("/api/carts", cartsRouter);

// Importar el módulo express-handlebars
const expressHbs = require("express-handlebars");

// Usar expressHbs.engine() para registrar Handlebars como el motor de vistas
app.engine("handlebars", expressHbs.engine());

app.set("view engine", "handlebars");

app.set("views", "./src/views");

app.get("/", (req, res) => {
const usuario = {
  nombre: "Waldo",
  apellido: "MACHO"
}
  res.render("index", {titulo: "hola!", usuario});
})

app.listen(PUERTO, () => {
  console.log(`Escuchando en el :${PUERTO}`);
});
