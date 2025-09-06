function greet(name) {
  return "Hello, " + name + "!"
}

console.log(greet("Estela")) // Hello, Estela!

// square = (num) => {
//     return num * num
// };
// console.log(square(5)) // 25

square = (num) => num * num

console.log(square(7))

function calculator(a, b) {
    return {
        sum: a + b,
        product: a * b
    };
}

console.log(calculator(4, 5)) // { sum: 9, product: 20 }


