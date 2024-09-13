/**3. Ejercicio: async/await con Manejo de Errores
Objetivo: Convierte las funciones de promesa del ejercicio anterior para usar async/await y añade manejo de errores.

Instrucciones:
Usa async/await para ejecutar las tres operaciones de manera secuencial.
Añade un bloque try/catch para manejar posibles errores.
*/
function operacion1() {
  return new Promise((responce, reject) => {
    setTimeout(() => {
      responce("opcion 1");
    });
  }, 1000);
}
function operacio2() {
  return new Promise((responce, reject) => {
    setTimeout(() => {
      const fallo = Math.random() > 0.5;
      if (fallo) {
        reject("Error");
      } else {
        responce("opcion 2");
      }
    });
  });
}
function operacion3() {
  return new Promise((responce, reject) => {
    setTimeout(() => {
      responce("opcion 3");
    }, 3000);
  });
}
async function operaciones() {
  try {
    const resultado = await Promise.all([
      operacion1(),
      operacio2(),
      operacion3(),
    ]);
    console.log("todas las operaciones han sido completadas");
  } catch (err) {
    console.error("error", err);
  }
}
operaciones();
