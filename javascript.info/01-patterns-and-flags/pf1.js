/* 
 Patterns and flags
 
 Regular expressions are patterns that proide a powerful way to search and replace in text.

 Regular Expressions

 A regular expressions(also 'regexp' or just 'reg') consists of a pattern and optional flags.

 there are two syntaxes that can be used to create a regular expression object.

 The "long" syntax:
 */
regexp = new RegExp('pattern', 'flags');

// and the short one, using slashes '/':
regexpShort = /pattern/; //no flags
regexpShort2 = /pattern/gmi; // with flags g, m and i (to be covered soon)

let tag = prompt("What tag do you want to find?", "h2");

let regexp = new RegExp(`<${tag}>`); // same as /<h2>/ if answered "h2" in the prompt above


