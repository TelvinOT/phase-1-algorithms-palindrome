function isPalindrome(word) {
  // Write your algorithm here
  const lowerCaseWord = word.toLowerCase();
  
  // Initialize two pointers, one at the beginning and one at the end of the word
  let left = 0;
  let right = lowerCaseWord.length - 1;

  // Move the pointers towards each other while comparing characters
  while (left < right) {
    // If the characters at the current positions don't match, the word is not a palindrome
    if (lowerCaseWord[left] !== lowerCaseWord[right]) {
      return false;
    }
    // Move the pointers towards each other
    left++;
    right--;
  }

  // If the loop completes without finding any mismatch, the word is a palindrome
  return true;
}

/* 
  Add your pseudocode here
   1. Convert the input word to lowercase to make the comparison case-insensitive.
  2. Initialize two pointers, one at the beginning of the word and one at the end.
  3. Iterate through the word with these pointers.
  4. At each iteration, compare the characters at the current positions of the pointers.
  5. If the characters don't match, return false (the word is not a palindrome).
  6. If the pointers meet (or cross each other), return true (the word is a palindrome).
*/

/*
  Add written explanation of your solution here
  This function checks if a given word is a palindrome. It does so by comparing characters 
  from the beginning and the end of the word, moving towards each other. If the characters 
  at corresponding positions are not the same, the word is not a palindrome. If the loop 
  completes without finding any mismatch, the word is a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
console.log("=>", isPalindrome("abba"));

console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("Expecting: true");
console.log("=>", isPalindrome("a"));

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

console.log("Expecting: false");
console.log("=>", isPalindrome("ab"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
