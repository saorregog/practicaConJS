// DISEÑE UNA FUNCION EN JS QUE RECIBA UN NUMERO ENTERO POSITIVO "n" Y RETORNE UN ARREGLO CON LOS "n" PRIMEROS NUMEROS QUE SON POTENCIAS DE 2.

function nthPowerOf2(n) {
  let powerOf2Array = new Array();

  for (let i = 0; i < n; i++) {
    powerOf2Array[powerOf2Array.length] = 2 ** i;
  }

  console.log(powerOf2Array);
}

nthPowerOf2(5);
