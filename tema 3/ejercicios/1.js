/* Crea tres funciones: operacion1, operacion2, y operacion3, que usen setTimeout para simular una operación asíncrona.
Cada función debe recibir un callback y ejecutarse en secuencia: operacion1 tarda 1 segundo, 
operacion2 2 segundos, y operacion3 3 segundos.*/

function operacion1(callback) {
  setTimeout(() => {
    console.log("operacion 1");
    callback();
  }, 1000);
}
function operacio2(callback) {
  setTimeout(() => {
    console.log("operacion 2");
    callback();
  }, 2000);
}
function operacion3(callback) {
  setTimeout(() => {
    console.log("operacion 3");
    callback();
  }, 3000);
}
operacion1(() => {
  operacio2(() => {
    operacion3(() => {
      console.log("Todas las operaciones has sido completadasr");
    });
  });
});
