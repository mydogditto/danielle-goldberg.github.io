/**
 * 0 Oporators: These are diffrent symbols and compination of symbols used to tell the computer to preform a certen action. This is a consise way to write out a longer sentience in a writen or spoken language. 
 * The classic example of oporators for javascript is the use of the equle sign to assign a variable to a datatype. 
 * 1: Assignment Oprators: These oporators are used to make assignments and preform simple action together in one combined symbol. 
 * 2: Arithmatic Oporators: These are used to preform arithmatic computations on variables but not assign at the same time. Like adding variables together. 
 * 3:Comparison Oporators: These oporators compaire to sides of the oporand and returns a boolian value based on that comparison. 
 * Like when seting a condition in an if statment, if the result of the comparison resolves to true then exicute the prosess in the code block. 
 * Comparison operators allow us to assert the equality of a statement with JavaScript.
 * 4: Logical Oporators There are situations when we need to assert two condition, similar to comparison but it adds a layer of complexity to the process. T
 * The logical oporators let us say that two comparisons must be true before something happens or one or the other must me true. 
 * 5: Unary Oporators A unary operation is an operation with only one operand. This operand comes either before or after the operator.
 * 6: Ternary Oporators 
 * 
 * 
 * 
 * Code examples 
 * 
 * 
 * 
 */
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
console.log(string2)// 28
// However, the values cannot be mixed unless simply concatenating them.
 string2 *= "world"
console.log(string2)// NaN