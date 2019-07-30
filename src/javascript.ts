// TO RUN $tsc, $node dist/javascript.js
//____________________________Destructuring____________________________________________________

// const toppings = ["pepperoni", "bacon", "chilli"];

// const [first, second, third] = toppings;

// function logToppings([first, second, third]: any) {
//   console.log(first, second, third);
// }

// logToppings(toppings);

//____________________________Spread operator____________________________________________________

const toppings = ["a", "b"];
const newtoppings = ["b", "c"];
const alltoppings = [...toppings, ...newtoppings];
console.log(alltoppings);

//____________________________Rest params____________________________________________________

// function sumAll(...all: any) {
//   return all.reduce((prev: any, next: any) => prev + next);
// }
// console.log(sumAll(1, 2, 3, 4, 5));

// function sumAll2(text: any, ...all: any) {
//   return text;
// }
// console.log(sumAll("Hello", 1, 2, 3, 4, 5));

//____________________________Obj____________________________________________________________

// const pizzas = [{ name: "Cheese", price: 10 }];
// const toppings = ["cheese"];
// const order = { pizzas, toppings };
// console.log(order);

//____________________________Default params__________________________________________________

// function multiply(a: any, b = 25) {
//   return a * b;
// }
// console.log(multiply(10));
// console.log(multiply(10, 10));

//____________________________Arrow functions__________________________________________________

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
