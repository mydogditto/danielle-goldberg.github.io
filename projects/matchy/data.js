/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "dog"
animal['name'] = "Porsha"
animal.noises = []
console.log(animal)


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []
noises[0] = "bark"
noises.push("whine")
noises.unshift("growl")
noises.push("wimper")
console.log(noises.length)
console.log(noises.length -1)
console.log(noises)
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
animal.noises[4] = "yip"
console.log(animal)


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *braket notation or dot notation but dot notation only works with literal.
 * 2. What are the different ways of accessing elements on arrays?
 * braket notation and accessing by index 
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = []
animals.push(animal)
var duck = {
  species: "duck", 
  name: "Jerome",
  noises: ["quack", "honk", "sneeze" , "woosh"]

}
animals.push(duck)
var cat = {
  species: "feline",
  name: "Mooshie",
  noises: ["meow", "purrr"]
}
animals.push(cat)
var dolphin = {
species: "dolphin",
name: "Fliper",
noises: ['whistles', 'clicks']
}
animals.push(dolphin)
console.log(animals)
console.log(animals.length)
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// we are making a list of like object so it is locial to use an array to hold the like items
var friends = []

function getRandom(animals){
return Math.floor(Math.random()* 4);
}

friends.push(animals[getRandom(animals)].name);
animal["friends"] = friends;
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}