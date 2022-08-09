// Split a String into an Array Using the split Method

function splitify(str) {
    // Only change code below this line
  
        return str.replace(/[^a-zA-Z ]/g, " ").split(" ");
    // Only change code above this line
  }
  
  splitify("Hello World,I-am code");
  
  console.log(splitify("Hello World,I-am code"));