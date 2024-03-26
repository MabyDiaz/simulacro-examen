/* Ejercicio: Crear una función que reciba como parámetro una nota y retorne una de 
estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

Nota es menor a 4 - LIBRE
Nota es menor a 7 y no es LIBRE - REGULAR 
Nota mayor que 6  - PROMOCIONADO. */

function calcularEstado(nota) {
  if (nota >= 4 && nota < 7) {
    return "REGULAR";
  } else if (nota > 6) {
    return "PROMOCIONADO";
  } else {
    return "LIBRE";
  }
}

let estado = calcularEstado(7);
console.log(estado);
