//Data Structures: Objects and Arrays


//Objects allow us to group values, including other objects,
// to build more complex structures.

//The Weresquirrel

//Data Sets

//Array - specific for storing sequences of values
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers);
console.log(listOfNumbers[2]);

//A pair of square brackets immediately after an expression,
//with another expression inside of them, will look up
// the element in the lef-thand expression that corresponds
//to the index given by the expression in the bracket

//Properties

//The two main ways to access properties in JavaScript
//are wtih the dot and with the square brackets.


//When using a dot, the word after the dot is the literal name
// of the property.

//When using square brackets, the expression between the brackets
//is evaluated to get the property name. 

//Whereas value.x fetches the property of value named x,
//value[x] tries to evaluate the expression x and uses
//the results, converted to a string, as the property name.

//Methods

//Objects

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
console.log(day1.wolf);


let journal1 = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
     squirrel: true},
  ];

//Mutability


//You can change properties of objects, causing a single
//object value to have different content at different times.

//The Lycanthrope's log

let journal = [];
function addEntry(events, squirrel){
    journal.push({events, squirrel});
};
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

//Array Loops

for (let i = 0; i< journal.length; i++){
    let entry = journal[i]
    //do something
}

//or

for (let entry of journal){
    console.log(`${entry.events.length} events.`);
}

let string = JSON.stringify({squirrel: false,
    events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]


// Exercises

//Sum of a range

let range = function(start, end){
    let arr = [];

    for(let i = start; i<= end; i++){
        arr.push(i);
    }

    return arr;
}

let sum = function(arr){
    let total = 0;

    for (let i = 0; i<arr.length;i++){
        total += arr[i];
        console.log(total);
    }

    return total;
}

console.log(range(1,5));
console.log(sum(range(1,5)));

//Reversing an array

let reverseArray = function(arr){
    let newArr = [];

    for(let i = arr.length-1; i >= 0;i--){
        newArr.push(arr[i]);
    }

    return newArr;
}

console.log(reverseArray([1,2,3]));

