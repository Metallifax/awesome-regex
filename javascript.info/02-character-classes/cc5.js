// A dot is "any character"
//
// A dot . is a special character class that matches "any character except
// a newline".
//
// For instance:
//
console.log("Z".match(/./) ); // Z

//Or in the middle of a regexp:
//
let regexp = /CS.4/;

console.log( "CSS4".match(regexp) ); //CSS4
console.log( "CS-4".match(regexp) ); //CS-4
console.log( "CS 4".match(regexp) ); //CS 4 (space is also a character)

// Note that a dot means "any character", but not the "absence of a character".
// Theremust be a character to match it:
//
console.log( "CS4".match(/CS.4/) ); // null, no match because there's no character for the dot


