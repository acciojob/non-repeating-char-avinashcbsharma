function firstNonRepeatedChar(inputString) {
  
  let charCount = {};

  
  for (let char of inputString) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

 
  for (let char of inputString) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  return null; 
}
 
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
