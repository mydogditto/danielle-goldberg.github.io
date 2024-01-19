/**
 * 0: Datatypes are the diffrent variety of information that can be assigned, this in turn tells the computer what can and canot be done to the information. 
 * 1: There are two broad groups of datatypes primative and complex. 
 *  Primative data types are easy to use and don't have layers these include things like strings and numbers. On theo otherhand complex data types have a layer of complexity like arrays and objects. 
 *  Complex types offten have multipul instences of primative data types like an array of strings or numbers. The typeof opporator is used to tell us if a given pice of data is complex or simple. 
 * 
 * 2:String: Strings are groopings of letters or charicters surounded by quotation marks. Strings have cirten functions that can act on them and they are zero indexed, but they are a primative datatype. 
 * 3: Boolian: Boolian are values that return either true or false. In JavaScript, Boolean is used as a function to get the value of a variable, object, conditions, expressions, etc.
 * in terms of true or false.
 * 4: Number: Numbers are integers that can then be manipulated. Numbers can be part of a string or stand alone. 
 * 5:Undefined means the variable has been declared, but its value has not been assigned.
 * 6: Null: Null means an empty value 
 * 7: NaN: It is short for not a number. 
 * 8: Array: An array or array object is a data type that can store other data types together under a single variable name. 
 * Arrays are indexed like strings. Arrays are often used to store lists of things like a list of cars different types of cars, but not other attributes of a vehicle. 
 * 9: Object: Objects are complex data types that store characteristics under one label with sub-labels Keys and corresponding values. 
 * an essential part about objects is that different values can be different data types enclosed in an object. For example, you could have a value equal to a function, another similar to a string, and another set to a boolean. 
 * Arrays do not have this level of functionality. 
 * 10:Function: functions encapsulate statements used to perform a task or calculate a value. 
 * 11: Infinity: infinity is a special value that represents an infinitely large number.
 * 12:-Infinity infinity is a special value that represents an infinitely large negative number .
 * 
 * 13 Copy by refrence vs copy by value: What does it mean and what is the diffrence 
 * A variable when assigened to a primative data type make a copy of the information everytime it is redeclaired resulting in two diffren variables.
 * A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
 * The result of this is that two complex data type cannot be directly compaired becouse the computer just sees the refrence and not the data itself. 
 * 
 * 
 * Code examples 
 * 
 * 
 */
// number 
var num = 10;
console.log(num);// prints => 10
// string
var str = "Hello World";
console.log(str); // => Hello World
// boolean
var bool = true;
console.log(bool);// => true
// undefined
var und;
console.log(und); // prints => undefined 
// null
var nul = null;
console.log(nul);// prints => null
// object
var car = {Maker: "Fiat", 
Model: "500", 
Color: "White"
          };

console.log(car); // prints => { Maker: 'Fiat', Model: '500', Color: 'White' }
// array
var arr = [1, 2, 3, 4, 5];
console.log(arr);// prints => [1, 2, 3, 4, 5]
// function
function add(a, b){
    return a + b;
  }
  console.log(add(5, 10)); // prints => 15
  // infinity
var inf = 1/0;
console.log(inf);// prints => Infinity 
// -infinity
var minf = -1/0;
console.log(minf);// => -Infinity

// NaN
var nan = "hello" * 2;
console.log(nan);// prints => NaN