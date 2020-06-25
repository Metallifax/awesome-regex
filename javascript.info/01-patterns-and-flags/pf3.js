/* Searching: str.match
 
 As mentioned previously, regular expressions are integrated with string methods.

The method str.match(regexp) finds all matches of regexp in the string str.
it has 3 working modes:

1. If the regular expression has flag g, it returns an array of all matches:
*/
let str = "we will, we will rock you";
console.log(str.match(/we/gi) ); //We, we (an array of 2 substrings that match)b

// Note that both We and we are found, because flag i makes the regular
// expression case insensitive
