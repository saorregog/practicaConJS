function productFib(prod) {
  let lastFib = 0;
  let fib = 1;
  let newFib = new Number();

  let fibProduct = 0;

  while (fibProduct < prod) {
    newFib = fib + lastFib;
    lastFib = fib;
    fib = newFib;

    fibProduct = fib * lastFib;
  }

  if (fibProduct === prod) {
    console.log([lastFib, fib, true]);
  } else {
    console.log([lastFib, fib, false]);
  }
}

productFib(4895);
