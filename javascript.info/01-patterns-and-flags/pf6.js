// Replacing: str.replace
//
// The method str.replace(regexp, replacement) replaces matches found using
// regexp in string str with replacement (all matches if there's flag g,
// otherwise, only the first one).
//
// for instance:

//no flag g
console.log( "We will, we will".replace(/we/i, "I") ); // I will, we will

//with flag g
console.log( " We will, we will".replace(/we/ig, "I") ); //I will, I will

// The second argument is the replacement string. We can use special character
// combinations in it to insert framents of the match:

