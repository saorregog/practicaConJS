// DISEÑE UNA FUNCIÓN EN JS QUE RECIBA UN NÚMERO ENTERO POSITIVO "n" Y RETORNE UN ARREGLO CON LOS "n" PRIMEROS NÚMEROS QUE SON POTENCIAS DE 2.

function nthPowerOf2(n) {
  let powerOf2Array = new Array();

  for (let i = 0; i < n; i++) {
    powerOf2Array[powerOf2Array.length] = 2 ** i;
  }

  console.log(powerOf2Array);
}

nthPowerOf2(5);
