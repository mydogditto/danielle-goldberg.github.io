'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity:The function takes in an input value and returns it unchanged. 
 * @param {*} value function takes in any input value
 * @returns a value unchanged. 
 */
function identity(value){
    return value
}
module.exports.each = identity;

/**
 * typeOf: Takes in an input value and returns a string of that value type. 
 * @param {*} value function take in any input value
 * @returns a string of the name of the input
 */
function typeOf(value){
    if(typeof value === 'string'){
        return 'string'
      } else if (Array.isArray(value)){
        return 'array'
      } else if (typeof value === 'undefined'){
        return 'undefined'
      } else if(typeof value === 'number'){
        return 'number'
      } else if (typeof value === 'boolean'){
      return 'boolean'
      } else if (value === null){
        return 'null'
      } else if (typeof value === "function" ){
        return "function"
      } else if (value === 'object'){
      } return 'object'
      

}

module.exports.each = typeOf;
/**
 * first: The function take in an array and a number. It first determons that the number is a number, it is a number
 * it returns the zero index of the array. If input is a number less than zero, it returns and empty array
 * @param {*} array 
 * @param {*} number 
 * @returns 
 */

 function first(array, number){
    if (Array.isArray(array)=== false){
        return [];
    } if(number === undefined || number === NaN){
    return array[0];
    } if (number < 0){
        return [];
    }if (number > array.length){
        return array;
    }else {
        return array.slice(0, number)
    }

}