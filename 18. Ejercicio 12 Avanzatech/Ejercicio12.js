// DISEÑE UNA FUNCIÓN EN JS QUE RECIBA UN ARREGLO DE NÚMEROS ENTEROS POSITIVOS Y RETORNE UN NUEVO ARREGLO PERO SÓLO CON LOS NÚMEROS QUE SON MÚLTIPLOS DE 10. EL ARREGLO DEBE ESTAR ORDENADO DE MENOR A MAYOR.

// FUNCIÓN IMPERATIVA
function sortedMultiplesOf10_1(array) {
  let multiplesOf10Array = new Array();

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 10 === 0) {
      multiplesOf10Array[multiplesOf10Array.length] = array[i];
    }
  }

  for (let i = 0; i < multiplesOf10Array.length; i++) {
    for (let j = 0; j < multiplesOf10Array.length - 1; j++) {
      if (multiplesOf10Array[i] > multiplesOf10Array[i + 1]) {
        let greaterNumber = multiplesOf10Array[i];
        multiplesOf10Array[i] = multiplesOf10Array[i + 1];
        multiplesOf10Array[i + 1] = greaterNumber;
      }
    }
  }

  console.log(multiplesOf10Array);
}

sortedMultiplesOf10_1([100000, 1, 120, 12, 500]);

// FUNCIÓN DECLARATIVA
function sortedMultiplesOf10_2(array) {
  console.log(
    array
      .filter(function (element) {
        return element % 10 === 0;
      })
      .sort(function (a, b) {
        return a - b;
      })
  );
}

sortedMultiplesOf10_2([100000, 1, 120, 12, 500]);
