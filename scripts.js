
//Use examples from the slides/presentation to complete the challenges.
let strOne = "Hey I am ";
let strTwo = "the worst baseball player ever!";
let strThree = "good at watching the game, but "

//Concatenate two strings together.

console.log(strOne.concat(strTwo));

//Concatenate three strings together.

console.log(strOne.concat(strThree,strTwo));

//Search a string for content.

let result = strTwo.includes("baseball");
console.log(result);

//Replace a values in string.

let strTwoAlt = strTwo.replace("baseball", "basketball");
console.log(`${strOne}${strThree}${strTwoAlt}`);

//Use trim on strings.
let space = "                                                                                   Hey Waddup!                                                                                                   ";
console.log(space);
console.log(space.trim());

//Making strings case sensitive. 

console.log(space.toUpperCase());