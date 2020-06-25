// A regexp may contain both regular symbols and character classes.
//
// For instance, CSS\d matches a string CSS with a digit after it:
//
let str = "Is there CSS4?";
let regexp = /CSS\d/

console.log(str.match(regexp) ); // CSS4

// Also we can use many character classes:
//
console.log( "I love HTML5!".match(/\s\w\w\w\w\d/) ); // ' HTML5'

// The mathc (each regexp character class has the corresponding result
// character):
