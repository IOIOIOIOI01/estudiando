/*Extiende el servidor HTTP que creamos en el Día 1 para manejar dos rutas diferentes:

Ruta raíz (/): Devuelve el mensaje "¡Bienvenido a la página principal!".
Ruta /about: Devuelve el mensaje "Esta es la página sobre nosotros".
Cualquier otra ruta: Devuelve el mensaje "Página no encontrada" con el código 404.*/

const http = require("node:http");

const port = 3000;
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  if (req.url === "/") {
    res.end('"¡Bienvenido a la página principal!".');
  } else if (req.url === "/about") {
    res.end('"Esta es la página sobre nosotros".');
  } else {
    res.statusCode = 404;
    res.end("Página no encontrada");
  }
});
server.listen(port, () => {
  console.log(`server listenig on port: http://localhost:${port}`);
});
