// Character classes
//
// Consider a practical task - we have a phone number like "+7(903)-123-45-67"
// , and we need to turn it into pure numbers: 79031234567
//
// To do so, we can find and remove anythin that's not a number. Character
// classes can help with that.
//
// A character class is a special notation that matches any symbol from
// a certain set.
//
// for the start, let's explore the "digit" class. It's written as \d and
// corresponds to "any single digit".
//
// For instance, the let's find the first digit in the phone number:

let str1 = "+7(903)-123-45-67";

let regexp1 = /\d/;

console.log( str1.match(regexp1) ); // 7

// Without the flag g, the regular expression only looks for the first match,
// that is the first digit \d.
//
// Let's add the g flag to find all digits:
//
let str = "+7(903)-123-45-67";

let regexp = /\d/g;

console.log( str.match(regexp) ); //array of matches: 7,9,0,3,1,2,3,4,5,6,7

// let's make the digits-only phone number of them:

console.log( str.match(regexp).join('') ); // 79031234567

