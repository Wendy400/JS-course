// scope is accessibility and visibility of variables/funcctions within a program.
//here you can have variables with the same name as long as they are declared in diferren scopes. 
// here num1 and num2 are stored in x but the scopes are different.
// num1 and num2 are invoked in the global scope, while x is in the local scope of each function.

//LOCAL VARIABLE
num1() , num2()
function num1(){
    let x= 10
    console.log(x)  
}

function num2(){
    let x= 100
    console.log(x)  
}


//Functions cannot see inside other functions, but they can see outside of other functions.
//an example is when you have two houses, A and B , a person houseA cannot see what is going on in houseB
// but people in house A and B can see a car passing outside their houses. 
// The car is in the global scope, while the houses are in the local scope of each function.

//here we get a reference error because function num1 doesnt know what is going on in function num2 
// hence cannot output the values that are interchanged ie y is in num2 and x is in num1.
//
/*num1() , num2()
function num1(){
    let Y= 10
    console.log(x)  
}

function num2(){
    let x= 100
    console.log(Y)  
}*/


//Global variable
//Declared outside the scope, scope is inside the curly braces.
// here number1 and number2 can access the variable a because it is declared outside the scope.

let a = 6;
number1(), number2()
function number1(){
    console.log(a)  
}

function number2(){
    console.log(a)  
}



// two variables same name, different scope
//output is the value inside the local scope is 40 and 30.
//local scope has priority over the global scope. 
let b = 6;
number1(), number2()
function number1(){
    let b =40
    console.log(b)  
}

function number2(){
    let b=30
    console.log(b)  
}