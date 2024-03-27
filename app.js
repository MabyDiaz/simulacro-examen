/* Ejercicio: Crear una función que reciba como parámetro una nota y retorne una de 
estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

Nota es menor a 4 - LIBRE
Nota es menor a 7 y no es LIBRE - REGULAR 
Nota mayor que 6  - PROMOCIONADO. 

- Mejorar el ejercicio anterior agregando un return de mensaje de error si la nota es menor que 1 o mayor que 10.

- Mejorar el ejercicio anterior, recibiendo ahora 3 notas 
por parámetro, calcular el promedio y en base a este retornar el estado 
del alumno.
*/

function calcularEstado(nota1, nota2, nota3) {
  if (
    nota1 < 1 ||
    nota1 > 10 ||
    nota2 < 1 ||
    nota2 > 10 ||
    nota3 < 1 ||
    nota3 > 10
  ) {
    return "Nota inválida. Ingrese una nota válida (>= 1 - <= 10)";
  }

  let suma = nota1 + nota2 + nota3;
  let promedio = suma / 3;

  if (promedio < 4) {
    return "LIBRE";
  } else if (promedio < 7) {
    return "REGULAR";
  } else {
    return "PROMOCIONADO";
  }
}

let estado = calcularEstado(9, 9, 9);
console.log(estado);
