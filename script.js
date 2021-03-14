/**
 *  More String Methods Period 2
 * .trim()
 * .concat()
 * .includes()
 * .replace(substring, replaceText)
 * .slice(start, end)
 */

/**
 * .trim()
 * Remove whitespace from both ends of string
 */
let str = "             Bubble tea is the best!        ";
console.log(str);
// Output (ignore double quotes)
// "             Bubble tea is the best!        "

console.log(str.trim());
// Output (ignore double quotes)
// "Bubble tea is the best!"


/**
 * .concat()
 * Combine two or more strings
 */

let str1 = "I would like to eat pizza ";
let str2 = "right now!";
console.log(str1.concat(str2))

// Output:
// I would like to eat pizza right now!

console.log(str1.concat("and ice cream ", str2));
// Output:
// I would like to eat pizza and ice cream right now!

/**
 * Str1.includes(Str2)
 * Returns TRUE or FALSE
 * If Str2 is found in Str1 return true, otherwise return false
 */

let tongueTwister = "Sally sells seashells by the seashore";

let result = tongueTwister.includes("seashells");

console.log(result);

// Output:
// true

/**
 * .replace(substring, replaceText) method
 * Will return a new string, so need to either create a new variable
 * to store the result or reassign it to the current variable
 */

let tongueTwister2 = "Sally sells seashells by the seashore";

tongueTwister2 = tongueTwister2.replace("seashells", "scallops");

console.log(tongueTwister2);

// Output:
// Sally sells scallops by the seashore

/**
 * .slice(start, end) method
 * Extracts a section of a string and returns it as a new string without
 * modifying the original string 
 * Original string not modified so if you want to save your changes, you
 * need to create a new variable and store the results
 */
let tongueTwister3 = "Sally sells seashells by the seashore";

console.log(tongueTwister.slice(10));
// Output: s seashells by the seashore;

console.log(tongueTwister.slice(15, 24));
// Output: shells by

console.log(tongueTwister.slice(-8));
// Treated as (tongueTwister.length - 8)
// Output: seashore


