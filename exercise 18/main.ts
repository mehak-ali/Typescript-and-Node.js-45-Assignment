


/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/
let placeToVisit : string[]=["paris","italy","london","china","australia"]
//print in orignal order
console.log("orignal order:", placeToVisit);

//print array in Alphabatical orders
console.log("Alphabatical order:",placeToVisit.slice().sort());

//arrray is still in its orignal order
console.log("orignal order after sorting:", placeToVisit);

//reverse arrray in alphabatical order without changing orignal  order
console.log("reverse Alphabatical order:",placeToVisit.slice().sort().reverse())

//• Show that  array is still in its original order by printing it again.
console.log("orignal order after reverse sorting:", placeToVisit)

//• Reverse the order of list. Print the array to show that its order has changed.
placeToVisit.reverse()
console.log("reverse order:",placeToVisit);

//• Reverse the order of list again. Print the list to show it’s back to its original order.

placeToVisit.reverse()
console.log("back to orignal order:",placeToVisit);

//Sort  array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(" sorted in Alphabatical order:",placeToVisit.slice().sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

console.log("stored in reverse Alphabatical order:",placeToVisit.slice().sort().reverse())