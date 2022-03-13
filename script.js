// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var password=document.getElementById("password");

// Write password to the #password input
function writePassword() {
    var characters = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()";
    var passwordSize = 10;
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

for (var i = 0; i <= passwordSize; i++) {

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);