/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(array, string){
    // loop through the animals array
for (let i = 0; i < array.length; i++){
    // if string is equal to a string in that array, return string object
  
  var stringName = array[i].name
if(stringName === string){
  return array[i]
} 
}

  return null
} 




//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(array, string, object){
  // loop throught he array
    for(let i = 0; i < array.length; i++){
      //set a variable to the result of itteration of each name
      var stringName = array[i].name
      if(stringName === string){
        string === object
      } 
    } return true
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, string){
  // loop throught he array
  for(let i = 0; i < array.length; i++){
    //set a variable to the result of itteration of each name
    var stringName = array[i].name
    if(stringName === string){
      return true 
}
  }
  }

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
// if animal has an empty name 
if (animal.name.length > 0){
  // if animal has an empty spicies property 
  if(animal.species.length > 0){
    // if animal has a unique name
    if(!animals.some(animalObj => animalObj.name === animal.name)){
      //add animal to animals array
      animals.push(animal);
    }
  }
}



}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
