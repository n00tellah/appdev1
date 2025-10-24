const aboutMe = {
    name: "Estela",
    age: 21,
    course: "BSIS3",
    introduce: function() {
        return "Hi, my name is " + this.name + " and I am " + this.age + " years old.";
    },
};
aboutMe.hobbies = ["Glamming", "Cooking", "Accessorizing"];

console.log(aboutMe.introduce());
console.log("My hobbies are:", aboutMe.hobbies.join(", "));