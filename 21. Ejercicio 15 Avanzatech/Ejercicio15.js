// DISEÑE UNA FUNCIÓN EN JS QUE RECIBA UN ARREGLO DE NÚMEROS ENTEROS Y RETORNE EL PRODUCTO DE TODOS LOS ELEMENTOS QUE SEAN MAYORES A 10.

function productGreaterThan10(array) {
  console.log(
    array
      .filter(function (element) {
        return element > 10;
      })
      .reduce(function (accumulator, element) {
        return accumulator * element;
      })
  );
}

productGreaterThan10([10, 3, 12, -1, -2, 9, 0]);
