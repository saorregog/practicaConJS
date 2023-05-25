// EJERCICIO 7 PERO RECIBIENDO LETRA A DETECTAR COMO ARGUMENTO DE FUNCIÓN.

function countLetter(string, letter) {
  let count = 0;

  let upperCaseString = string.toUpperCase();
  let upperCaseLetter = letter.toUpperCase();

  for (let i = 0; i < upperCaseString.length; i++) {
    if (upperCaseString[i] === upperCaseLetter) {
      count += 1;
    }
  }

  console.log(count);
}

countLetter("Algoritmos y programación", "A");
