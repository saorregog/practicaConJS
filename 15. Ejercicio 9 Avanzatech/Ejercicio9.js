// DISEÑA UNA FUNCIÓN EN JS QUE RECIBA COMO PARÁMETRO UN ENTERO POSITIVO "n" Y RETORNE UN ARREGLO CON LOS PRIMEROS "n" NÚMEROS IMPARES.

// VERSIÓN 1
function firstOddNumbers1(number) {
  let count = 0;
  let oddNumber = 1;
  let oddNumbersArray = new Array();

  while (count < number) {
    oddNumbersArray.push(oddNumber);
    oddNumber += 2;
    count += 1;
  }

  console.log(oddNumbersArray);
}

firstOddNumbers1(5);

//VERSIÓN 2
function firstOddNumbers2(number) {
  let oddNumbersArray = new Array();

  for (let i = 1; i <= number; i++) {
    oddNumbersArray.push(2 * i - 1);
  }

  console.log(oddNumbersArray);
}

firstOddNumbers2(5);
