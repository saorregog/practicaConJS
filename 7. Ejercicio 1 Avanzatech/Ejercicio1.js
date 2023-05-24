// DISEÑA UNA FUNCIÓN EN JS QUE RECIBE UNA CADENA DE TEXTO Y RETORNA COMO RESULTADO CUÁNTOS TOKENS HAY CONFORMADOS POR SÓLO DÍGITOS. UN TOKEN ES UNA SECUENCIA DE CARACTERES SIN ESPACIOS.

// FUNCIÓN SIN USO DE TRIM()
function tokensInString1(string) {
  console.log(
    string.split(" ").filter(function (element) {
      return (
        (element != "" && Number(element) == "0") || Boolean(Number(element))
      );
    }).length
  );
}

tokensInString1(
  " Una 234 c4d3na d3 3 palabras de sólo 000 dígitos distribuidos aleatoriamente "
);

// FUNCIÓN CON USO DE TRIM
function tokensInString2(string) {
  console.log(
    string
      .trim()
      .split(" ")
      .filter(function (element) {
        return Number(element) == "0" || Boolean(Number(element));
      }).length
  );
}

tokensInString2(
  " Una 234 c4d3na d3 3 palabras de sólo 000 dígitos distribuidos aleatoriamente "
);
