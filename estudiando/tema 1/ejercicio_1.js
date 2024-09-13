//Ejercicio 1: Escribe una función que reciba un array de números y devuelva un nuevo array con cada número multiplicado por 2.

function numero_duplicado(arry) {
  return arry.map((num) => num * 2);
}
const arry = [12, 3, 42, 43, 23, 32];
console.log(numero_duplicado(arry));
