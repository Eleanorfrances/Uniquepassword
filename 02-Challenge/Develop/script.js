// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  // Adding the charaters the server can draaw from
  var specialChar = "!#$%&'()*+,-_./:;<=?@}{^"
  var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword("#password") {

// Choosing password length
var passwordLength = parseInt(prompt("How long would you like your password?"));
});