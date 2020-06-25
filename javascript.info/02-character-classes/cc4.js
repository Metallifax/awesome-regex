// Inverse classes
//
// For every character class there exists an "inverse c;ass", denoted with the
// same letter, but uppercased.
//
// The "inverse" means that it matches all other cracters, for instance:
//
// \D
// Non-digit: any character expect \d, for instance a letter.
//
// \S
// Non-space: any charcter except \s, for instance a letter.
//
// \W
// Non-wordly character: anything but \w, e.g a non-latin letter or a space.
//
// In the beginning of the chapter we saw how to make a number-only phone
// number from a string like +7(903)-123-4567: find all digits and join them.
//
let str1 = "+7(903)-123-45-67";

console.log( str1.match(/\d/g).join('') ); // 79031234567

// An alternative, shorter way is to find non-digits \D and remove them from
// the string:

let str = '+7(903)-123-45-67';

console.log(str.replace(/\D/g, '') ); // 79031234567


