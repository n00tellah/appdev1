let hobbies = ["Glamming", "Cooking", "Accessorizing"];

hobbies.map(hobby => {
    console.log( hobby)
});


//destructuring
let student = {
    name: "Estela",
    age: 21
};
let { name, age } = student

console.log(name); // "Estela"
console.log(age);  // 21

//spread operator
let numbers = [1 ,2 ,3]
let anotherNumbers = [...numbers, 4, 5]

console.log(anotherNumbers)

