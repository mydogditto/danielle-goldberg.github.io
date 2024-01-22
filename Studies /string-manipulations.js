/**
 * 0: String Manipulations is the process of taking a string and changing some aspect of that string. 
 * However, strings are immutable  meaning their values cannot be changed in place. This means that in order to affect the string,
 * one must assign a section to a new string or reassign the existing value. 
 *  1. Oprators: strings can be affected by the assignment oporators to add a new value to a string. 
 * Strings can take in numbers as a string value and then those numbers can be affected by other mathmatical oporators. Comparison oporators 
 * 2. Methods are another way to affect strings, however, they only return new information or a new string they cannot manipulate the original string. 
 * 
 * 
 * 
 * 
 // String Oporators 
 // The + operator can be used to concatenate strings.
let string1 = ""
string1 = "hello" + " " + "world";
console.log(string1)// hello world

// The += operator can be used to concatenate strings.
string1 += " " + "goodbye";
console.log(string1)// helo world goodbye

//The -+ operator can be used to change strings it will return NaN.
string1 -= "goodbye";
console.log(string1)// NaN
// The *= operator can be used to change strings.
let string2 = "7";
string2 *= "4";
console.log(string2)
// However, the values cannot be mixed unless simply concatenating them.
 string2 *= "world"
console.log(string2)// NaN
 * 
 *///String methods 
// The length property returns the length of a string.
let string3 = "hello world";
console.log(string3.length)// 11
// The charAt() method returns the character at a specified index (position) in a string.
console.log(string3.charAt(0))// h
// The charCodeAt() method returns the unicode of the character at a specified index in a string.
console.log(string3.charCodeAt(0))// 104
// The concat() method joins two or more strings.
let string4 = "hello";
let string5 = "world";
console.log(string4.concat(string5))// hello world
// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false.
console.log(string3.endsWith("world"))// true
// The includes() method determines whether a string contains the characters of a specified string, returning true or false.
console.log(string3.includes("hello"))// true
// The indexOf() method returns the position of the first occurrence of a specified value in a string.
console.log(string3.indexOf("o"))// 4
// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
console.log(string3.lastIndexOf("o"))// 7
// The localeCompare() method compares two strings in the current locale.
console.log(string3.localeCompare("hello"))// 0
// the toUperCase() method converts a string to uppercase letters.
console.log(string3.toUpperCase())// HELLO WORLD
// The toLowerCase() method converts a string to lowercase letters.
console.log(string3.toLowerCase())// hello world
// The search() method searches a string for a specified value and returns the position of the match. 
console.log(string3.search("world"))// 6
// The repeat() method returns a new string with a specified number of copies of an existing string.
console.log(string3.repeat(3))// hello world hello world hello world
// The replace() method searches a string for a specified value or a regular expression, and returns a new string where the specified values are replaced.
console.log(string3.replace("world", "universe"))// hello universe
// The slice() method extracts a part of a string and returns the extracted part in a new string.
console.log(string3.slice(6))// world
// The split() method splits a string into an array of substrings.
console.log(string3.split(" "))// [ 'hello', 'world' ]