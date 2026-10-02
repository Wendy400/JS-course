const fruits =[ {name: "Oranges", color:"orange", kgs: 4},
                {name: "bananas", color:"yellow", kgs: 6},
                {name: "kiwis", color:"green", kgs: 3},
                {name: "watermelons", color:"red", kgs: 11},
                {name: "passion", color:"yellow", kgs: 9}
 ]
 console.log(fruits[3].name ,fruits[3] .kgs)
 console.log(`The total weight of ${fruits[1].name} is: ${fruits[1].kgs} kilograms.\n Children like ${fruits[0].name}` )

 //adding elements to the array
 fruits.push({name: "pineapples", color:"yellow", kgs: 15})
 console.log(fruits)



 //foreach method
//here we introduce a callback function to loop through each item in the array
 fruits.forEach(fruit=> console.log(fruit.name))

 
 // map method 
 const fruitColors= fruits.map(fruit=> fruit.color)
 console.log(fruitColors)

 //filter method

 const yellowFruits= fruits.filter(fruit=> fruit.color === "yellow")
 console.log(yellowFruits)


 //reduce method
 //The method checks every item 1 by 1, it starts with oranges and sees it has 4 kgs, then that for now is the max weight, 
 // then it picks the second item which is bananas and it has 6kgs and it sees bananas has more weight so it drops oranges which were the heaviest and records bananas which are heavier.
 //it goes to the next object until it finds the heaviest, ie , it reduces all elements till the max weight is met,
 //so the code is sayinmg i have a fruit of x kgs , then another of y kgs, which one is heavier? after going through all fruits print the heaviest, max kgs
 const maxFruit= fruits.reduce((max,fruit) =>fruit.kgs > max.kgs ? fruit:max)
 console.log(maxFruit)

 