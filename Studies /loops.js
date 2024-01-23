/**
 * 0:Loops Are used to preform repeditive tasks based on a condition evaluating to true and ending when the condition evaluates to false. 
 * Loops are exstrimly common and useful to do things like accessing every value in an array or object.
 * 1:For loop, while, and for in loop. These are three main types of loops. The for loop is used on arrays and string. It uses the for keyword It has a start statment. A stop statment and a final exspresstion
 * The first thing that is done is to inishalize a variable commonly i to zero then a stop statment like when the computor has looped through all the values in the array stop looping. 
 * Then the final statment is what should be done. In many cases is adding the incramenter or decarmentor oporator. 
 * A while loop is set up slightly diffrently. It uses the while keyword but only after inishalizing the incramenting variable. After the while keyword come the exsprestion and what each itteration should do. 
 * 2. Looping forward x number of times counting up. One way loops are used is to count up to a number spesified in the loop decloration. For example, if you wanted to loop from 0 to 10 using a for loop you would simple set the second statment to 10. 
 * 
 * 3. Looping down counting backward to zero Loops can go either forward or backward. Looping backward involves changing the order of the statments in the decloration. 
 * A for in loop works the same whay as the for loop but its purpus is to iteratie through objects not arrays or strings. 
 * 4. Looping over an array. The purpouse of looping or itterating through an array is to exstract every value and then preforme some action on each one. Like modifyig each value in a certen way or seeing which value in the array fulfils a certen condition. 
 * 5. Looping over an object. The purpose of looping through an object is the same as looping over an array. 
 * It allowes one to preform actions on each key/value or see which key/value passes a condition. 
 * 
 * 
 * 
 * Code examples 
 */
// A basic for loop
for(var i=0; i< 10; i++)
  console.log(i)// prints => 1 2 3 4 5 6 7 8 9
// for loop counting down from 10 to 0
for (var i = 10; i >= 0; i--){
    console.log(i);// prints 10 9 8 7 6 5 4 3 2 1 0
  }

 // A basic example of a for in loop- looping through an object
 object ={
    name: "Rohit",
    age: 22,
    gender: "male"
  }
  for(key in object){
    console.log(key)// prints => name age gender
  console.log(object[key])// prints =>Rohit 22 male
  }
  // looping through an array
  array = ["This", "is", "a", "test", "array"];
for(var i=0; i< array.length; i++){
  console.log(array[i]); // prints => This is a test array

}

