//Eloquent Javascript
// https://eloquentjavascript.net/
// Chapter 1

// Values, Types, and Operators

//To create a value, you must merely invoke its name. 
//As soon as you no longer use a value, it will dissipate
//leaving behind its bits to be recycled as a building material
// for the next value

//Javscript uses a fixed number of bits, 64 of them, to store
// a single number value. Number of different numbers that can
// be represented by 64  bits is limited. 18 quintillion

//Don't usually need to worry about overflow

//Upper case letters are always 'less than' lower case ones.


//When an operator is applied to the 'wrong' type of value
// javascript will quietly convert that value to the type it needs.
//Type coercion
//If it doesn't map to a number in an obvious way, you get value NaN

/// === when you do not want any type conversions
// Use === defensively to prevent any unexpected type conversions
// || return the value on its left if it can be converted to true,
// return value on right otherwise

//Summary. 
//Numbers
//Strings
//Booleans
//Undefined values