// DISEÑE UNA FUNCIÓN EN JS QUE RECIBE UNA CADENA DE TEXTO Y RETORNA LA SUMA DE LOS NÚMEROS QUE APARECEN ESCRITOS EN TEXTO. ASUMA QUE LOS NÚMEROS A SUMAR SERÁN SÓLO DEL 1 AL 9 E IRÁN ESCRITOS SIEMPRE EN MINÚSCULA, SEPARADOS DE OTRAS PALABRAS.

// FUNCIÓN DE SUMA DE NÚMEROS ESCRITOS EN TEXTO
function sumaNumerosEnTexto(string) {
  let arregloString = string.split(" ");

  let diccionario = {
    cero: 0,
    uno: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9,
  };

  let resultado = new Array();

  arregloString.forEach(function (e) {
    if (diccionario[e]) {
      return resultado.push(diccionario[e]);
    }
  });

  console.log(
    resultado.reduce(function (a, e) {
      return a + e;
    })
  );
}

// EVALUACIÓN DE CADENAS DE TEXTO
sumaNumerosEnTexto("uno dos cero ocho hola como estás");
