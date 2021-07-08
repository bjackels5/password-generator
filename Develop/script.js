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

var getPasswordLength = function ()
{
    var pwdPrompt = "How long do you want the password to be? (minimum of " + minPwdLength + " characters, maximum of " + maxPwdLength + ":";
    var pwdLength = window.prompt(pwdPrompt);
    while (pwdLength < minPwdLength || pwdLength > maxPwdLength)
    {
        window.alert("That is not a valid length. Please try again.");
        return getPasswordLength();
    }

    return pwdLength;
}

var generatePassword = function()
{
    var thePwd = "";    

    // get the desired password length (8-128 characters)
    var pwdLength = getPasswordLength();
    
    // find out which character types can be used and which types are required

    // generate the password that includes the desired character types

    // check that the generated password includes any character types
    // that are required

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
