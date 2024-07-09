/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/





//creating a variable
let apple ="apple"

//test for equality
//console.log("apple is equal to apple");
//console.log(apple == apple);

//test for inequality
//console.log("apple is not equal to apple");
//console.log(apple !== apple);

// test using the lower case function

let UpperCaseApple = "APPLE"

//Equal to
/*console.log("Apple is equal to apple after converting to lowerCase")
console.log(UpperCaseApple.toLocaleLowerCase() == "apple")


console.log("Apple is equal to apple after converting to lowerCase")
console.log(UpperCaseApple.toLocaleLowerCase() !== "apple")
;
;


//numerical test involving equality and inequality, greater than and less than,,greater than or equal to,and less than or equal to
 
let ten = 10
let twenty = 20

//Equal to
/*console.log("ten is equal to twenty");
console.log(ten == twenty);

//not equal to 
console.log("ten is not equal to twenty");
console.log(ten !== twenty);*/

//Greater than 
console.log("ten is greater than 20");
//console.log(ten > twenty);


//less than
console.log("ten is less than 20");
//console.log(ten < twenty)

//greater than or equal to
console.log("twenty is greater than or not equal to ten");
console.log(20 >= 10);


//lesss than or equal to
console.log("twenty is less than or not equal to ten");
console.log(20 <= 10)


//Tests using "and" and "or" operators

//using && and
console.log("twenty is not equal to ten and twenty is greater than ten");
//console.log(twenty != ten && twenty > ten);

console.log("twenty is not equal to ten and ten is greater than ten");
//console.log(twenty != ten && ten > twenty);

//using  || (or)
console.log("twenty is greater than ten or twenty is not equal to twenty");
console.log(20 > 10 || 20 != 20);

console.log("twenty is less than ten or twenty is not equal to twenty");
console.log(20 < 10 || 20 != 20);

//Test whether an item is in a array
let fruits =["apple","orange","cherry"]
console.log("mango is include in fruits array");
console.log(fruits.includes("orange"));

//• Test whether an item is not in a array
console.log("mango is include in fruits array");
console.log(!fruits.includes("orange"));
