// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var password=document.getElementById("password");

// Write password to the #password input
function writePassword() {
    var characters = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()-_=+/?";
    var passLength = 18;
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

for (var i = 0; i <= passLength; i++) {
    var newPassword = Math.floor(Math.random () * characters.length);
    password += characters.substring(newPassword, newPassword + 1);
}
var password=document.getElementById("password").value = password;
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);