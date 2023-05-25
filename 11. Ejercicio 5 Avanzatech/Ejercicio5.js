// DISEÑA UNA FUNCIÓN EN JS QUE RECIBA COMO PARÁMETRO UN NÚMERO ENTERO POSITIVO Y RETORNE UN ARREGLO CON LOS DÍGITOS DEL NÚMERO EN ORDEN INVERSO.

// FUNCIÓN IMPERATIVA
function sortedDigits1(positiveNumber) {
  let positiveNumberAsString = "" + positiveNumber;

  let sortedArrayOfDigits = new Array();

  for (let i = 0; i < positiveNumberAsString.length; i++) {
    sortedArrayOfDigits[i] =
      positiveNumberAsString[positiveNumberAsString.length - 1 - i] * 1;
  }

  console.log(sortedArrayOfDigits);
}

sortedDigits1(12345);

// FUNCIÓN DECLARATIVA
function sortedDigits2(positiveNumber) {
  console.log(
    String(positiveNumber)
      .split("")
      .reverse()
      .map(function (element) {
        return Number(element);
      })
  );
}

sortedDigits2(12345);
