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
 * first: The function take in an array and a number. It first determons that the number is a number, if it is a number
 * it returns the zero index of the array. If input is a number less than zero, it returns and empty array
 * @param {Array} array takes in an input array
 * @param {Number} number takes in a number to compair against 
 * @returns an empty array, first index of the array or array indxis equle to the number.
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
module.exports.each = first;
/** 
 * Last: This function take in an array and a number and return an empty array, the first value of the input array, or 
 * number of indexes from the array equle to number. 
 * last: The function takes in an array and number. It returns 
 * @param {Array} array input array 
 * @param {*} number a number that indicates how many indexis will be returned if the conditions are met.
 * @returns The last index of the array, an empty array or the input number of indixes starting from the last index in the array. 
 */

 function last(array, number){
    if(Array.isArray(array)=== false){
        return [];
    } if (number === undefined || number === NaN){
        return array [array.length -1];
    } if (number < 0){
        return []
    }if (number > array.length){
        return array
    } else {
        return array.slice(1, array[number.length -1])
    }
}
module.exports.each = last;
/**
 * indexOf: is a function that takes in an array and a value to look for, by looping. 
 * If the input value is found, it returns the index of the value, otherwise it returns -1.
 * 
 * 
 * @param {Array} an input array
 * @param {*} value 
 * @returns the indexs where the value was found or -1
 */

 function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i]=== value){
            return i
        }
    }
    return -1
}
module.exports.each = indexOf;
/**
 * Contains: A function that loops through the input array to determon if the input value is present. The function returns true if present or false if not. 
 * @param {Array} an input arrray to cycle through. 
 * @param {*} and input value to look for. 
 * @returns true if the value is present false if not. 
 */

 function contains(array, value){
    for (let i =0; i < array.length; i++){
        if (array[i] === value){
            return true;
        }
    } return false
}
module.exports.each = contains;
/**
 * each: The function takes in a collection and a callback function. it invokes the callback on every array element.
 * @param {Object, array} collection object or an array 
 * @param {Function} Callback function
 */

_.each = function (collection, func){
    for( let i = 0; i < collection.length; i++){
        if (Array.isArray(collection)=== false){
            func(collection[i], i, collection);
        }
    }
    for (let key in collection){
        if (typeof collection === 'object'){
            func(collection[key], key, collection);
        
        }
    }
}
module.exports.each = each;
/**
 * Unique: The function takes in an array and iliminates all the non unique elements. 
 * It returns an array with no duplicates.
 * @param {Array} Take in an input array. 
 * @returns A new array with no duplicates
 */
 function unique(array){
    let uniqueArray = []
    for(let i = 0; i < array.length; i++ ){
        if(uniqueArray.indexOf(array[i])=== -1){
            uniqueArray.push(array[i])
        }
    }
   

    return  uniqueArray;
}module.exports.each = unique;
/**
 * Filter: Takes in an input array invokes a callback function. 
 * It returns a new array with only the values that pass the test in the callback function. 

 * @param {Array} An input array 
 * @param {function} a callback function with a test. 
 * @returns 
 */
  function filter (array,func){
    let newArray = []
    _.each (array, function(element, index, array){
        if(func(element, index, array)){
            newArray.push(element);
        }
    });
    return newArray;
}
module.exports.each = filter;
/**
 * Reject: Is a function that takes in an array and a callback function. It invokes the function on each element of the each function
 * evaluates the contion is the callback function and returns a new array with elements from the input array. 
 * @param {Array} array 
 * @param {function} A callback function
 * @returns The new array of elements
 */
function reject(array, func){
    let newArray = [];
    _.each(array, function (element, index, array){
        if(func(element, index, array)=== false){
            newArray.push(element);
        }
    });
    return newArray
} 

module.exports.each = reject;
/**Partition: The function takes in an array and a callback function. 
 * It loops through the array and seporates the truthy values from the falsy values. 
 * It returns an array of two arrays one with the trulthy valuses and one with the falsey values. 
 * @param {Array} An array of values to be evaluated. 
 * @param {Function} function that determons if the values are truthy or false. 
 * @returns an array with two arrays inside with the values from the input array seporated into truthy and falsey values. 
 */

 function partition(array, func){
    let truthy = []
    let falsy = []
    for (let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            truthy.push(array[i]);
        } else {
            falsy.push(array[i]);
        }
    }
    return [truthy, falsy]
}
module.exports.each = partition;
/**
 * map: The function takes in a collection and invokes the callback function on every element in the collection.
 * It returns the and array of the new values. 
 * @param {Object or array} collection is either an array or an object.
 * @param {Function} a function that preforms an action on the elements in the collection.
 * @returns a new array
 */
 function map(collection, func){
    // create an ouput array
    const output = []
    // if collection is an array use a for loop
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++ ){
            // invoke callback and store in a variable 
            // call the callback function 
            let result = func(collection[i], i, collection)
            output.push(result);
    }
    } else {
        // if collection is an object use a for in loop 
        for( let key in collection){
            let result = func(collection[key], key, collection);
            output.push(result)
        }
    }

    return output;

}
module.exports.each = map;
/**
 * pluck: The function takes in an array of objects a object key. It returns all the values at that given key. 
 * @param {Array} array 
 * @param {Object key} key 
 * @returns It returns all the values at that given key in an array. 
  **/

function pluck(array, key){
    let object = _.map(array, function(object){
        return object[key];
    });
    return object;
}

module.exports.each = pluck;
/**
 * Every: The function take in a collection and determons if all elements in the collection passes the test in the callback function. 
 * It returns a boolian value. It only returns true if all elements pass the test
 * 
 * @param {Object or Array} collection 
 * @param {Function} function to test element against
 * @returns Boolian value of true or false
 */

 function every(collection, func){
    if(func === undefined){
        if (Array.isArray(collection)){
        // for loop
            for (var i = 0; i < collection.length; i++){
        // determon if current item is NOT truthy 
            if(!collection[i]){
             return false; 
            }
        }
    
    } else { 
        for (var key in collection){
         if(!collection[key]){
            return false; 
         }
        }
    }
    } else {
        if(Array.isArray(collection)){
            for (var i = 0; i < collection.length; i++){
                if(!func(collection[i], i, collection)){
                    return false;
                }
            }
        } else {
            for (var key in collection){
                if(!func(collection[key], key, collection)){
                    return false; 
                }
            }
        }
    }
        return true;
    } 
    module.exports.each = every;
    /**
     *
     * some: is a function that takes in an object or an array and test if the elements in the array pass the test in the callback function. 
     * If at leasat one element passes it returns ture otherwise it returns false. 
     * 
     * @param {Object or Array} collection 
     * @param {function} A callback function
     * @returns A boolian value 
     */
    function some(collection, func){
        if(func === undefined){
            if(Array.isArray(collection)){
                for (let i = 0; i < collection.length; i++){
                    if (collection[i]){
                        return true;
                    }
                }
            } else {
                for (let key in collection){
                    if (collection[key]){
                        return true;
                    }
                }
            }
        }else {
            if (Array.isArray(collection)){
                for(let i = 0; i < collection.length; i++){
                    if(func(collection[i], i, collection === true)){
                        return true;
                    }
                }
            } else {
                for (let key in collection){
                    if (func(collection[key], key, collection) === true){
                        return true
                    }
                }
            }
        } return false;
        } 
        module.exports.each = some;
        /**
         * reduce: The function takes in an array and a callback function and an optional seed value. It invokes the callback function on each element in the array. 
         * and returns a single value. This effctivly reduces the information in the array to a single value based on a condition. 
         * 
         * @param {Array} An input array 
         * @param {function} A callback function.
         * @param {*} seed is a value 
         * @returns 
         */

         function reduce(array, func, seed){
            // inishalize an output variable 
            let output;
            if(seed === undefined){
                output = array[0];
                for (let i = 1; i < array.length; i++){
                    output = func(output, array[i], i)
                }
            } else {
                output = seed;
                for (let i = 0; i < array.length; i++){
                    output = func(output, array[i], i)
                }
            }
            return output;
            }
            module.exports.each = reduce;
        /**
         * Extend: The function takes in an unknown number of objects and copies their
         * key/ value pairs to the target object. By looping through  to see how many objects there are then, using Object. assign 
         * @param {object} target 
         * @param  {...object} objects 
         */
            function extend(target, ...objects){
                for (let i =0; i < objects.length; i++){
                    Object.assign(target, objects[i])
                }
            }
            module.exports.each = extend;