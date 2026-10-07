//Rest syntax collects, packs multiple values into a single array
// uses three dots similar to spread syntax.


function bookStore(...books){
 //console.log(books)
}

const book1 = "Laws of power"
const book2 = "Diary of a wimpy kid"
const book3 = "Pychology of Money"
const book4 = "Scooby doo adventures"
const book5 = "The river and the source"
const book6 = "Nice girls dont get corner office"

bookStore(book1,book2,book3,book4,book5,book6)


//use case b
const rawFood = [ "rice", "flour", "tomatoes", "eggs", "onions"]
const cookedFood= [" pilau", "ugali", "chapati", "beef"]

const food = [...rawFood, ...cookedFood]
console.log(food)
console.log(...food)// spread syntax unpacks, spreads an array into individual elements



//......canvas example

// Function to calculate the average score
function calculateAverage(...scores) {
  // If no scores are provided, return 0 to avoid division by zero
  if (scores.length === 0) return 0;

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// Example usage with varying numbers of feedback scores
console.log(calculateAverage(4, 5, 3)); // Output: 4 (average of 4, 5, 3)
console.log(calculateAverage(5, 5, 5, 4)); // Output: 4.75 (average of 5, 5, 5, 4)
console.log(calculateAverage()); // Output: 0 (no scores provided)