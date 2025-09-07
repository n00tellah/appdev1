
console.log(2 == "2")   // true  → only compares VALUE
console.log(2 === "2")  // false → compares VALUE + TYPE

let e = undefined
let f = null
console.log(e)
console.log(f)

// function hello () {
//     console.log(this)
// }

// console.log(hello(undefined)) // global object (window in browsers)

//  function hello () {
//     console.log()
// }
// console.log(hello()) // undefined

const hello = () => {
    console.log()
}
console.log(hello(null)) // undefined
