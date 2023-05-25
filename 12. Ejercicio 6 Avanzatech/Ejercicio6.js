// EJERCICIO 5 PERO ASUMIENDO QUE EL NÚMERO PUEDE SER NEGATIVO.

// FUNCIÓN IMPERATIVA
function sortedDigits1(number) {
  let numberAsString = "" + number;

  let sortedArrayOfDigits = new Array();

  for (let i = 0; i < numberAsString.length; i++) {
    if (numberAsString[numberAsString.length - 1 - i] !== "-") {
      sortedArrayOfDigits[i] =
        numberAsString[numberAsString.length - 1 - i] * 1;
    }
  }

  console.log(sortedArrayOfDigits);
}

sortedDigits1(-12345);

// FUNCIÓN DECLARATIVA
function sortedDigits2(number) {
  console.log(
    String(number)
      .split("")
      .reverse()
      .filter(function (element) {
        return element !== "-";
      })
      .map(function (element) {
        return Number(element);
      })
  );
}

sortedDigits2(-12345);
