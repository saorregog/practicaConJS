// DISEÑA UNA FUNCIÓN EN JS QUE RECIBA COMO PARÁMETRO UN ENTERO POSITIVO "n" Y RETORNE LA SUMA DE LOS PRIMEROS "n" NÚMEROS PARES.

// VERSIÓN 1
function sumEvenNumbers1(n) {
  let sum = 0;

  for (let i = 2; i <= n * 2; i += 2) {
    sum += i;
  }

  console.log(sum);
}

sumEvenNumbers1(5);

// VERSIÓN 2
function sumEvenNumbers2(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += 2 * i;
  }

  console.log(sum);
}

sumEvenNumbers2(5);
