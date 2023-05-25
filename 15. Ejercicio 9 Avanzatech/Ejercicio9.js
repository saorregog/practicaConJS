// DISEÑA UNA FUNCIÓN EN JS QUE RECIBA COMO PARÁMETRO UN ENTERO POSITIVO "n" Y RETORNE UN ARREGLO CON LOS PRIMEROS "n" NÚMEROS IMPARES.

function firstOddNumbers(number) {
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

firstOddNumbers(5);
