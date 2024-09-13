/*Crea un archivo mensaje.txt que contenga algún texto.
Usa el módulo fs para leer el contenido del archivo y enviarlo en la 
respuesta del servidor cuando un usuario acceda a la ruta /mensaje.*/

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf8");
  if (req.url === "/") {
    res.end("¡Bienvenido a la página principal!");
  } else if (req.url === "/about") {
    res.end("Esta es la página sobre nosotros");
  } else if (req.url === "/mensaje") {
    const road = path.join(__dirname, "./archivos_texto/mensaje.txt");
    fs.readFile(road, "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("Error en el servidor");
        return;
      }
      res.setHeader("Content-Type", "text/plain; charset=utf8");
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end("Página no encontrada");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`server listenig on port http://localhost:${port}`);
});
