// DISEÑA UNA FUNCIÓN EN JS QUE RECIBA COMO PARÁMETRO UN NÚMERO ENTERO POSITIVO Y RETORNE EL PRIMER NÚMERO DE LA SECUENCIA DE FIBONACCI QUE ES ESTRICTAMENTE MAYOR QUE ÉL. RECUERDA QUE LA SUCESIÓN DE FIBONACCI ES LA SECUENCIA DE NÚMEROS DONDE CADA TÉRMINO ES LA SUMA DE LOS DOS ANTERIORES Y EMPIEZA CON LOS NÚMEROS 0 Y 1. LA SECUENCIA ES 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

function fibonacciGreaterThan(n) {
  let newFibonacci = 0;
  let fibonacci = 1;
  let lastFibonacci = 0;

  while (newFibonacci <= n) {
    newFibonacci = fibonacci + lastFibonacci;

    lastFibonacci = fibonacci;

    fibonacci = newFibonacci;
  }

  console.log(newFibonacci);
}

fibonacciGreaterThan(34);
