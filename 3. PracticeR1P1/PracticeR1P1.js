// DISEÑA UNA FUNCIÓN EN JS QUE RECIBA COMO PARÁMETRO UN PAR DE NÚMEROS ENTEROS "a" Y "b" POSITIVOS EN UN ARREGLO Y RETORNA COMO RESULTADO LA SUMA DE NÚMEROS QUE SON MÚLTIPLOS DE 5 O 7, Y ESTÁN EN EL INTERVALO [a,b] SIENDO "a" MENOR QUE "b".

// FUNCIÓN DE SUMA DE MÚLTIPLOS DE 5 O 7 EN EL ARREGLO [a, b]
function sumaDeMultiplos(arreglo) {
  let sumaMultiplos = 0;

  for (let i = arreglo[0]; i <= arreglo[1]; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      sumaMultiplos += i;
    }
  }

  console.log(sumaMultiplos);
}

// EVALUACIÓN DE ARREGLOS
sumaDeMultiplos([5, 10]);
