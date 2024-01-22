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
 * 6: Ternary Oporators This is the only oporator that takes three oporands. The condition, what to do if the condition is true, third what to do if the condition is false
 * 
 * 
 * 
 * Code examples 
 * 
 */
// Examples of Operators 
// 1 .Assignment Operators

// simple assignment operator
let a = 10;
console.log(a);// 10
// addition assignment operator
a += 5;
console.log(a);// 15
// subtraction assignment operator
a -= 5;
console.log(a);// 10
// multiplication assignment operator
a *= 5;
console.log(a);// 50
// division assignment operator
a /= 5;
console.log(a);// 10
// modulus assignment operator
a %= 5;
console.log(a);// 0
// exponentiation assignment operator
let b = 2;
b **= 5;
console.log(b);// 32
// 2. Arithmetic Operators
// addition operator
let c = 10;
let d = 20;
console.log(c + d);// 30
// subtraction operator
console.log(d - c);// 10
// multiplication operator
console.log(c * d);// 200
// division operator
console.log(d / c);// 2
// modulus operator
console.log(d % c);// 0
// exponentiation operator
console.log(c ** d);// 10000000000
// 3. Comparison Operators
// equal to operator
let e = 10;
console.log(e == 10);// true
// bang  operator
console.log(e != 10);// false
// strict equal to operator
console.log(10 === 10);// true
// strict not equal to operator
console.log(9 !== 10);// false
// greater than operator
console.log(8 > 10);// false
// less than operator
console.log(8 < 10);// true
// greater than or equal to operator
console.log(8 >= 10);// false
// less than or equal to operator
console.log(8 <= 10);// true
// 4. Logical Operators
// logical 'and' operator
console.log(10 > 9 && 10 > 8);// true
// logical 'or' operator
console.log(10 > 9 || 10 > 8);// true
// logical 'not' operator
console.log(!(10 > 9));// false
// 5.  Unary Operators
// increment operator
let f = 15;
f++
console.log(f);// 16

// decrement operator
let g = 10;
g--
console.log(g);// 9
//Ternary Operators 
// condition? true: false
let h = 10;
let i = 20;
h > i ? console.log("h is greater than i") : console.log("i is greater than h");// i is greater than h

