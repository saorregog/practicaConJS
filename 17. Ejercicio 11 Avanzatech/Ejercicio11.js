// DISEÑA UNA FUNCIÓN EN JS QUE IMPRIMA LAS PRIMERAS 10 FORMAS SIGUIENDO EL PATRÓN.

// VERSIÓN 1
function pattern1(number) {
  let space = " ";
  let star = "*";
  let count = 0;
  let oddNumber = -1;
  let oddNumbersArray = new Array();

  while (count < number) {
    oddNumber += 2;
    oddNumbersArray.push(oddNumber);
    count += 1;
  }

  let size = oddNumbersArray[oddNumbersArray.length - 1];

  while (count < size) {
    oddNumber -= 2;
    oddNumbersArray.push(oddNumber);
    count += 1;
  }

  console.log(oddNumbersArray);

  let limit = Math.floor(oddNumbersArray.length / 2);

  for (let i = 0; i < oddNumbersArray[limit]; i++) {
    console.log(
      `${space.repeat(
        (oddNumbersArray[limit] - oddNumbersArray[i]) / 2
      )}${star.repeat(oddNumbersArray[i])}${space.repeat(
        (oddNumbersArray[limit] - oddNumbersArray[i]) / 2
      )}`
    );
  }
}

pattern1(3);

// VERSIÓN 2
let space = " ";
let star = "*";

function pattern2(number) {
  for (let i = 1; i <= number; i++) {
    console.log(`${space.repeat(number - i)}${star.repeat(2 * i - 1)}`);
  }

  for (let i = number - 1; i >= 1; i--) {
    console.log(`${space.repeat(number - i)}${star.repeat(2 * i - 1)}`);
  }
}

pattern2(3);
