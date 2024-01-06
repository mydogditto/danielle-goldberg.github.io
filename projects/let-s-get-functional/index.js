// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./danielle-goldberg.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//loop through the array and use filter to output the number of male 
//customers
let males = _.filter(array, function(customer){
    return customer.gender === 'male';
});
};

var femaleCount = function(array){
// //find the number of female customers using reduce output number
//     return _.reduce(array, function(accumulator, current){
//         if (current.gender === "female"){
//             accumulator += 1;
//         }
//         return accumulator;
//     }, 0)
}

var oldestCustomer = function(array){
    // loop through the array to find the person with the oldest age value.
    //use filter
    // if value is higher than other values return
let oldest = _.reduce(array, function(accumulator, current){
    if (current.age > accumulator.age){
        return current
    } else {
        return accumulator
    }
})
return oldest.name
};

var youngestCustomer = function(array){
//loop through the array to find the < number on the age key
//filter 
let youngest = _.reduce(array, function(accumulator, current){
    if (current.age > accumulator.age){
        return accumulator
    } else {
        return current
    }
})
return youngest.name
};


var averageBalance = function(array){
// gather all the balances using filter
// set the callback to add all the balances together
//then devide by the number of balance values
};

var firstLetterCount = function(array, letter){
    // use reduce to count the number of names with a given letter
    //use pluck?
    let letterGiven = _.filter(array, function(customer){
        if (customer.name[0].toUpperCase() === letter.toUpperCase()){
            return customer.name;
        }
    })
    return letterGiven
};

var friendFirstLetterCount = function(array, customer, letter){
// loop through the friends array of a given customer in the array, check 
// which how many times a given letter starts a name.

};

var friendsCount = function(array, name){
let customerFriend = _.filter(array, function(customer){
    return customer.name
})
return customerFriend
};

var topThreeTags = function(array){

};

var genderCount = function(array){
// use reduce to gather male, female and non-binary
return _.reduce(array, function(accumulator, current){
    if (current.gender === "female"){
        accumulator += 1;
    } else if (current.gender === "male"){
       return  accumulator += 1
    } else if (current.gender === "non-binary"){
        return accumulator +=1
    } return accumulator;
   
    
}, 0) 
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
