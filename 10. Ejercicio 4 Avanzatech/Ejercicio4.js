// DISEÑA UNA FUNCIÓN EN JS QUE RECIBA COMO PARÁMETRO UNA CADENA DE TEXTO Y RETORNE EL NÚMERO DE PALABRAS QUE TIENEN AL MENOS UN DÍGITO.

// VERSION IMPERATIVA DE LA FUNCIÓN
function wordsWithDigits(string) {
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
        }
      }
    }
  }

  console.log(numberOfWords);
}

wordsWithDigits("T3ngo 3 palabras con dígit0s");
