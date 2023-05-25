// DISEÑA UNA FUNCIÓN EN JS QUE RECIBA COMO PARÁMETRO UNA CADENA DE TEXTO Y RETORNE EL NÚMERO DE PALABRAS QUE TIENEN AL MENOS UN DÍGITO.

// VERSIÓN IMPERATIVA DE LA FUNCIÓN
function wordsWithDigits1(string) {
  let numberOfWords = 0;
  let hasDigits = false;

  for (let i = 0; i < string.length; i++) {
    if (i === string.length - 1 || string[i] === " ") {
      if (hasDigits) {
        numberOfWords += 1;
        hasDigits = false;
      }
    } else {
      for (let j = 0; j <= 9; j++) {
        if (string[i] == j) {
          hasDigits = true;
          break;
        }
      }
    }
  }

  console.log(numberOfWords);
}

wordsWithDigits1("T3ngo 4 palabras c0n dígit0s");

// VERSIÓN DECLARATIVA DE LA FUNCIÓN
function wordsWithDigits2(string) {
  console.log(
    string.split(" ").filter(function (element) {
      for (let i = 0; i <= element.length; i++) {
        if (element[i] == 0 || Boolean(Number(element[i]))) {
          return element;
        }
      }
    }).length
  );
}

wordsWithDigits2("T3ngo 4 palabras c0n dígit0s");
