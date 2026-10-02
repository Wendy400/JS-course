//objects are collection of unordered key value pair elements.
// collection of related properties and or methods.
//we cannot have two oblects with the same name , ie , const person and another object with name person.
//NB DONT OMIT COMMA AFTER ADDING A VALUE, IT WILL NOT RUN.


const person={
    firstName: "Wendy",
    lastName: "Wahome",
    age: 20,
    isStudent: true,
    gender: "female",
    sayHello: function(){console.log("Hi my name is Wendy")},
    favFood: function(){console.log("My favourite food is Chapati")},


}



// used arrow function to simplify the code

const person2={
    firstName: "Wesley",
    lastName: "Kirui",
    age: 30,
    isStudent: false,
    gender: "male",
    sayHello: () => console.log("Hi my name is Wesley"),
    favFood: () => console.log("My favourite food is Ugali"),


}

//this. KEYWORD
//It is used to reference to an object, a reference to an object where this is used.
//it cannot be used with arrow functions.
// we have concatenated to combine two elements in a function.
// the slash n, \n is for new line.
const person3={
    firstName: "Ann",
    lastName: "Wahome",
    age: 10,
    isStudent: true,
    gender: "female",
    sayHello: "Hello my name is Ann",
    favFood: "My favorite food is chicken",
    aboutAnn: function() {console.log ( `${this.sayHello}.\n ${this.favFood}`)}

}


const person4={
    firstName: "Joshua",
    lastName: "Tyrone",
    age: 8,
    isStudent: true,
    gender: "male",
    sayHello: "Hello my name is Joshua",
    favFood: "My favorite food is Pilau",
    aboutJoshua: function() {console.log ( `${this.sayHello}.\n ${this.favFood}`)}

}


 person. sayHello()
 person.favFood()
 person2. sayHello()
 person2.favFood()
 person3.aboutAnn()
 person4.aboutJoshua()
 
