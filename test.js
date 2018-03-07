var myString = "I'm a 'super' string";

console.log(myString);

console.log(myString.length);

console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

console.log(myString.indexOf("string"));
console.log(myString.indexOf("super"));

if (myString.indexOf("super") === -1) {
    console.log("It isn't in the string");
} else {
    console.log("It start at position "
        + myString.indexOf("super"));
}

var string1 = "abc";
var string2 = "bcd";

console.log(string1 === string2);
console.log(string1 < string2);

var string3 = "abc";
var string4 = "abc";

console.log(string3 === string4);

var string5 = "abc";
var string6 = "ABC";

console.log(string5 === string6);
console.log(string5 < string6);

var string7 = "abc";
var string8 = "ABC";

console.log(string7 === string8.toLowerCase());