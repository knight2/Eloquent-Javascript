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
  console.log("Boroburdur".replace(/[ou]/, "a"));
  console.log("Borobudur".replace(/[ou]/g, "a"));

  console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
      .replace(/(\w+), (\w+)/g, "$2 $1"));
  
let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g,
str => str.toUpperCase()));


let stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit){
  amount = Number(amount) -1;
  if (amount == 1){// only one left, remove s
  unit = unit.slice(0, unit.length -1);
} else if (amount == 0){
  amount = "no";
}
return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

//Greed

function stripComments(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

console.log(stripComments("x = 10;// ten!"));

//Dynamically creating RegExp Objects

let name = "harry";
let text = "Harry is a suspicious character.";
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));

//The search method
//IndexOf cannot be called with regexp

console.log("   word".search(/\S/));

//LastIndex Property
//Regex have properties.
//Soruce - string that expression was created from
//Lastindex -- where the next match will start.

let pattern = /y/g;
pattern.lastIndex = 3;
let match1=pattern.exec("xyzzy");
console.log(match1.index);

console.log(pattern.lastIndex);

let global = /abc/g;
console.log(global.exec("xyz abc"));
let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));

//Looping over matches
let input = "A string with 3 numbers in it... 42 and 88.";
let number = /\b\d+\b/g;
let match3;
while (match3 = number.exec(input)){
  console.log("Found", match3[0], "at", match3.index);
}

//Passing an ini file

function parseINI(string) {
  // Start with an object to hold the top-level fields
  let result = {};
  let section = result;
  string.split(/\r?\n/).forEach(line => {
    let match;
    if (match = line.match(/^(\w+)=(.*)$/)) {
      section[match[1]] = match[2];
    } else if (match = line.match(/^\[(.*)\]$/)) {
      section = result[match[1]] = {};
    } else if (!/^\s*(;.*)?$/.test(line)) {
      throw new Error("Line '" + line + "' is not valid.");
    }
  });
  return result;
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki`));
// → {name: "Vasilis", address: {city: "Tessaloniki"}}

//International characters

console.log(/🍎{3}/.test("🍎🍎🍎"));
// → false
console.log(/<.>/.test("<🌹>"));
// → false
console.log(/<.>/u.test("<🌹>"));
// → true

//Summary
/*
/abc/ - sequence of characters
/[abc]/ - Any char from set
/[^abc]/ - any char NOT from set
/[0-9]/ -any in range
/x+/ - one or more occ of x
/x+?/ -one or more, non greedy
/x*  zero or more occ
/x?/ zero or ONE 
/x{2,4} - 2 to 4 occ
/(abc)/ - agroup
/a|B|C - any one 
/\d/ - any digit
/\w/ - any alphnumeric
/\s/ -any whietspace
/./ - any char except newlines
/\b/ - word boundary
/^/ - start of input
/$/ -end of input

test to see if given string matches.
Exec - returns an array if match found
Index property where the match started.

After closing slash adding
i - match case insenstive
g - makes global
y - sticky, not search ahead 
u - unicode mode


//Regex Golf


*/

//Car and cat
var carCatRexExp= /ca(t|r)/;
console.log("car".match(carCatRexExp));
console.log("cat".match(carCatRexExp));

//Pop and prop
var regExp2 = /p(r|o)(p|o)p*/;
console.log("prop".match(regExp2));
console.log("pop".match(regExp2));

var regExp3 = /ferr(e|y|a)(t*|r*)i*/;
console.log("ferrari".match(regExp3));
console.log("ferry".match(regExp3));
console.log("ferret".match(regExp3));