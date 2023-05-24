// DISEÑA UNA FUNCIÓN EN JS QUE RECIBA COMO PARÁMETRO UN ENTERO POSITIVO "n" Y RETORNE LA SUMA DE LOS PRIMEROS "n" NÚMEROS PARES.

function sumEvenNumbers(n) {
  let sum = 0;

  for (let i = 2; i <= n * 2; i += 2) {
    sum += i;
  }

  console.log(sum);
}

sumEvenNumbers(5);
