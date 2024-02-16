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

  if (isNaN(length) || length <8 || length > 128 || (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial)) {
    alert("Invalid value: Please try again.");
    return '';
  }

  let allCharacters = '';
  if (includeLowercase) allCharacters += lowercaseCharacters;
  if (includeUppercase) allCharacters += uppercaseCharacters;
  if (includeNumbers) allCharacters += numberCharacters;
  if (includeSpecial) allCharacters += specialCharacters;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
}

return password;
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
