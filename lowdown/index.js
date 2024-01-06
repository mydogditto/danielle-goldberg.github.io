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
 * @param {*} array takes in an input array
 * @param {*} number takes in a number to compair against 
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
 * last: The function takes in an array and number. It returns 
 * @param {*} array 
 * @param {*} number 
 * @returns 
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
 * 
 * @param {*} array 
 * @param {*} value 
 * @returns 
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
 * 
 * @param {*} collection 
 * @param {*} func 
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
 * 
 * @param {*} array 
 * @returns 
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
 * 
 * @param {*} array 
 * @param {*} func 
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
 * 
 * @param {*} array 
 * @param {*} func 
 * @returns 
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
 * 
 * @param {*} collection 
 * @param {*} func 
 * @returns 
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
 * 
 * @param {*} array 
 * @param {*} key 
 * @returns 
 */

function pluck(array, key){
    let object = _.map(array, function(object){
        return object[key];
    });
    return object;
}

module.exports.each = pluck;
/**
 * 
 * @param {*} collection 
 * @param {*} func 
 * @returns 
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
     * @param {*} collection 
     * @param {*} func 
     * @returns 
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