// Testing: regexp.test
//
// The method regexp.test(str) looks for at least one match, if found, returns
// true, otherwise false.
//
let str = "I love JavaScript";
let regexp = /LOVE/i;

console.log( regexp.test(str) ); // true

// Later in this chapter we'll study more regular expressions, walk through
// more examples, and also meet other methods.
//
// Full information about the methods is given in the article Methods of RegExp
// and String. - ln - https://javascript.info/regexp-methods
