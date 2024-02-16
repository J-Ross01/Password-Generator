// Assignment code here
function generatePassword() {

  const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberCharacters = '0123456789';
  const specialCharacters = '!@#$%^&*()_+{}:"<>?|[];\'.,/`~\\-=';

  let length = parseInt(prompt("What is the length of the password? (8-128)"));
  let includeLowercase = confirm("Would you like to include lowercase characters?");
  let includeUppercase = confirm("Would you like to include uppercase characters?");
  let includeNumbers = confirm("Would you like to include Numbers?");
  let includeSpecial = confirm("Would you like to include Special characters?");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
