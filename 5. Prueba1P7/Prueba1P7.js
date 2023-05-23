// IMPLEMENTE UNA FUNCIÓN EN JS QUE RECIBA UN ARREGLO DE NÚMEROS ENTEROS POSITIVOS Y RETORNA UN NUEVO ARREGLO PERO SÓLO CON LOS NÚMEROS QUE SON CUADRADOS PERFECTOS. EL ARREGLO DEBE ESTAR ORDENADO DE MENOR A MAYOR.

// FUNCIÓN DE VERIFICACIÓN DE NÚMEROS CUADRADOS PERFECTOS
function numerosCuadradosPerfectos(arreglo) {
  let arregloResultado = new Array();

  for (let i = 0; i < arreglo.length; i++) {
    let raizCuadrada = arreglo[i] ** (1 / 2);
    let raizCuadradaTexto = String(raizCuadrada);
    let esCuadradoPerfecto = true;

    for (let j = 0; j < raizCuadradaTexto.length; j++) {
      if (raizCuadradaTexto[j] === ".") {
        esCuadradoPerfecto = false;
        break;
      }
    }

    if (esCuadradoPerfecto) {
      arregloResultado[arregloResultado.length] = arreglo[i];
    }
  }

  console.log(
    arregloResultado.sort(function (a, b) {
      return a - b;
    })
  );
}

// EVALUACIÓN DE ARREGLO DE NÚMEROS
numerosCuadradosPerfectos([81, 4, 100, 5]);
