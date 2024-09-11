/*Ejercicio 2: Crea un objeto que represente un coche con propiedades como marca, modelo, y año.
Añade un método que muestre en consola la descripción del coche.*/

let auto = {
  marca: "fiat",
  modelo: "fire uno",
  año: 2013,
  especificaciones: function () {
    console.log(`marca:${this.marca}, modelo:${this.modelo}, año:${this.año}`);
  },
};
auto.especificaciones();
