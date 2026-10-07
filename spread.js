//spread -allows an iterable such as an array to be expanded into separate elements.
//       -it unpacks the elements or unpacks them.

const numbers = [1,2,3,4,5,6,7,8,9];

let maximum= Math.max(...numbers)
let average = numbers.reduce((sum,num) => sum+ num,0) / numbers.length

console.log(average)



// using for each to calculate average 
const numbers2 = [1,2,3,4,5,6,7,8,9];
let sum = 0;

for(const num of numbers2){
    sum += num;
}
const average2 = sum / numbers2.length;
console.log (average2)



//creating a shallow copy 
let movies= ["spiderman","cinderella", "scooby doo", "boss baby"]
 let newMovies= [...movies]

 console.log(newMovies)


 //...............canvas example.........

 // Existing product lists
const featuredProducts = ["Laptop", "Headphones", "Smartwatch"];
const newArrivals = ["4K Monitor", "Gaming Mouse"];
const onSaleProducts = ["Tablet", "Wireless Keyboard"];

// Promotional item to be added to the catalog
const promotionalItem = "Gift Card";

// Creating a new weekly catalog by combining lists and adding the promotional item
const weeklyCatalog = [promotionalItem, ...featuredProducts, ...newArrivals, ...onSaleProducts];

console.log(weeklyCatalog);
// Output: ["Gift Card", "Laptop", "Headphones", "Smartwatch", "4K Monitor", "Gaming Mouse", "Tablet", "Wireless Keyboaard"]





