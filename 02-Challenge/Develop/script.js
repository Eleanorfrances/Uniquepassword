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
 
  // Choosing password length
var passwordLength = parseInt(prompt("How long would you like your password?"));

if (isNaN(passwordLength), passwordLength < 1 , passwordLength > 127) {
  alert ("Value must be between 1 - 128");
  return "";
}

//booleans to choose special characters and upper case letters
var specialChar = confirm("Would you like special characters in your password?");
var upperCase = confirm("Would you like to use upper case letters in your password?");

let characters = "";

if (upperCase) {
  writePassword += upperCase;
}

if (specialChar) {
  charSet += specialChar;
}

//making the password
let writePassword = "";
for (let i = 0; i < passwordLength; i++) {
  writepassword += characters.charAt(math.floor(math.random()* characters.length));
}

return password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword()) {
var password = writePassword } 
}


