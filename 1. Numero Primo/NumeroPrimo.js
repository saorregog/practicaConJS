// VERIFICAR SI EL NÚMERO INGRESADO ES PRIMO

// FUNCIÓN DE VERIFICACIÓN DE NÚMERO PRIMO
function esNumeroPrimo(numeroIngresado) {
  let esPrimo = true;

  // COMO LOS NÚMEROS PRIMOS SON DIVISIBLES ENTRE 1 Y EL MISMO NÚMERO, LA VERIFICACIÓN SE REALIZA ENTRE 2 Y LA RAÍZ CUADRADA ENTERA INMEDIATAMENTE MENOR A LA RAÍZ CUADRADA EXACTA DEL NÚMERO INGRESADO
  for (let i = 2; i <= Math.floor(numeroIngresado ** (1 / 2)); i++) {
    if (numeroIngresado % i === 0) {
      esPrimo = false;
      console.log("El número ingresado NO ES primo");
      break;
    }
  }

  if (esPrimo) {
    console.log("El número ingresado ES primo");
  }
}

// VERIFICACIÓN DE NÚMERO PRIMO
esNumeroPrimo(97);
