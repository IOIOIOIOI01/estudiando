/*Promesas: Crea una función que retorne una promesa, la cual se resuelve 
después de 2 segundos con un valor de "Operación completada". */

function devolver_promesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("operacion completa");
    }, 2000);
  });
}
devolver_promesa().then((resultado) => {
  console.log(resultado);
});
