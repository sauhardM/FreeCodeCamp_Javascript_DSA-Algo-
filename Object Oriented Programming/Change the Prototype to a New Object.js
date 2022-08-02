// Change the Prototype to a New Object

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
    
    numLegs: 4,
  
    eat: function(){return console.log("nom nom nom");},
  
    describe: function(){return console.log("Caring Loving Chubby and Lazy");}
    
  
  };