/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
let guestList : string[]=['ariba','hira','fazila']
console.log("great News! we found a bigger table");
//unshift method
guestList.unshift("Ayesha")

///console.log(guestList);

//splice method
guestList.splice(Math.floor(guestList.length/2),0,"Ali")
console.log(guestList);

//push 
guestList.push("Aliyan")
guestList.forEach(guest=>{console.log(`Dear ${guest} you  are invited for dinner.`);
}
);
