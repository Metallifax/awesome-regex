// If there are no matches, null is returned (doesn't matter if there's flag
// g or not).
// This is a very important nuance. If there are no matches, don't don't
// receive an empty array, but instead receive null. Forgetting about that may
// lead to errors e.g.:

/*
let matches = "Javascript".match(/HTML/); // = null

if(!matches.length) { // Error: Cannot read property 'length' of null
  console.log("Error in the line above");
}*/

// If we'd like the result to always be an array, we can write it this way:

let matches = "Javascript".match(/HTML/) || [];

if (!matches.length) {
  console.log("No matches"); // now it works
}

