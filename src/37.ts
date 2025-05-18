// Example 1: Basic Console Logging
console.log("Hello, World!");

// Example 2: Creating an Array
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Grape");
fruits.pop(); // Removes the last element

// Example 3: Using If-Else in a Conditional Statement
let age = 18;
if (age >= 18) {
    console.log("You are old enough to vote.");
}

// Example 4: Function for Adding Two Numbers
function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(3, 5)); // Output: 8

// Example 5: Using the 'break' Statement in an Infinite Loop
let i = 10;
while (i > 0) {
    if (i === 2) {
        break; // Exit the loop after printing "I'm out!"
    }
    console.log(i);
    i--;
}

// Example 6: Using the 'for' Loop with a Range of Numbers
let numbers = [1, 3, 5, 7];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
