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
function replace(animals, name, replacement){
  // loop throught he array
    for(let i = 0; i < animals.length; i++){
      if (animals[i].name === name){
        return animals[i] = replacement 
      }
     
      } return null
     
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// write a function decalation called remove with a signature of remove(animals, name)
function remove(animals, name){
  //loop through the animals array
  for (var i = 0; i < animals.length; i++){
    // if the input name directly equals incraments name
    if (animals[i].name === name){
      // remove it
      animals.splice(i, 1);
    }
  }
  //otherwise return null
  return null;
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
