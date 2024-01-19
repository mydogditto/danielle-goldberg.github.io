/**
 * 0: Variables
 * Variables are the primary way we contain information in Javascript. 
 * Esentialy variables are just lables to encluse datadypes assigned to that lable. This information is then stored in memory.
 * Variables are called so b/c once assigned the information they point to can change. 
 * 
 * 1: Declaration and assignment. The declaration is how we let the computer know this word will be used as a variable. The assignment is how we assign data to that label. 
 * Declaration consists of a keyword and a variable. The assignment then includes the variable name. If we do this in one step, it is called initialization.
 * 
 * 2: Var, let, const 
 * These are the three keywords that let the computer know we are encapsulating data with a lable. 
 * Var, is the oldest of the key words and can be reasigned. 
 * It is function or global scoped, this means if it a variable is inishalized with var it is accessable basicly everywhere becouse of how hoisting works. 
 * Var is also the only keyword directly affected by they hoisting process. 
 * Let: Let is a newer keyword introduced in 2015. It can be reasigned variable declared with the “let” keyword is block-scoped and local variable. 
 * A variable declared with let will be out of scope outside the block within which it has been declared.
 * 
 * Const: This keyword is the only declaritive name that can not be reassinged it is also localy scoped. 
 * 
 * 
 * 3: Hoisting, is a process where the interpreter changes the order in which it sees variable declorations. 
 * The hoisted variable bleeds into the outer scope. This makes it avalible in places other than the scope in which it is declaired.
 * It is important to note that the interpreter does not physicly move the variable just the way it interacts with it. Var is hoisted declerations are hoisted as are function declerations
 * Let and Const are hoisted but just the decloration not the value and can't be accessed untill they are assigned a value. 
 * 
 * 
 * 
 * 
 *

 // Code examples 
//  1. Decloration //
// At he decloration phase the variable myDog is undefined becouse we have not inishalized it yet. 
var myDog;
console.log(myDog)// prints => undefined 
// 2. Assignment 
// When you assign a value to the declaired name. 
myDog = "Porsha" 
console.log(myDog)// prints => Porsha
// 3. Inishalization 
// This is when step one and two are completed in one line
var myDog = "Porsha"
console.log(myDog)// prints => Porsha
// 4. Re-Assignment 
// Changing or updating a value of a previously assigned variable.
myDog = "Ditto"
console.log(myDog) // prints => Ditto 

// 1. Let//
// Let keyword works like var for inishilization and reassignment
let myDog = "Ditto"
console.log(myDog)//  prints => "Ditto"
myDog = 



