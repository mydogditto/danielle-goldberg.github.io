
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number){
  for (let i = 1; i <= number; i++){
    console.log('#'.repeat(i));
  }
    
 } triangles()
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (let i = 1; i <= 15; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz")
    } else if (i % 5 === 0){
      console.log("buzz")
    } else if (i % 3 === 0){
        console.log("fizz")
  }   else {console.log(i)
          }
  } 
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  let pattern = ' ';
  //use nested for loops to create the board
  for (let i = 1; i <= number; i++) {
    pattern += '\n';
    // add a newline to the pattern
    // pattern += '\n';
    for (let j = 1; j <= number; j++) {
      // if the increments added together are even, add a space.
      if ((i + j) % 2 === 0) {
        pattern += "#";
        // else add a #
      } else {
        pattern += ' '; 
      }
    } 
    
  } return pattern
 
  }
   



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
