// Import the default export (greet function)
import greet from "./15_modules_export.js";

// Import the named export (myInfo object)
import { myInfo } from "./15_modules_export.js";

console.log(greet());      // "Hello, Estela!"
console.log(myInfo.name);  // "Estela"
console.log(myInfo.age);   // 21
