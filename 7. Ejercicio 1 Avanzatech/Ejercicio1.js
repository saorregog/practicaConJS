// DISEÑA UNA FUNCIÓN EN JS QUE RECIBE UNA CADENA DE TEXTO Y RETORNA COMO RESULTADO CUÁNTOS TOKENS HAY CONFORMADOS POR SÓLO DÍGITOS. UN TOKEN ES UNA SECUENCIA DE CARACTERES SIN ESPACIOS.

function tokensInString(string) {
  console.log(
    string.split(" ").filter(function (element) {
      return element == "0" || Boolean(Number(element));
    }).length
  );
}

tokensInString(
  "Una 234 c4d3na d3 3 palabras de sólo 0 dígitos distribuidos aleatoriamente"
);
