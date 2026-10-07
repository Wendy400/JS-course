//undefined is a datatype that represents the absence of a value or a variable that has not been assigned a value. 
// It is a primitive value in JavaScript and is often used to indicate that a variable has not been initialized or that a function does not return a value.
//......Common scenarios where undefined can occur include:
//   1. Variable is declared but not initialized;
 let user; 
 console.log(user)



 //   2. Missing object propertied or array elements
const item = { name : "Laptop"};
console.log(item.price)



//    3. Functions with no return value
function sayHello() {
    console.log( );
}
sayHello()



//   4 missing function arguments
function greet(name) {
    console.log ("hi" + name)
}
greet()

