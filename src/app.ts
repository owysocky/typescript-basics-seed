function multiply(a: any, b = 25) {
  return a * b;
}
console.log(multiply(10));
console.log(multiply(10, 10));

// const pizzas = [{ name: "Cheese", toppings: ["cheese"] }];

// const mappedPizzas = pizzas.map(function(pizza) {
//   return pizza.name;
// });

// const mappedPizzas2 = pizzas.map(pizza => pizza.name);

// const pizza = {
//   name: "This NAME",
//   getName: function() {
//     setTimeout(() => {
//       console.log(this.name);
//     }, 100);
//   }
// };

// console.log(mappedPizzas);
