// Reverse a String

function reverseString(str) {
    let revStr = "";
   
     for(var i = str.length-1; i>=0; i--){
   
             revStr += str[i];
     }
   
     return revStr;
   }
   
   reverseString("hello");