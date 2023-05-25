// DISEÑA UNA FUNCIÓN EN JS QUE RECIBA COMO PARÁMETRO UNA CADENA DE TEXTO Y RETORNE CUÁNTAS VECES APARECE LA LETRA "a" o "A" EN LA CADENA.

function countLetterA(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "A") {
      count += 1;
    }
  }

  console.log(count);
}

countLetterA("Algoritmos y programación");
