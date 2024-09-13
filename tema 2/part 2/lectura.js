const fs = require("node:fs");

fs.readFile("./archivos_texto/arch1.txt", "utf8", (err, data) => {
  if (err) {
    console.error(`Error al abrir el archivo:${err} `);
    return;
  }
  console.log(`Contenido del archivo:${data}`);
});

const contenido = "...";
fs.writeFile("./archivos_texto/arch1.txt", contenido, (err) => {
  if (err) {
    console.error(`"Error al escribir el archivo: ${err}"`);
    return;
  }
  console.log("archivo escrito correctamente");
});
