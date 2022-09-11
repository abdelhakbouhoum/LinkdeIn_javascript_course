/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

let desktop = [
  "cup",
  "pen",
  "coquillage",
  "smartphone",
  "microphone",
  "dinosaur",
  "cable",
  "gamepad",
];

console.log(desktop);

let last = desktop.pop();
console.log("last item is :" + last);
console.log("Remove the last item :" + desktop);

let first = desktop.shift();
console.log("first item is :" + first);
console.log("Remove the first item :" + desktop);

let lastitem = desktop[desktop.length - 1];
console.log("last item is :" + lastitem);

desktop.unshift(lastitem);
console.log("add last item to first :" + desktop);

desktop.sort();
console.log("Desktop items sorted :" + desktop);

let found = desktop.find((element) => element === "microphone");
console.log("Item found : " + found);

desktop.splice(desktop.indexOf(found), 1);
console.log("item found deleted :" + desktop);

var numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.unshift(7);
numbers.pop();
numbers.shift();
console.log(numbers);
