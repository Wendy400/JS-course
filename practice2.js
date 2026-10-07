//the const examples basically, creates a container with the words we will use to test the program.

// const titlesInTitleCase creates a basket where the newly capitalized titles will be saved.
//for...of creates a conveyer belt, ie loop, ie it tells the computer to look at the original list and go through it one by one.

//     .split() chops the words to individual characters.
//     .map() goes through each split word, grabs the very first leter makes it capital then rejoins the word,ie learning becomes Learning
//    . join() glues the newly capitalized words together ie, Learning Javascript

//the result is then saced in the container that was created titlesInTitleCase.




/*const examples = ["learning javascript","web development" ]
    const titlesInTitleCase = [];
for (const title of tutorials) {
  const titleCased = title
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  titlesInTitleCase.push(titleCased);

}



console.log(titlesInTitleCase)*/


//using map() recommended
//eliminates the need for manual looping. the recommended way to manipulate data without affecting the original data. 
// it creates a new array with the manipulated data.
const examples = ["Learning javascript","web development" ]
const titlesInTitleCase = examples.map(title => title
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ")
);
console.log(titlesInTitleCase);
