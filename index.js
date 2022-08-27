function reverseString(word){
  const wordArray = word.split("");
  
  const reversedWordArray = wordArray.reverse();
  
  const reversedWord = reversedWordArray.join("");
  
  return reversedWord;

}
function isPalindrome(word) {
  const reversedWord = reverseString(word);

if (word === reversedWord){
  return true;
} else{
  return false;
}

}




  // Write your algorithm here
  /* racecar== racecar // true
  robot == robot // false


/* 
  Add your pseudocode here
reverse the input string
  if the reversed string is the same as the input
  return true
else
  return false
  /*
  Add written explanation of your solution here
  making a function that returns true if a word is palindrom
  It returns false if its not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
