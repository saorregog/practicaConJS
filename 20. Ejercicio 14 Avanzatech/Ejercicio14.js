// DISEÑE UNA FUNCIÓN EN JS QUE RECIBA UN ARREGLO DE NÚMEROS ENTEROS Y RETORNE EL ARREGLO SIN LOS ELEMENTOS QUE SEAN MÚLTIPLOS DE 3, MANTENIENDO EL ORDEN ORIGINAL DE LOS DEMÁS ELEMENTOS.

function deleteMultiplesOf3(array) {
  console.log(
    array.filter(function (element) {
      return element % 3 !== 0 || element === 0;
    })
  );
}

deleteMultiplesOf3([10, 3, 4, -1, -2, 9, 0]);
