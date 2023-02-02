const str = "these is a string";

// indexes same as array 0,1,2.....

/**
 * Important string methods
 */


console.log(str.charAt(10)) // gives the character at that particular index

console.log(str.includes("is")); // returns true/false if the given string exists in string variable

console.log(str.indexOf('i')); // return the index value of that character (first occurence)

console.log(str.length); // return the total length of string

console.log(str.replace("is", "are")); // return a new string varible by replacing.

console.log(str.slice(2, 12)) // sliced between given indexes

console.log(str.split('e')); // return array of strings that are splitted by given character

const tmp_var = true;
console.log(tmp_var.toString()) // converts any variable to string type


//real time example

const token = "xyz 9898783927364838290746838920746398"
["xyz", "9898783927364838290746838920746398"]

console.log(token.split(" ")[1]);


// String interpolation OR string template ==> ` ` (back ticks)

const variable = 120;

console.log(`Today I spent ${variable} rupees and yesterday also I've spent ${variable} rupees`)
console.log("Today I spent" + variable + "rupees and yesterday also I've spent" + variable + "rupees")
