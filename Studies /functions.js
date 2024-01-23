/**
 * 
1. The two phases to using functions: First we must ___? Next we can execute (or two other words for executing a function?) a function by?
The two phases to using functions: First we must define the function and give it a name. Next we can execute by calling  or invoking the function 
2. What’s the difference between a function’s parameters and arguments PASSED to a function?
 The parameters are the variables listed as part of the function definition. 
 The arguments are the values passed to the function when it is called.
3. What’s the syntax for a NAMED function?
var variableName = function name(){ // Code here };
4. How do we assign a function to a variable?
The syntax for assigning a function to a variable is the same as seting anyother data type to a variable. The name you want the assigment oporator followed by the function decleration.

5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
We specify inputs by adding peramiters to the function and specify outputs by using the return keyword
Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
 * 
 * 
 */
//Code Examples 
1. // declaring a function 
function reverser(string){
    var reversed = "";
    for (var i = string.length - 1; i >= 0; i--){
      reversed += string[i];
    }
    return reversed;
  }
  2. // invoking a function
  console.log(reverser("this is a string"))// prints => gnirts a si siht
  3 //Assinging a function to a variable
  let thisFunction = function (string){

  }
 //Example of Closure 
function outer(){
    var a = 10;
    function inner(){
      console.log(a);
    }
    return inner;
  }
  