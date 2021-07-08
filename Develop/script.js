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

var checkTypeRequirements = function(theType)
{
    var chars = "";

    if (window.confirm("Do you want to include " + theType.name + " characters?"))
    {
        chars += theType.theChars;
        theType.required = window.confirm("Do you want to require at least 1 " + theType.name + " character?");
    }

    return chars;
}

var getCharsToUse = function()
{
    var charsToUse = "";
    debugger;

    charsToUse += checkTypeRequirements(lowerInfo);
    charsToUse += checkTypeRequirements(upperInfo);
    charsToUse += checkTypeRequirements(numericInfo);
    charsToUse += checkTypeRequirements(specialInfo);

    if (charsToUse === "")
    {
        window.alert("You have not chosen any character types to use for the password. Please select at least one character type to include.");
        return getCharsToUse();
    }

    return charsToUse;
}

var generatePassword = function()
{
    var thePwd = "";    

    // get the desired password length (8-128 characters)
    var pwdLength = getPasswordLength();
    
    // find out which character types can be used and which types are required
    var charsToUse = getCharsToUse();

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
