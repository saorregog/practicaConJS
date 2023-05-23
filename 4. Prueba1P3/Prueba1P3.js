// DISEÑA UNA FUNCIÓN EN JS QUE RECIBE UNA CADENA DE TEXTO Y RETORNA COMO RESULTADO CUÁNTOS DÍGITOS HAY EN LA CADENA DE TEXTO.

// FUNCIÓN DE CONTEO DE DÍGITOS EN UNA CADENA DE TEXTO
function digitosEnCadena(string) {
  let conteoDigitos = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      continue;
    } else if (Number(string[i]) == string[i]) {
      conteoDigitos += 1;
    }
  }

  console.log(conteoDigitos);
}

// EVALUACIÓN DE CADENAS DE TEXTO
digitosEnCadena("una cadena sin dígitos");

digitosEnCadena("una c4d3na c0m0 5 dígitos distribuidos aleatoriamente");
