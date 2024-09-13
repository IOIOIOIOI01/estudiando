/*async/await: Convierte una función de promesa en una 
función que use async/await y maneje posibles errores. */

async function devolver_promesa() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("operacion completa");
    }, 2000);
  });
  try {
    const promesa = await promise;
    console.log("promesa completa:", promesa);
  } catch (err) {
    console.log("error:", err);
  }
}
devolver_promesa();
