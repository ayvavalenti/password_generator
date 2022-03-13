var generateBtn = document.querySelector("#generate");

//setitng up characters

var smallLetters =[ "q", "w","e","t","r","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var bigLetters = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","H","J","K","L","Z","X","C","V","B","N","M"];
var num = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!","@","#","$","%","^","&","*","(",")","?","_","-","=","+","~","<",">"];

//other variables being used
var passLength;
var confirmSmall;
var confirmBig;
var confirmNum;
var confirmSym;
var userAns;
var passOther = [];

// Write password to the #password input
function genPass() {
    var password = generatePass();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;
    }


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

//add the big boy stuff

function genPass() {
  passLength = print ("Choose a password length between 8 and 128");
  console.log("Password Length" + passLength);


if(passLength <8 || passLength >128) {
  passLength = print ("Please choose a password length between 8 and 128");
  console.log("Password Length" + passLength);
}
else if (!passLength) {
  alert("Please input a number");
}
else {
  confirmBig = confirm ("Will you be using upper case letters in your password?");
  console.log("upper case" + confirmBig);
  confirmNum = confirm ("Will you be using numbers in your password?");
  console.log("numbers"+ confirmNum);
  confirmSmall = confirm ("Will you be using lower case letters in your password?");
  console.log("lower case" + confirmSmall);
  confirmSym = confirm ("Will you be using any symbols in your password?");
  console.log("symbols" + confirmSym);
};

// trying to use an array instead of what i was doing before

if (confirmSym && confirmSmall && confirmNum && confirmBig); {
  userAns = symbols.concat(num, bigLetters, smallLetters);
  console.log(userAns);
}
if (confirmBig); {
    userAns = bigLetters;
    console.log(userAns);
  }
if (confirmSym); {
    userAns = symbols;
    console.log(userAns);
  }
 if (confirmSmall); {
    userAns = smallLetters;
    console.log(userAns);
  }
if (confirmNum); {
    userAns = num;
    console.log(userAns);
}
if (confirmNum && confirmBig); {
  userAns = num.concat(bigLetters);
  console.log(userAns);
}
if (confirmSym && confirmSmall); {
  userAns = symbols.concat( smallLetters);
  console.log(userAns);
}
if (confirmSym && confirmBig); {
  userAns = symbols.concat(bigLetters);
  console.log(userAns);
}
if (confirmSmall && confirmNum); {
  userAns = num.concat(smallLetters);
  console.log(userAns);
}
if (confirmSym && confirmNum); {
  userAns = symbols.concat(num);
  console.log(userAns);
}
if (confirmBig && confirmSmall); {
  userAns = bigLetters.concat(smallLetters);
  console.log(userAns);
}
if (confirmSym && confirmNum && confirmBig); {
  userAnswer = symbols.concat(num, bigLetters);
  console.log(userAns);
}
if (confirmSym && confirmSmall && confirmBig); {
  userAns = symbols.concat(bigLetters, smallLetters);
  console.log(userAns);
}
if (confirmSym && confirmSmall && confirmNum); {
  userAns = symbols.concat(num, smallLetters);
  console.log(userAns);
}
if (confirmSmall && confirmNum && confirmBig); {
  userAns = num.concat(bigLetters, smallLetters);
  console.log(userAns);
}
if (!confirmNum && !confirmSmall && !confirmBig && !confirmSym); {
userAns = alert ("please choose what you would like to be included in your password.")
};



for (var i = 0; i <passLength; i++); {
  var passSelections = userAnswer (Math.floor(Math.random() * userAns.legnth));
  passOther.push(passSelections);
  console.log(passSelections);
  var password = passOther;
console.log("your new password is:" + password + "please write this down to remember");
}
}