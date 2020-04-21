///Chapter 9
//Regular Expressions

//Regular expressions are a way
// to describe patterns in string data

//A regular expression is a type
//of object. 
//It can be constructed with
//the regexp constructor or
//written as aliteral value by
//eclosing a pattern in forward slash
// characters.

let re1 = new RegExp('abc');
let re2 = /abc/;

//These objects represent the same pattern
// An a, followed by a B, followed by a c.

let eighteenPlus = /eighteen\+/;


//Testing for Matches

//Test moethod will accept a string
//and return a boolean 
// if the string contains a match

console.log(/abc/.test("abcde"));
console.log(/abc/.test('abxde'));

//Sets of characters
console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

//Within square brackets, a hyphen
// between two characters can be used
//to indicate a range of characters,
//where the ordering is determined by
//the character's Unicode number. 
//0-9 are all in sequence 48-57.

/*

\d - Any digit character
\w - Any alphanumeric character (word char)
\s - any whitespace char (space, tab, newline)
\D - any character that is NOT a digit
\W - Any NON-alphanumeric chracters
\S - nonwhitespace char
. -any char except for newline

*/


let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
// → true
console.log(dateTime.test("30-jan-2003 15:20"));
// → false


//To invert a set of characters, you can use
// caret ^ after the opening bracket

let notBinary = /[^01]/;
console.log(notBinary.test('110101'));
console.log(notBinary.test('1231101'));

//Repeating parts of a pattern
//How to match a whole number

//Use plus sign + after reg exp
//IT indicates the element may repeate more than once
// /\d+/ -- one or more digit characters

console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("'"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

//Star * allows patterns to match zero times
//Sometimes with a star after it inever
//prevents a pattern from matching
//It'll just match zero instances if i cannot
//find any suitable text to match.

//Question mark makes the pattern optional. Zero or more times.

let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

//Precise number of times use braces {}
//Can do a range

let dateTime1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime1.test("1-30-2003 8:45"));
// → true

//Grouping Subexpressions

let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoooohoohoo"));

//The first and second + only apply to the wscond o
// in boo adn hoo.the third plus
// /aplies to all
//i makes it case insensitive

//Matches and groups

//Test only replies with match or nothing else
//Exec meth retur nnull if no match
//Return obj with info if match

let match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);

//Date Class

console.log(new Date());
console.log(new Date(2009, 11, 9));

//Javascript has month numbers starting at 0
//But day start at 1.

function getDate(string) {
    let [_, month, day, year] =
      /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
  }
  console.log(getDate("1-30-2003"));
  // → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)

  //Word and String boundaries

  //Enforce match span entire string
  //Use ^ and $
  //Caret matche start of input,
  //$ matches end.
  // /^\d+$/ -- matchs tring of one or more digits


  /*


  /^! - matches a string that strats with !

  */

  // /b word boundary. Start or end, or any point
  console.log(/cat/.test('concatenate'));
  console.log(/\bcat\b/.test("concatenate"));

  //Boundary doesn't match any char
  
  //Choice Patterns

  /*
| character denotes a choice between patterns
  */

 let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;

 console.log(animalCount.test("15 pigs"));
  console.log(animalCount.test("15 pigchickens"));


  ///Mechanics of matching
  
  //Backtracking

  //The replace method
  console.log("papa".replace("p", "m"));
