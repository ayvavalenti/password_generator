// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var characters = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()-_=+/?";
    var passLength = Math.floor(Math.random()* 121) + 8;
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

for (var i = 0; i <= passLength; i++) {
        var randomNum = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNum, randomNum +1);
    }
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);