/**
 * 0. Control Flow: The control flow is the order in which the computer executes statements in a script. 
 * Code is run in order from the first line in the file to the last line, unless the computer runs across the  structures that change the control flow, such as conditionals and loops.
Control Flow structures allow developers to create dynamic and flexible programs that can make decisions and repeat tasks. 

 * 
 * 1. If: An if statment is a way to controling the flow of the program. 
 * It uses the if keyword followed by the condition then what should be done if the condition is true.
 * 2. Else if. Conditional statments can be chaned, meaning one can set multipul conditions to all exicute if their conditions are met. 
 * If this is true then do blank if the condition in false, then evaluate the next condition for truthy or falsey.
 *  And if true do this other thing. 
 * 3. Else  An else statment is a code block to be exicuted if the condition in the if statment is false. 
 * 4. Switch: Switch statments are similar to if statments but with a diffrent syntax. It starts with a statment to be evaluaated with the switch keyword after the first case clause with a matching value, until a break statement is encountered. 
 * The default clause of a switch statement will be jumped to if no case matches the expression's value.
 * 
 * 
 * 
 * code examples 
 */
// and if statment
if(10 > 8){ // true
    console.log("all is good")

}// so "all is good" prints to the console

//else if
let hour = 20
if (hour < 12) {
    console.log("Good Morning!")
      } else if (hour < 17) { // false
       console.log("Good Afternoon!")
      } else if (hour < 22) {// true
        console.log("Good Evening!")}// prints => "Good Evening"

   // example of an if-else statement
var studentAge = 22;
if (age >= 18){
  console.log("Cannot drink alcohol in Canida");
} else{
  console.log("Cheers");
}// print => Cheers