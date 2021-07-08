// global variables 
const minPwdLength = 8;
const maxPwdLength = 128;

var lowerInfo = {
    theChars: "abcdefghijklmnopqrstuvwxyz",
    required: false,
    name: "lowercase"
}

var upperInfo = {
    theChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    required: false,
    name: "uppercase" 
}

var numericInfo = {
    theChars: "0123456789",
    required: false,
    name: "numeric"
}

var specialInfo = {
    theChars: " !#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    required: false,
    name: "special"
}


var generatePassword = function()
{
    // get the desired password length (8-128 characters)
    
    // find out which character types can be used and which types are required

    // generate the password that includes the desired character types

    // check that the generated password includes any character types
    // that are required

    var thePwd = "";    
    return thePwd;
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
