//lesson from bro code you tube
//Function is an block of code that can be reused.
//Simplify work by enhancing readability, reuse, easy debuging
// Declare once and used many times, you have to call or invoke the function.



function cars(){
    console.log("Toyota")

}
cars() // you can call the function as many times 
cars()
cars()
cars()


// parameters are placeholders for ourb code eg name , studId
// values passed when function is called are the arguments, eg wendy and 1234 to rep name and student ID
// Order of the arguments matter if i input 555, wendy , output will be your name is 5555 and student id is wendy, since thopse are the placeholders for those values.
//use backticks for concatination ie in the console log mssage not e that age and student id are joined together , quotes will not work
function studNames( name, studId){
    console.log(`Your name is: ${name} and your student ID is , ${studId}`)

}
studNames("Wendy",1234);
studNames("Simon",4322);
studNames("Angela",5544);



//Using return for functions
//here if you call the function add(2,3) nothing will be returned
// the code returns a value and stores it in result so before calling the add function declare another variable let result= add(2,3) then console log result 
function add(num1,num2){
    let result= num1 + num2
    return result;
}
let result= add(2,3)
console.log( result)


// 2nd way to write the code
function add(num3,num4){
    return num3 + num4
     
}
let output= add(2,3)
console.log( output)


//third way to write the code
function add(num4,num5){
    return num4 + num5
 
}

console.log( add(2,3))



//Using IF statement
function isEven(number){
    if (number %2===0){
         return true
    }
        
        else 
        {
            return false
        }
    
}
console.log(isEven(19))


//using tenary operator
//shorter way or the iseven code.
// if 2 is not equal to 0, the number will be odd. 
// can also be 2%===1, because we are sure modulus returns remainder ie 0 or 1
function isOdd(number){
    return number %2!==0 ? true : false
}
console.log(isOdd(10))


//using inbuilt method to chech email validity
//here both condition have hto be met for it to be true, if one condition is true and the other false , it autiomatically becomes false.
function isValidEmail(email){
     if(email.includes("@") && email.includes(".com")){
        return true
     }
     else{
        return false
     }
}
console.log(isValidEmail("wendy@gmail.com"))
console.log(isValidEmail("ann@gmail.co.ke"))
