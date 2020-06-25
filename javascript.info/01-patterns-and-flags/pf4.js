// If there's no such flag it returns only the first match in the form of an
// array, with the full match at index - and some addition details in
// properties:

let str = "We will, we will rock you";

let result = str.match(/we/i); // without flag g

console.log(result[0]); // We (1st match)
console.log(result.length); // 1

// Details: 
console.log( result.index ); // 0 (position of the match)
console.log( result.input ); // We will, we will rock you (source string)

// The array may have other indexes, besides 0 if a part of the regular
// expresion is enclosed in parentheses. We'll cover that in the chapter
// Capturing groups. - link - https://javascript.info/regexp-groups
