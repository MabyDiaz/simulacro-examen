/* Ejercicio: Crear una función que reciba como parámetro una nota y retorne una de 
estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

Nota es menor a 4 - LIBRE
Nota es menor a 7 y no es LIBRE - REGULAR 
Nota mayor que 6  - PROMOCIONADO. 

* Mejorar el ejercicio anterior agregando un return de mensaje de error si la nota es menor que 1 o mayor que 10.
*/

function calcularEstado(nota) {
  if (nota < 4 && nota >= 1) {
    return "LIBRE";
  } else if (nota < 7 && nota >= 4) {
    return "REGULAR";
  } else if (nota > 6 && nota <= 10) {
    return "PROMOCIONADO";
  } else {
    return "Nota no válida. Ingrese un número válido para la nota";
  }
}

let estado = calcularEstado();
console.log(estado);
