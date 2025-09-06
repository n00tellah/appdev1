console.log(2 == 2)//true
console.log(2 === "2")//false

const name = {
    name:"Estela",

    regularFunction: function() {
        console.log("This is a regular function: " + this.name)
    },
    arrowFunction: () => {
        console.log("This is an arrow function: " + this.name)
    }
}