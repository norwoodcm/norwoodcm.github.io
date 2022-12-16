const testString = new String ("   This is a test string using a constructor    ");

//use uppercase or lowercase method

console.log(testString.toUpperCase());
console.log(testString.toLowerCase());


//use replace method

console.log(testString.replace('test', 'newTest'));

//use indexof method - returns index position value starts at

console.log(testString.indexOf('test'));

//use concat method

const otherString = "This is a literal string."

console.log(testString.concat(". " + otherString));

// use includes method - searches string to see if it encompeses another string (returns => true || false)

const combinedString = testString + otherString

console.log(combinedString.includes(testString));

//use the substring method to pull a portion of the string based on index values (the end value is not included, so 
// make the index end value +1 of where you want to end)

console.log(combinedString.substring(10, 17));

//using trim method to remove blank space on both ends of the string

console.log(testString);
console.log(testString.trim());

//using padEnd and padStart to add fields at the beginning or end of the string to reach a certain length

console.log(testString.padStart(100));
console.log(testString.padEnd(50) + "after pad");

//using search method, search is similar to index of but you can use regex
//regex has a number of characters to help find and search strings
//https://towardsdatascience.com/regular-expressions-clearly-explained-with-examples-822d76b037b4
//common regex elements include .? 0 or 1 character; .* 0 or more characters; \\d{3} 3 digit characters
//for example, phone_pattern = ".?(\\d{3}).*(\\d{3}).*(\\d{4})"

console.log(testString.search(".?sing"));