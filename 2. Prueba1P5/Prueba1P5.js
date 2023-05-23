// DISEÑA UNA FUNCIÓN EN JS QUE RECIBA UN ENTERO POSITIVO "n" E IMPRIMA LA FORMA PARA EL NÚMERO "n" SIGUIENDO EL PATRÓN DE FORMAS MOSTRADAS. EL RESULTADO DEBE RETORNARSE COMO UN ARREGLO DE CADENAS DE TEXTO. EL NÚMERO "n" SIEMPRE SERÁ POSITIVO.

// DEFINICIÓN DE VARIABLES
let asterisco = "*";
let q = "Q";

// FUNCIÓN DE FORMA PARA EL NÚMERO "n"
function forma(n) {
  let forma = new Array();

  if (n === 0) {
    forma.push(asterisco);
  } else {
    for (let i = 1; i <= n; i++) {
      forma[i] = asterisco + q.repeat(n) + asterisco;
    }

    forma.unshift(asterisco.repeat(n + 2));
    forma.push(asterisco.repeat(n + 2));
  }

  console.log(forma);
}

// IMPRESIÓN DE FORMA
forma(1);
