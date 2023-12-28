//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//const { result } = require("lodash")

function objectValues(object) {
let result = []
for (let key in object){
    object[key]
    result.push(object[key])
} return result 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
let results = []
for (let key in object){

    results.push(key)
}
return results.join(" ")
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // initialize output array
    let output = []
    // itterate through object keys
    for( let key in object ){
        // if value is a string
        if(typeof object[key]=== 'string'){
        // push to output array
    output.push(object[key]);
        //return joined output
    }
    } 
    return output.join(" ")
} 

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return "array"
    } else{
        return "object"
    }

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
  
   
 var upperCasedString = string[0].toUpperCase() 
       var sliced = string.slice(1);
       var newString = upperCasedString + sliced;
       return newString
    } 
 

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

 function capitalizeAllWords(string){
    var split = string.split(" ");
    var array = []
    for (let i =0; i < split.length; i++){
        var upperCasedString = split[i][0].toUpperCase();
        var sliced = split[i].slice(1);
        var newString = upperCasedString + sliced;
        array.push(newString);
    
    }
    var arrayToString = array.join(" ");
    return arrayToString
 }

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
var array = [];
for(var key in object){
var newestObject = object[key][0].toUpperCase();
var sliced = object[key].slice(1)
var lastThing = newestObject + sliced;
array.push(lastThing);
var arrayToString = array.join(" ");
return "Welcome " + arrayToString + "!";
}
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var objValues = Object.values(object);
var array =objValues.map(value => value [0].toUpperCase()+ value.slice(1));
return array[0] + " is a " + array[1]

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
var arr = [];
if(Array.isArray(object.noises) && object.noises.length !== 0){
    return object.noises.join(" ");
}
if (Array.isArray(object.noises)&& object.noises.length === 0){
    return "there are no noises"
} else {
    return "there are no noises"
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
if (string.includes(word)){
    return true;
} else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name);
return object 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if(object && object.friends && Array.isArray(object.friends)){
    return object.friends.includes(name);
} else {
    return false;
}
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    var friends = [];
    var nonFriends = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i].name === name) {
        friends = array[i].friends;
      }
    }
    for (var j = 0; j < array.length; j++) {
      if (friends.indexOf(array[j].name) === -1) {
        nonFriends.push(array[j].name);
      }
      return nonFriends
  }
 
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function updateObject(object, key, value) {
 
//The key on an object should be updated with the new value.
object[key] = value;
return object;
}
//If the key does exist on the object, update the key.
for (let key in object) {
if (object.hasOwnProperty(key)) {
  object[key] = value;
}
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (key in object){
      for (let i = 0; i < array.length; i++) {
        if (object.hasOwnProperty(array[i])) {
          delete object[array[i]];
        }
      }
    }
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return [...new Set(array)];
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}