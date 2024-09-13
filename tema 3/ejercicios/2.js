/*2. Ejercicio: Convierte Callbacks a Promesas
Objetivo: Refactoriza el ejercicio anterior para usar promesas en lugar de callbacks.

Instrucciones:
Convierte operacion1, operacion2 y operacion3 para que devuelvan una promesa en lugar de usar un callback.
Encadena las promesas para que las operaciones se ejecuten una después de la otra.
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
      responce("opcion 2");
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
operacion1()
  .then(() => operacio2())
  .then(() => operacion3())
  .then(() => {
    console.log("todas las opciones funcionan correctamente");
  });
//
//
