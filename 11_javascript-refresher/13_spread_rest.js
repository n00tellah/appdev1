const numbers = [1, 2, 3];

const person = { name: "Estela", age: 21 };

const newNumbers = [...numbers, 4, 5];
const newPerson = { ...person, city: "Apalit" };

console.log(newNumbers);
console.log(newPerson);


const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};
