//Chapter 5
//Higher-Order Functions

//Abstraction

//Abstraction Repetition

//Higher-order Functions
//Functions that operate on other functions, either by
// taking them as arguments or by returning them, are called
// higher-order functions.

//Higher-order functions allow us to abstract over actions, not just values

//Script Data Set

//Filtering Arrays

//Transforming with map

//Map method transforms an array by applying a function
// to all of its elements and building a new array
// from the returned values.
//The new array will have the same length as the input array
//But its content will have been mapped to a new form by the function

function map5(array, transform){
    let mapped =[];
    for (let element of array){
        mapped.push(transform(element));
    };
    return mapped;
};

//Summarizing with reduce
//Repeatedly taking a single element from the array
// and combining it with the current value. 

function reduce2(array, combine, start){
    let current = start;
    for (let element of array){
        current = combine(current, element);
    }
    return current;
}

//Composability
//Higher-order functions start to shine when you need to compose operations


//Strings and Character Codes

//Execises

//Flattening

//Use the reduce method in combination with concat method
// to flatten an array of arrays into a single array
//that has all elements of the oringal arrays.

let arrays = [[1,2,3], [4,5], [6]];
let merged = [].concat.apply([], arrays);
console.log(merged);

let redArr = arrays.reduce(function(a, b){
    return a.concat(b);
}, []);
console.log(redArr);

let merged2 = arrays.reduce((a,b) => a.concat(b), []);
console.log(merged2);
