/*Callback básico: Usa setTimeout para simular una operación a
síncrona de 3 segundos y luego imprime un mensaje en la consola.*/

console.log("primera Línea");

setTimeout(() => {
  console.log("tercera  lïnea");
}, 3000);

console.log("segunda línea");
