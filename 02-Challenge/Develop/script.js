// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function generatePassword() {
  var generatedPassword = "";
  var passwordText = document.querySelector("#password");
  

  // Adding the charaters the server can draaw from
  var specialChar = "!#$%&'()*+,-_./:;<=?@}{^"
  var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM" 
 
  // Choosing password length
var passwordLength = parseInt(prompt("How long would you like your password?"));

if (isNaN(passwordLength)|| passwordLength < 1 || passwordLength > 127) {
  alert ("Value must be between 1 - 128");
  return "";
}

//booleans to choose special characters and upper case letters
var includeSpecialChar = confirm("Would you like special characters in your password?");
var includeUpperCase = confirm("Would you like to use upper case letters in your password?");

let characters = "";

if (includeUpperCase) {
  generatedPassword += upperCase;
}

if (includeSpecialChar) {
  generatedPassword += specialChar;
}

//making the password
let writePassword = "";
for (let i = 0; i < passwordLength; i++) {
  writepassword += characters.charAt(Math.floor(Math.random()* generatedPassword.length));
}

passwordText.value = password;
}



// Add event listener to generate button

generateBtn.addEventListener('click', generatePassword); 



