//Chapter 3
// Functions

const square = function(x){
    return x * x;
};


//Bindings and Scopes


//Bindings declared with let
// and const are local to the block
// that they are declared in
//If one is inside of a loop
//The code before and after
// the loop cannot see it. 


//Nested Scope

//Functions as values

//declaration notation
function Square(x){
    return x * x;
}

//Arrow function
const power = (base, exponent) =>{
    let result = 1;
    for (let count = 0; count < exponent; coutn++){
        result *= base;
    }
    return result;
};

const square1 = (x) =>{return x * x};

//Call Stack

//Optional arguments
//Extra arguments passed are ignored


//Closure


//Recursion


//Growing Functions

//Functions and side effects

//Calling for side effect or return value or both


//Exercises

//Minimum.
//Write a function that takes two arguments
//and returns their minimum.

let minimumFunc = function(a,b){
    if (a < b){
        return a;
    } else{
        return b;
    }
}

let countBs = function(a){
    let count = 0;
    for(let i = 0; i < a.length; i++){
        if (a[i] === 'B'){
            count++
        }
    }
    return count;
}

let countChar = function(word, charSearch){
    let count = 0;
    for(let i = 0; i < a.length; i++){
        if (a[i] === charSearch){
            count++
        }
    }
    return count;
}