//Chapter 2
//Program Structure


//A fragment of code that produces a value is an expression
// 22, 'psychoanalysis' expression

//If an expression corresponds to a sentence fragment,
// a javascript statement corresponds to a full sentence


//Bindings

//Javascript provides a thing called bindings, or variables
let caught = 5 * 5;

//Imagine bindings/variables as tentacles, rather
// than boxes. They do not contain values, they grasp them
// Two bindings can refer to the same value.
let one = 1, two = 2;
console.log( one + two);
// 3

//The environment
//The collection of bindings and their values that exit
// at a given time is called the environment
//When a program starts up, the environment is not empty.
//It always contains bindings that are part of the
// standard language.

//Functions
//A function is a piece of program wrapped in a value
//Executing a function is called invoking/calling/applying it

//The Console.log function

//Return Values
//Showing a dialog box or writing text on the screen
// is a side effect.
//A lot of functions are useful because of the side effects
// they produce.
//When a function prodvides a value, it is said
// to return that value.

//Control Flow
//Executed top to bottom

//Conditional Execution


//While and do Loops

//Indenting code

//For loops
//A counter binding is created to track the
//progress of the loop
//Then comes a while loop
//Usually ending in a test expression that checks
// if the counter has reached it or not.
// At the end of the loop body, the counter is updated
for (let number = 0; number <= 12; number = number +2){
    console.log(number);
}

//Breaking out of a loop
for (let current = 20; ;current = current + 1){
    if (current % 7 == 0){
        console.log(current)
        break;
    }
}
// 21

//Updating bindings succinctly

//Dispatching on a value with switch

// Capitalization


//Comments

//looping a triangle.
//write a loop that makes seven calls to console.log
let triangle = '';

for (let i = 1; i <8; i++){
    triangle += '#'
    console.log(triangle);
}

//FizzBuzz
//Write a program that uses consolelog to print all numbers
//from 1 to 100 with two exceptions
//For numbers divisible by 3, print Fizz
// instead of the number
//And for numbers divislbe by 5 and NOT 3, print buzz
//Both 3 and 5, FizzBuzz
for (let i = 1; i < 101; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else{
        if (i % 3 === 0){
            console.log('Fizz');
        } else{
            if (i % 5 === 0){
                console.log('Buzz')
            } else{
                console.log(i);
            }
        }
    } 

}

//ChessBoard
//Write a program that creates a string that is a 8x8 grid
//using new line characters to separate lines.
//At each position of the grid there is either a space or a # 
