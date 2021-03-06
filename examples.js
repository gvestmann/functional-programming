// A classic example of a pure function
function sumNumbers(number1,number2) {
    return number1 + number2;
}

// A predictable outcome using a pure function. The function will return calculation regardless of stuff outside sumNumber()'s scope. Like I said, the parameters return an answer but they don't have any side-effects on the code itself.
sumNumbers(3,4);

  


// Non pure function, it will mutate the pig-variable to = 3
// Global variable
let numberOfLittlePigs = 2;

function addPig() {
    numberOfLittlePigs += 1;
    return numberOfLittlePigs;
}



// Pure function, the pig-variable stays = 2, no matter how often it's called AND it's within it's scope, but not global
function addPurePig() {
    pureNumberOfLittlePigs = 2;
    return pureNumberOfLittlePigs +1;
}



// Constant array
const myArray = [
    { "Title": 1, "Category": 1 },
    { "Title": 2, "Category": 1 }
]

// Function stored in array which uses the map-method
const items = myArray.map(({
    Title: title, Category: category }) =>
    ({title, category})
);



// Constant array
const myArray2 = [
    { title: 1, category: 1 },
    { title: 2, category: 1 },
    { title: 3,category: 2 },
    { title: 4, category: 2 }
]

// Inside this variable is a filter method that loops thourgh the array and find items that belong to category 1 (or less). Perhaps not useful, but you get the drift.
const stuffInCat2 = myArray2.filter(item => item.category <= 1);



// Two examples of anonymous functions, they basically do the same thing.

// Arrow function, this is stored in a variable
let anonArrow = () => console.log('Anonymous function');

// A completely anonymous function. I've never met this guy. He works, but just doesn't tell us his name.
let letsGiveHimAName = function(){ console.log('I have no name!') }