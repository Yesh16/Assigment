function reverseString(str) {
    // Step 1: Convert the string into an array
    let arr = str.split('');
    
    // Step 2: Reverse the array
    let reversedArr = arr.reverse();
    
    // Step 3: Join the array back into a string
    let reversedStr = reversedArr.join('');
    
    return reversedStr;
}

// Test the function
let originalString = "Hello, World!";
let reversedString = reverseString(originalString);

console.log("Original String: " + originalString);
console.log("Reversed String: " + reversedString);
